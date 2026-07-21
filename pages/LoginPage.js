/**
 * LoginPage — DTM Attendance Mark
 * URL: http://test3.tnedu.in/
 *
 * All selectors verified from live DevTools inspection.
 *
 * Steps:
 *  1. Login  →  username: Ai104 | password: a
 *  2. Click Task Management card on dashboard
 *  3. Click Attendance menu in navbar
 *  4. Click Class Attendance sub-menu
 *  5. Select Faculty Id from react-select dropdown
 *  6. Select Type = ATTENDANCE ENTRY from react-select dropdown
 */
export class LoginPage {
  constructor(page) {
    this.page = page;

    /* ── STEP 1: Login ── */
    // Standard text + password inputs on the login form
    this.usernameInput = page.locator('input[type="text"]').first();
    this.passwordInput = page.locator('input[type="password"]').first();
    this.loginBtn = page.locator('input#kc-login');  // confirmed: <input id="kc-login" type="submit" name="login" value="Log In">

    /* ── STEP 2: Task Management card (dashboard) ── */
    // The dashboard icon card that links into the task-ui module
    this.taskManagementCard = page.locator('a[href*="task-ui"]').first();

    /* ── STEP 7: Go button on Class Attendance page ── */
    // Confirmed from DevTools: <button class="btn btn-primary mt-md-1" type="submit">
    this.goBtn = page.locator('button.btn-primary[type="submit"]').first();

    /* ── STEP 3: Attendance top-nav menu ── */
    // The navbar dropdown toggle whose visible text is "Attendance"
    this.attendanceMenu = page
      .locator('ul.navbar-nav a.nav-link.dropdown-toggle')
      .filter({ hasText: 'Attendance' })
      .first();

    /* ── STEP 4: Class Attendance sub-menu ── */
    // Confirmed href from DevTools: /task-ui/classAttendance
    this.classAttendanceLink = page.locator('a.dropdown-item[href="/task-ui/classAttendance"]');

    /* ── STEP 5: Faculty Id react-select ── */
    // id confirmed from DevTools: react-select-2-input
    this.facultySelectInput = page.locator('#react-select-2-input');

    /* ── STEP 6: Type react-select ── */
    // Next react-select after Faculty Id
    this.typeSelectInput = page.locator('#react-select-3-input');
  }

  /* ════════════════════════════════════════════════════════
     STEP 1 — Login
  ════════════════════════════════════════════════════════ */
  async login(username = 'EEEF102', password = 'a') {
    await this.page.goto('http://test3.tnedu.in/');
    await this.page.waitForLoadState('networkidle');

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();

    await this.page.waitForLoadState('networkidle');
    console.log('✅ Step 1 — Logged in');
  }

  /* ════════════════════════════════════════════════════════
     STEP 2 — Click Task Management card on dashboard
  ════════════════════════════════════════════════════════ */
  async clickTaskManagement() {
    await this.page.waitForSelector('a[href*="task-ui"]', { timeout: 15_000 });
    await this.taskManagementCard.click();
    await this.page.waitForLoadState('networkidle');
    console.log('✅ Step 2 — Task Management clicked');
  }

  /* ════════════════════════════════════════════════════════
     STEP 3 — Click Attendance menu in top navbar
  ════════════════════════════════════════════════════════ */
  async clickAttendanceMenu() {
    await this.attendanceMenu.waitFor({ state: 'visible', timeout: 10_000 });
    await this.attendanceMenu.click();
    await this.page.waitForTimeout(400);
    console.log('✅ Step 3 — Attendance menu opened');
  }

  /* ════════════════════════════════════════════════════════
     STEP 4 — Click Class Attendance sub-menu
  ════════════════════════════════════════════════════════ */
  async clickClassAttendance() {
    await this.classAttendanceLink.waitFor({ state: 'visible', timeout: 8_000 });
    await this.classAttendanceLink.click();
    await this.page.waitForURL('**/classAttendance', { timeout: 15_000 });
    await this.page.waitForLoadState('networkidle');
    console.log('✅ Step 4 — Class Attendance page loaded');
  }

  /* ════════════════════════════════════════════════════════
     STEP 5 — Select Faculty Id (react-select)
     The dropdown opens on click; options appear in a portal
     with class containing "-option"
  ════════════════════════════════════════════════════════ */
  async selectFacultyId(facultyText = 'SURESH RAMAN') {
    // Click the react-select input to open the dropdown
    await this.facultySelectInput.waitFor({ state: 'visible', timeout: 10_000 });
    await this.facultySelectInput.click();
    await this.page.waitForTimeout(500);

    // Pick the option whose text matches (partial match)
    const option = this.page
      .locator('[class$="-option"], [class*="-option"]')
      .filter({ hasText: facultyText })
      .first();

    await option.waitFor({ state: 'visible', timeout: 8_000 });
    await option.click();
    await this.page.waitForTimeout(400);
    console.log(`✅ Step 5 — Faculty Id selected: ${facultyText}`);
  }

  /* ════════════════════════════════════════════════════════
     STEP 6 — Select Type = ATTENDANCE ENTRY (react-select)
  ════════════════════════════════════════════════════════ */
  async selectType(typeText = 'ATTENDANCE ENTRY') {
    // Click the Type react-select input to open the dropdown
    await this.typeSelectInput.waitFor({ state: 'visible', timeout: 10_000 });
    await this.typeSelectInput.click();
    await this.page.waitForTimeout(500);

    // Pick the matching option
    const option = this.page
      .locator('[class$="-option"], [class*="-option"]')
      .filter({ hasText: typeText })
      .first();

    await option.waitFor({ state: 'visible', timeout: 8_000 });
    await option.click();
    await this.page.waitForTimeout(400);
    console.log(`✅ Step 6 — Type selected: ${typeText}`);
  }

  /* ════════════════════════════════════════════════════════
     STEP 7 — Click Go button to load attendance calendar
     Confirmed selector: button.btn.btn-primary.mt-md-1[type="submit"]
  ════════════════════════════════════════════════════════ */
  async clickGo() {
    await this.goBtn.waitFor({ state: 'visible', timeout: 8_000 });
    await this.goBtn.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(500);
    console.log('✅ Step 7 — Go button clicked — Attendance calendar loaded');
  }

  /* ════════════════════════════════════════════════════════
     FULL FLOW — Run all 6 steps in one call
  ════════════════════════════════════════════════════════ */
  async navigateToClassAttendanceEntry({
    username = 'EEEF102',
    password = 'a',
    facultyName = 'SHRUTHIKA THOMAS',
    type = 'ATTENDANCE ENTRY',
  } = {}) {
    await this.login(username, password);
    await this.clickTaskManagement();
    await this.clickAttendanceMenu();
    await this.clickClassAttendance();
    await this.selectFacultyId(facultyName);
    await this.selectType(type);
    await this.clickGo();
    console.log('✅ All 7 steps completed — Attendance calendar is ready');
  }
}
