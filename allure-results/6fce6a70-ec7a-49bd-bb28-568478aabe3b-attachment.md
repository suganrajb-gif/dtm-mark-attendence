# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendanceMark.spec.js >> DTM – Class Attendance Mark (Full Flow)
- Location: tests\attendanceMark.spec.js:10:1

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
  "commit" event fired
  "domcontentloaded" event fired
  "load" event fired
============================================================
```

# Test source

```ts
  1   | /**
  2   |  * LoginPage — DTM Attendance Mark
  3   |  * URL: http://test3.tnedu.in/
  4   |  *
  5   |  * All selectors verified from live DevTools inspection.
  6   |  *
  7   |  * Steps:
  8   |  *  1. Login  →  username: Ai104 | password: a
  9   |  *  2. Click Task Management card on dashboard
  10  |  *  3. Click Attendance menu in navbar
  11  |  *  4. Click Class Attendance sub-menu
  12  |  *  5. Select Faculty Id from react-select dropdown
  13  |  *  6. Select Type = ATTENDANCE ENTRY from react-select dropdown
  14  |  */
  15  | export class LoginPage {
  16  |   constructor(page) {
  17  |     this.page = page;
  18  | 
  19  |     /* ── STEP 1: Login ── */
  20  |     // Standard text + password inputs on the login form
  21  |     this.usernameInput = page.locator('input[type="text"]').first();
  22  |     this.passwordInput = page.locator('input[type="password"]').first();
  23  |     this.loginBtn = page.locator('input#kc-login');  // confirmed: <input id="kc-login" type="submit" name="login" value="Log In">
  24  | 
  25  |     /* ── STEP 2: Task Management card (dashboard) ── */
  26  |     // The dashboard icon card that links into the task-ui module
  27  |     this.taskManagementCard = page.locator('a[href*="task-ui"]').first();
  28  | 
  29  |     /* ── STEP 7: Go button on Class Attendance page ── */
  30  |     // Confirmed from DevTools: <button class="btn btn-primary mt-md-1" type="submit">
  31  |     this.goBtn = page.locator('button.btn-primary[type="submit"]').first();
  32  | 
  33  |     /* ── STEP 3: Attendance top-nav menu ── */
  34  |     // The navbar dropdown toggle whose visible text is "Attendance"
  35  |     this.attendanceMenu = page
  36  |       .locator('ul.navbar-nav a.nav-link.dropdown-toggle')
  37  |       .filter({ hasText: 'Attendance' })
  38  |       .first();
  39  | 
  40  |     /* ── STEP 4: Class Attendance sub-menu ── */
  41  |     // Confirmed href from DevTools: /task-ui/classAttendance
  42  |     this.classAttendanceLink = page.locator('a.dropdown-item[href="/task-ui/classAttendance"]');
  43  | 
  44  |     /* ── STEP 5: Faculty Id react-select ── */
  45  |     // id confirmed from DevTools: react-select-2-input
  46  |     this.facultySelectInput = page.locator('#react-select-2-input');
  47  | 
  48  |     /* ── STEP 6: Type react-select ── */
  49  |     // Next react-select after Faculty Id
  50  |     this.typeSelectInput = page.locator('#react-select-3-input');
  51  |   }
  52  | 
  53  |   /* ════════════════════════════════════════════════════════
  54  |      STEP 1 — Login
  55  |   ════════════════════════════════════════════════════════ */
  56  |   async login(username = 'EEEF102', password = 'a') {
  57  |     await this.page.goto('http://test3.tnedu.in/');
  58  |     await this.page.waitForLoadState('networkidle');
  59  | 
  60  |     await this.usernameInput.fill(username);
  61  |     await this.passwordInput.fill(password);
  62  |     await this.loginBtn.click();
  63  | 
  64  |     await this.page.waitForLoadState('networkidle');
  65  |     console.log('✅ Step 1 — Logged in');
  66  |   }
  67  | 
  68  |   /* ════════════════════════════════════════════════════════
  69  |      STEP 2 — Click Task Management card on dashboard
  70  |   ════════════════════════════════════════════════════════ */
  71  |   async clickTaskManagement() {
  72  |     await this.page.waitForSelector('a[href*="task-ui"]', { timeout: 15_000 });
  73  |     await this.taskManagementCard.click();
> 74  |     await this.page.waitForLoadState('networkidle');
      |                     ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  75  |     console.log('✅ Step 2 — Task Management clicked');
  76  |   }
  77  | 
  78  |   /* ════════════════════════════════════════════════════════
  79  |      STEP 3 — Click Attendance menu in top navbar
  80  |   ════════════════════════════════════════════════════════ */
  81  |   async clickAttendanceMenu() {
  82  |     await this.attendanceMenu.waitFor({ state: 'visible', timeout: 10_000 });
  83  |     await this.attendanceMenu.click();
  84  |     await this.page.waitForTimeout(400);
  85  |     console.log('✅ Step 3 — Attendance menu opened');
  86  |   }
  87  | 
  88  |   /* ════════════════════════════════════════════════════════
  89  |      STEP 4 — Click Class Attendance sub-menu
  90  |   ════════════════════════════════════════════════════════ */
  91  |   async clickClassAttendance() {
  92  |     await this.classAttendanceLink.waitFor({ state: 'visible', timeout: 8_000 });
  93  |     await this.classAttendanceLink.click();
  94  |     await this.page.waitForURL('**/classAttendance', { timeout: 15_000 });
  95  |     await this.page.waitForLoadState('networkidle');
  96  |     console.log('✅ Step 4 — Class Attendance page loaded');
  97  |   }
  98  | 
  99  |   /* ════════════════════════════════════════════════════════
  100 |      STEP 5 — Select Faculty Id (react-select)
  101 |      The dropdown opens on click; options appear in a portal
  102 |      with class containing "-option"
  103 |   ════════════════════════════════════════════════════════ */
  104 |   async selectFacultyId(facultyText = 'SURESH RAMAN') {
  105 |     // Click the react-select input to open the dropdown
  106 |     await this.facultySelectInput.waitFor({ state: 'visible', timeout: 10_000 });
  107 |     await this.facultySelectInput.click();
  108 |     await this.page.waitForTimeout(500);
  109 | 
  110 |     // Pick the option whose text matches (partial match)
  111 |     const option = this.page
  112 |       .locator('[class$="-option"], [class*="-option"]')
  113 |       .filter({ hasText: facultyText })
  114 |       .first();
  115 | 
  116 |     await option.waitFor({ state: 'visible', timeout: 8_000 });
  117 |     await option.click();
  118 |     await this.page.waitForTimeout(400);
  119 |     console.log(`✅ Step 5 — Faculty Id selected: ${facultyText}`);
  120 |   }
  121 | 
  122 |   /* ════════════════════════════════════════════════════════
  123 |      STEP 6 — Select Type = ATTENDANCE ENTRY (react-select)
  124 |   ════════════════════════════════════════════════════════ */
  125 |   async selectType(typeText = 'ATTENDANCE ENTRY') {
  126 |     // Click the Type react-select input to open the dropdown
  127 |     await this.typeSelectInput.waitFor({ state: 'visible', timeout: 10_000 });
  128 |     await this.typeSelectInput.click();
  129 |     await this.page.waitForTimeout(500);
  130 | 
  131 |     // Pick the matching option
  132 |     const option = this.page
  133 |       .locator('[class$="-option"], [class*="-option"]')
  134 |       .filter({ hasText: typeText })
  135 |       .first();
  136 | 
  137 |     await option.waitFor({ state: 'visible', timeout: 8_000 });
  138 |     await option.click();
  139 |     await this.page.waitForTimeout(400);
  140 |     console.log(`✅ Step 6 — Type selected: ${typeText}`);
  141 |   }
  142 | 
  143 |   /* ════════════════════════════════════════════════════════
  144 |      STEP 7 — Click Go button to load attendance calendar
  145 |      Confirmed selector: button.btn.btn-primary.mt-md-1[type="submit"]
  146 |   ════════════════════════════════════════════════════════ */
  147 |   async clickGo() {
  148 |     await this.goBtn.waitFor({ state: 'visible', timeout: 8_000 });
  149 |     await this.goBtn.click();
  150 |     await this.page.waitForLoadState('networkidle');
  151 |     await this.page.waitForTimeout(500);
  152 |     console.log('✅ Step 7 — Go button clicked — Attendance calendar loaded');
  153 |   }
  154 | 
  155 |   /* ════════════════════════════════════════════════════════
  156 |      FULL FLOW — Run all 6 steps in one call
  157 |   ════════════════════════════════════════════════════════ */
  158 |   async navigateToClassAttendanceEntry({
  159 |     username = 'Ai104',
  160 |     password = 'a',
  161 |     facultyName = 'SURESH RAMAN',
  162 |     type = 'ATTENDANCE ENTRY',
  163 |   } = {}) {
  164 |     await this.login(username, password);
  165 |     await this.clickTaskManagement();
  166 |     await this.clickAttendanceMenu();
  167 |     await this.clickClassAttendance();
  168 |     await this.selectFacultyId(facultyName);
  169 |     await this.selectType(type);
  170 |     await this.clickGo();
  171 |     console.log('✅ All 7 steps completed — Attendance calendar is ready');
  172 |   }
  173 | }
  174 | 
```