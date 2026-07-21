import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AttendanceMarkPage } from '../pages/AttendanceMarkPage.js';

// ═══════════════════════════════════════════════════════════
//  DTM – ATTENDANCE MARK MODULE
//  URL: http://test3.tnedu.in/
// ═══════════════════════════════════════════════════════════

test('DTM – Class Attendance Mark (Full Flow)', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const attendancePage = new AttendanceMarkPage(page);

  /* ── Navigation (LoginPage) ── */
  await test.step('Step 1 – Login', async () => {
    await loginPage.login('EEEF102', 'a');
  });

  await test.step('Step 2 – Click Task Management', async () => {
    await loginPage.clickTaskManagement();
  });

  await test.step('Step 3 – Click Attendance menu', async () => {
    await loginPage.clickAttendanceMenu();
  });

  await test.step('Step 4 – Click Class Attendance', async () => {
    await loginPage.clickClassAttendance();
  });

  await test.step('Step 5 – Select Faculty Id', async () => {
    await loginPage.selectFacultyId('SHRUTHIKA THOMAS');
  });

  await test.step('Step 6 – Select Type: ATTENDANCE ENTRY', async () => {
    await loginPage.selectType('ATTENDANCE ENTRY');
  });

  await test.step('Step 7 – Click Go button', async () => {
    await loginPage.clickGo();
  });

  /* ── Attendance marking (AttendanceMarkPage) ── */
  await test.step('Step 8 – Month view + Navigate to first unattended month', async () => {
    await attendancePage.clickMonthView();
    await attendancePage.navigateToFirstUnattendedMonth();
  });

  await test.step('Step 9 – Process ALL red blocks (varied %, rotated absents)', async () => {
    await attendancePage.processAllRedBlocks('SHRUTHIKA THOMAS', 'ATTENDANCE ENTRY');
  });

  // After all blocks processed, page should be on classAttendance or markAttendance
  await expect(page).toHaveURL(/classAttendance|markAttendance/);
  console.log('✅ All steps completed successfully');
});
