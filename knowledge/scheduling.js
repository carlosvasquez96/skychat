const scheduling = [


    {
    topic: "Future Scheduling Elementary",

    category: "Scheduling",

    keywords: [
        "future scheduling elementary",
        "elementary future scheduling",
        "schedule elementary students",
        "homeroom scheduling",
        "mass assign classes",
        "future course master",
        "elementary scheduling",
        "how do i do future scheduling for elementary"
    ],

    summary:
        "Overview of the Elementary Future Scheduling process for the upcoming school year.",

    purpose:
        "Use this procedure to prepare elementary student schedules for the upcoming school year.",

    procedure: [
        "IT adds students to the upcoming school year.",
        "IT clones the current-year Course Master to Next Year.",
        "Clean up the Course Master in Future Scheduling > Course Master.",
        "Manually schedule students into their Homeroom class assignment by individual student or by class.",
        "Mass assign students by class to content classes so students in the same homeroom can be scheduled together for subjects such as art or language.",
        "Adjust individual student classes as needed.",
        "Print Class Rosters."
    ],

    notes: [
        "Most elementary schools begin by assigning students to a specific homeroom course section.",
        "The homeroom section is often used for attendance.",
        "Students in the same homeroom are commonly kept together for most other subject classes.",
        "Use mass assignment for each homeroom group to place those students into their other classes.",
        "Exceptions, such as Special Education placements, should be adjusted student by student.",
        "These steps can begin in Future Scheduling before Year End.",
        "After Student Year End is run, complete any remaining steps in Current Year Scheduling."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "118",

    related: [
        "Set Up Elementary Sections and Meets"
    ]
},
{
    topic: "Set Up Elementary Sections and Meets",

    category: "Scheduling",

    keywords: [
        "elementary sections and meets",
        "set up sections and meets",
        "class meeting time override",
        "use meeting time override",
        "elementary course sections",
        "section master",
        "mass change course master fields",
        "how do i set up elementary sections"
    ],

    summary:
        "Set up Elementary course sections and meeting times using the Class Meeting Time Override process.",

    purpose:
        "Use this procedure to configure Elementary sections so class start and end times can be entered without relying on a large number of periods.",

    navigation: [
        "Office",
        "Future Scheduling",
        "Build Course Master",
        "Setup",
        "Utilities",
        "Mass Change Course Master Fields"
    ],

    procedure: [
    "Go to Office > Future Scheduling > Build Course Master > Setup > Utilities.",
    "Open Mass Change Course Master Fields.",
    "Enter Update courses in the Template Description.",
    "Click Course Ranges.",
    "Select Individual.",
    "Click Course Selection.",
    "Sort the course list by Description.",
    "Select all courses except Conduct courses.",
    "Click Select after all applicable courses have been selected.",
    "Save the Course Master field ranges.",
    "Return to the template screen and scroll to Class Section Fields.",
    "Change Use Meeting Time Override from No Change to No to Yes.",
    "Scroll back to the top and click Save.",
    "Do not click Save and Process at this point.",
    "Highlight the saved template and click Edit to review it.",
    "After verifying the template is correct, click Process to enable Class Meeting Time Override for the selected courses.",
    "Go to Office > Current Scheduling > Build Course Master > Section Master.",
    "Locate and select the course.",
    "If the section does not already exist, create the section.",
    "Expand the section using the triangle next to the course number.",
    "Click Edit Section.",
    "Check Use Class Meeting Time Override.",
    "Click Save.",
    "Under Meet Details, click Edit.",
    "Set Display Period to 00.",
    "Set Scheduling Period to 00.",
    "Set Attendance Period to 00.",
    "Check Display This Class Meet on Student Schedule.",
    "Enter the Start Time and End Time for the class.",
    "Click Save.",
    "Repeat this process for all sections except Conduct.",
    "For Music courses, select only the day or days the class actually meets under Meet Pattern."
],

notes: [
    "Select all applicable courses except Conduct courses when running the mass change.",
    "Change Use Meeting Time Override from No Change to No to Yes.",
    "Use Save first; do not use Save and Process until the template has been reviewed.",
    "After reviewing the template, use Process to apply the change.",
    "Use Class Meeting Time Override must also be enabled on the section.",
    "Display Period, Scheduling Period, and Attendance Period should be set to 00 for these overridden class meets.",
    "Enter the actual Start Time and End Time for the class.",
    "Do not use this override process for Conduct.",
    "For Music courses, select only the applicable meeting day or days in Meet Pattern."
],

manual:
    "2026-2027 LISD Skyward Manual",

page:
    "119-124",

    related: [
        "Future Scheduling Elementary"
    ]
},
{
    topic: "Change First Period Time for Conduct",

    category: "Scheduling",

    keywords: [
        "conduct period time",
        "first period time",
        "change period 1 time",
        "conduct scheduling",
        "scheduling period times",
        "period 1 conduct",
        "how do i change first period time",
        "how do i change conduct period time"
    ],

    summary:
        "Change the First Period time used for Conduct classes in Elementary scheduling.",

    purpose:
        "Use this procedure to adjust Period 1 to the correct time for Conduct without using the Class Meeting Time Override process.",

    navigation: [
        "Office",
        "Current Scheduling",
        "Build Course Master",
        "Setup",
        "Codes",
        "Scheduling Period Times"
    ],

    procedure: [
        "Go to Office.",
        "Open Current Scheduling.",
        "Open Build Course Master.",
        "Open Setup.",
        "Open Codes.",
        "Select Scheduling Period Times.",
        "Locate Period 1.",
        "Click Edit.",
        "Adjust the First Period time to the correct time for Conduct.",
        "Click Save."
    ],

    notes: [
        "Conduct does not use the Class Meeting Time Override process described for the other Elementary courses.",
        "Only Period 1 needs to be adjusted for Conduct.",
        "The manual states that the other scheduling periods do not need to be changed."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "125-126",

    related: [
        "Set Up Elementary Sections and Meets",
        "Future Scheduling Elementary"
    ]
},
{
    topic: "Mass Assign Students to a Course",

    category: "Scheduling",

    keywords: [
        "mass assign students",
        "mass assign students to course",
        "copy conduct roster",
        "copy students to another class",
        "mass add students to class",
        "mass add change delete student requests",
        "add course class",
        "scheduled class",
        "elementary mass scheduling",
        "how do i mass assign students to a course"
    ],

    summary:
        "Mass assign a group of students from an existing Conduct roster to another course or class.",

    purpose:
        "Use this procedure to copy students from a Conduct course roster into other Elementary content classes.",

    navigation: [
        "Office",
        "Current Scheduling",
        "Setup",
        "Utilities",
        "Mass Add/Change/Delete Student Requests"
    ],

    procedure: [
        "Go to Office.",
        "Open Current Scheduling.",
        "Open Setup.",
        "Open Utilities.",
        "Select Mass Add/Change/Delete Student Requests.",
        "Click Add.",
        "Enter a Template Description.",
        "Under Process By, select Course.",
        "Click the Course button.",
        "Search for the Conduct course containing the roster of students you want to copy to another course.",
        "Select the Conduct course.",
        "Click Select.",
        "Under Process Type, make sure Add Course/Class is selected.",
        "Click Scheduled Class.",
        "Select the course or courses you want to add to the students.",
        "After all destination courses have been selected, click Select.",
        "Verify that the selected courses appear in the Scheduled Courses box.",
        "Confirm that the correct Course Number and Section are displayed.",
        "Set the Effective Date to the first day of school.",
        "Click Save and Process."
    ],

    notes: [
        "The Conduct course is used as the source roster for the group of students being assigned.",
        "Select Course under Process By.",
        "Make sure Add Course/Class is selected under Process Type.",
        "Scheduled Class is used to select the destination class.",
        "Multiple destination courses can be selected, such as Reading and Language Arts.",
        "Verify the Course Number and Section in the Scheduled Courses box before processing.",
        "The Effective Date should be the first day of school.",
        "Review the source Conduct roster and destination classes carefully before clicking Save and Process."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "127-132",

    related: [
        "Future Scheduling Elementary",
        "Set Up Elementary Sections and Meets",
        "Change First Period Time for Conduct"
    ]
},
{
    topic: "Future Scheduling Secondary",

    category: "Scheduling",

    keywords: [
        "future scheduling secondary",
        "secondary future scheduling",
        "middle school future scheduling",
        "high school future scheduling",
        "course requests",
        "conflict matrix",
        "auto scheduler",
        "secondary scheduling",
        "next year scheduling",
        "how do i do future scheduling for secondary"
    ],

    summary:
        "Overview of the Secondary Future Scheduling process for the upcoming school year.",

    purpose:
        "Use this procedure to prepare, build, run, and finalize Secondary student schedules for the upcoming school year.",

    procedure: [
        "IT adds students to the upcoming school year.",
        "IT clones the current-year Course Master to Next Year.",
        "Clean up the Course Master in Future Scheduling > Course Master.",
        "Enter Course Requests manually, through Family/Student Access, and/or by using Mass Assign Course Request.",
        "Verify Course Requests to identify students who requested an incorrect number of credits.",
        "Estimate and create Sections and Meets based on the Course/Class Count report.",
        "Update Course Master details, including teacher and room information as it becomes available.",
        "Create the Conflict Matrix to analyze combinations of requested courses.",
        "Run test versions of the scheduler as needed.",
        "Repeat scheduler test runs until a satisfactory conflict ratio is reached.",
        "Run the Auto Scheduler actual run.",
        "Set the Auto Scheduler to perform at least 3 passes.",
        "Manually adjust student schedules that still have conflicts.",
        "Print Student Schedules and Class Rosters for Next Year."
    ],

    notes: [
        "IT is responsible for adding students to the upcoming school year.",
        "IT is responsible for cloning the current-year Course Master to Next Year.",
        "Course Requests may be entered manually, through Family/Student Access, or through Mass Assign Course Request.",
        "Verify Course Requests before building the schedule so students with incorrect credit totals can be identified.",
        "The Conflict Matrix shows how many students request each possible pair of courses.",
        "Scheduler test runs should be repeated until an acceptable conflict ratio is reached.",
        "The Auto Scheduler actual run should be configured for at least 3 passes.",
        "Remaining conflicts should be corrected manually."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "133-134",

    related: [
        "Add a Course to Campus",
        "Future Scheduling Elementary"
    ]
},
{
    topic: "Add a Course to Campus",

    category: "Scheduling",

    keywords: [
        "add course to campus",
        "add a course",
        "add course future scheduling",
        "course master add course",
        "add course to course master",
        "curriculum field",
        "new course campus",
        "how do i add a course to my campus"
    ],

    summary:
        "Add an existing curriculum course to the campus Course Master for Future Scheduling.",

    purpose:
        "Use this procedure to add a course to the campus Course Master for the upcoming school year.",

    navigation: [
        "Office",
        "Future Scheduling",
        "Course Master"
    ],

    procedure: [
        "Go to Office > Future Scheduling > Course Master.",
        "Click Add Course.",
        "Enter the course number in the Curriculum field.",
        "Verify that the correct course information is displayed.",
        "Click Save to add the course to your campus Course Master."
    ],

    notes: [
        "Make sure you are working in Future Scheduling for the appropriate upcoming school year.",
        "Verify the course number before saving the course to the campus Course Master."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "135-136",

    related: [
        "Future Scheduling Secondary",
        "Add a Section and Meet for Teachers"
    ]
},
{
    topic: "Add a Section and Meet for Teachers",

    category: "Scheduling",

    keywords: [
        "add section and meet",
        "add section for teacher",
        "add class meet",
        "future scheduling section",
        "create section",
        "create class meet",
        "save and add meet",
        "meeting pattern",
        "teacher id",
        "room number",
        "how do i add a section",
        "how do i add a meet",
        "how do i create a section for a teacher"
    ],

    summary:
        "Create a course section and class meet for a teacher in Future Scheduling.",

    purpose:
        "Use this procedure to create a section for a course and assign its meeting period, days, room, and teacher.",

    navigation: [
        "Office",
        "Future Scheduling",
        "Course Master"
    ],

    procedure: [
        "Go to Office > Future Scheduling > Course Master.",
        "Enter the course number for the course where you want to create a section.",
        "Click Add Section.",
        "Enter the Section Number.",
        "Complete the applicable section information.",
        "Click Save and Add Meet.",
        "Enter the Period From and Period To.",
        "Select the appropriate Meeting Pattern for the days the class meets.",
        "Enter the Room.",
        "Enter the Teacher ID.",
        "Save the Class Meet."
    ],

    notes: [
        "Make sure you select the correct course before creating the section.",
        "The Section Number is entered before selecting Save and Add Meet.",
        "The Class Meet identifies when the class meets and includes the period range and meeting days.",
        "Enter the appropriate Room and Teacher ID for the section."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "137-138",

    related: [
        "Add a Course to Campus",
        "Future Scheduling Secondary"
    ]
},
{
    topic: "Run Auto Scheduler Pseudo and Actual",

    category: "Scheduling",

    keywords: [
        "auto scheduler",
        "pseudo scheduling run",
        "actual scheduling run",
        "run auto scheduler",
        "generate student schedules",
        "future scheduling auto scheduler",
        "conflict matrix",
        "schedule master save point",
        "how do i run pseudo scheduling",
        "how do i run actual scheduling"
    ],

    summary:
        "Run the Auto Scheduler in Pseudo mode for testing, then run the Actual Scheduler when schedules are ready to be finalized.",

    purpose:
        "Use this procedure to test Secondary schedules with a Pseudo Scheduling Run and then create final schedules with an Actual Scheduling Run.",

    navigation: [
        "Office",
        "Future Scheduling",
        "Student Schedule Generation",
        "Auto Scheduler",
        "Generate Student Schedules - GS"
    ],

    procedure: [
        "Before running a Pseudo Scheduling Run, create a Schedule Master Save Point.",
        "Go to Office > Future Scheduling > Student Schedule Generation > Auto Scheduler.",
        "Select Generate Student Schedules - GS.",
        "Click Add to create a new template, or select an existing template and click Edit.",
        "Enter a Template Description.",
        "Enter the Grade Ranges. The manual recommends generally starting with the outgoing class.",
        "Enter Student Type ranges if your campus uses that option.",
        "Under Scheduling Options, select the options appropriate for your schedule.",
        "Optionally select Close Sections When Filled.",
        "Select Build Free Period Matrix if you want to identify schedule holes.",
        "Select Co-Requisites All or Nothing if applicable.",
        "Select Schedule Required Courses First, Then Elective Courses only if course types were configured correctly when the courses were created.",
        "Under Creation Options, select Create Student Conflict Matrix.",
        "Under Scheduling Run to Perform, select Pseudo Scheduling Run while testing the schedule.",
        "Leave .Net Scheduler selected.",
        "Click Save to save the template, or Save and Run to save and process the run.",
        "Review the resulting schedules and Conflict Matrix.",
        "Make Master Schedule changes as needed and repeat Pseudo runs until the schedules are satisfactory.",
        "When you are ready to make schedules permanent, edit the template and select Actual Scheduling Run.",
        "Run the Actual Scheduling Run.",
        "Continue scheduling manually for students who still have unresolved conflicts."
    ],

    notes: [
        "A Pseudo Scheduling Run does not make student schedules final.",
        "Pseudo runs may be repeated as many times as needed while testing the Master Schedule.",
        "Create a Schedule Master Save Point before running a Pseudo so you can return to that state if needed.",
        "Changes made directly to the Master Schedule after a Pseudo run are permanent unless you restore from a Save Point.",
        "Do not select Actual Scheduling Run until you are satisfied with the schedules.",
        "The Student Conflict Matrix helps identify students with schedule conflicts.",
        "Build Free Period Matrix can help identify holes in student schedules.",
        "The manual states that manual scheduling will still be required after the Actual run for remaining conflicts."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "139-142",

    related: [
        "Future Scheduling Secondary",
        "Add a Section and Meet for Teachers"
    ]
},
{
    topic: "Student Conflict Detail Report",

    category: "Scheduling",

    keywords: [
        "student conflict detail",
        "conflict detail report",
        "student scheduling conflicts",
        "schedule conflict report",
        "pseudo scheduling conflicts",
        "scheduling run analysis",
        "find student conflicts",
        "why did a course not schedule",
        "how do i print student conflict report",
        "how do i find scheduling conflicts"
    ],

    summary:
        "Retrieve and print the Student Conflict Detail Report after a Pseudo Scheduling Run to identify individual student scheduling conflicts.",

    purpose:
        "Use this report to identify students with scheduling conflicts and review their assigned and conflicting courses before running the Actual Scheduler.",

    navigation: [
        "Office",
        "Future Scheduling",
        "Student Schedule Generation",
        "Auto Scheduler",
        "Scheduling Run Analysis"
    ],

    procedure: [
        "Go to Office > Future Scheduling > Student Schedule Generation > Auto Scheduler.",
        "Select Scheduling Run Analysis.",
        "Locate the appropriate Schedule Run. The latest run appears at the top.",
        "Select the Schedule Run and expand the line using the black triangle.",
        "Under Run Details, click Student Conflict Detail Report.",
        "Do not change the report parameters.",
        "Click Run.",
        "Wait for the process to complete.",
        "Click the printer icon in the upper-right corner to open your Print Queue.",
        "Locate the Student Conflict Detail Report.",
        "Select the report and click View.",
        "Review or print the report."
    ],

    notes: [
        "The Student Conflict Detail Report is generated during the Pseudo Scheduling process but does not automatically print.",
        "Create Conflict Detail must have been selected during the Auto Scheduler process for this report to be available.",
        "The report lists each student with conflicts along with the student's assigned and conflicting courses.",
        "This report is generally used when you are close to running the Actual Scheduler and need to resolve conflicts at the individual student level.",
        "Column T indicates how the course was scheduled.",
        "An asterisk (*) means the course could not be scheduled.",
        "M means the course was manually placed into the student's schedule.",
        "I means the course was scheduled as an Imperative.",
        "Lowercase i means the course became an Imperative after another course was arbitrarily scheduled.",
        "A means the computer made an arbitrary scheduling decision.",
        "Column F identifies special scheduling types such as Dropped (D), Transfer (T), Excluded from leveling (X), and Group locking (G)."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "143-146",

    related: [
        "Run Auto Scheduler Pseudo and Actual",
        "Future Scheduling Secondary"
    ]
},
{
    topic: "Interpret Student Conflict Detail Codes",

    category: "Scheduling",

    keywords: [
        "student conflict codes",
        "conflict detail codes",
        "scheduling conflict symbols",
        "what do conflict codes mean",
        "asterisk conflict",
        "plus sign conflict",
        "prerequisite conflict",
        "corequisite conflict",
        "lock group conflict",
        "section full conflict"
    ],

    summary:
        "Interpret the symbols and codes shown on the Student Conflict Detail Report.",

    purpose:
        "Use this reference to understand why a course was or was not scheduled for a student.",

    procedure: [
        "Review Column T to determine how the course was scheduled.",
        "An asterisk (*) means the course could not be scheduled.",
        "M means the course was manually placed into the student's schedule.",
        "I means the course was scheduled as an Imperative.",
        "Lowercase i means the course became an Imperative after another course was arbitrarily scheduled.",
        "A means the computer made an arbitrary scheduling decision.",
        "Review Column F for special scheduling types.",
        "D means the course is Dropped.",
        "T means the course is a Transfer course.",
        "X means the course is excluded from leveling.",
        "G means the course is part of a Group locking configuration.",
        "Dashes (----) indicate another period where the course has a section offered.",
        "Plus signs (++++) indicate that the student was blocked from being scheduled into that section.",
        "p means the course could not be scheduled because of a prerequisite.",
        "c means the course could not be scheduled because of a co-requisite link.",
        "g means the course is part of a lock group that should be scheduled in opposite semesters.",
        "f means the section is full."
    ],

    notes: [
        "Plus signs can represent several different blocking reasons, so review the accompanying code.",
        "Dashes can appear even when there is no conflict because they simply show other periods where the course is offered.",
        "If no possible sections are shown for a course marked with an asterisk, the course may have no available sections."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "145-149",

    related: [
        "Student Conflict Detail Report",
        "Run Auto Scheduler Pseudo and Actual"
    ]
},
{
    topic: "Create a Schedule Master Save Point",

    category: "Scheduling",

    keywords: [
        "schedule master save point",
        "create save point",
        "backup course master",
        "backup schedule master",
        "future scheduling backup",
        "save master schedule",
        "before pseudo run",
        "restore schedule",
        "how do i create a schedule save point"
    ],

    summary:
        "Create a Schedule Master Save Point to preserve a backup configuration while working on Future Scheduling.",

    purpose:
        "Use this utility to create a backup before making changes to the Course Master during the Future Scheduling conflict-resolution process.",

    navigation: [
        "Office",
        "Future Scheduling",
        "Build Course Master",
        "Setup",
        "Utilities",
        "Create Schedule Master Save Point"
    ],

    procedure: [
        "Go to Office > Future Scheduling > Build Course Master > Setup > Utilities.",
        "Select Create Schedule Master Save Point.",
        "Click Add to create a new Save Point.",
        "Enter a Description that identifies what course data or stage of scheduling is contained in this backup.",
        "Save the Schedule Master Save Point."
    ],

    notes: [
        "Create a Save Point before running a Pseudo Scheduling Run.",
        "The system automatically date and time stamps the records created for the Save Point.",
        "Use Schedule Master Save Points often while working through Future Scheduling and conflict resolution.",
        "A Save Point can be used to return to a previous configuration of the Schedule Master.",
        "Deleted courses are not restored by this utility."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "150-151",

    related: [
        "Run Auto Scheduler Pseudo and Actual",
        "Student Conflict Detail Report",
        "Restore a Schedule Master Save Point",
        "Future Scheduling Secondary"
    ]
},

];