/**
 * AttendanceMarkPage — DTM Class Attendance
 * URL: http://test3.tnedu.in/task-ui/classAttendance
 *
 * Steps:
 *  Step 1 : Click "Month" view button
 *  Step 2 : Navigate back to first month with red (unattended) blocks
 *  Step 3 : Process ALL red blocks one by one:
 *             - Each block → different random present % (60, 70, 80, 90)
 *             - Rotate absent students (same student NOT absent twice in a row)
 *  Step 4 : After each block → popup → click "Mark Attendance"
 *  Step 5 : Toggle students → Save (bottom) → Save (summary modal)
 *  Step 6 : Go back to calendar → process next red block
 *
 * Color legend:
 *   🟢 Green = Already marked
 *   🔴 Red   = Not marked  ← we target these
 *   🔵 Blue  = Call off
 */
export class AttendanceMarkPage {
  constructor(page) {
    this.page = page;

    /* ── Calendar toolbar ── */
    this.monthViewBtn  = page.locator('button.fc-dayGridMonth-button');
    this.prevMonthBtn  = page.locator('button.fc-prev-button');
    this.calendarTitle = page.locator('h2.fc-toolbar-title');

    /* ── Red (not marked) event blocks ── */
    this.redEventBlocks = page.locator(
      'a.fc-event.past-date, a.fc-event.fc-daygrid-dot-event.past-date'
    );

    /* ── Mark Attendance modal button ── */
    this.markAttendanceBtn = page.locator('button:has-text("Mark Attendance")').first();

    /* ── Present % options to rotate (picked randomly per block) ── */
    this.presentPercentages = [60, 70, 80, 90];

    // Stored after navigateToFirstUnattendedMonth() — used to re-navigate after each save
    this._monthsBack   = 0;
    this._facultyName  = '';
    this._typeText     = 'ATTENDANCE ENTRY';
  }

  /* ════════════════════════════════════════════════════════
     STEP 1 — Click Month view
  ════════════════════════════════════════════════════════ */
  async clickMonthView() {
    await this.monthViewBtn.waitFor({ state: 'visible', timeout: 10_000 });
    await this.monthViewBtn.click();
    await this.page.waitForTimeout(600);
    console.log('✅ Step 1 — Month view activated');
  }

  /* ════════════════════════════════════════════════════════
     STEP 2 — Navigate back to first month with red blocks
  ════════════════════════════════════════════════════════ */
  async navigateToFirstUnattendedMonth(maxMonthsBack = 12) {
    await this.prevMonthBtn.waitFor({ state: 'visible', timeout: 10_000 });
    this._monthsBack = 0;

    for (let i = 0; i < maxMonthsBack; i++) {
      await this.prevMonthBtn.click();
      await this.page.waitForTimeout(800);
      this._monthsBack++;

      const monthLabel = await this.calendarTitle.innerText().catch(() => '?');
      console.log(`  ← Navigated to: ${monthLabel}`);

      const redCount = await this.redEventBlocks.count();
      if (redCount > 0) {
        console.log(`✅ Step 2 — First unattended month: ${monthLabel} (${redCount} red blocks)`);
        return;
      }
    }

    console.warn('⚠️  No red blocks found in last ' + maxMonthsBack + ' months');
  }

