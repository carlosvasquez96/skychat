const peims = [
    {
    topic: "PEIMS Reconciliation Process",

    category: "PEIMS",

    keywords: [
        "peims reconciliation",
        "reconciliation",
        "attendance reconciliation",
        "st189",
        "st189 membership detail",
        "membership reconciliation",
        "ada reconciliation",
        "class roster reconciliation",
        "peims coordinator",
        "recon report"
    ],

    summary:
        "Steps for completing the campus PEIMS attendance reconciliation process.",

    purpose:
        "Use this procedure when completing the district PEIMS attendance reconciliation process and balancing membership records with Skyward reports.",

    navigation: [
        "Skyward",
        "Reports",
        "PEIMS Reconciliation"
    ],

    procedure: [
        "Run the Crystal Custom Report ST189 Membership Detail Report.",
        "Enter the school year.",
        "Set the Begin Date to the first day of school.",
        "Set the As Of Date to the date you want to review membership for.",
        "Click Print.",
        "Create and process the Skyward Class Roster Report for the reconciliation date provided by the PEIMS Coordinator.",
        "For the Class Roster Report, go to Office, Current Scheduling, Reports, Class Roster Report.",
        "Run the Class Roster Report for the campus funding period.",
        "Give the class roster to the teacher for verification.",
        "The teacher must sign and date the class roster to confirm the information is correct.",
        "Create and process the Skyward ADA Report.",
        "For the ADA Report, go to Federal/State Reporting, Texas Reports, Reports, Attendance, ADA Report.",
        "Compare the ST189 Membership Detail reconciliation totals with the ADA Report membership counts.",
        "Resolve any differences before completing the reconciliation.",
        "Submit the required reconciliation documentation to the PEIMS Coordinator."
    ],

    notes: [
        "Attendance reconciliation is completed twice each year. The dates are announced on the district calendar and by email.",
        "The PEIMS Coordinator oversees the reconciliation process, and the manual states campuses have one week to complete it.",
        "ST189 Membership Detail reconciliation totals must balance with the ADA Report membership counts.",
        "A half-day eligible student counts as 0.5 on the ADA Report. Two half-day eligible students count as 1.",
        "The ST189 Membership Detail reconciliation last page must be signed and dated by the head attendance clerk.",
        "The Skyward ADA Report must also be signed and dated by the head attendance clerk.",
        "Comments explaining balancing issues may be written on the ADA Report page.",
        "Submit the Reconciliation Form with all required signatures."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "42-43",

    related: [
        "Balancing Warm Body Counts",
        "First Day Attendance and No-Show Procedures"
    ]
},

{
    topic: "Campus PEIMS Preparation Overview",

    category: "PEIMS",

    keywords: [
        "peims overview",
        "campus peims preparation",
        "peims submissions",
        "submission 1",
        "submission 2",
        "submission 3",
        "submission 4",
        "fall peims",
        "attendance peims",
        "extended school year",
        "esym peims"
    ],

    summary:
        "Overview of the major PEIMS submissions and the types of district data reported to TEA.",

    purpose:
        "Use this overview to understand the four major PEIMS submission periods and the types of information included in each submission.",

    navigation: [
        "Student Management",
        "Federal/State Reporting",
        "Texas",
        "PEIMS"
    ],

    procedure: [
        "Review the PEIMS submission period that applies to the work being completed.",
        "Submission 1 - FALL includes student enrollment data and represents a snapshot of students enrolled and physically on campus on the last Friday in October.",
        "Submission 2 - MID YEAR contains audited data from the previous school year and is reported by the district Financial Department.",
        "Submission 3 - ATTENDANCE contains student data for the entire school year, including attendance, course completion, discipline, and related information.",
        "Submission 4 - ESY / EXTENDED SCHOOL YEAR includes Extended School Year services, Bilingual/ESL Summer School Program data, and summer dual-credit information."
    ],

    notes: [
        "PEIMS includes student demographic and academic performance data as well as personnel, financial, and organizational information.",
        "The manual states that PEIMS is submitted four times per year.",
        "Submission 1 is generally due to TEA in late November or early December.",
        "Submission 2 is generally due in late January or early February.",
        "Submission 3 is generally due in late June to early July.",
        "Submission 4 is generally due in late August to mid-September.",
        "District and TEA deadlines can change, so staff should follow current district communications and calendars."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "43-44",

    related: [
        "PEIMS Reconciliation Process",
        "Verify Students Have a PEIMS ID",
        "Submission One Fall PEIMS Overview"
    ]
},

{
    topic: "Verify Students Have a PEIMS ID",

    category: "PEIMS",

    keywords: [
        "peims id",
        "missing peims id",
        "students missing peims id",
        "verify peims id",
        "no peims id",
        "students with no ids",
        "missing student id",
        "unique id",
        "missing ssn",
        "peims student id"
    ],

    summary:
        "Run the Skyward report used to identify students who do not have a PEIMS ID.",

    purpose:
        "Use this procedure during PEIMS preparation to identify students who are missing a PEIMS ID and require follow-up.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "RE",
        "OT",
        "PI"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Select RE.",
        "Select OT.",
        "Select PI.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Leave Grade/Grad Yr blank.",
        "Set Print to Students with no IDs.",
        "Set Status to Both.",
        "Run the report.",
        "Review the report for students who are missing a PEIMS ID.",
        "If a student is missing an SSN, follow up with the parent or student as directed by the manual."
    ],

    notes: [
        "The report should be configured to print Students with no IDs.",
        "Set Status to Both.",
        "Leave Grade/Grad Yr blank.",
        "The manual states that when an SSN is missing, staff should follow up with the parent or student.",
        "According to the manual, TEA can assign the required Unique ID when the student has an SSN."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "44",

    related: [
        "Campus PEIMS Preparation Overview",
        "PEIMS Reconciliation Process"
    ]
},

{
    topic: "Verify 090 Staff Responsibility Records",

    category: "PEIMS",

    keywords: [
        "090 staff responsibility",
        "staff responsibility",
        "090 record",
        "verify 090",
        "pre peims staff responsibility",
        "staff responsibility errors",
        "fatals only",
        "print errors only",
        "peims 090"
    ],

    summary:
        "Run and review the 090 Staff Responsibility Pre-PEIMS report and correct staff responsibility errors.",

    purpose:
        "Use this procedure during Submission One preparation to verify 090 Staff Responsibility record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "SR"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select SR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "The Pre-PEIMS 090 report shows staff responsibility records that are auto-generated from course master information.",
        "The manual states SIS staff will provide a custom report for current 090 Staff Responsibility records that were manually entered.",
        "Manually entered responsibility records can be reviewed under Student Management > Staff > SF > SF > expand a staff member > Responsibilities.",
        "Use the PEIMS Snapshot date for the As-Of Date."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "45",

    related: [
        "Verify Students Have a PEIMS ID",
        "Campus PEIMS Preparation Overview"
    ]
},

{
    topic: "Verify 100 Student Identification Records",

    category: "PEIMS",

    keywords: [
        "100 student identification",
        "student identification record",
        "verify 100",
        "peims 100",
        "pre peims student identification",
        "student identification errors",
        "submission 1 student id",
        "fatals only",
        "print errors only"
    ],

    summary:
        "Run and review the 100 Student Identification Pre-PEIMS report and correct student identification errors.",

    purpose:
        "Use this procedure during Submission One preparation to verify 100 Student Identification record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "IR"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select IR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set PEIMS Submission to 1.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "PEIMS Submission should be set to 1.",
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "45-46",

    related: [
        "Verify 090 Staff Responsibility Records",
        "Verify Students Have a PEIMS ID",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 101 Student Demographic Records",

    category: "PEIMS",

    keywords: [
        "101 student demographic",
        "student demographic record",
        "verify 101",
        "peims 101",
        "pre peims demographic",
        "student demographic errors",
        "submission 1 demographics",
        "fatals only",
        "print errors only"
    ],

    summary:
        "Run and review the 101 Student Demographic Pre-PEIMS report and correct demographic record errors.",

    purpose:
        "Use this procedure during Submission One preparation to verify 101 Student Demographic record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "DR"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select DR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set PEIMS Submission to 1.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "PEIMS Submission should be set to 1.",
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "46",

    related: [
        "Verify 100 Student Identification Records",
        "Verify 090 Staff Responsibility Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 102 TX Unique Student ID Records",

    category: "PEIMS",

    keywords: [
        "102 tx unique student id",
        "102 unique id",
        "tx unique id",
        "texas unique student id",
        "verify 102",
        "peims 102",
        "pre peims unique id",
        "early reading",
        "foster care",
        "military connected",
        "unique student id errors"
    ],

    summary:
        "Run and review the 102 TX-Unique-Student-ID Pre-PEIMS report and correct record errors.",

    purpose:
        "Use this procedure during Submission One preparation to verify TX Unique Student ID information and related Early Reading, Foster Care, and Military Connected coding.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "UR"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select UR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set PEIMS Submission to 1.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "For elementary schools, also run the appropriate grade levels for Early Reading coding.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report covers TX Unique ID, Early Reading, Foster Care, and Military Connected information.",
        "PEIMS Submission should be set to 1.",
        "Elementary schools should also run the report for grade levels pertaining to Early Reading coding.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "46-47",

    related: [
        "Verify 101 Student Demographic Records",
        "Verify 100 Student Identification Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 110 Student Enrollment Records",

    category: "PEIMS",

    keywords: [
        "110 student enrollment",
        "student enrollment record",
        "verify 110",
        "peims 110",
        "pre peims enrollment",
        "student enrollment errors",
        "enrollment record errors",
        "special programs",
        "peims enrollment"
    ],

    summary:
        "Run and review the 110 Student Enrollment Pre-PEIMS report and correct enrollment record errors.",

    purpose:
        "Use this procedure during Submission One preparation to verify 110 Student Enrollment record information and Special Program entries.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "ER"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select ER.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "Verify all entries for all Special Programs offered at your campus.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Verify all entries for all Special Programs offered at the campus.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "47",

    related: [
        "Verify 102 TX Unique Student ID Records",
        "Verify 101 Student Demographic Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 163 Special Education Records",

    category: "PEIMS",

    keywords: [
        "163 special education",
        "special education record",
        "verify 163",
        "peims 163",
        "pre peims special education",
        "special ed errors",
        "special education errors",
        "peims special ed"
    ],

    summary:
        "Run and review the 163 Special Education Pre-PEIMS report and correct Special Education record errors.",

    purpose:
        "Use this procedure during Submission One preparation to verify 163 Special Education record information and work with the Special Education Department to correct errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "SE"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select SE.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors with the Special Education Department.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Work with the Special Education Department when correcting Warnings, Special Warnings, and Fatal Errors.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "47-48",

    related: [
        "Verify 110 Student Enrollment Records",
        "Verify 102 TX Unique Student ID Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 169 CTE Service Records",

    category: "PEIMS",

    keywords: [
        "169 cte service",
        "cte service record",
        "verify 169",
        "peims 169",
        "pre peims cte service",
        "cte errors",
        "career technical education",
        "secondary campus cte"
    ],

    summary:
        "Run and review the 169 CTE Service Pre-PEIMS report and correct CTE service record errors.",

    purpose:
        "Use this procedure on secondary campuses during Submission One preparation to verify 169 CTE Service record information and correct errors with the CTE Department.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "CS"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select CS.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors with the CTE Department.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for secondary campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Work with the CTE Department to resolve Warnings, Special Warnings, and Fatal Errors.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "48",

    related: [
        "Verify 163 Special Education Records",
        "Verify 170 CTE Course Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 170 CTE Course Records",

    category: "PEIMS",

    keywords: [
        "170 cte course",
        "cte course record",
        "verify 170",
        "peims 170",
        "pre peims cte course",
        "career tech indicator",
        "default career tech",
        "cte course errors",
        "secondary campus cte"
    ],

    summary:
        "Run and review the 170 CTE Course Pre-PEIMS report and correct CTE course record errors.",

    purpose:
        "Use this procedure on secondary campuses during Submission One preparation to verify 170 CTE Course record information and correct errors with the CTE Department.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "CR"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select CR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Set the Default Career Tech. Ind as appropriate.",
        "Use 0 for students not enrolled in CTE.",
        "Use 1 for students enrolled in CTE.",
        "Use 2 for students in a Cohort.",
        "Use 3 for students in a Tech Prep Program.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors with the CTE Department.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for secondary campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "The manual defines Default Career Tech. Ind values as 0, 1, 2, and 3 depending on the student's CTE status.",
        "Work with the CTE Department to resolve Warnings, Special Warnings, and Fatal Errors."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "48-49",

    related: [
        "Verify 169 CTE Service Records",
        "Verify 163 Special Education Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify 203 Leaver Records",

    category: "PEIMS",

    keywords: [
        "203 leaver",
        "leaver record",
        "verify 203",
        "peims 203",
        "pre peims leaver",
        "leaver errors",
        "local withdrawal code",
        "campus id accountability",
        "secondary leaver"
    ],

    summary:
        "Run and review the 203 Leaver Pre-PEIMS report and correct leaver record errors.",

    purpose:
        "Use this procedure on secondary campuses during Submission One preparation to verify 203 Leaver record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "SL"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select SL.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Set School Year to the four-digit year in which the current school year ends.",
        "Check Print Leavers.",
        "Do not check Print Students with Non-Leaver Reasons.",
        "Check Include students for whom this entity is the Campus ID of Accountability.",
        "Check Print students Local Withdrawal Code.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for secondary campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Use the PEIMS Snapshot date for the As-Of Date.",
        "Print Leavers should be checked.",
        "Print Students with Non-Leaver Reasons should not be checked.",
        "Include students for whom this entity is the Campus ID of Accountability should be checked.",
        "Print students Local Withdrawal Code should be checked."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "49",

    related: [
        "Verify 170 CTE Course Records",
        "Verify 169 CTE Service Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Submission One PEIMS Recommendations",

    category: "PEIMS",

    keywords: [
        "submission one recommendations",
        "submission 1 recommendations",
        "schedule pre peims reports",
        "weekly peims reports",
        "certify emails",
        "peims certify",
        "schedule this report",
        "print queue",
        "student coding",
        "peims coding responsibility"
    ],

    summary:
        "Recommended ongoing practices for managing Submission One PEIMS reports, Certify emails, and coding responsibilities.",

    purpose:
        "Use these recommendations to maintain Submission One data quality and stay on schedule with district PEIMS requirements.",

    procedure: [
        "Schedule all Submission One Pre-PEIMS edit reports to run on a weekly basis.",
        "Before scheduling a report, run the report and allow it to complete.",
        "Locate the completed report in the Print Queue.",
        "Highlight the report.",
        "Click Schedule This.",
        "Review Certify emails on a weekly basis.",
        "Address PEIMS CERTIFY emails daily to help meet district deadlines.",
        "Escalate student or staff coding decisions to campus administrators."
    ],

    notes: [
        "Only campus administrators are allowed to determine student or staff coding for PEIMS purposes.",
        "Non-professional campus staff should not make PEIMS coding decisions.",
        "The campus principal is ultimately responsible for campus data regardless of which department performs the actual data entry."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "50",

    related: [
        "Verify 203 Leaver Records",
        "Campus PEIMS Preparation Overview",
        "PEIMS Reconciliation Process"
    ]
},
{
    topic: "Submission Three Attendance Overview",

    category: "PEIMS",

    keywords: [
        "submission three",
        "submission 3",
        "attendance submission",
        "peims attendance",
        "submission three overview",
        "submission 3 overview",
        "attendance peims",
        "peims submission 3"
    ],

    summary:
        "Overview of the PEIMS Submission Three attendance-related data checks and records that must be reviewed.",

    purpose:
        "Use this overview to understand the major data areas that must be reviewed for PEIMS Submission Three.",

    procedure: [
        "Verify PEIMS ID and 100 and 101 data records.",
        "Verify 102 data records and program activity.",
        "Verify 203 and 300 data records.",
        "Verify 305, 400, and 405 data records.",
        "Verify CTE Contact Hours and 410 data records.",
        "Verify Work Station Service ID, GPA Calculation, and Pass/Fail information.",
        "Verify Course Completion Transfer Grades and 415 data.",
        "Verify Manual Pass/Fail, 425, and 435 data records.",
        "Verify 505 and 510 data records."
    ],

    notes: [
        "Submission Three is the Attendance submission.",
        "The manual organizes Submission Three into multiple verification areas that should be reviewed separately.",
        "Each verification area can be built as its own Sky Chatbox article for easier searching."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "50",

    related: [
        "Verify Students Have a PEIMS ID",
        "Verify 100 Student Identification Records",
        "Verify 101 Student Demographic Records",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify Submission Three PEIMS ID and 100 101 Records",

    category: "PEIMS",

    keywords: [
        "submission three peims id",
        "submission 3 peims id",
        "submission three 100 101",
        "submission 3 100 101",
        "attendance 100 101 records",
        "peims attendance identification demographic",
        "verify 100 101 submission 3"
    ],

    summary:
        "Verify PEIMS IDs and the 100 Student Identification and 101 Student Demographic records for Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to verify that students have PEIMS IDs and that 100 and 101 records are free of report errors.",

    procedure: [
        "Run the PEIMS ID report using Student Management > Federal State Reporting > TX > RE > OT > PI.",
        "Leave Grade/Grad Yr blank.",
        "Set Print to Students with no IDs.",
        "Set Status to Both.",
        "Run the report and enter or assign a PEIMS ID for students that do not have one.",
        "Next, run the 100 Student Identification report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > IR.",
        "Set PEIMS Submission to 3.",
        "Set Edit Type to Fatals Only and check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Run the report and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only.",
        "Next, run the 101 Student Demographic report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > DR.",
        "Set PEIMS Submission to 3.",
        "Set Edit Type to Fatals Only and check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Run the report and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "For the PEIMS ID report, Print should be set to Students with no IDs and Status should be Both.",
        "For the 100 and 101 reports, PEIMS Submission must be set to 3.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "51-53",

    related: [
        "Submission Three Attendance Overview",
        "Verify Students Have a PEIMS ID",
        "Verify 100 Student Identification Records",
        "Verify 101 Student Demographic Records"
    ]
},
{
    topic: "Verify Submission Three 102 and Program Activity",

    category: "PEIMS",

    keywords: [
        "submission three 102",
        "submission 3 102",
        "102 unique id submission 3",
        "program activity",
        "verify program activity",
        "attendance program activity",
        "tsds id",
        "submission three program activity"
    ],

    summary:
        "Verify the 102 TX-Unique-Student-ID information and Program Activity data for PEIMS Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to review 102 TX Unique ID records and Program Activity information.",

    procedure: [
        "Run the 102 TX-Unique-Student-ID report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > UR.",
        "Give the report template a meaningful name.",
        "Set PEIMS Submission to 3.",
        "Set Edit Type to Fatals Only and check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Run the report and correct all Fatal Errors, Special Warnings, and Warnings.",
        "Report special issues to the PEIMS Department when needed.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only.",
        "Next, run the Program Activity report using Student Management > Federal State Reporting > TX > Reports > Attendance-AT > RP.",
        "Give the report template a meaningful name.",
        "Leave Default Entity blank.",
        "Leave Calendar blank.",
        "Leave Grade/Grad Yr blank.",
        "Leave Race blank.",
        "Leave Student Type blank.",
        "Set Status to Both.",
        "Set Next Year Status to Both.",
        "Set the Date Low value to the start of the school year.",
        "Set the Date High value to the end of the school year.",
        "Run and review the Program Activity report."
    ],

    notes: [
        "The 102 report will not return students who do not have an assigned TSDS ID.",
        "In Skyward, students without an assigned TSDS number display zeros in the TSDS field.",
        "For the Program Activity report, Status and Next Year Status should both be set to Both.",
        "The Program Activity report date range should cover the full school year."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "53-54",

    related: [
        "Submission Three Attendance Overview",
        "Verify Submission Three PEIMS ID and 100 101 Records",
        "Verify 102 TX Unique Student ID Records"
    ]
},
{
    topic: "Verify Submission Three 203 Leaver and 300 Campus Course Records",

    category: "PEIMS",

    keywords: [
        "submission three 203",
        "submission 3 203",
        "203 leaver submission 3",
        "300 campus course",
        "300 course section",
        "submission three 300",
        "verify leaver and course records",
        "peims 203 300"
    ],

    summary:
        "Verify 203 Leaver records and 300 Campus Course records for PEIMS Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to review secondary-campus leaver data and campus course-section records.",

    procedure: [
        "For secondary campuses, run the 203 Leaver report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > SL.",
        "Give the report template a meaningful name.",
        "Set Edit Type to Fatals Only and check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set the As-Of Date to the PEIMS Snapshot date, which the manual identifies as the last Friday in October.",
        "Enter the four-digit school year in which the current school year ends.",
        "Check Print Leavers.",
        "Do not check Print Students with Non-Leaver Reasons.",
        "Check Include students for whom this entity is the Campus ID of Accountability.",
        "Check Print students Local Withdrawal Code.",
        "Run the report and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only.",
        "Next, run the 300 Campus Course report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > CO.",
        "Give the report template a meaningful name.",
        "Set Edit Type to Fatals Only and check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Submission Period to 3.",
        "Set Records to Print to 300 Course Section.",
        "Choose the desired sort options.",
        "Run the report and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "The 203 Leaver report is for secondary campuses only.",
        "For 203, Print Leavers should be checked and Print Students with Non-Leaver Reasons should not be checked.",
        "For 203, Include students for whom this entity is the Campus ID of Accountability should be checked.",
        "For 203, Print students Local Withdrawal Code should be checked.",
        "For the 300 Campus Course report, Submission Period should be set to 3.",
        "For the 300 Campus Course report, Records to Print should be set to 300 Course Section."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "54-55",

    related: [
        "Verify Submission Three 102 and Program Activity",
        "Verify 203 Leaver Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 305 Teacher Class Assignment Records",

    category: "PEIMS",

    keywords: [
        "305 teacher class assignment",
        "teacher class assignment",
        "verify 305",
        "peims 305",
        "submission 3 teacher class assignment",
        "305 records",
        "teacher assignment errors",
        "pre peims teacher class"
    ],

    summary:
        "Run and review the 305 Teacher Class Assignment Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to verify 305 Teacher Class Assignment record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "TC"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select TC.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Submission Period to 3.",
        "Set Records to Print to 305 Teacher Class Assignment.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "Submission Period should be set to 3.",
        "Records to Print should be set to 305 Teacher Class Assignment.",
        "Leave Grade/Grad Yr blank.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "55-56",

    related: [
        "Verify Submission Three 203 Leaver and 300 Campus Course Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 400 and 405 Attendance Records",

    category: "PEIMS",

    keywords: [
        "400 basic attendance",
        "405 special ed attendance",
        "verify 400",
        "verify 405",
        "peims 400",
        "peims 405",
        "basic attendance record",
        "special ed attendance record",
        "submission three attendance records"
    ],

    summary:
        "Run and review the 400 Basic Attendance and 405 Special Education Attendance Pre-PEIMS reports for Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to verify basic attendance and Special Education attendance record information.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "BA"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select BA.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set Six Weeks Low to 1.",
        "Set Six Weeks High to 6.",
        "Enter the four-digit school year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the 400 Basic Attendance report and correct all Warnings, Special Warnings, and Fatal Errors.",
        "Use the same report path and range settings to verify the 405 Special Education Attendance records.",
        "Correct all Warnings, Special Warnings, and Fatal Errors found in the 405 records.",
        "After fatal errors have been eliminated or minimized, run the reports again using All and do not check Print Errors Only."
    ],

    notes: [
        "Both the 400 Basic Attendance and 405 Special Education Attendance procedures use the BA path.",
        "Leave Grade/Grad Yr blank.",
        "Set Six Weeks Low to 1 and High to 6.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "57-58",

    related: [
        "Verify 305 Teacher Class Assignment Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 410 CTE Attendance Records",

    category: "PEIMS",

    keywords: [
        "410 cte attendance",
        "cte attendance record",
        "verify 410",
        "peims 410",
        "submission three cte attendance",
        "secondary cte attendance",
        "pre peims cte attendance"
    ],

    summary:
        "Run and review the 410 CTE Attendance Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure on secondary campuses during Submission Three preparation to verify CTE Attendance record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "CA"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select CA.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Set Six Weeks Low to 1.",
        "Set Six Weeks High to 6.",
        "Enter the four-digit school year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for secondary campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Set Six Weeks Low to 1 and High to 6.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "58",

    related: [
        "Verify 400 and 405 Attendance Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify Course Completion Transfer Grades",

    category: "PEIMS",

    keywords: [
        "transfer grades",
        "course completion transfer grades",
        "verify transfer grades",
        "peims transfer grades",
        "submission three transfer grades",
        "course completion records",
        "grades from another district"
    ],

    summary:
        "Verify that Course Completion records flagged as Transfer Grades were earned at another district.",

    purpose:
        "Use this procedure during Submission Three preparation to review Course Completion records marked as Transfer Grades and confirm they represent grades earned outside the district.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "REPORTS-RE",
        "GRADING-GR",
        "PF"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open REPORTS-RE.",
        "Open GRADING-GR.",
        "Select PF.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Report Type to Range.",
        "Leave the Ranges button at its default values.",
        "Run the report.",
        "Review Course Completion records flagged as Transfer Grades.",
        "Verify that those grades were actually earned at another district."
    ],

    notes: [
        "Records flagged as Transfer Grades should represent grades earned at another district.",
        "Set Report Type to Range.",
        "Leave the Ranges settings at their default values unless directed otherwise."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "58",

    related: [
        "Verify 410 CTE Attendance Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 415 Course Completion Records",

    category: "PEIMS",

    keywords: [
        "415 course completion",
        "course completion record",
        "verify 415",
        "peims 415",
        "submission three 415",
        "secondary course completion",
        "pre peims course completion"
    ],

    summary:
        "Run and review the 415 Course Completion Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure on secondary campuses during Submission Three preparation to verify 415 Course Completion record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "CC"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select CC.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Submission Period to 3.",
        "Set Records to Print to 415 Course Completion.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for secondary campuses only.",
        "Submission Period should be set to 3.",
        "Records to Print should be set to 415 Course Completion.",
        "Leave Grade/Grad Yr blank."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "59",

    related: [
        "Verify Course Completion Transfer Grades",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Manual Pass Fail Credit Indicator Corrections",

    category: "PEIMS",

    keywords: [
        "manual pass fail",
        "pass fail credit indicator",
        "pass fail corrections",
        "manual credit indicator",
        "set pass fail credit indicator",
        "submission three pass fail",
        "pass fail screen"
    ],

    summary:
        "Guidance for making manual corrections to the Pass/Fail Credit Indicator after year-end processing is complete.",

    purpose:
        "Use this procedure when manual Pass/Fail Credit Indicator corrections are required after all year-end data edits have been completed.",

    navigation: [
        "Student Management",
        "Students",
        "ST",
        "PR",
        "Special Programs",
        "Pass/Fail"
    ],

    procedure: [
        "Complete all year-end data edits before making manual Pass/Fail Credit Indicator corrections.",
        "Make sure the Set Pass/Fail Credit Indicator utility will not need to be run again.",
        "Go to Student Management.",
        "Open Students.",
        "Open ST.",
        "Open PR.",
        "Open Special Programs.",
        "Open Pass/Fail.",
        "Make the necessary manual Pass/Fail Credit Indicator corrections."
    ],

    notes: [
        "Do not make manual Pass/Fail corrections until after the school year is over.",
        "Do not make manual corrections until you are sure the Set Pass/Fail Credit Indicator utility will not need to be run again.",
        "Running the Set Pass/Fail Credit Indicator utility again will overwrite manual corrections."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "59-60",

    related: [
        "Verify 415 Course Completion Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 425 Disciplinary Action Records",

    category: "PEIMS",

    keywords: [
        "425 disciplinary action",
        "disciplinary action record",
        "verify 425",
        "peims 425",
        "submission three discipline",
        "discipline record",
        "disciplinary assignment",
        "pre peims discipline"
    ],

    summary:
        "Run and review the 425 Disciplinary Action Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to verify 425 Disciplinary Action record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "DA"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select DA.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Campus ID of Disciplinary Assignment to School.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "Leave Grade/Grad Yr blank.",
        "Set Campus ID of Disciplinary Assignment to School.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "61",

    related: [
        "Manual Pass Fail Credit Indicator Corrections",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 435 Student Restraint Records",

    category: "PEIMS",

    keywords: [
        "435 student restraint",
        "student restraint record",
        "verify 435",
        "peims 435",
        "submission three restraint",
        "restraint records",
        "special education restraint",
        "regular student restraint",
        "pre peims restraint"
    ],

    summary:
        "Run and review the 435 Student Restraint Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure during Submission Three preparation to verify 435 Student Restraint record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "EC"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select EC.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Student Filter based on your reporting need.",
        "Choose Regular Students, Special Education Students, or both.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "Leave Grade/Grad Yr blank.",
        "Student Filter can be Regular Students, Special Education Students, or both depending on the reporting need.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "61-62",

    related: [
        "Verify 425 Disciplinary Action Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 500 Flexible Attendance Records",

    category: "PEIMS",

    keywords: [
        "500 flexible attendance",
        "flexible attendance record",
        "verify 500",
        "peims 500",
        "submission three flexible attendance",
        "high school flexible attendance",
        "pre peims flexible attendance"
    ],

    summary:
        "Run and review the 500 Flexible Attendance Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure on high school campuses during Submission Three preparation to verify 500 Flexible Attendance record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "FA"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select FA.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Reporting Periods Low to 1.",
        "Set Reporting Periods High to 6.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for high school campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Set Reporting Periods Low to 1 and High to 6.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "62",

    related: [
        "Verify 435 Student Restraint Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 505 SPED Flexible Attendance Records",

    category: "PEIMS",

    keywords: [
        "505 sped flexible attendance",
        "505 special education flexible attendance",
        "verify 505",
        "peims 505",
        "submission three 505",
        "sped flexible attendance",
        "high school sped attendance",
        "pre peims 505"
    ],

    summary:
        "Run and review the 505 SPED Flexible Attendance Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure on high school campuses during Submission Three preparation to verify 505 SPED Flexible Attendance record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "FS"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select FS.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Reporting Periods Low to 1.",
        "Set Reporting Periods High to 6.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for high school campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Set Reporting Periods Low to 1 and High to 6.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "62-63",

    related: [
        "Verify 500 Flexible Attendance Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Verify 510 CTE Flexible Attendance Records",

    category: "PEIMS",

    keywords: [
        "510 cte flexible attendance",
        "verify 510",
        "peims 510",
        "submission three 510",
        "cte flexible attendance",
        "high school cte attendance",
        "pre peims 510",
        "flexible attendance cte"
    ],

    summary:
        "Run and review the 510 CTE Flexible Attendance Pre-PEIMS report for Submission Three.",

    purpose:
        "Use this procedure on high school campuses during Submission Three preparation to verify 510 CTE Flexible Attendance record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "FC"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select FC.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Reporting Periods Low to 1.",
        "Set Reporting Periods High to 6.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for high school campuses only.",
        "Leave Grade/Grad Yr blank.",
        "Set Reporting Periods Low to 1 and High to 6.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "63",

    related: [
        "Verify 505 SPED Flexible Attendance Records",
        "Verify 500 Flexible Attendance Records",
        "Submission Three Attendance Overview"
    ]
},
{
    topic: "Submission Four Summer Overview",

    category: "PEIMS",

    keywords: [
        "submission four",
        "submission 4",
        "summer peims",
        "summer submission",
        "peims summer",
        "submission four overview"
    ],

    summary:
        "Overview of PEIMS Submission Four, which covers summer-related reporting.",

    purpose:
        "Use this overview to begin the Submission Four Summer PEIMS verification process.",

    procedure: [
        "Use the Summer School section of the manual for instructions on coding students in Skyward.",
        "Verify the 100 Student Identification records for Submission Four.",
        "Verify the 101 Student Demographic records for Submission Four.",
        "Continue through the remaining Submission Four verification steps in the manual."
    ],

    notes: [
        "The manual directs staff to the Summer School section for student coding instructions.",
        "Submission Four uses PEIMS Submission 4 in the Pre-PEIMS reports."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "65",

    related: [
        "Submission Three Attendance Overview",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Verify Submission Four 100 and 101 Records",

    category: "PEIMS",

    keywords: [
        "submission four 100",
        "submission 4 100",
        "submission four 101",
        "submission 4 101",
        "summer peims 100",
        "summer peims 101",
        "student identification submission 4",
        "student demographic submission 4"
    ],

    summary:
        "Verify the 100 Student Identification and 101 Student Demographic records for PEIMS Submission Four.",

    purpose:
        "Use this procedure during Submission Four Summer preparation to verify student identification and demographic record information.",

    procedure: [
        "Run the 100 Student Identification report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > IR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set PEIMS Submission to 4.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only.",
        "Next, run the 101 Student Demographic report using Student Management > Federal State Reporting > TX > PEIMS-PE > PRE-PEIMS-PP > DR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set PEIMS Submission to 4.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "PEIMS Submission must be set to 4 for both reports.",
        "Leave Grade/Grad Yr blank.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "65",

    related: [
        "Submission Four Summer Overview",
        "Verify 100 Student Identification Records",
        "Verify 101 Student Demographic Records"
    ]
},
{
    topic: "Verify Submission Four 102 TX Unique Student ID Records",

    category: "PEIMS",

    keywords: [
        "submission four 102",
        "submission 4 102",
        "summer peims 102",
        "tx unique id submission 4",
        "tsds id submission four",
        "verify 102 summer",
        "peims 102 submission 4"
    ],

    summary:
        "Run and review the 102 TX-Unique-Student-ID Pre-PEIMS report for Submission Four.",

    purpose:
        "Use this procedure during Submission Four Summer preparation to verify TX Unique Student ID information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "UR"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select UR.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set PEIMS Submission to 4.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Fatal Errors, Special Warnings, and Warnings.",
        "Report special issues to the PEIMS Department when needed.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "PEIMS Submission must be set to 4.",
        "The report will not produce results for students who do not have an assigned TSDS ID number.",
        "In Skyward, students without an assigned TSDS number will show zeros in the TSDS field.",
        "Leave Grade/Grad Yr blank."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "66",

    related: [
        "Verify Submission Four 100 and 101 Records",
        "Submission Four Summer Overview",
        "Verify 102 TX Unique Student ID Records"
    ]
},
{
    topic: "Verify Submission Four 500 Flexible Attendance Records",

    category: "PEIMS",

    keywords: [
        "submission four 500",
        "submission 4 500",
        "summer peims 500",
        "500 flexible attendance summer",
        "verify 500 submission 4",
        "high school flexible attendance summer",
        "reporting period 7"
    ],

    summary:
        "Run and review the 500 Flexible Attendance Pre-PEIMS report for Submission Four.",

    purpose:
        "Use this procedure on high school campuses during Submission Four Summer preparation to verify 500 Flexible Attendance record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "FA"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select FA.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Reporting Periods Low to 7.",
        "Set Reporting Periods High to 7.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for high school campuses only.",
        "For Submission Four, Reporting Periods Low and High must both be set to 7.",
        "Leave Grade/Grad Yr blank.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "66-67",

    related: [
        "Verify Submission Four 102 TX Unique Student ID Records",
        "Submission Four Summer Overview",
        "Verify 500 Flexible Attendance Records"
    ]
},
{
    topic: "Verify Submission Four 415 Course Completion Records",

    category: "PEIMS",

    keywords: [
        "submission four 415",
        "submission 4 415",
        "summer peims 415",
        "415 course completion summer",
        "verify 415 submission 4",
        "secondary course completion summer"
    ],

    summary:
        "Run and review the 415 Course Completion Pre-PEIMS report for Submission Four.",

    purpose:
        "Use this procedure on secondary campuses during Submission Four Summer preparation to verify 415 Course Completion record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "CC"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select CC.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Set Submission Period to 4.",
        "Set Records to Print to 415 Course Completion.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "This report is for secondary campuses only.",
        "Submission Period should be set to 4.",
        "Records to Print should be set to 415 Course Completion.",
        "Leave Grade/Grad Yr blank."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "67",

    related: [
        "Verify Submission Four 500 Flexible Attendance Records",
        "Submission Four Summer Overview",
        "Verify 415 Course Completion Records"
    ]
},
{
    topic: "Verify Submission Four 408 Extended School Year Services Records",

    category: "PEIMS",

    keywords: [
        "submission four 408",
        "submission 4 408",
        "408 extended school year",
        "esy services",
        "summer peims 408",
        "verify 408",
        "extended school year services"
    ],

    summary:
        "Run and review the 408 Extended School Year Services Pre-PEIMS report for Submission Four.",

    purpose:
        "Use this procedure during Submission Four Summer preparation to verify 408 Extended School Year Services record information and correct report errors.",

    navigation: [
        "Student Management",
        "Federal State Reporting",
        "TX",
        "PEIMS-PE",
        "PRE-PEIMS-PP",
        "ES"
    ],

    procedure: [
        "Go to Student Management.",
        "Open Federal State Reporting.",
        "Select TX.",
        "Open PEIMS-PE.",
        "Open PRE-PEIMS-PP.",
        "Select ES.",
        "Create or select a report template.",
        "Give the template a meaningful name.",
        "Set Edit Type to Fatals Only.",
        "Check Print Errors Only.",
        "Leave Grade/Grad Yr blank.",
        "Enter the four-digit school year in which the current school year ends.",
        "Choose the desired sort options.",
        "Run the report.",
        "Address and correct all Warnings, Special Warnings, and Fatal Errors.",
        "After fatal errors have been eliminated or minimized, run the report again using All and do not check Print Errors Only."
    ],

    notes: [
        "Leave Grade/Grad Yr blank.",
        "Run Fatals Only with Print Errors Only checked first, then run for All after errors have been corrected or minimized."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "67-68",

    related: [
        "Verify Submission Four 415 Course Completion Records",
        "Submission Four Summer Overview"
    ]
},
{
    topic: "Code At Risk Students",

    category: "PEIMS",

    keywords: [
        "at risk",
        "at-risk",
        "code at risk student",
        "at risk criteria",
        "at risk coding",
        "student at risk",
        "date identified",
        "date dismissed"
    ],

    summary:
        "Steps for coding a student as At Risk in Skyward and maintaining At-Risk criteria information.",

    purpose:
        "Use this procedure when a student meets one or more At-Risk criteria and must be coded in the Skyward At-Risk module.",

    navigation: [
        "Students",
        "Student Profile",
        "At-risk",
        "Add"
    ],

    procedure: [
        "Go to Students.",
        "Open the student's Student Profile.",
        "Select At-risk.",
        "Click Add.",
        "Enter the Date Identified using the date the student was identified as At Risk.",
        "If the student is no longer At Risk, enter the Date Dismissed when that determination is made.",
        "Select the appropriate At-Risk Criteria.",
        "Enter the start date for the selected criteria.",
        "Enter the applicable details.",
        "Click Save.",
        "If an At-Risk criterion was coded incorrectly and needs to be removed, unselect that criterion."
    ],

    notes: [
        "Students who meet an At-Risk criterion should be coded in the At-Risk module.",
        "The manual states that for At-Risk factors 3, 5, and 9, once a student is classified At Risk under one of those factors, the student remains At Risk.",
        "Use the actual date the student was identified as At Risk for Date Identified.",
        "Enter Date Dismissed only when the student is determined to no longer be At Risk."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "68-69",

    related: [
        "Campus PEIMS Preparation Overview",
        "Submission Four Summer Overview"
    ]
},
{
    topic: "At Risk Criteria Overview",

    category: "PEIMS",

    keywords: [
        "at risk criteria",
        "what makes a student at risk",
        "qualify as at risk",
        "at-risk factors",
        "student at risk reasons",
        "at risk qualifications",
        "peims at risk"
    ],

    summary:
        "Overview of the criteria used to identify students as At Risk.",

    purpose:
        "Use this article to review the conditions listed in the manual that may qualify a student for At-Risk coding.",

    procedure: [
        "Review whether the student meets one or more of the At-Risk criteria listed in the manual.",
        "Criteria include certain readiness-test or assessment performance concerns in early grades.",
        "Criteria include failing to maintain an average equivalent to 70 in two or more foundation subjects for applicable secondary grade levels.",
        "A student who was not advanced from one grade level to the next for one or more school years may qualify.",
        "A student who did not perform satisfactorily on a required assessment and has not later met the specified performance level may qualify.",
        "Pregnant students or students who are parents may qualify.",
        "Students placed in an alternative education program under the cited Texas Education Code provision may qualify.",
        "Students expelled under the cited Texas Education Code provision may qualify.",
        "Students currently on parole, probation, deferred prosecution, or another conditional release may qualify.",
        "Students previously reported through PEIMS as having dropped out of school may qualify.",
        "Students identified in the manual as limited English proficient may qualify.",
        "Students in the custody or care of protective services, or referred to the department during the current school year, may qualify.",
        "Students who are homeless may qualify.",
        "Students who resided in the previous school year or currently reside in a residential placement facility may qualify."
    ],

    notes: [
        "The manual states that students who become At Risk for one of the listed reasons should be coded in the At-Risk module.",
        "For criteria 3, 5, and 9, the manual states that once a student is classified At Risk under one of those factors, the student remains At Risk.",
        "Use the Code At Risk Students article for the actual Skyward coding steps."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "68-69",

    related: [
        "Code At Risk Students",
        "Campus PEIMS Preparation Overview"
    ]
},
{
    topic: "Create At Risk Letters",

    category: "PEIMS",

    keywords: [
        "at risk letters",
        "create at risk letters",
        "print at risk letters",
        "at-risk letter",
        "parent at risk letter",
        "request at risk letters",
        "eduphoria at risk",
        "skyward at risk letter"
    ],

    summary:
        "Process for requesting and printing At-Risk notification letters for parents.",

    purpose:
        "Use this procedure when At-Risk letters need to be prepared and sent to parents after the October PEIMS submission.",

    procedure: [
        "At-Risk letters are printed double-sided in English and Spanish.",
        "Send the At-Risk letter to the parent to notify them that the student is identified as At Risk.",
        "The Director of Guidance oversees the At-Risk letter process.",
        "Review any process changes discussed during the October At-Risk meeting.",
        "Print At-Risk letters in November after the October PEIMS submission.",
        "The school's At-Risk counselor should create a ticket in Eduphoria.",
        "Use Skyward as the ticket subject.",
        "Request At-Risk Letters from IT Student Programming."
    ],

    notes: [
        "The manual specifies that the letter is double-sided and includes both English and Spanish.",
        "At-Risk letters should be printed in November after the October PEIMS submission.",
        "Each school's At-Risk counselor is responsible for submitting the Eduphoria request.",
        "The manual states that the Director of Guidance is in charge of the At-Risk letter process."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "70-71",

    related: [
        "Code At Risk Students",
        "At Risk Criteria Overview"
    ]
},

];