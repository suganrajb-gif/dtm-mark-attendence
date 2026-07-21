# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendanceMark.spec.js >> DTM – Class Attendance Mark (Full Flow)
- Location: tests\attendanceMark.spec.js:10:1

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 180000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "logo" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "logo" [ref=e7]
        - generic [ref=e8]:
          - list [ref=e10]:
            - listitem [ref=e11]:
              - button "Attendance" [ref=e12] [cursor=pointer]:
                - img [ref=e13]
                - text: Attendance
            - listitem [ref=e15]:
              - button "TimeTable" [ref=e16] [cursor=pointer]:
                - img [ref=e17]
                - text: TimeTable
            - listitem [ref=e19]:
              - button "WorkLoad" [ref=e20] [cursor=pointer]:
                - img [ref=e21]
                - text: WorkLoad
            - listitem [ref=e23]:
              - button "Setup" [ref=e24] [cursor=pointer]:
                - img [ref=e25]
                - text: Setup
            - listitem [ref=e27]:
              - button "Course Plan" [ref=e28] [cursor=pointer]:
                - img [ref=e29]
                - text: Course Plan
          - list [ref=e32]:
            - listitem [ref=e33]:
              - link [ref=e36] [cursor=pointer]:
                - /url: "#/"
                - img [ref=e37]
              - button "eeef102" [ref=e39] [cursor=pointer]:
                - img [ref=e41]
                - generic [ref=e44]: eeef102
  - generic [ref=e47]:
    - generic [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - button [expanded] [ref=e51] [cursor=pointer]
          - generic [ref=e52]: Class Attendance
        - generic [ref=e53]:
          - text: "Task Status Count :"
          - generic [ref=e54]: "OPEN : 44"
          - generic [ref=e55]: "CALLEDOFF : 0"
          - generic [ref=e56]: "COMPLETED : 14"
          - generic [ref=e57]: "TOTAL (Till Date) : 58"
      - generic [ref=e60]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]: Faculty Id
            - generic [ref=e65]:
              - log [ref=e67]
              - generic [ref=e68]:
                - generic [ref=e69]:
                  - generic [ref=e70]: SHRUTHIKA THOMAS - EEEF102
                  - combobox [ref=e72]
                - img [ref=e76]
          - generic [ref=e78]:
            - generic [ref=e79]: Type
            - generic [ref=e80]:
              - log [ref=e82]
              - generic [ref=e83]:
                - generic [ref=e84]:
                  - generic [ref=e85]: ATTENDANCE ENTRY
                  - combobox [ref=e87]
                - img [ref=e91]
          - button "Go" [ref=e95] [cursor=pointer]
        - generic [ref=e96]:
          - generic [ref=e99] [cursor=pointer]:
            - generic [ref=e100]:
              - spinbutton [ref=e101]
              - text: "-"
              - spinbutton [ref=e102]
              - text: "-"
              - spinbutton [ref=e103]
            - button [ref=e104]
            - button [ref=e105]:
              - img [ref=e106]
          - button "Inbox" [ref=e108] [cursor=pointer]
          - button "View Unplanned Term" [ref=e109] [cursor=pointer]:
            - generic [ref=e110]: View Unplanned Term
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e115]:
            - button "Previous month" [active] [ref=e116] [cursor=pointer]:
              - img [ref=e117]: 
            - button "Next month" [ref=e118] [cursor=pointer]:
              - img [ref=e119]: 
          - heading "June 2026" [level=2] [ref=e120]
        - generic [ref=e122]:
          - button "today" [ref=e123] [cursor=pointer]
          - button "month" [pressed] [ref=e124] [cursor=pointer]
          - button "week" [ref=e125] [cursor=pointer]
          - button "day" [ref=e126] [cursor=pointer]
          - button "list" [ref=e127] [cursor=pointer]
      - generic "June 2026" [ref=e128]:
        - grid [ref=e130]:
          - rowgroup [ref=e131]:
            - row "Sunday Monday Tuesday Wednesday Thursday Friday Saturday" [ref=e135] [cursor=pointer]:
              - columnheader "Sunday" [ref=e136]:
                - generic "Sunday" [ref=e138]
              - columnheader "Monday" [ref=e139]:
                - generic "Monday" [ref=e141]
              - columnheader "Tuesday" [ref=e142]:
                - generic "Tuesday" [ref=e144]
              - columnheader "Wednesday" [ref=e145]:
                - generic "Wednesday" [ref=e147]
              - columnheader "Thursday" [ref=e148]:
                - generic "Thursday" [ref=e150]
              - columnheader "Friday" [ref=e151]:
                - generic "Friday" [ref=e153]
              - columnheader "Saturday" [ref=e154]:
                - generic "Saturday" [ref=e156]
          - rowgroup [ref=e157]:
            - generic [ref=e160] [cursor=pointer]:
              - row "May 31, 2026 June 1, 2026 June 2, 2026 June 3, 2026 June 4, 2026 June 5, 2026 June 6, 2026" [ref=e162]:
                - gridcell "May 31, 2026" [ref=e163]:
                  - generic "May 31, 2026" [ref=e166]: "31"
                - gridcell "June 1, 2026" [ref=e167]:
                  - generic [ref=e168]:
                    - generic "June 1, 2026" [ref=e170]: "1"
                    - generic [ref=e175]:
                      - generic [ref=e176]: 10:30 AM - 11:30 AM
                      - generic [ref=e177]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 2, 2026" [ref=e178]:
                  - generic [ref=e179]:
                    - generic "June 2, 2026" [ref=e181]: "2"
                    - generic [ref=e186]:
                      - generic [ref=e187]: 10:30 AM - 11:30 AM
                      - generic [ref=e188]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 3, 2026" [ref=e189]:
                  - generic [ref=e190]:
                    - generic "June 3, 2026" [ref=e192]: "3"
                    - generic [ref=e197]:
                      - generic [ref=e198]: 10:30 AM - 11:30 AM
                      - generic [ref=e199]: MMM-MENTOR MENTEE MEETING
                - gridcell "June 4, 2026" [ref=e200]:
                  - generic [ref=e201]:
                    - generic "June 4, 2026" [ref=e203]: "4"
                    - generic [ref=e208]:
                      - generic [ref=e209]: 10:30 AM - 11:30 AM
                      - generic [ref=e210]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 5, 2026" [ref=e211]:
                  - generic [ref=e212]:
                    - generic "June 5, 2026" [ref=e214]: "5"
                    - generic [ref=e219]:
                      - generic [ref=e220]: 10:30 AM - 11:30 AM
                      - generic [ref=e221]: LIB-Library
                - gridcell "June 6, 2026" [ref=e222]:
                  - generic "June 6, 2026" [ref=e225]: "6"
              - row "June 7, 2026 June 8, 2026 June 9, 2026 June 10, 2026 June 11, 2026 June 12, 2026 June 13, 2026" [ref=e226]:
                - gridcell "June 7, 2026" [ref=e227]:
                  - generic "June 7, 2026" [ref=e230]: "7"
                - gridcell "June 8, 2026" [ref=e231]:
                  - generic [ref=e232]:
                    - generic "June 8, 2026" [ref=e234]: "8"
                    - generic [ref=e239]:
                      - generic [ref=e240]: 10:30 AM - 11:30 AM
                      - generic [ref=e241]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 9, 2026" [ref=e242]:
                  - generic [ref=e243]:
                    - generic "June 9, 2026" [ref=e245]: "9"
                    - generic [ref=e250]:
                      - generic [ref=e251]: 10:30 AM - 11:30 AM
                      - generic [ref=e252]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 10, 2026" [ref=e253]:
                  - generic [ref=e254]:
                    - generic "June 10, 2026" [ref=e256]: "10"
                    - generic [ref=e261]:
                      - generic [ref=e262]: 10:30 AM - 11:30 AM
                      - generic [ref=e263]: MMM-MENTOR MENTEE MEETING
                - gridcell "June 11, 2026" [ref=e264]:
                  - generic [ref=e265]:
                    - generic "June 11, 2026" [ref=e267]: "11"
                    - generic [ref=e272]:
                      - generic [ref=e273]: 10:30 AM - 11:30 AM
                      - generic [ref=e274]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 12, 2026" [ref=e275]:
                  - generic [ref=e276]:
                    - generic "June 12, 2026" [ref=e278]: "12"
                    - generic [ref=e283]:
                      - generic [ref=e284]: 10:30 AM - 11:30 AM
                      - generic [ref=e285]: LIB-Library
                - gridcell "June 13, 2026" [ref=e286]:
                  - generic "June 13, 2026" [ref=e289]: "13"
              - row "June 14, 2026 June 15, 2026 June 16, 2026 June 17, 2026 June 18, 2026 June 19, 2026 June 20, 2026" [ref=e290]:
                - gridcell "June 14, 2026" [ref=e291]:
                  - generic "June 14, 2026" [ref=e294]: "14"
                - gridcell "June 15, 2026" [ref=e295]:
                  - generic [ref=e296]:
                    - generic "June 15, 2026" [ref=e298]: "15"
                    - generic [ref=e303]:
                      - generic [ref=e304]: 10:30 AM - 11:30 AM
                      - generic [ref=e305]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 16, 2026" [ref=e306]:
                  - generic [ref=e307]:
                    - generic "June 16, 2026" [ref=e309]: "16"
                    - generic [ref=e314]:
                      - generic [ref=e315]: 10:30 AM - 11:30 AM
                      - generic [ref=e316]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 17, 2026" [ref=e317]:
                  - generic [ref=e318]:
                    - generic "June 17, 2026" [ref=e320]: "17"
                    - generic [ref=e325]:
                      - generic [ref=e326]: 10:30 AM - 11:30 AM
                      - generic [ref=e327]: MMM-MENTOR MENTEE MEETING
                - gridcell "June 18, 2026" [ref=e328]:
                  - generic [ref=e329]:
                    - generic "June 18, 2026" [ref=e331]: "18"
                    - generic [ref=e336]:
                      - generic [ref=e337]: 10:30 AM - 11:30 AM
                      - generic [ref=e338]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 19, 2026" [ref=e339]:
                  - generic [ref=e340]:
                    - generic "June 19, 2026" [ref=e342]: "19"
                    - generic [ref=e347]:
                      - generic [ref=e348]: 10:30 AM - 11:30 AM
                      - generic [ref=e349]: LIB-Library
                - gridcell "June 20, 2026" [ref=e350]:
                  - generic "June 20, 2026" [ref=e353]: "20"
              - row "June 21, 2026 June 22, 2026 June 23, 2026 June 24, 2026 June 25, 2026 June 26, 2026 June 27, 2026" [ref=e354]:
                - gridcell "June 21, 2026" [ref=e355]:
                  - generic "June 21, 2026" [ref=e358]: "21"
                - gridcell "June 22, 2026" [ref=e359]:
                  - generic [ref=e360]:
                    - generic "June 22, 2026" [ref=e362]: "22"
                    - generic [ref=e367]:
                      - generic [ref=e368]: 10:30 AM - 11:30 AM
                      - generic [ref=e369]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 23, 2026" [ref=e370]:
                  - generic [ref=e371]:
                    - generic "June 23, 2026" [ref=e373]: "23"
                    - generic [ref=e378]:
                      - generic [ref=e379]: 10:30 AM - 11:30 AM
                      - generic [ref=e380]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 24, 2026" [ref=e381]:
                  - generic [ref=e382]:
                    - generic "June 24, 2026" [ref=e384]: "24"
                    - generic [ref=e389]:
                      - generic [ref=e390]: 10:30 AM - 11:30 AM
                      - generic [ref=e391]: MMM-MENTOR MENTEE MEETING
                - gridcell "June 25, 2026" [ref=e392]:
                  - generic [ref=e393]:
                    - generic "June 25, 2026" [ref=e395]: "25"
                    - generic [ref=e400]:
                      - generic [ref=e401]: 10:30 AM - 11:30 AM
                      - generic [ref=e402]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 26, 2026" [ref=e403]:
                  - generic [ref=e404]:
                    - generic "June 26, 2026" [ref=e406]: "26"
                    - generic [ref=e411]:
                      - generic [ref=e412]: 10:30 AM - 11:30 AM
                      - generic [ref=e413]: LIB-Library
                - gridcell "June 27, 2026" [ref=e414]:
                  - generic "June 27, 2026" [ref=e417]: "27"
              - row "June 28, 2026 June 29, 2026 June 30, 2026 July 1, 2026 July 2, 2026 July 3, 2026 July 4, 2026" [ref=e418]:
                - gridcell "June 28, 2026" [ref=e419]:
                  - generic "June 28, 2026" [ref=e422]: "28"
                - gridcell "June 29, 2026" [ref=e423]:
                  - generic [ref=e424]:
                    - generic "June 29, 2026" [ref=e426]: "29"
                    - generic [ref=e431]:
                      - generic [ref=e432]: 10:30 AM - 11:30 AM
                      - generic [ref=e433]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "June 30, 2026" [ref=e434]:
                  - generic [ref=e435]:
                    - generic "June 30, 2026" [ref=e437]: "30"
                    - generic [ref=e442]:
                      - generic [ref=e443]: 10:30 AM - 11:30 AM
                      - generic [ref=e444]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "July 1, 2026" [ref=e445]:
                  - generic [ref=e446]:
                    - generic "July 1, 2026" [ref=e448]: "1"
                    - generic [ref=e453]:
                      - generic [ref=e454]: 10:30 AM - 11:30 AM
                      - generic [ref=e455]: MMM-MENTOR MENTEE MEETING
                - gridcell "July 2, 2026" [ref=e456]:
                  - generic [ref=e457]:
                    - generic "July 2, 2026" [ref=e459]: "2"
                    - generic [ref=e464]:
                      - generic [ref=e465]: 10:30 AM - 11:30 AM
                      - generic [ref=e466]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "July 3, 2026" [ref=e467]:
                  - generic [ref=e468]:
                    - generic "July 3, 2026" [ref=e470]: "3"
                    - generic [ref=e475]:
                      - generic [ref=e476]: 10:30 AM - 11:30 AM
                      - generic [ref=e477]: LIB-Library
                - gridcell "July 4, 2026" [ref=e478]:
                  - generic "July 4, 2026" [ref=e481]: "4"
              - row "July 5, 2026 July 6, 2026 July 7, 2026 July 8, 2026 July 9, 2026 July 10, 2026 July 11, 2026" [ref=e482]:
                - gridcell "July 5, 2026" [ref=e483]:
                  - generic "July 5, 2026" [ref=e486]: "5"
                - gridcell "July 6, 2026" [ref=e487]:
                  - generic [ref=e488]:
                    - generic "July 6, 2026" [ref=e490]: "6"
                    - generic [ref=e495]:
                      - generic [ref=e496]: 10:30 AM - 11:30 AM
                      - generic [ref=e497]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "July 7, 2026" [ref=e498]:
                  - generic [ref=e499]:
                    - generic "July 7, 2026" [ref=e501]: "7"
                    - generic [ref=e506]:
                      - generic [ref=e507]: 10:30 AM - 11:30 AM
                      - generic [ref=e508]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "July 8, 2026" [ref=e509]:
                  - generic [ref=e510]:
                    - generic "July 8, 2026" [ref=e512]: "8"
                    - generic [ref=e517]:
                      - generic [ref=e518]: 10:30 AM - 11:30 AM
                      - generic [ref=e519]: MMM-MENTOR MENTEE MEETING
                - gridcell "July 9, 2026" [ref=e520]:
                  - generic [ref=e521]:
                    - generic "July 9, 2026" [ref=e523]: "9"
                    - generic [ref=e528]:
                      - generic [ref=e529]: 10:30 AM - 11:30 AM
                      - generic [ref=e530]: EEE3002-DIGITAL LOGIC CIRCUITS
                - gridcell "July 10, 2026" [ref=e531]:
                  - generic [ref=e532]:
                    - generic "July 10, 2026" [ref=e534]: "10"
                    - generic [ref=e539]:
                      - generic [ref=e540]: 10:30 AM - 11:30 AM
                      - generic [ref=e541]: LIB-Library
                - gridcell "July 11, 2026" [ref=e542]:
                  - generic "July 11, 2026" [ref=e545]: "11"
  - generic [ref=e546]:
    - text: © 2026 -
    - link "DoTE Government of Tamil Nadu" [ref=e547] [cursor=pointer]:
      - /url: https://dte.tn.gov.in/
    - text: . All Rights Reserved.