  /* ════════════════════════════════════════════════════════
     STEP 3–6 — Process ALL red blocks across all months
                Each block uses a different random present%
                Absent students rotate (no repeat absent)
     @param facultyName  string  e.g. 'RAVI SHANKAR'
     @param typeText     string  e.g. 'ATTENDANCE ENTRY'
  ════════════════════════════════════════════════════════ */
  async processAllRedBlocks(facultyName = '', typeText = 'ATTENDANCE ENTRY') {
    this._facultyName = facultyName;
    this._typeText    = typeText;

    let previouslyAbsentIndices = new Set();
    let blockNumber = 0;

    // Loop: keep processing red blocks until none remain
    while (true) {
      await this.page.waitForTimeout(500);

      // Refresh red block list on current view
      const redCount = await this.redEventBlocks.count();

      if (redCount === 0) {
        // No more red blocks on this month — check if we should go forward
        console.log('  No more red blocks on this month');
        break;
      }

      blockNumber++;

      // ── Pick a random present% for this block ──
      const presentPct = this.presentPercentages[
        Math.floor(Math.random() * this.presentPercentages.length)
      ];
      console.log(`\n─── Block #${blockNumber} — Present: ${presentPct}% / Absent: ${100 - presentPct}% ───`);

      // ── Click the FIRST remaining red block ──
      const firstRed = this.redEventBlocks.first();
      const title = await firstRed
        .locator('.fc-event-title, div')
        .first()
        .innerText()
        .catch(() => 'unknown');

      await firstRed.scrollIntoViewIfNeeded();
      await firstRed.click();
      await this.page.waitForTimeout(800);
      console.log(`✅ Clicked: "${title.trim()}"`);

      // ── Click "Mark Attendance" in the popup ──
      await this.markAttendanceBtn.waitFor({ state: 'visible', timeout: 10_000 });
      await this.markAttendanceBtn.click();
      await this.page.waitForLoadState('networkidle');
      await this.page.waitForTimeout(800);
      console.log('✅ "Mark Attendance" clicked');

      // ── Mark attendance with rotation ──
      previouslyAbsentIndices = await this._markWithRotation(
        presentPct,
        previouslyAbsentIndices
      );

      // ── Save #1: Bottom of list ──
      const bottomSave = this.page
        .locator('button.btn-primary:not([disabled])')
        .filter({ hasText: /^Save$/ })
        .last();

      await bottomSave.waitFor({ state: 'visible', timeout: 10_000 });
      await bottomSave.scrollIntoViewIfNeeded();
      await bottomSave.click();
      console.log('✅ Bottom Save clicked');

      // ── Save #2: Attendance Summary modal ──
      await this.page.waitForTimeout(1000);
      const modalSave = this.page
        .locator('.modal-footer button.btn-primary, .modal .btn-primary')
        .filter({ hasText: /Save/i })
        .first();

      try {
        await modalSave.waitFor({ state: 'visible', timeout: 8_000 });
        await modalSave.click();
        console.log('✅ Summary modal Save clicked');
      } catch {
        console.warn('  No summary modal — may have saved directly');
      }

      await this.page.waitForTimeout(1000);

      // ── Navigate back to calendar and reload with correct faculty/type ──
      await this._reloadCalendar();
      console.log('✅ Calendar reloaded with filters — checking for more red blocks');
    }

    console.log(`\n✅ All ${blockNumber} red block(s) processed`);
  }

  /* ════════════════════════════════════════════════════════
     INTERNAL — Mark toggles with a specific present %
                Rotates absent students (no repeat absents)

     @param presentPct          number  e.g. 70 = 70% present
     @param previouslyAbsent    Set     indices absent last time
     @returns                   Set     indices absent this time
  ════════════════════════════════════════════════════════ */
  async _markWithRotation(presentPct, previouslyAbsent) {
    const toggleLabels = this.page.locator('label.switch-lg');
    const toggleCount  = await toggleLabels.count();
    console.log(`  ${toggleCount} student(s) found`);

    // How many should be absent?
    const targetAbsent = Math.round(toggleCount * ((100 - presentPct) / 100));

    // Build list of eligible indices for absent
    // Exclude students who were absent LAST session
    const allIndices      = Array.from({ length: toggleCount }, (_, i) => i);
    const eligible        = allIndices.filter(i => !previouslyAbsent.has(i));

    // Shuffle eligible list and pick targetAbsent from it
    const shuffled        = eligible.sort(() => Math.random() - 0.5);
    const newAbsentSet    = new Set(shuffled.slice(0, targetAbsent));

    // If not enough eligible (all were absent before), allow any remaining
    if (newAbsentSet.size < targetAbsent) {
      const remaining = allIndices
        .filter(i => !newAbsentSet.has(i))
        .sort(() => Math.random() - 0.5);
      for (const idx of remaining) {
        if (newAbsentSet.size >= targetAbsent) break;
        newAbsentSet.add(idx);
      }
    }

    // ── Apply toggles ──
    for (let i = 0; i < toggleCount; i++) {
      const label     = toggleLabels.nth(i);
      const checkbox  = label.locator('input[type="checkbox"]');
      const isChecked = await checkbox.isChecked().catch(() => false);
      const shouldBePresent = !newAbsentSet.has(i);

      if (shouldBePresent && !isChecked) {
        await label.click({ force: true });
        console.log(`  Student ${i + 1}: → Present ✅`);
      } else if (!shouldBePresent && isChecked) {
        await label.click({ force: true });
        console.log(`  Student ${i + 1}: → Absent ❌  (was present last time)`);
      } else {
        const state = isChecked ? 'Present (kept)' : 'Absent (kept — new)';
        console.log(`  Student ${i + 1}: ${state}`);
      }

      await this.page.waitForTimeout(80);
    }

    const absentList = [...newAbsentSet].map(i => i + 1);
    console.log(`  Present: ${toggleCount - newAbsentSet.size} | Absent: ${newAbsentSet.size} | Absent students: [${absentList}]`);
    console.log(`  Previously absent (excluded this round): [${[...previouslyAbsent].map(i => i + 1)}]`);

    return newAbsentSet; // pass to next block
  }

