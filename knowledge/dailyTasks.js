const dailyTasks = [
    
    {
    topic: "Enroll a New Student",

    category: "Daily Tasks",

    keywords: [
        "enroll new student",
        "new student enrollment",
        "add new student",
        "add student to skyward",
        "student enrollment",
        "new student entry record",
        "add entered name to student",
        "select name and add to current entity",
        "how do i enroll a new student"
    ],

    summary:
        "Enroll a new student by searching for an existing record, entering demographics, and creating the student's enrollment entry record.",

    purpose:
        "Use this procedure when enrolling a new student into the current entity.",

    navigation: [
        "Students",
        "Add"
    ],

    procedure: [
        "Go to the Students tab.",
        "Click Add.",
        "Enter the student's Last Name and First Name.",
        "Click Click Here to Search for Entered Name.",
        "If no matching student is found, click Add Entered Name to Student.",
        "If a matching student is found, review the information carefully to determine whether the student was previously enrolled in the district.",
        "If the matching record is the same student, click Select Name and Add to Current Entity as Student.",
        "If the matching record is a different person, use the option to add the entered name as a new student.",
        "Enter the student's demographic information.",
        "Enter Date of Birth.",
        "Verify the automatically calculated Age.",
        "Verify Grade/Grad Yr and correct it if necessary.",
        "Enter Other ID if it has not been automatically populated.",
        "Enter Ethnicity.",
        "Select one or more Federal Race values.",
        "Complete all other required demographic fields.",
        "Click Save and Add Entry Record.",
        "Complete all required fields on the Entry Record.",
        "Enter the Enrollment Date.",
        "Enter the student's ADA Eligibility Code as the Entry Code.",
        "Enter Percent Enrolled as 100%.",
        "Enter the School using the last three digits of the county-district-campus number.",
        "Set Calendar to the same number as the School.",
        "Select the appropriate Student Type.",
        "Verify Resident District.",
        "Enter Primary Language, Home Language, and Correspondence Language.",
        "Verify all enrollment information.",
        "Click Save and Add Family."
    ],

    notes: [
        "Always search for the student's name before creating a new record to avoid duplicate students.",
        "If the student already exists in the district, add the existing student to the current entity rather than creating another student record.",
        "Grade/Grad Yr is calculated from Date of Birth but should be corrected when needed, such as for a retained student.",
        "Ethnicity is required even though the manual notes that it may not display an asterisk.",
        "Percent Enrolled is not marked as required, but the manual states that all students should be entered as 100%.",
        "Resident District should normally be 240901 unless the student resides in another district and attends LISD as a transfer student.",
        "Review the enrollment fields before saving and proceeding to Family information."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "152-155",

    related: [
        "Code Economically Disadvantaged Food Service"
    ]
},
{
    topic: "Code Economically Disadvantaged Food Service",

    category: "Daily Tasks",

    keywords: [
        "economically disadvantaged",
        "food service coding",
        "economic disadvantaged",
        "lunch code",
        "food service",
        "student food service",
        "enter effective date food service",
        "how do i code economically disadvantaged"
    ],

    summary:
        "Enter Economically Disadvantaged / Food Service coding for a student.",

    purpose:
        "Use this procedure to add Food Service coding and its effective date to a student's record.",

    navigation: [
        "Students",
        "Student Profile",
        "Food Service"
    ],

    procedure: [
        "Go to Students.",
        "Open Student Profile.",
        "Search for and select the student.",
        "Scroll down and select Food Service.",
        "Click Add.",
        "Enter the Effective Date.",
        "Click Save."
    ],

    notes: [
        "Verify that you are on the correct student's Food Service record before adding the code.",
        "Enter the correct Effective Date before saving."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "155-156",

    related: [
        "Enroll a New Student"
    ]
},
{
    topic: "Changes to Family Information in Demographics",

    category: "Daily Tasks",

    keywords: [
        "family information",
        "family demographics",
        "change family information",
        "head of household",
        "HOH",
        "parents divorce",
        "divorced parents",
        "student own guardian",
        "student becomes guardian",
        "foster care",
        "foster agency",
        "grandparents custody",
        "grandparent guardian",
        "former student guardian",
        "sibling guardian",
        "parents remarry",
        "combine families",
        "family id",
        "change student family"
    ],

    summary:
        "Reference for updating Family Information when a student's household, guardian, custody, or family situation changes.",

    purpose:
        "Use this reference to determine who should be Head of Household and how Family records should be arranged when a student's family situation changes.",

    procedure: [
        "Situation 1 - Parents divorce and the children stay at the current address with the mother: Mother should be Family #1 and Father should be Family #2. Remove the father from the current family and add him to a new family with a different Family ID. The mother becomes Head of Household for Family #1 and the father becomes Head of Household for Family #2.",

        "Situation 2 - Parents divorce and the children move with the father to a new address while the mother remains at the current address: Father should be Family #1 and Mother should be Family #2. Remove the mother from the current family and add her to a new family with a different Family ID. Change the address on the father's record because changes to his record will affect the children's addresses.",

        "Situation 3 - Parents divorce and some children stay with the mother while others move with the father: For students staying with the mother, Mother should be Family #1 and Father Family #2. For students staying with the father, Father should be Family #1 and Mother Family #2. Remove the appropriate parent from the current family and add that parent to a new family with a different Family ID.",

        "Situation 4 - Student becomes his or her own guardian: Student should be Family #1. Add the student to a new family with a different Family ID from the parents and move the student to Family #1. The parents become Family #2.",

        "Situation 5 - Student goes into foster care: Foster care agency should be Family #1. Add the Foster Agency as a new family on the student's record and move it to Family #1. The parents become Family #2.",

        "Situation 6 - Grandparents take custody of the student: One of the grandparents should be Family #1. Add the grandparents as a new family and move them to Family #1. The parents become Family #2.",

        "Situation 7 - A former student returns as guardian for another student: The former student should be Head of Household for Family #1. The new student's Family screen will show the former student as Head of Household for Family #1.",

        "Situation 8 - A sibling becomes guardian of a student: The sibling should be Family #1 and Head of Household. The student's Family tab will show the sibling as Family #1 and previous guardians as Family #2.",

        "Situation 9 - Parents remarry after being divorced: Mom or Dad should be Family #1. Combine the families so that all students have one family and the students share the same Family #1 on their Family tabs."
    ],

    notes: [
        "Family #1 determines which household information is primary for the student in these examples.",
        "In Situation 1, address changes made to the mother's record affect the children's address.",
        "In Situation 2, address changes made to the father's record affect the children's address.",
        "When a student becomes his or her own guardian, changes to the parents' address will not affect the student's address.",
        "For foster care, address changes made to the foster agency affect the student's address.",
        "When grandparents have custody, address changes made to the grandparents affect the student's address.",
        "When a former student becomes a guardian, the manual warns that the process will set the former student as a sibling of the new student because both have the same Family ID for Family #1."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "156-158",

    related: [
        "Enroll a New Student"
    ]
},
{
    topic: "Withdraw a Student",

    category: "Daily Tasks",

    keywords: [
        "withdraw student",
        "student withdrawal",
        "withdrawal form",
        "student withdrawal record transfer form",
        "entry with withdraw",
        "drop inactivate schedule",
        "withdrawal code",
        "inactive student",
        "how do i withdraw a student"
    ],

    summary:
        "Print the Student Withdrawal/Record Transfer Form, then withdraw the student and inactivate the current schedule.",

    purpose:
        "Use this procedure to properly document and complete a student withdrawal from the campus.",

    procedure: [
        "Before withdrawing the student, go to Federal/State Reporting > Reports > Student Withdrawal/Record Transfer Form.",
        "If this is the first time using the report, click Add to create a report template.",
        "Enter a Template Description.",
        "Look up the student being withdrawn in the Student Key field.",
        "Select the information you want included on the withdrawal form.",
        "If Test Score parameters have not been configured, either configure them or uncheck the option to print test scores.",
        "Enter the most recently completed PEIMS Submission number.",
        "Enter the planned Withdrawal Date.",
        "Select Print Last Withdrawal Code.",
        "Click Save and Print.",
        "Go to Students > Student Profile and locate the student.",
        "While the student is still active, print the student's current schedule from the Scheduling tab.",
        "Print the student's report card from the Grading tab.",
        "Print the student's shot record from the Vaccination tab.",
        "Open the student's Entry/With tab.",
        "Make sure the most recent entry record is highlighted.",
        "Click Withdraw.",
        "Enter the Withdrawal Date.",
        "Enter the Withdrawal Code.",
        "Enter a Comment.",
        "Do not use Wth Code 2 or Wth Code 3 for Texas.",
        "Set Current Year Status to Inactive.",
        "Set Next Year Status to Inactive.",
        "Uncheck Include in Honor Roll and Rank if the student should no longer appear in those reports.",
        "Click Save.",
        "If the student has a current schedule, select Drop/Inactivate rather than Delete.",
        "Click Continue Withdrawal.",
        "Return to the Entry/With tab and verify the withdrawal date, code, school year, and grade level.",
        "Verify that the student now shows as Inactive on the campus."
    ],

    notes: [
        "Print the withdrawal form before actually withdrawing the student.",
        "The manual recommends printing the current schedule, report card, and shot record while the student is still active.",
        "Wth Code 2 and Wth Code 3 are not used in Texas.",
        "Use Drop/Inactivate for the current schedule rather than Delete.",
        "If the schedule is deleted and the student returns shortly afterward, the schedule would have to be rebuilt from scratch.",
        "After the withdrawal is complete, verify that the student is marked Inactive on the campus."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "159-164",

    related: [
        "Enroll a New Student"
    ]
},

]