```

# Test source

```ts
  1   | /**
  2   |  * AttendanceMarkPage — DTM Class Attendance
  3   |  * URL: http://test3.tnedu.in/task-ui/classAttendance
  4   |  *
  5   |  * Steps:
  6   |  *  Step 1 : Click "Month" view button
  7   |  *  Step 2 : Navigate back to first month with red (unattended) blocks
  8   |  *  Step 3 : Process ALL red blocks one by one:
  9   |  *             - Each block → different random present % (60, 70, 80, 90)
  10  |  *             - Rotate absent students (same student NOT absent twice in a row)
  11  |  *  Step 4 : After each block → popup → click "Mark Attendance"
  12  |  *  Step 5 : Toggle students → Save (bottom) → Save (summary modal)
  13  |  *  Step 6 : Go back to calendar → process next red block
  14  |  *
  15  |  * Color legend:
  16  |  *   🟢 Green = Already marked
  17  |  *   🔴 Red   = Not marked  ← we target these
  18  |  *   🔵 Blue  = Call off
  19  |  */
  20  | export class AttendanceMarkPage {
  21  |   constructor(page) {
  22  |     this.page = page;
  23  | 
  24  |     /* ── Calendar toolbar ── */
  25  |     this.monthViewBtn  = page.locator('button.fc-dayGridMonth-button');
  26  |     this.prevMonthBtn  = page.locator('button.fc-prev-button');
  27  |     this.calendarTitle = page.locator('h2.fc-toolbar-title');
  28  | 
  29  |     /* ── Red (not marked) event blocks ── */
  30  |     this.redEventBlocks = page.locator(
  31  |       'a.fc-event.past-date, a.fc-event.fc-daygrid-dot-event.past-date'
  32  |     );
  33  | 
  34  |     /* ── Mark Attendance modal button ── */
  35  |     this.markAttendanceBtn = page.locator('button:has-text("Mark Attendance")').first();
  36  | 
  37  |     /* ── Present % options to rotate (picked randomly per block) ── */
  38  |     this.presentPercentages = [60, 70, 80, 90];
  39  | 
  40  |     // Stored after navigateToFirstUnattendedMonth() — used to re-navigate after each save
  41  |     this._monthsBack   = 0;
  42  |     this._facultyName  = '';
  43  |     this._typeText     = 'ATTENDANCE ENTRY';
  44  |   }
  45  | 
  46  |   /* ════════════════════════════════════════════════════════
  47  |      STEP 1 — Click Month view
  48  |   ════════════════════════════════════════════════════════ */
  49  |   async clickMonthView() {
  50  |     await this.monthViewBtn.waitFor({ state: 'visible', timeout: 10_000 });
  51  |     await this.monthViewBtn.click();
  52  |     await this.page.waitForTimeout(600);
  53  |     console.log('✅ Step 1 — Month view activated');
  54  |   }
  55  | 
  56  |   /* ════════════════════════════════════════════════════════
  57  |      STEP 2 — Navigate back to first month with red blocks
  58  |   ════════════════════════════════════════════════════════ */
  59  |   async navigateToFirstUnattendedMonth(maxMonthsBack = 12) {
  60  |     await this.prevMonthBtn.waitFor({ state: 'visible', timeout: 10_000 });
  61  |     this._monthsBack = 0;
  62  | 
  63  |     for (let i = 0; i < maxMonthsBack; i++) {
  64  |       await this.prevMonthBtn.click();
  65  |       await this.page.waitForTimeout(800);
  66  |       this._monthsBack++;
  67  | 
  68  |       const monthLabel = await this.calendarTitle.innerText().catch(() => '?');
  69  |       console.log(`  ← Navigated to: ${monthLabel}`);
  70  | 
  71  |       const redCount = await this.redEventBlocks.count();
  72  |       if (redCount > 0) {
  73  |         console.log(`✅ Step 2 — First unattended month: ${monthLabel} (${redCount} red blocks)`);
  74  |         return;
  75  |       }
  76  |     }
  77  | 
  78  |     console.warn('⚠️  No red blocks found in last ' + maxMonthsBack + ' months');
  79  |   }
  80  | 
  81  |   /* ════════════════════════════════════════════════════════
  82  |      STEP 3–6 — Process ALL red blocks across all months
  83  |                 Each block uses a different random present%
  84  |                 Absent students rotate (no repeat absent)
  85  |      @param facultyName  string  e.g. 'RAVI SHANKAR'
  86  |      @param typeText     string  e.g. 'ATTENDANCE ENTRY'
  87  |   ════════════════════════════════════════════════════════ */
  88  |   async processAllRedBlocks(facultyName = '', typeText = 'ATTENDANCE ENTRY') {
  89  |     this._facultyName = facultyName;
  90  |     this._typeText    = typeText;
  91  | 
  92  |     let previouslyAbsentIndices = new Set();
  93  |     let blockNumber = 0;
  94  | 
  95  |     // Loop: keep processing red blocks until none remain
  96  |     while (true) {
> 97  |       await this.page.waitForTimeout(500);
      |                       ^ Error: page.waitForTimeout: Test timeout of 180000ms exceeded.
  98  | 
  99  |       // Refresh red block list on current view
  100 |       const redCount = await this.redEventBlocks.count();
  101 | 
  102 |       if (redCount === 0) {
  103 |         // No more red blocks on this month — check if we should go forward
  104 |         console.log('  No more red blocks on this month');
  105 |         break;
  106 |       }
  107 | 
  108 |       blockNumber++;
  109 | 
  110 |       // ── Pick a random present% for this block ──
  111 |       const presentPct = this.presentPercentages[
  112 |         Math.floor(Math.random() * this.presentPercentages.length)
  113 |       ];
  114 |       console.log(`\n─── Block #${blockNumber} — Present: ${presentPct}% / Absent: ${100 - presentPct}% ───`);
  115 | 
  116 |       // ── Click the FIRST remaining red block ──
  117 |       const firstRed = this.redEventBlocks.first();
  118 |       const title = await firstRed
  119 |         .locator('.fc-event-title, div')
  120 |         .first()
  121 |         .innerText()
  122 |         .catch(() => 'unknown');
  123 | 
  124 |       await firstRed.scrollIntoViewIfNeeded();
  125 |       await firstRed.click();
  126 |       await this.page.waitForTimeout(800);
  127 |       console.log(`✅ Clicked: "${title.trim()}"`);
  128 | 
  129 |       // ── Click "Mark Attendance" in the popup ──
  130 |       await this.markAttendanceBtn.waitFor({ state: 'visible', timeout: 10_000 });
  131 |       await this.markAttendanceBtn.click();
  132 |       await this.page.waitForLoadState('networkidle');
  133 |       await this.page.waitForTimeout(800);
  134 |       console.log('✅ "Mark Attendance" clicked');
  135 | 
  136 |       // ── Mark attendance with rotation ──
  137 |       previouslyAbsentIndices = await this._markWithRotation(
  138 |         presentPct,
  139 |         previouslyAbsentIndices
  140 |       );
  141 | 
  142 |       // ── Save #1: Bottom of list ──
  143 |       const bottomSave = this.page
  144 |         .locator('button.btn-primary:not([disabled])')
  145 |         .filter({ hasText: /^Save$/ })
  146 |         .last();
  147 | 
  148 |       await bottomSave.waitFor({ state: 'visible', timeout: 10_000 });
  149 |       await bottomSave.scrollIntoViewIfNeeded();
  150 |       await bottomSave.click();
  151 |       console.log('✅ Bottom Save clicked');
  152 | 
  153 |       // ── Save #2: Attendance Summary modal ──
  154 |       await this.page.waitForTimeout(1000);
  155 |       const modalSave = this.page
  156 |         .locator('.modal-footer button.btn-primary, .modal .btn-primary')
  157 |         .filter({ hasText: /Save/i })
  158 |         .first();
  159 | 
  160 |       try {
  161 |         await modalSave.waitFor({ state: 'visible', timeout: 8_000 });
  162 |         await modalSave.click();
  163 |         console.log('✅ Summary modal Save clicked');
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
```