  /* ════════════════════════════════════════════════════════
     INTERNAL — Reload classAttendance calendar with correct
                faculty + type filters and navigate to saved month
  ════════════════════════════════════════════════════════ */
  async _reloadCalendar() {
    // Navigate to the classAttendance page fresh
    await this.page.goto('http://test3.tnedu.in/task-ui/classAttendance');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(800);

    // Re-select Faculty Id (react-select)
    if (this._facultyName) {
      const facultyInput = this.page.locator('#react-select-2-input');
      await facultyInput.waitFor({ state: 'visible', timeout: 10_000 });
      await facultyInput.click();
      await this.page.waitForTimeout(400);
      const facultyOption = this.page
        .locator('[class$="-option"], [class*="-option"]')
        .filter({ hasText: this._facultyName })
        .first();
      await facultyOption.waitFor({ state: 'visible', timeout: 8_000 });
      await facultyOption.click();
      await this.page.waitForTimeout(400);
      console.log(`  Faculty re-selected: ${this._facultyName}`);
    }

    // Re-select Type (react-select)
    if (this._typeText) {
      const typeInput = this.page.locator('#react-select-3-input');
      await typeInput.waitFor({ state: 'visible', timeout: 10_000 });
      await typeInput.click();
      await this.page.waitForTimeout(400);
      const typeOption = this.page
        .locator('[class$="-option"], [class*="-option"]')
        .filter({ hasText: this._typeText })
        .first();
      await typeOption.waitFor({ state: 'visible', timeout: 8_000 });
      await typeOption.click();
      await this.page.waitForTimeout(400);
      console.log(`  Type re-selected: ${this._typeText}`);
    }

    // Click Go to load the calendar events
    const goBtn = this.page.locator('button.btn-primary[type="submit"]').first();
    await goBtn.waitFor({ state: 'visible', timeout: 8_000 });
    await goBtn.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(800);
    console.log('  Go clicked — calendar loaded');

    // Navigate back to Month view
    await this.monthViewBtn.click();
    await this.page.waitForTimeout(500);

    // Navigate back the same number of months as before
    for (let i = 0; i < this._monthsBack; i++) {
      await this.prevMonthBtn.click();
      await this.page.waitForTimeout(500);
    }

    const monthLabel = await this.calendarTitle.innerText().catch(() => '?');
    console.log(`  Back on: ${monthLabel}`);
  }

  /* ════════════════════════════════════════════════════════
     FULL ORCHESTRATED FLOW
     @param facultyName  string  Faculty to select (e.g. 'RAVI SHANKAR')
     @param typeText     string  Type to select (default: 'ATTENDANCE ENTRY')
  ════════════════════════════════════════════════════════ */
  async completeAttendanceMarking(facultyName = '', typeText = 'ATTENDANCE ENTRY') {
    await this.clickMonthView();
    await this.navigateToFirstUnattendedMonth();
    await this.processAllRedBlocks(facultyName, typeText);
    console.log('\n✅ Complete attendance marking flow finished');
  }
}
