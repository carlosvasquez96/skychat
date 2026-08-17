// ======================================================
// SKYCHAT DATA MINING REPORT FINDER
// Searches the separate Data Mining / IT Report catalog
// ======================================================

function normalizeReportSearchText(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


// ======================================================
// REPORT SEARCH
// ======================================================

function findDataMiningReports(question) {
    if (!Array.isArray(dataMiningReports)) {
        console.error(
            "The dataMiningReports array was not found. " +
            "Make sure dataMiningReports.js loads before reportFinder.js."
        );

        return [];
    }

    const text = normalizeReportSearchText(question);

    const stopWords = new Set([
        "the",
        "and",
        "for",
        "with",
        "that",
        "this",
        "from",
        "what",
        "which",
        "where",
        "when",
        "how",
        "can",
        "could",
        "would",
        "should",
        "do",
        "does",
        "did",
        "get",
        "give",
        "show",
        "run",
        "report",
        "reports",
        "data",
        "mining",
        "student",
        "students",
        "all"
    ]);

    const searchWords = text
        .split(/\s+/)
        .filter(function (word) {
            return (
                word.length > 2 &&
                !stopWords.has(word)
            );
        });

    const matches = [];

    dataMiningReports.forEach(function (report) {
        let score = 0;

        const reportName =
            normalizeReportSearchText(
                report.reportName
            );

        const reportTitle =
            normalizeReportSearchText(
                report.reportTitle
            );

        const combinedText =
            reportName + " " + reportTitle;

        // --------------------------------------------------
        // Exact report number/name
        // --------------------------------------------------

        if (
            text === reportName ||
            text.includes(reportName)
        ) {
            score += 100;
        }

        // --------------------------------------------------
        // Exact/full title phrase
        // --------------------------------------------------

        if (
            reportTitle &&
            text.includes(reportTitle)
        ) {
            score += 80;
        }

        // --------------------------------------------------
        // Individual meaningful words
        // --------------------------------------------------

        searchWords.forEach(function (word) {
            if (combinedText.includes(word)) {
                score += 8;
            }
        });

        // --------------------------------------------------
        // Common Skyward terminology / synonyms
        // --------------------------------------------------

        const synonymGroups = [
            {
                words: [
                    "sped",
                    "special ed",
                    "special education"
                ],
                reportTerms: [
                    "special ed",
                    "special education"
                ]
            },
            {
                words: [
                    "lep",
                    "ell",
                    "english learner",
                    "english language learner"
                ],
                reportTerms: [
                    "lep",
                    "ell"
                ]
            },
            {
                words: [
                    "dyslexia",
                    "dyslexic"
                ],
                reportTerms: [
                    "dyslexia"
                ]
            },
            {
                words: [
                    "at risk",
                    "atrisk"
                ],
                reportTerms: [
                    "at risk"
                ]
            },
            {
                words: [
                    "no show",
                    "noshow"
                ],
                reportTerms: [
                    "no show"
                ]
            }
        ];

        synonymGroups.forEach(function (group) {
            const questionHasTerm =
                group.words.some(function (term) {
                    return text.includes(term);
                });

            const reportHasTerm =
                group.reportTerms.some(function (term) {
                    return combinedText.includes(term);
                });

            if (questionHasTerm && reportHasTerm) {
                score += 30;
            }
        });

        // --------------------------------------------------
        // Save matching report
        // --------------------------------------------------

        if (score > 0) {
            matches.push({
                report: report,
                score: score
            });
        }
    });

    matches.sort(function (a, b) {
        return b.score - a.score;
    });

    return matches
        .filter(function (match) {
            return match.score >= 8;
        })
        .slice(0, 5);
}

// ======================================================
// REPORT SEARCH INTENT
// Determines whether the user is asking for a
// Data Mining / IT Report.
// ======================================================

function isDataMiningReportQuestion(question) {
    const text = normalizeReportSearchText(question);

    const reportPhrases = [
        "what report",
        "which report",
        "what data mining",
        "which data mining",
        "data mining report",
        "it report",
        "what report can i use",
        "what report can i run",
        "which report can i use",
        "which report can i run",
        "report for",
        "report to get",
        "report that shows"
    ];

    const hasReportPhrase =
    reportPhrases.some(function (phrase) {
        return text.includes(phrase);
    });

const hasReportWord =
    text.split(/\s+/).includes("report");

return hasReportPhrase || hasReportWord;
}