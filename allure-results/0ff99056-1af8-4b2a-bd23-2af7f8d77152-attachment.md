# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendanceMark.spec.js >> DTM – Class Attendance Mark (Full Flow)
- Location: tests\attendanceMark.spec.js:10:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  164 |       } catch {
  165 |         console.warn('  No summary modal — may have saved directly');
  166 |       }
  167 | 
  168 |       await this.page.waitForTimeout(1000);
  169 | 
  170 |       // ── Navigate back to calendar and reload with correct faculty/type ──
  171 |       await this._reloadCalendar();
  172 |       console.log('✅ Calendar reloaded with filters — checking for more red blocks');
  173 |     }
  174 | 
  175 |     console.log(`\n✅ All ${blockNumber} red block(s) processed`);
  176 |   }
  177 | 
  178 |   /* ════════════════════════════════════════════════════════
  179 |      INTERNAL — Mark toggles with a specific present %
  180 |                 Rotates absent students (no repeat absents)
  181 | 
  182 |      @param presentPct          number  e.g. 70 = 70% present
  183 |      @param previouslyAbsent    Set     indices absent last time
  184 |      @returns                   Set     indices absent this time
  185 |   ════════════════════════════════════════════════════════ */
  186 |   async _markWithRotation(presentPct, previouslyAbsent) {
  187 |     const toggleLabels = this.page.locator('label.switch-lg');
  188 |     const toggleCount  = await toggleLabels.count();
  189 |     console.log(`  ${toggleCount} student(s) found`);
  190 | 
  191 |     // How many should be absent?
  192 |     const targetAbsent = Math.round(toggleCount * ((100 - presentPct) / 100));
  193 | 
  194 |     // Build list of eligible indices for absent
  195 |     // Exclude students who were absent LAST session
  196 |     const allIndices      = Array.from({ length: toggleCount }, (_, i) => i);
  197 |     const eligible        = allIndices.filter(i => !previouslyAbsent.has(i));
  198 | 
  199 |     // Shuffle eligible list and pick targetAbsent from it
  200 |     const shuffled        = eligible.sort(() => Math.random() - 0.5);
  201 |     const newAbsentSet    = new Set(shuffled.slice(0, targetAbsent));
  202 | 
  203 |     // If not enough eligible (all were absent before), allow any remaining
  204 |     if (newAbsentSet.size < targetAbsent) {
  205 |       const remaining = allIndices
  206 |         .filter(i => !newAbsentSet.has(i))
  207 |         .sort(() => Math.random() - 0.5);
  208 |       for (const idx of remaining) {
  209 |         if (newAbsentSet.size >= targetAbsent) break;
  210 |         newAbsentSet.add(idx);
  211 |       }
  212 |     }
  213 | 
  214 |     // ── Apply toggles ──
  215 |     for (let i = 0; i < toggleCount; i++) {
  216 |       const label     = toggleLabels.nth(i);
  217 |       const checkbox  = label.locator('input[type="checkbox"]');
  218 |       const isChecked = await checkbox.isChecked().catch(() => false);
  219 |       const shouldBePresent = !newAbsentSet.has(i);
  220 | 
  221 |       if (shouldBePresent && !isChecked) {
  222 |         await label.click({ force: true });
  223 |         console.log(`  Student ${i + 1}: → Present ✅`);
  224 |       } else if (!shouldBePresent && isChecked) {
  225 |         await label.click({ force: true });
  226 |         console.log(`  Student ${i + 1}: → Absent ❌  (was present last time)`);
  227 |       } else {
  228 |         const state = isChecked ? 'Present (kept)' : 'Absent (kept — new)';
  229 |         console.log(`  Student ${i + 1}: ${state}`);
  230 |       }
  231 | 
  232 |       await this.page.waitForTimeout(80);
  233 |     }
  234 | 
  235 |     const absentList = [...newAbsentSet].map(i => i + 1);
  236 |     console.log(`  Present: ${toggleCount - newAbsentSet.size} | Absent: ${newAbsentSet.size} | Absent students: [${absentList}]`);
  237 |     console.log(`  Previously absent (excluded this round): [${[...previouslyAbsent].map(i => i + 1)}]`);
  238 | 
  239 |     return newAbsentSet; // pass to next block
  240 |   }
  241 | 
  242 |   /* ════════════════════════════════════════════════════════
  243 |      INTERNAL — Reload classAttendance calendar with correct
  244 |                 faculty + type filters and navigate to saved month
  245 |   ════════════════════════════════════════════════════════ */
  246 |   async _reloadCalendar() {
  247 |     // Navigate to the classAttendance page fresh
  248 |     await this.page.goto('http://test3.tnedu.in/task-ui/classAttendance');
  249 |     await this.page.waitForLoadState('networkidle');
  250 |     await this.page.waitForTimeout(800);
  251 | 
  252 |     // Re-select Faculty Id (react-select)
  253 |     if (this._facultyName) {
  254 |       const facultyInput = this.page.locator('#react-select-2-input');
  255 |       await facultyInput.waitFor({ state: 'visible', timeout: 10_000 });
  256 |       await facultyInput.click();
  257 |       await this.page.waitForTimeout(400);
  258 |       const facultyOption = this.page
  259 |         .locator('[class$="-option"], [class*="-option"]')
  260 |         .filter({ hasText: this._facultyName })
  261 |         .first();
  262 |       await facultyOption.waitFor({ state: 'visible', timeout: 8_000 });
  263 |       await facultyOption.click();
> 264 |       await this.page.waitForTimeout(400);
      |                       ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  265 |       console.log(`  Faculty re-selected: ${this._facultyName}`);
  266 |     }
  267 | 
  268 |     // Re-select Type (react-select)
  269 |     if (this._typeText) {
  270 |       const typeInput = this.page.locator('#react-select-3-input');
  271 |       await typeInput.waitFor({ state: 'visible', timeout: 10_000 });
  272 |       await typeInput.click();
  273 |       await this.page.waitForTimeout(400);
  274 |       const typeOption = this.page
  275 |         .locator('[class$="-option"], [class*="-option"]')
  276 |         .filter({ hasText: this._typeText })
  277 |         .first();
  278 |       await typeOption.waitFor({ state: 'visible', timeout: 8_000 });
  279 |       await typeOption.click();
  280 |       await this.page.waitForTimeout(400);
  281 |       console.log(`  Type re-selected: ${this._typeText}`);
  282 |     }
  283 | 
  284 |     // Click Go to load the calendar events
  285 |     const goBtn = this.page.locator('button.btn-primary[type="submit"]').first();
  286 |     await goBtn.waitFor({ state: 'visible', timeout: 8_000 });
  287 |     await goBtn.click();
  288 |     await this.page.waitForLoadState('networkidle');
  289 |     await this.page.waitForTimeout(800);
  290 |     console.log('  Go clicked — calendar loaded');
  291 | 
  292 |     // Navigate back to Month view
  293 |     await this.monthViewBtn.click();
  294 |     await this.page.waitForTimeout(500);
  295 | 
  296 |     // Navigate back the same number of months as before
  297 |     for (let i = 0; i < this._monthsBack; i++) {
  298 |       await this.prevMonthBtn.click();
  299 |       await this.page.waitForTimeout(500);
  300 |     }
  301 | 
  302 |     const monthLabel = await this.calendarTitle.innerText().catch(() => '?');
  303 |     console.log(`  Back on: ${monthLabel}`);
  304 |   }
  305 | 
  306 |   /* ════════════════════════════════════════════════════════
  307 |      FULL ORCHESTRATED FLOW
  308 |      @param facultyName  string  Faculty to select (e.g. 'RAVI SHANKAR')
  309 |      @param typeText     string  Type to select (default: 'ATTENDANCE ENTRY')
  310 |   ════════════════════════════════════════════════════════ */
  311 |   async completeAttendanceMarking(facultyName = '', typeText = 'ATTENDANCE ENTRY') {
  312 |     await this.clickMonthView();
  313 |     await this.navigateToFirstUnattendedMonth();
  314 |     await this.processAllRedBlocks(facultyName, typeText);
  315 |     console.log('\n✅ Complete attendance marking flow finished');
  316 |   }
  317 | }
  318 | 
```