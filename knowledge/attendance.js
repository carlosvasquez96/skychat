const attendance = [
    {
    topic: "First Day Attendance and No-Show Procedures",

    category: "Attendance",

    keywords: [
        "first day attendance",
        "first day of school",
        "no show",
        "no shows",
        "no-show",
        "student no show",
        "attendance first day",
        "first day absent",
        "membership",
        "st189",
        "attendance worksheet",
        "attendance worksheets"
    ],

    summary:
        "LISD first-day attendance procedures used to identify students who have not attended and should be processed as No Shows.",

    purpose:
        "Use this procedure during the first days of school to document attendance, establish student membership, and identify students who should be processed as No Shows.",

    
        navigation: [
    "Federal/State Reporting",
    "Texas State Reporting",
    "Reports",
    "Attendance",
    "Attendance Worksheets"
],

    procedure: [
    "Print the Attendance Worksheets Report for teachers.",
    "Set the Start Date to the first day of school and the End Date to the second day of school.",
    "Select the funding period for the Class Period and allow 3 blank lines.",
    "On the first day, teachers take attendance using the paper roster, sign it, and return it to the clerk.",
    "The clerk runs the ST189 membership report, identifies possible No Show students, and provides present and absent counts to the principal.",
    "Return the roster to the teacher for use on the second day.",
    "On the second day, teachers take attendance on the same roster, sign it, and return it to the clerk.",
    "Run the ST189 membership report again and identify students who were absent.",
    "Students who missed both days should be identified and processed as No Shows.",
    "Review students who attended only one of the two days and update their attendance or enrollment date as appropriate."
],

    notes: [
    "A student cannot be marked/reported absent until the student has attended at least one day and has been counted in membership.",
    "Scheduling Class Rosters or Teacher Rosters from Gradebook may also be used for this process.",
    "The manual provides two methods for processing No Shows: the No Show button or manually updating the student's records.",
    "Use caution when deleting a student from an entity because schedule data can be permanently lost."
],

    manual:
        "Skyward School Manual",

    page:
        "19-21",

    related: [
        "How to Run a No Show Report",
        "Balancing Warm Body Counts",
        "Withdraw a Student"
    ]
},

    {
        topic: "First Day Attendance and No-Show Procedures",

        category: "Attendance",

        keywords: [
            "no show",
            "no-show",
            "noshow",
            "first day attendance",
            "student did not attend",
            "student never attended",
            "mark student no show",
            "process a no show",
            "remove no show student",
            "attendance first day"
        ],

        summary:
            "Guidance for identifying and processing students who do not attend during the first days of school.",

        answer:
            "1. Teachers take attendance using the approved roster during the first two days of school.\n\n" +
            "2. Campus staff compare the rosters and identify students who missed both days.\n\n" +
            "3. Students who missed both days may be processed as No Shows.\n\n" +
            "4. When using the No Show button, verify that the user has the required security access and that the student should not remain enrolled at the entity.\n\n" +
            "5. Be careful when deleting a student from an entity because schedule information may be permanently removed.\n\n" +
            "6. After processing No Shows, run the appropriate enrollment, membership, and ADA reports to verify campus counts.",

            manual: "2026-2027 Skyward School Manual",
            page: "19-27",

        related: [
            "Withdraw a Student",
            "Balancing Warm Body Counts"
        ]
    },

    {
    topic: "How to Run a No Show Report",

    category: "Attendance",

    keywords: [
        "no show report",
        "run no show report",
        "how to run no show report",
        "entry withdrawal report",
        "withdrawal report",
        "no show students",
        "no show list",
        "entry withdrawal reports"
    ],

    summary:
        "Use the Entry/Withdrawal Report in Skyward to identify students with the 0 - NO SHOW withdrawal code.",

    purpose:
        "Use this procedure to generate a report of students who have been processed as No Shows.",

    navigation: [
        "Students",
        "Reports",
        "Entry/Withdrawal Reports - EW",
        "Entry/Withdrawal Report - ew"
    ],

    procedure: [
        "Go to Students.",
        "Click Reports under Students.",
        "Under Entry/Withdrawal Reports - EW, select Entry/Withdrawal Report - ew.",
        "Click Add.",
        "Enter a template name.",
        "Leave Student Selection as Open to All.",
        "Under Entry/Withdrawal Sections, set the withdrawal date Low value to 8/1/XXXX and the High value to the day before the first day of school.",
        "Set Analyze E/W Records to Withdrawal Only.",
        "Choose your desired print options. Other-ID may be printed as the student ID.",
        "Click E/W Codes.",
        "Under Entry Codes, select all entry codes and save.",
        "Under Withdrawal Codes, select 0 - NO SHOW and save.",
        "Review the selections and click Save.",
        "Click Save and Print."
    ],

    notes: [
        "The withdrawal-date High value should be the day before the first day of school.",
        "Analyze E/W Records should be set to Withdrawal Only.",
        "The No Show withdrawal code used in this report is 0 - NO SHOW."
    ],

    manual:
        "Skyward School Manual",

    page:
        "22-25",

    related: [
        "First Day Attendance and No-Show Procedures",
        "Balancing Warm Body Counts",
        "Withdraw a Student"
    ]
},

{
    topic: "Balancing Warm Body Counts",

    category: "Attendance",

    keywords: [
        "warm body",
        "warm body count",
        "warm bodies",
        "balance counts",
        "balancing counts",
        "student counts",
        "entity counts",
        "membership counts",
        "recount students",
        "enrollment report",
        "daily register",
        "ada report",
        "first day counts"
    ],

    summary:
        "Steps for balancing campus student counts after No Show students have been processed.",

    purpose:
        "Use this procedure to compare the campus's manually tallied student counts with the active student and membership information recorded in Skyward.",

    navigation: [
        "Student Management",
        "Enrollment",
        "Entity Counts"
    ],

    procedure: [
        "After all No Show students have been processed, compare the manually tallied student counts with the students remaining in Skyward.",
        "Review the counts under SM/EN/Entity Counts.",
        "Before using the Entity Counts numbers, run the Recount Students utility at WS/AF/EC/PS/UT/RS.",
        "Print an Enrollment Report for the first day of school using SM/OF/AT/RE/AR/ER.",
        "For the Enrollment Report, select all schools and calendars and print student detail.",
        "Compare the Enrollment Report counts with the Entity Counts.",
        "Verify the names of students present and in membership from the campus rosters against the names on the Enrollment Report, even when the totals match.",
        "If the counts do not match, check for students who are missing from Skyward, have an incorrect grade level, have an incorrect enrollment date, or are not marked active.",
        "If the cause of the mismatch cannot be determined, print a Daily Register using SM/SR/TX/AT/DR and review students by grade level and ADA Eligibility Code.",
        "Print an ADA Report using SM/ST/TX/AT/AD to verify campus membership counts and confirm 100% attendance.",
        "If the ADA Report shows less than 100% attendance, print a Daily Attendance Report using SM/OF/AT/RE/AR/DR to identify students marked absent on the first day."
    ],

    notes: [
        "Entity Counts reads the number of Active students from the student's Entity tab Current Status; it does not read enrollment information from the Entry/Withdrawal tab.",
        "Matching totals do not necessarily mean the correct students are being counted. Verify student names against the campus rosters.",
        "Possible count differences include a student not entered in Skyward, an incorrect grade level, an incorrect first-day enrollment date, or a student who is not marked active.",
        "When reviewing the Daily Register, verify ADA Eligibility Codes.",
        "PK students coded with ADA Eligibility Code 2 are half-day students and count as .5 on the ADA Report.",
        "Students with other special ADA codes, including 0, 4, or 5, may also cause ADA Report totals to differ from physical warm-body counts."
    ],

    manual:
        "Skyward School Manual",

    page:
        "20-21",

    related: [
        "First Day Attendance and No-Show Procedures",
        "How to Run a No Show Report"
    ]
},
    {
        topic: "Attendance Help",

        category: "Attendance",

        keywords: [
            "attendance",
            "absent",
            "absence",
            "tardy",
            "present",
            "take attendance",
            "submit attendance"
        ],

        summary:
            "General assistance with recording and submitting student attendance.",

        answer:
            "Open the appropriate attendance area in Skyward and verify the date, class period, and student list before submitting attendance. For a specific attendance process, include the name of the report or procedure in your question."
    },
    {
    topic: "Configure Letter Attendance Types",

    category: "Attendance",

    keywords: [
        "letter attendance type",
        "attendance letter type",
        "configure letter attendance type",
        "unexcused attendance letter",
        "excused attendance letter",
        "absence type selection",
        "attendance letter absence types",
        "how do i configure letter attendance types"
    ],

    summary:
        "Create Letter Attendance Type groups that define which absence types are used when generating Attendance Letters.",

    purpose:
        "Use this procedure to group absence types for Attendance Letters, such as unexcused absences, excused absences, or a combination of both.",

    navigation: [
        "Office",
        "Attendance",
        "Attendance Letters",
        "Setup",
        "Codes",
        "Letter Attendance Type"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Attendance Letters.",
        "Open Setup.",
        "Open Codes.",
        "Select Letter Attendance Type.",
        "Click Add.",
        "Enter the required Letter Attendance Type parameters.",
        "Select the appropriate absence types for the group.",
        "Click Save.",
        "Repeat the process for every Letter Attendance Type group that is needed."
    ],

    notes: [
        "Letter Attendance Types are used together with Attendance Letter Thresholds.",
        "Create a separate group for each required combination of absence types.",
        "Examples in the manual include unexcused absences only, excused absences only, or both."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "89-90",

    related: [
        "Configure Attendance Letters"
    ]
},
{
    topic: "Run Attendance Letter Update",

    category: "Attendance",

    keywords: [
        "attendance update",
        "attendance letter update",
        "run attendance update",
        "update attendance letters",
        "attendance letter flags",
        "generate attendance letters",
        "update templates",
        "how do i run attendance update"
    ],

    summary:
        "Run the Attendance Update process that identifies and flags students who meet Attendance Letter criteria.",

    purpose:
        "Use this procedure before generating Attendance Letters so Skyward can identify students who meet the configured letter criteria.",

    navigation: [
        "Office",
        "Attendance",
        "Attendance Letters",
        "Update Templates"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Attendance Letters.",
        "Select Update Templates.",
        "Create a template for each Letter Type and Term Type combination.",
        "Run the Attendance Update.",
        "Review the report generated in the Print Queue confirming that the update process is complete."
    ],

    notes: [
        "Attendance Update must be run before Attendance Letters can be generated.",
        "The update process identifies and flags students who meet Attendance Letter criteria.",
        "The update is run by Letter Type.",
        "Create a separate template for each Letter Type and Term Type combination.",
        "It is not necessary to highlight a threshold when updating attendance flags.",
        "All absences are considered for all thresholds during the update."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "92",

    related: [
        "Configure Attendance Letters",
        "Configure Letter Attendance Types"
    ]
},
{
    topic: "Generate Attendance Letters",

    category: "Attendance",

    keywords: [
        "generate attendance letters",
        "run attendance letters",
        "print attendance letters",
        "attendance letter template",
        "letter templates",
        "attendance letters run",
        "how do i generate attendance letters"
    ],

    summary:
        "Create Attendance Letter templates and run them for students who meet the configured attendance criteria.",

    purpose:
        "Use this procedure after running Attendance Update to generate Attendance Letters for students who meet the selected threshold criteria.",

    navigation: [
        "Office",
        "Attendance",
        "Attendance Letters",
        "Letter Templates"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Attendance Letters.",
        "Select Letter Templates.",
        "Create an Attendance Letter Template for each required Letter Type, Absence Type, and Term combination.",
        "Make sure the Attendance Letter Template matches the corresponding template created in Attendance Update.",
        "Select the appropriate threshold for which the letter should be generated.",
        "Save the Attendance Letter Template.",
        "Once the templates have been created, return to Letter Templates.",
        "Select the template you want to run.",
        "Click Run.",
        "Review the generated Attendance Letters."
    ],

    notes: [
        "Attendance Letter Templates should match the templates created during Attendance Update.",
        "A separate template may be needed for each Letter Type, Absence Type, Term, and threshold combination.",
        "Unlike Attendance Update, you do need to select the specific threshold when generating Attendance Letters.",
        "After an Attendance Letter is generated for a student, Skyward marks the student's record as having received that letter."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "93-94",

    related: [
        "Run Attendance Letter Update",
        "Configure Attendance Letters",
        "Configure Letter Attendance Types"
    ]
},
{
    topic: "Run Attendance Letter Summary Report",

    category: "Attendance",

    keywords: [
        "attendance letter summary",
        "attendance letter summary report",
        "run attendance letter report",
        "attendance letters report",
        "letter summary report",
        "attendance threshold report",
        "how do i run attendance letter summary"
    ],

    summary:
        "Run the Attendance Letter Summary Report to review attendance letter information by letter type, attendance type, and term.",

    purpose:
        "Use this report to review Attendance Letter activity for the selected letter type, attendance type, term, and configured thresholds.",

    navigation: [
        "Office",
        "Attendance",
        "Attendance Letters",
        "Reports"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Attendance Letters.",
        "Select Reports.",
        "Open the Attendance Letter Summary Report.",
        "Select or create the appropriate report template.",
        "Choose the desired Letter Type.",
        "Choose the desired Attendance Type.",
        "Choose the desired Term Type.",
        "Run the report."
    ],

    notes: [
        "The Attendance Letter Summary Report provides attendance letter information for a specific Letter Type, Attendance Type, and Term.",
        "The report runs for all thresholds created for the selected Term Type."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "94-95",

    related: [
        "Generate Attendance Letters",
        "Run Attendance Letter Update",
        "Configure Attendance Letters"
    ]
},
{
    topic: "Maintain Attendance Letters Sent",

    category: "Attendance",

    keywords: [
        "maintain attendance letters sent",
        "attendance letters sent",
        "delete attendance letter",
        "delete letter sent record",
        "attendance letter history",
        "student received attendance letter",
        "remove attendance letter notification",
        "allow student another attendance letter",
        "how do i delete an attendance letter record"
    ],

    summary:
        "View students who have received Attendance Letters and delete a sent-letter record when needed.",

    purpose:
        "Use this utility to review Attendance Letters already sent to students or remove a sent-letter record so a student can receive another letter.",

    navigation: [
        "Office",
        "Attendance",
        "Attendance Letters",
        "Setup",
        "Utilities",
        "Maintain Attendance Letters Sent"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Attendance Letters.",
        "Open Setup.",
        "Open Utilities.",
        "Select Maintain Attendance Letters Sent.",
        "Select the appropriate Letter Type and other parameters.",
        "Review the students who have received an Attendance Letter.",
        "Locate the appropriate letter-sent record.",
        "Delete the letter-sent record or notification when appropriate."
    ],

    notes: [
        "This utility shows students who received an Attendance Letter based on the selected Letter Type.",
        "Deleting a sent-letter record allows the student to receive another Attendance Letter.",
        "The utility displays information including Student Other ID, Class Key, Teacher Name, Threshold, Class Type, and Date Letter Sent Out.",
        "Verify the correct student and letter record before deleting it."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "96-97",

    related: [
        "Generate Attendance Letters",
        "Run Attendance Letter Summary Report",
        "Run Attendance Letter Update"
    ]
},
{
    topic: "Schedule Attendance Letters",

    category: "Attendance",

    keywords: [
        "schedule attendance letters",
        "schedule letters",
        "automate attendance letters",
        "automatic attendance letters",
        "attendance letter schedule",
        "schedule attendance update",
        "schedule letter generation",
        "how do i schedule attendance letters"
    ],

    summary:
        "Schedule the automated Attendance Letter process to update attendance flags and generate letters.",

    purpose:
        "Use this procedure to automate when the Attendance Letter update and letter-generation processes run.",

    navigation: [
        "Office",
        "Attendance",
        "Attendance Letters",
        "Schedule Letters"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Attendance Letters.",
        "Select Schedule Letters.",
        "Configure the Scheduling Parameters.",
        "Configure the Attendance Update Parameters.",
        "Configure the Attendance Letter Parameters.",
        "Use View Letters to review the letter history and scheduled process results."
    ],

    notes: [
        "Schedule Letters automates both updating attendance flags and generating Attendance Letters.",
        "The setup includes separate Scheduling Parameters, Update Parameters, and Letter Parameters.",
        "View Letters can be used to review the letter history."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "98-100",

    related: [
        "Run Attendance Letter Update",
        "Generate Attendance Letters",
        "Maintain Attendance Letters Sent",
        "Run Attendance Letter Summary Report"
    ]
},
{
    topic: "Run Perfect Attendance Report",

    category: "Attendance",

    keywords: [
        "perfect attendance",
        "perfect attendance report",
        "at045",
        "at 045",
        "absence occurrence report",
        "run perfect attendance",
        "how do i run perfect attendance report"
    ],

    summary:
        "Run the AT045 Perfect Attendance Report in Skyward.",

    purpose:
        "Use this report to identify students who meet the Perfect Attendance criteria.",

    navigation: [
        "Office",
        "Attendance",
        "Reports",
        "Absence Occurrence Report"
    ],

    procedure: [
        "Go to Office.",
        "Open Attendance.",
        "Open Reports.",
        "Select Absence Occurrence Report.",
        "Locate the template AT 045: Perfect Attendance.",
        "Select a template or create a new template.",
        "Click Print to view the report."
    ],

    notes: [
        "The report template identified in the manual is AT 045: Perfect Attendance."
        
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "102",

    related: [
        "Run ADA Report",
        "Run Superintendent Principals Report"
    ]
},
{
    topic: "Run ADA Report",

    category: "Attendance",

    keywords: [
        "ada report",
        "run ada report",
        "average daily attendance",
        "texas ada report",
        "attendance ada",
        "federal state reporting ada",
        "how do i run ada report",
        "how do i print ada report"
    ],

    summary:
        "Run the ADA Report from Texas State Reporting in Skyward.",

    purpose:
        "Use this procedure to create and run an ADA Report for a selected date range.",

    navigation: [
        "Federal/State Reporting",
        "Texas State Reporting",
        "Reports",
        "ADA Report"
    ],

    procedure: [
        "Go to Federal/State Reporting.",
        "Open Texas State Reporting.",
        "Open Reports.",
        "Select ADA Report.",
        "Click Add to create a new report template.",
        "Enter a Template Description.",
        "Select the desired Date Range.",
        "Click Save.",
        "Click Print to run the report."
    ],

    notes: [
        "A report template must be created before running the ADA Report.",
        "Enter a meaningful Template Description.",
        "Verify the Date Range before saving and printing the report."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "102",

    related: [
        "Run Perfect Attendance Report",
        "Run Superintendent Principals Report"
    ]
},
{
    topic: "Run Superintendent Principals Report",

    category: "Attendance",

    keywords: [
        "superintendent principals report",
        "superintendent report",
        "principals report",
        "contact hours report",
        "run contact hours report",
        "attendance contact hours",
        "how do i run superintendent principals report"
    ],

    summary:
        "Run the Superintendent/Principals Report from the Contact Hours Report area in Texas State Reporting.",

    purpose:
        "Use this procedure to generate the Superintendent/Principals attendance report for the selected reporting period.",

    navigation: [
        "Federal/State Reporting",
        "Texas State Reporting",
        "Reports",
        "Contact Hours Report"
    ],

    procedure: [
        "Go to Federal/State Reporting.",
        "Open Texas State Reporting.",
        "Open Reports.",
        "Select Contact Hours Report.",
        "Click Add to create a new report template.",
        "Enter a Template Description.",
        "Select the Report to Print.",
        "Select the appropriate Reporting Period.",
        "Click Save.",
        "Click Print to run the report."
    ],

    notes: [
        "The Superintendent/Principals Report is run from the Contact Hours Report area.",
        "Verify the Report to Print and Reporting Period before saving and printing."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "103",

    related: [
        "Run ADA Report",
        "Run Perfect Attendance Report"
    ]
},
{
    topic: "Run GPA and Ranking Process",

    category: "Transcripts and Grades",

    keywords: [
        "gpa and ranking",
        "run gpa",
        "calculate gpa",
        "student rank",
        "calculate student rank",
        "gpa calculation",
        "ranking process",
        "mass audit gpa",
        "student rank report",
        "how do i run gpa and ranking"
    ],

    summary:
        "Run the GPA and ranking process, including grade verification, historical GPA audit, current-year GPA calculation, and Student Rank Report.",

    purpose:
        "Use this procedure to verify grades, calculate GPA, and update student ranking information used on transcripts.",

    procedure: [
        "First verify that the term or semester grades to be used in the GPA calculation are valid and accurate.",
        "Go to Office > Grading > Reports > Grade Information > Selected Grades Report.",
        "Set Grade/Grad Year Low to 12 and High to 12.",
        "Set Student Status to Active.",
        "Class should typically be set to Enrolled and Current Year.",
        "Select grade marks that would not calculate to a valid semester average, such as Blank, INC, P, F, E, or S.",
        "Correct invalid grade marks before continuing.",
        "Select the term or semester grade to verify.",
        "Click Save and Print.",
        "If changes affecting multiple students were made to historical courses, run Mass Audit from Office > Grading > Setup > Utilities > Mass Audit - MA.",
        "Next, go to Office > Grading > Setup > Utilities > GPA Calculation - GC.",
        "Highlight the last grading period.",
        "Click Run to calculate cumulative current-year GPA information.",
        "Next, go to Office > Grading > Reports > Student Rank.",
        "Select the grading period to use for rank.",
        "Set GPA Method to 1-Regular.",
        "Set the appropriate student ranges.",
        "Choose the sort order as Rank or Alpha.",
        "Run the Student Rank Report without updating first so you can verify the results.",
        "After verifying the information, run the report with Update Rank info to Student Master when you are ready to update the values used on transcripts.",
        "Click Save and Print."
    ],

    notes: [
        "GPA and ranking are generally run at the beginning of the school year for seniors, after Semester 1, and after the 5th six weeks for seniors.",
        "The final Senior GPA requires a work order and assistance from an IT Student Programmer.",
        "Mass Audit should generally be run when historical course changes affect multiple students.",
        "The GPA Calculation utility updates earned credit, GPA credit, and GPA points for current-year courses.",
        "GPA Method 1-Regular is the weighted 100-point scale GPA.",
        "Run the Student Rank Report without Update first to verify the results.",
        "Update Rank info to Student Master overwrites existing rank values and controls what appears on transcripts."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "104-105",

    related: [
        "Run a Student Transcript",
        "Add GPA and Rank Information Manually"
    ]
},
{
    topic: "Add GPA and Rank Information Manually",

    category: "Transcripts and Grades",

    keywords: [
        "add gpa manually",
        "add rank manually",
        "manual gpa",
        "manual rank",
        "student gpa rank",
        "gpa rank tab",
        "add student rank",
        "enter student gpa",
        "how do i add gpa and rank manually"
    ],

    summary:
        "Manually add GPA and rank information for an individual student.",

    purpose:
        "Use this procedure when GPA and rank information needs to be entered manually for a specific student.",

    navigation: [
        "Students",
        "Student Profile",
        "GPA/Rank"
    ],

    procedure: [
        "FIRST CHECK WITH I.T. DEPARTMENT BEFORE PROCCEDING Locate the student.",
        "If necessary, edit the student ranges so inactive students can be viewed.",
        "Open the student's Student Profile.",
        "Open the GPA/Rank tab.",
        "Click Add.",
        "Select the appropriate GPA Method.",
        "Select the appropriate cumulative GPA type.",
        "Enter the student's rank.",
        "Enter the student's GPA.",
        "Enter the date of ranking.",
        "Save the record.",
        "Print the student's transcript to verify the GPA and rank information."
    ],

    notes: [
        "You may need to adjust ranges to locate inactive students.",
        "Verify the GPA Method and cumulative GPA type before saving.",
        "The manual instructs staff to print the transcript after saving to verify the information."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "106",

    related: [
        "Run GPA and Ranking Process",
        "Run a Student Transcript"
    ]
},
{
    topic: "Student Appeal and Credit Removal",

    category: "Transcripts and Grades",

    keywords: [
        "student appeal",
        "credit appeal",
        "credit removal",
        "remove student credit",
        "deny course credit",
        "attendance credit denial",
        "90 percent attendance",
        "90% attendance",
        "student appeal letter",
        "credit denied",
        "how do i remove credit after an appeal",
        "how do i deny student credit"
    ],

    summary:
        "Process credit removal when a student's attendance credit appeal has been denied.",

    purpose:
        "Use this procedure after the Credit Appeal Committee denies credit for a course because the student did not meet the required attendance rule.",

    navigation: [
        "Students",
        "Student Profile",
        "Grades",
        "Course-Class Record"
    ],

    procedure: [
        "Go to Students.",
        "Open Student Profile.",
        "Locate and select the student.",
        "Open the Grades tab.",
        "Select the appropriate Course-Class record.",
        "Click Edit.",
        "Under the Grades section, locate the appropriate term grade.",
        "For credit denial or removal, type an asterisk (*) after the T4, T5, or T6 grade mark, or after the S2 grade mark if it already exists.",
        "Click Save.",
        "Repeat this process for all course records for which credit has been denied.",
        "After all denied-credit records have been updated with the asterisk grade, inform the campus registrar that GPA CALC needs to be run.",
        "Run GPA CALC only after the Seniors GPA has been locked for the current school year.",
        "Verify that GPA CALC updates Credits Failed for each applicable record."
    ],

    notes: [
        "The Student Appeal Letter does not automatically deny course credit.",
        "If the Credit Appeal Committee grants the appeal, the student receives credit and no further action is required.",
        "If the appeal is denied, office personnel must remove the credit.",
        "Credit information is not updated until GPA CALC is run.",
        "The manual states that GPA CALC for this process should ONLY be run after Seniors GPA has been locked for the current school year.",
        "The Credit Denial Process is complete only after the grade records have been updated and GPA CALC has been run."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "107-109",

    related: [
        "Run GPA and Ranking Process",
        "Run a Student Transcript"
    ]
},
{
    topic: "Mark a Student for Retention",

    category: "Transcripts and Grades",

    keywords: [
        "student retention",
        "retain student",
        "mark student retained",
        "retention in skyward",
        "retain flag",
        "ny grad year",
        "grad req base year",
        "student repeating grade",
        "how do i retain a student",
        "how do i mark a student for retention"
    ],

    summary:
        "Mark a student for retention in Skyward prior to the End of Year process.",

    purpose:
        "Use this procedure when a student will remain in the same grade level for the following school year.",

    navigation: [
        "Students",
        "Student Profile",
        "General",
        "Profile"
    ],

    procedure: [
    "Go to the student's Student Profile.",
    "Open the General/Profile tab.",
    "Click Edit.",
    "Change the Retain flag to Yes.",
    "Increase the NY Grad Year by one year.",
    "If the student is not currently in grades 9 through 12, also increase the Grad Req Base Yr by one year.",
    "If the student is currently in grades 9 through 12, leave Grad Req Base Yr unchanged so the student remains in the same cohort group.",
    "Click Save.",
    "If the retained student would normally move to another campus next year, open the General/School Path tab.",
    "Click Edit.",
    "In School Path Maintenance, enter the same entity number where the student is currently enrolled as the Next Year School.",
    "Click Save.",
    "If the retained student would normally remain on the same campus next year, no School Path change is needed.",
    "If the student was already pushed to a new campus for Future Scheduling using Mass Add Students to a New Entity, notify the Next Year School that the student is being retained.",
    "The Next Year School should remove the student from that entity to prevent duplicate enrollment records."
],

    notes: [
    "The Retain flag should be changed to Yes.",
    "Increase NY Grad Year by one year.",
    "For students not in grades 9-12, also increase Grad Req Base Yr by one year.",
    "For students in grades 9-12, do not change Grad Req Base Yr because the student should remain with the same high-school cohort.",
    "If the student would normally change campuses next year, set the Next Year School in School Path to the student's current entity.",
    "If the student would normally remain on the same campus, no School Path change is required.",
    "If the student was already pushed to another campus for Future Scheduling, that campus must remove the student to avoid two enrollment records.",
    "If a retained student is later promoted because of summer school, the new entity should create the enrollment schedule and correct the grade level; the prior campus should No Show the student or delete the enrollment record."
],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "109-113",

    related: [
        "Mark a Student as Graduated",
        "Update or Add Student Course History"
    ]
},
{
    topic: "Set Up Summer School",

    category: "Transcripts and Grades",

    keywords: [
        "summer school",
        "summer school process",
        "summer school setup",
        "set up summer school",
        "803 elementary summer",
        "elementary summer school",
        "summer courses",
        "summer sections",
        "summer campus",
        "summer school scheduling",
        "how do i set up summer school"
    ],

    summary:
        "Set up Elementary Summer School courses, sections, students, and staff in the Summer School campus.",

    purpose:
        "Use this procedure to prepare the Elementary Summer School campus, courses, sections, student schedules, and staff access.",

    procedure: [
        "Log in to school 803 Elementary Summer.",
        "Copy the courses that will be offered during the summer session.",
        "Rename each summer course using the S###### format.",
        "Change the course term to SS.",
        "Create sections for the summer courses for each teacher assigned to teach the class.",
        "Use the first two characters of the section number to identify the campus, such as HE1 for Heights Section 1 or LM1 for Lamar Section 1.",
        "Schedule the course in a period other than Period 0 so attendance can be taken.",
        "Set Attendance Method to MIXED.",
        "Set Grading Method to COMPUTER.",
        "Add students who will attend the summer session using Current Scheduling > Student Schedule Generation > Entry by Student.",
        "Add each student to the classes they will be taking.",
        "Add a Conduct course that meets during Period 1. This course will be used for attendance.",
        "Add the appropriate staff members to the Summer School campus.",
        "Send the staff list to an IT programmer so the teachers can be given access to the Summer Campus Gradebook."
    ],

    notes: [
        "Current LISD process: Middle School does not use Skyward for Summer School.",
        "Only Elementary Summer School uses the Skyward Summer School process described here.",
        "Elementary Schools use campus 803 Elementary Summer.",
        "Summer courses should be renamed using the S###### format and Term should be SS.",
        "Do not schedule the summer course in Period 0 because attendance must be taken for the class.",
        "Attendance Method should be MIXED.",
        "Grading Method should be COMPUTER.",
        "Elementary Summer School uses a Conduct course in Period 1 for attendance.",
        "An IT programmer must provide teachers access to the Summer Campus Gradebook after staff are added to the campus."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "114",

    related: [
        "Mark a Student for Retention",
        "Code Summer School for BIL LEP Students",
        "Enter Summer School ESY Contact Hours"
    ]
},
{
    topic: "Code Summer School for BIL LEP Students",

    category: "Transcripts and Grades",

    keywords: [
        "summer school bil lep",
        "bil lep summer school",
        "lep summer school coding",
        "bilingual summer school",
        "summer school lep",
        "summer school bil",
        "lep bil esl",
        "summer school participation code",
        "how do i code summer school for lep students"
    ],

    summary:
        "Enter Summer School coding for BIL/LEP students in the LEP/Bil/ESL area of the student profile.",

    purpose:
        "Use this procedure to record Summer School participation information for a BIL/LEP student.",

    navigation: [
        "Students",
        "Student Profile",
        "Special Prgms",
        "LEP/Bil/ESL",
        "Summer School"
    ],

    procedure: [
        "Go to Students.",
        "Open Student Profile.",
        "Search for and select the student.",
        "Under Special Prgms, select LEP/Bil/ESL.",
        "Click the Summer School button on the right side of the screen.",
        "Click Add.",
        "Verify that the correct school year is displayed.",
        "Select the appropriate Summer School code from the dropdown.",
        "Select 0 - NOT REC/SERVICE - NOT APPLY when appropriate.",
        "Select 1 - PART. IN PRGM. SITUATION APPLY when appropriate.",
        "Click Save."
    ],

    notes: [
        "Verify the correct school year before saving the Summer School record.",
        "The manual lists code 0 - NOT REC/SERVICE - NOT APPLY and code 1 - PART. IN PRGM. SITUATION APPLY.",
        "Use the code that applies to the student's actual Summer School participation status."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "114-115",

    related: [
        "Set Up Summer School",
        "Enter Summer School ESY Contact Hours"
    ]
},
{
    topic: "Enter Summer School ESY Contact Hours",

    category: "Transcripts and Grades",

    keywords: [
        "summer school esy",
        "esy contact hours",
        "extended school year contact hours",
        "summer esy coding",
        "esy svc",
        "special ed summer school",
        "sub 4 grade level",
        "instructional setting",
        "how do i enter esy contact hours"
    ],

    summary:
        "Enter Summer School ESY Contact Hours for a Special Education student.",

    purpose:
        "Use this procedure to record Extended School Year service information for Summer School reporting.",

    navigation: [
        "Students",
        "Student Profile",
        "Special Ed",
        "ESY Svc"
    ],

    procedure: [
        "Go to Students.",
        "Open Student Profile.",
        "Search for and select the student.",
        "Under Special Ed, select ESY Svc.",
        "Click Edit.",
        "Enter the Campus ID of Enrollment.",
        "Enter the Sub 4 Grade Level.",
        "Enter the Instructional Setting.",
        "Enter the Total ESY Contact Hours.",
        "Click Save."
    ],

    notes: [
        "Verify the student and school year before entering ESY information.",
        "The required fields shown in the manual include Campus ID of Enrollment, Sub 4 Grade Level, Instructional Setting, and Total ESY Contact Hours."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "116",

    related: [
        "Set Up Summer School",
        "Code Summer School for BIL LEP Students"
    ]
},
{
    topic: "Code Summer School OFSDP",

    category: "Transcripts and Grades",

    keywords: [
        "summer school ofsdp",
        "optional flexible school day program",
        "flex attendance summer school",
        "summer flex attendance",
        "ada 7",
        "code 3 flex attendance",
        "high school summer ofsdp",
        "how do i code ofsdp for summer school"
    ],

    summary:
        "Enter Summer School OFSDP coding and flexible attendance information for high school students.",

    purpose:
        "Use this procedure for High School Summer School students participating in the Optional Flexible School Day Program.",

    navigation: [
        "Student",
        "Student Profile",
        "Flex Atted",
        "Office",
        "Attendance",
        "Optional Flexible School Day Program - OF"
    ],

    procedure: [
        "Before entering daily flexible attendance, create an Entry/Withdrawal record for the student with ADA 7.",
        "Set the Start Date to the first day of Summer School.",
        "Set the End Date to the last day of Summer School.",
        "Make sure the School Year and Grade Level on the withdrawal record match the previous entry record.",
        "Go to Student > Student Profile > Flex Atted.",
        "If the student had Flex Attendance Code 1 during the regular school year, end that record.",
        "Create a new Flex Attendance record using Code 3.",
        "Set the Start and End dates to match the Summer School term dates.",
        "Make sure the Start Year and End Year are equal and reflect the year being reported to TEA.",
        "Go to Office > Attendance > Optional Flexible School Day Program - OF.",
        "Browse for the student or search by name.",
        "Expand the student record.",
        "Expand the OFSDP section.",
        "Click Add.",
        "Enter Track Time Total Minutes for the Day manually, or enter Track Time Start/Stop times so the system can calculate the minutes."
    ],

    notes: [
        "This procedure is for High Schools only.",
        "The Entry/Withdrawal record should use ADA 7.",
        "Summer School Flex Attendance uses Code 3.",
        "If Code 1 was active during the regular school year, end that record before starting the Summer School Code 3 record.",
        "Summer School dates must align across the entry record and Flex Attendance record."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "117",

    related: [
        "Set Up Summer School",
        "Enter Summer School ESY Contact Hours",
        "Code Summer School Dual Credit Courses"
    ]
},
{
    topic: "Code Summer School Dual Credit Courses",

    category: "Transcripts and Grades",

    keywords: [
        "summer school dual credit",
        "415 dual credit summer",
        "dual credit summer course",
        "summer dual credit coding",
        "class type dr",
        "course type dr",
        "summer course class history",
        "how do i code dual credit summer school"
    ],

    summary:
        "Enter and verify 415 Dual Credit Summer School course information for high school students.",

    purpose:
        "Use this procedure to code Dual Credit Summer School courses that must be reported for Summer School.",

    navigation: [
        "Student",
        "Student Profile",
        "Grades",
        "Class History"
    ],

    procedure: [
        "Go to Student.",
        "Open Student Profile.",
        "Select the student.",
        "Open the Grades tab.",
        "Click Class History.",
        "Enter the Course and Section for the student.",
        "Enter the student's grade.",
        "Verify that Earned Credit is correct.",
        "Verify that GPA Weight is correct.",
        "Verify that GPA Credits are correct.",
        "If a Summer School course number in the SD***** format was used, enter Class Type Code DR on the Current Course Master for the corresponding school year.",
        "If a regular Dual Credit course number in the D******* format was used, enter Class Type Code DR in the Course Type field under Override Course Information in the Grade History record.",
        "Make sure the course has a Class Meet. The Class Meet may be blank."
    ],

    notes: [
        "This procedure is for High Schools only.",
        "Only Dual Credit Summer School courses are reported.",
        "Class Type Code DR identifies Dual Credit Summer School.",
        "The location where DR is entered depends on whether the Summer School SD***** course number or a regular D******* Dual Credit course number is used.",
        "The course must have a Class Meet, although the Class Meet may be blank."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "117",

    related: [
        "Code Summer School OFSDP",
        "Set Up Summer School",
        "Update or Add Student Course History"
    ]
},

];