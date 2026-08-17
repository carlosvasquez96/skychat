const enrollment = [
    {
        topic: "Withdraw a Student",

        category: "Enrollment",

        keywords: [
            "withdraw student",
            "withdraw a student",
            "student withdrawal",
            "withdrawal",
            "student moved",
            "student moved away",
            "remove student",
            "drop student",
            "exit student",
            "entry withdrawal"
        ],

        summary:
            "Steps for withdrawing a student from the campus in Skyward.",

            purpose:
            "Use this procedure when a student is leaving the campus or district and an official withdrawal must be recorded in Skyward.",

        navigation: [
            "Students",
            "Student Profile",
            "Entry / Withdrawal"
        ],

        procedure: [
            "Open Students and locate the student.",
            "Open the Entry / Withdrawal area.",
            "Review the current enrollment record.",
            "Enter the withdrawal date.",
            "Select the correct withdrawal code.",
            "Verify destination information if applicable.",
            "Save the withdrawal."
        ],

        notes: [
            "Verify the withdrawal date before saving.",
            "Review special-program records if applicable.",
            "Confirm schedule updates after the withdrawal."
        ],
        answer:
            "1. Open Students and locate the student's profile.\n\n" +
            "2. Open the Entry/Withdrawal area.\n\n" +
            "3. Review the student's current enrollment record before making changes.\n\n" +
            "4. Select the appropriate withdrawal option and enter the correct withdrawal date and withdrawal code.\n\n" +
            "5. Verify the student's destination and any other required withdrawal information.\n\n" +
            "6. Save the withdrawal record.\n\n" +
            "7. Review the student's schedule and special-program records to determine whether additional updates are required.",

                manual: "2026-2027 Skyward School Manual",
                page: "149",

        related: [
            "First Day Attendance and No-Show Procedures",
            "Enrollment Help"
        ]
    },

    {
        topic: "Enrollment Help",

        category: "Enrollment",

        keywords: [
            "enrollment",
            "enroll",
            "registration",
            "register",
            "new student",
            "add student"
        ],

        summary:
            "General assistance with student enrollment and registration.",

        answer:
            "For enrollment assistance, identify whether the student is new to the district, returning, transferring, or completing online enrollment. Include that information in your question so Sky Chatbox can locate the correct procedure."
    },

    {
    topic: "Code HOST POA and Transfer Students",

    category: "Enrollment",

    keywords: [
        "host student",
        "poa student",
        "transfer student",
        "code transfer student",
        "student from another district",
        "entry code 3",
        "entry code 6",
        "res dist 240903",
        "resident district united",
        "transfer enrollment"
    ],

    
        summary: 
        "Coding guidance for HOST, POA, and transfer students entering from another district.",

    purpose:
        "Use this procedure when enrolling or picking up a transfer student from another district and the appropriate entry and resident district coding is required.",

    navigation: [
        "Students",
        "Student Profile",
        "Entry/Withdrawal"
    ],

    procedure: [
    "Add the student's information, including family and address information.",
    "Add an entry record.",
    "Set the Entry Code to 3 for a full-day student or 6 for a half-day student.",
    "Set Res Dist to the student's appropriate resident district. Example: the manual shows 240903 (United) for a student transferring from United ISD.",
    "Save the Entry Information.",
    "From the Student Profile, go to the Categories tab and select Entity.",
    "Click Edit Category.",
    "Indicate whether the student has a Host Letter or Power of Attorney, as applicable.",
    "Click Save.",
    "Select Camp ID Res from the left-side tabs.",
    "Click Begins Sts.",
    "Enter the Start Date.",
    "Enter the Campus ID of Residence in the 240XXX format.",
    "Enter an Entrance Comment.",
    "Click Save."
],

    notes: [
        "Use Entry Code 3 for full-day students.",
        "Use Entry Code 6 for half-day students.",
        "IMPORTANT: 240903 (United) is an example shown in the manual. Do not use this value for every transfer student. Verify and enter the correct resident district for the individual student."
    ],

    manual:
        "2026-2027 LISD Skyward Manual",

    page:
        "39-42",

    related: [
        "Withdraw a Student",
        "Enrollment Help"
    ]
},
];