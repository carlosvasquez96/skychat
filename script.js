// ======================================================
// SKYCHAT
// Part 1: Setup, Messages, and Article Cards
// ======================================================

// Connect JavaScript to the HTML elements.
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");
const suggestions = document.getElementById("suggestions");


// ======================================================
// ACTIVE KNOWLEDGE BASE
// ======================================================

let activeKnowledgeBase = [];

function refreshActiveKnowledgeBase() {
    activeKnowledgeBase = getKnowledgeBase();
}
// ======================================================
// BASIC MESSAGE DISPLAY
// ======================================================

/**
 * Displays a normal user or bot message.
 *
 * @param {string} message - Message text to display.
 * @param {string} sender - Either "user" or "bot".
 */
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    // Preserve blank lines in greetings and other responses.
    messageDiv.style.whiteSpace = "pre-line";
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);

    scrollChatToBottom();
}


/**
 * Keeps the newest message visible.
 */
function scrollChatToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ======================================================
// ARTICLE CARD DISPLAY
// ======================================================

/**
 * Displays a knowledge-base article as a formatted card.
 *
 * @param {Object} article - Knowledge-base article object.
 */
function addArticleCard(article) {
    recordArticleView(article.topic);
    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        "bot-message",
        "article-message"
    );

    const card = document.createElement("div");
    card.classList.add("response-card");


    // --------------------------------------------------
    // Article title
    // --------------------------------------------------

    const articleHeading =
    document.createElement("div");

articleHeading.classList.add(
    "article-heading"
);

const title =
    document.createElement("h3");

title.classList.add("response-title");

title.textContent =
    article.topic || "Skyward Help";

const favoriteButton =
    document.createElement("button");

favoriteButton.type = "button";

favoriteButton.classList.add(
    "favorite-article-button"
);

favoriteButton.dataset.topic =
    article.topic || "Skyward Help";

updateFavoriteButton(
    favoriteButton,
    isFavoriteArticle(
        article.topic || "Skyward Help"
    )
);

favoriteButton.addEventListener(
    "click",
    function () {
        toggleFavoriteArticle(
            article,
            favoriteButton
        );
    }
);

articleHeading.appendChild(title);
articleHeading.appendChild(favoriteButton);

card.appendChild(articleHeading);


    // --------------------------------------------------
    // Category badge
    // --------------------------------------------------

    if (article.category) {
        const category = document.createElement("span");

        category.classList.add("category-badge");
        category.textContent = article.category;

        card.appendChild(category);
    }


    // --------------------------------------------------
    // Article summary
    // --------------------------------------------------

    if (article.summary) {
        const summaryLabel = document.createElement("p");

        summaryLabel.classList.add("section-label");
        summaryLabel.textContent = "Summary";

        const summary = document.createElement("p");

        summary.classList.add("response-summary");
        summary.textContent = article.summary;

        card.appendChild(summaryLabel);
        card.appendChild(summary);
    }


    // --------------------------------------------------
    // Divider
    // --------------------------------------------------

    const divider = document.createElement("hr");

    divider.classList.add("response-divider");

    card.appendChild(divider);


    // --------------------------------------------------
// Purpose
// --------------------------------------------------

if (article.purpose) {
    const purposeTitle = document.createElement("p");

    purposeTitle.classList.add("section-label");
    purposeTitle.textContent = "Purpose";

    card.appendChild(purposeTitle);


    const purposeText = document.createElement("p");

    purposeText.classList.add("article-purpose");
    purposeText.textContent = article.purpose;

    card.appendChild(purposeText);
}


// --------------------------------------------------
// Navigation
// --------------------------------------------------

if (
    Array.isArray(article.navigation) &&
    article.navigation.length > 0
) {
    const navigationDivider =
        document.createElement("hr");

    navigationDivider.classList.add(
        "response-divider"
    );

    card.appendChild(navigationDivider);


    const navigationTitle =
        document.createElement("p");

    navigationTitle.classList.add(
        "section-label"
    );

    navigationTitle.textContent =
        "Navigation";

    card.appendChild(navigationTitle);


    const navigationText =
        document.createElement("p");

    navigationText.classList.add(
        "article-navigation"
    );

    navigationText.textContent =
        article.navigation.join(" → ");

    card.appendChild(navigationText);
}


// --------------------------------------------------
// Procedure
// --------------------------------------------------

if (
    Array.isArray(article.procedure) &&
    article.procedure.length > 0
) {
    const procedureDivider =
        document.createElement("hr");

    procedureDivider.classList.add(
        "response-divider"
    );

    card.appendChild(procedureDivider);


    const procedureTitle =
        document.createElement("p");

    procedureTitle.classList.add(
        "section-label"
    );

    procedureTitle.textContent =
        "Procedure";

    card.appendChild(procedureTitle);


    const procedureList =
        document.createElement("ol");

    procedureList.classList.add(
        "article-procedure"
    );


    article.procedure.forEach(
        function (step) {
            const listItem =
                document.createElement("li");

            listItem.textContent = step;

            procedureList.appendChild(
                listItem
            );
        }
    );


    card.appendChild(procedureList);
}


// --------------------------------------------------
// Notes
// --------------------------------------------------

if (
    Array.isArray(article.notes) &&
    article.notes.length > 0
) {
    const notesDivider =
        document.createElement("hr");

    notesDivider.classList.add(
        "response-divider"
    );

    card.appendChild(notesDivider);


    const notesTitle =
        document.createElement("p");

    notesTitle.classList.add(
        "section-label"
    );

    notesTitle.textContent =
        "Notes";

    card.appendChild(notesTitle);


    const notesList =
        document.createElement("ul");

    notesList.classList.add(
        "article-notes"
    );


    article.notes.forEach(
        function (note) {
            const listItem =
                document.createElement("li");

            listItem.textContent = note;

            notesList.appendChild(
                listItem
            );
        }
    );


    card.appendChild(notesList);
}


// --------------------------------------------------
// Main answer for older articles
// --------------------------------------------------

if (
    article.answer &&
    !(
        Array.isArray(article.procedure) &&
        article.procedure.length > 0
    )
) {
    const answer = document.createElement("div");

    answer.classList.add("response-answer");
    answer.style.whiteSpace = "pre-line";
    answer.textContent = article.answer;

    card.appendChild(answer);
}

    // --------------------------------------------------
// Source manual and page
// --------------------------------------------------

if (article.manual || article.page) {
    const sourceDivider = document.createElement("hr");

    sourceDivider.classList.add("response-divider");

    card.appendChild(sourceDivider);


    const sourceTitle = document.createElement("p");

    sourceTitle.classList.add("section-label");
    sourceTitle.textContent = "Source";

    card.appendChild(sourceTitle);


    const sourceContainer = document.createElement("div");

    sourceContainer.classList.add("article-source");


    if (article.manual) {
        const manualText = document.createElement("p");

        manualText.classList.add("source-manual");
        manualText.textContent = article.manual;

        sourceContainer.appendChild(manualText);
    }


    if (article.page) {
        const pageText = document.createElement("p");

        pageText.classList.add("source-page");
        pageText.textContent =
            article.page.toString().includes("-")
                ? "Pages " + article.page
                : "Page " + article.page;

        sourceContainer.appendChild(pageText);
    }


    card.appendChild(sourceContainer);
}

// --------------------------------------------------
// Documents / Guides
// --------------------------------------------------

if (
    Array.isArray(article.documents) &&
    article.documents.length > 0
) {
    const documentsDivider =
        document.createElement("hr");

    documentsDivider.classList.add(
        "response-divider"
    );

    card.appendChild(documentsDivider);


    const documentsTitle =
        document.createElement("p");

    documentsTitle.classList.add(
        "section-label"
    );

    documentsTitle.textContent =
        "Guides";

    card.appendChild(documentsTitle);


    const documentsContainer =
        document.createElement("div");

    documentsContainer.classList.add(
        "article-documents"
    );


    article.documents.forEach(
        function (documentItem) {
            const documentButton =
                document.createElement("button");

            documentButton.type = "button";

            documentButton.classList.add(
                "document-button"
            );

            documentButton.textContent =
                documentItem.label;

            documentButton.addEventListener(
                "click",
                function () {
                    window.open(
                        documentItem.file,
                        "_blank"
                    );
                }
            );

            documentsContainer.appendChild(
                documentButton
            );
        }
    );


    card.appendChild(documentsContainer);
}
   // --------------------------------------------------
// Related articles
// --------------------------------------------------

if (
    Array.isArray(article.related) &&
    article.related.length > 0
) {

    // Only show related procedures that actually
    // exist in the active knowledge base.
    const availableRelatedArticles =
        article.related.filter(function (relatedTopic) {

            return activeKnowledgeBase.some(function (item) {
                return String(item.topic || "")
                    .toLowerCase()
                    .trim() ===
                    String(relatedTopic)
                        .toLowerCase()
                        .trim();
            });

        });

    if (availableRelatedArticles.length > 0) {

        const relatedDivider =
            document.createElement("hr");

        relatedDivider.classList.add(
            "response-divider"
        );

        card.appendChild(relatedDivider);


        const relatedTitle =
            document.createElement("p");

        relatedTitle.classList.add(
            "section-label"
        );

        relatedTitle.textContent =
            "Related Procedures";

        card.appendChild(relatedTitle);


        const relatedContainer =
            document.createElement("div");

        relatedContainer.classList.add(
            "related-articles"
        );


        availableRelatedArticles.forEach(
            function (relatedTopic) {

                const relatedButton =
                    document.createElement("button");

                relatedButton.type = "button";

                relatedButton.classList.add(
                    "related-button"
                );

                relatedButton.textContent =
                    relatedTopic;

                relatedButton.addEventListener(
                    "click",
                    function () {
                        openRelatedArticle(
                            relatedTopic
                        );
                    }
                );

                relatedContainer.appendChild(
                    relatedButton
                );
            }
        );

        card.appendChild(
            relatedContainer
        );
    }
}


// KEEP THESE LINES
messageDiv.appendChild(card);
chatMessages.appendChild(messageDiv);

chatMessages.scrollTo({
    top: messageDiv.offsetTop - chatMessages.offsetTop,
    behavior: "smooth"
});
}

// ======================================================
// TYPING ANIMATION
// ======================================================

/**
 * Creates and displays the three-dot typing animation.
 *
 * @returns {HTMLElement} The typing message element.
 */
function createTypingMessage() {
    const typingMessage = document.createElement("div");

    typingMessage.classList.add(
        "message",
        "bot-message"
    );

    typingMessage.innerHTML = `
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatMessages.appendChild(typingMessage);

    scrollChatToBottom();

    return typingMessage;
}


/**
 * Shows typing dots and then displays a normal text message.
 *
 * This is the function that was missing from your old code.
 *
 * @param {string} text - Bot response text.
 */
function showTypingText(text) {
    const typingMessage = createTypingMessage();

    setTimeout(function () {
        typingMessage.remove();

        addMessage(text, "bot");
    }, 800);
}


/**
 * Shows typing dots and then displays an article card.
 *
 * @param {Object} article - Article to display.
 */
function showTypingIndicator(article) {
    const typingMessage = createTypingMessage();

    setTimeout(function () {
        typingMessage.remove();

        addArticleCard(article);
    }, 800);
}
// ======================================================
// CONVERSATION ENGINE
// ======================================================

/**
 * Returns a simple conversational response for greetings,
 * thanks, and goodbyes.
 *
 * @param {string} message - User message.
 * @returns {string|null} Conversation response or null.
 */
function getConversationResponse(message) {
    const text = message.toLowerCase().trim();

    const greetings = [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good afternoon",
        "good evening"
    ];

    const thanks = [
        "thanks",
        "thank you",
        "thx",
        "thanks for your help"
    ];

    const goodbyes = [
        "bye",
        "goodbye",
        "see you",
        "talk to you later"
    ];


    if (greetings.includes(text)) {
        return (
            "👋 Hello! Welcome to SkyChat.\n\n" +
            "How can I help you with Skyward today?"
        );
    }


    if (thanks.includes(text)) {
        return (
            "😊 You're very welcome!\n\n" +
            "Happy to help."
        );
    }


    if (goodbyes.includes(text)) {
        return (
            "👋 Have a great day!\n\n" +
            "Come back anytime you need Skyward help."
        );
    }


    return null;
}


// ======================================================
// KNOWLEDGE-BASE SEARCH
// ======================================================

/**
 * Searches the knowledge base and returns up to three
 * matching articles.
 *
 * @param {string} question - User question.
 * @returns {Array} Matching articles.
 */
/**
 * Cleans a user's question before searching.
 *
 * Examples:
 * "How do I reset my password?"
 * becomes:
 * "reset password"
 */
function normalizeSearchText(message) {
    const fillerWords = [
        "a",
        "an",
        "the",
        "i",
        "my",
        "me",
        "we",
        "our",
        "you",
        "your",
        "he",
        "she",
        "his",
        "her",
        "they",
        "their",
        "do",
        "does",
        "did",
        "how",
        "what",
        "where",
        "when",
        "why",
        "can",
        "could",
        "would",
        "should",
        "please",
        "need",
        "want",
        "to",
        "for",
        "of",
        "on",
        "in",
        "at",
        "with",
        "is",
        "are",
        "was",
        "were"
    ];

    return String(message)
        .toLowerCase()
        .replace(/[^\w\s']/g, " ")
        .split(/\s+/)
        .filter(function (word) {
            return (
                word.length > 0 &&
                !fillerWords.includes(word)
            );
        })
        .join(" ")
        .trim();
}
function getBotResponses(question) {
    const text = normalizeSearchText(question);
    const matches = [];

    // Words that are too common to help identify
    // a specific Skyward procedure.
    const stopWords = new Set([
        "the",
        "and",
        "for",
        "with",
        "that",
        "this",
        "from",
        "into",
        "what",
        "when",
        "where",
        "which",
        "who",
        "why",
        "how",
        "can",
        "could",
        "would",
        "should",
        "does",
        "do",
        "did",
        "have",
        "has",
        "had",
        "get",
        "go",
        "make",
        "student",
        "students",
        "skyward"
    ]);

    // Make sure the knowledge base exists.
    if (!Array.isArray(activeKnowledgeBase)) {
        console.error(
            "The knowledgeBase array was not found. " +
            "Check the order of your script files in index.html."
        );

        return [];
    }

    const questionWords = text
        .split(/\s+/)
        .filter(function (word) {
            return (
                word.length > 2 &&
                !stopWords.has(word)
            );
        });

    activeKnowledgeBase.forEach(function (item) {
        let score = 0;

        const topic = normalizeSearchText(
            String(item.topic || "")
        );

        const keywords = Array.isArray(item.keywords)
            ? item.keywords
            : [];

        // ----------------------------------------------
        // Exact topic match
        // ----------------------------------------------

        if (text === topic) {
            score += 100;
        }

        // ----------------------------------------------
        // Topic phrase match
        // ----------------------------------------------

        if (
            topic.includes(text) ||
            text.includes(topic)
        ) {
            score += 40;
        }

        // ----------------------------------------------
        // Important words appearing in topic
        // ----------------------------------------------

        questionWords.forEach(function (word) {
            const topicWords = topic.split(/\s+/);

            if (topicWords.includes(word)) {
                score += 5;
            }
        });

        // ----------------------------------------------
        // Keyword matching
        // ----------------------------------------------

        keywords.forEach(function (keyword) {
            const cleanKeyword =
                normalizeSearchText(keyword);

            // Exact keyword/question match
            if (text === cleanKeyword) {
                score += 80;
            }

            // Full keyword phrase appears in question
            if (
                cleanKeyword.length > 2 &&
                text.includes(cleanKeyword)
            ) {
                score += 30;
            }

            // Question appears inside keyword
            if (
                text.length > 4 &&
                cleanKeyword.includes(text)
            ) {
                score += 20;
            }

            // Important individual words
            questionWords.forEach(function (word) {
                const keywordWords =
                    cleanKeyword.split(/\s+/);

                if (keywordWords.includes(word)) {
                    score += 3;
                }
            });
        });

        // ----------------------------------------------
        // Save matching article
        // ----------------------------------------------

        if (score > 0) {
            matches.push({
                article: item,
                score: score
            });
        }
    });

    // Highest score first.
    matches.sort(function (a, b) {
        return b.score - a.score;
    });

    if (matches.length === 0) {
        return [];
    }

    // ----------------------------------------------
    // Keep only reasonably close matches
    // ----------------------------------------------

    const bestScore = matches[0].score;

    const strongMatches = matches.filter(function (match) {
        return (
            match.score >= 10 &&
            match.score >= bestScore * 0.5
        );
    });

    // ----------------------------------------------
    // Remove duplicate topic names
    // ----------------------------------------------

    const uniqueArticles = [];
    const usedTopics = new Set();

    strongMatches.forEach(function (match) {
        const topicKey =
            normalizeSearchText(
                String(match.article.topic || "")
            );

        if (!usedTopics.has(topicKey)) {
            usedTopics.add(topicKey);
            uniqueArticles.push(match.article);
        }
    });

    return uniqueArticles.slice(0, 3);
}


// ======================================================
// RELATED ARTICLE OPENING
// ======================================================

/**
 * Opens an article selected from the Related Articles area.
 *
 * @param {string} topic - Related article topic.
 */
function openRelatedArticle(topic) {
    if (!Array.isArray(activeKnowledgeBase)) {
        showTypingText(
            "The Skyward knowledge base could not be loaded."
        );

        return;
    }


   const article = activeKnowledgeBase.find(function (item) {
        return String(item.topic || "")
            .toLowerCase()
            .trim() === String(topic)
            .toLowerCase()
            .trim();
    });


    addMessage(topic, "user");


    if (!article) {
        showTypingText(
            "That related article has not been completed yet."
        );

        return;
    }


    showTypingIndicator(article);
}
// ======================================================
// MULTIPLE ARTICLE CHOICES
// ======================================================

/**
 * Displays buttons when more than one article matches
 * the user's question.
 *
 * @param {Array} articles - Matching knowledge-base articles.
 */
function showArticleChoices(articles) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        "bot-message",
        "article-message"
    );


    const card = document.createElement("div");

    card.classList.add("response-card");


    // --------------------------------------------------
    // Card title
    // --------------------------------------------------

    const title = document.createElement("h3");

    title.classList.add("response-title");
    title.textContent = "I found a few possible articles";

    card.appendChild(title);


    // --------------------------------------------------
    // Instructions
    // --------------------------------------------------

    const instructions = document.createElement("p");

    instructions.textContent =
        "Select the article that best matches your question.";

    card.appendChild(instructions);


    // --------------------------------------------------
    // Article buttons
    // --------------------------------------------------

    const choicesContainer = document.createElement("div");

    choicesContainer.classList.add("related-articles");


    articles.forEach(function (article) {
        const articleButton = document.createElement("button");

        articleButton.type = "button";
        articleButton.classList.add("related-button");
        articleButton.textContent =
            article.topic || "Open article";


        articleButton.addEventListener("click", function () {
            addMessage(
                article.topic || "Open article",
                "user"
            );

            showTypingIndicator(article);
        });


        choicesContainer.appendChild(articleButton);
    });


    card.appendChild(choicesContainer);
    messageDiv.appendChild(card);
    chatMessages.appendChild(messageDiv);

    scrollChatToBottom();
}
// ======================================================
// DATA MINING REPORT RESULTS
// ======================================================

function showDataMiningReportChoices(matches) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        "bot-message",
        "article-message"
    );


    const card = document.createElement("div");

    card.classList.add("response-card");


    // --------------------------------------------------
    // Card title
    // --------------------------------------------------

    const title = document.createElement("h3");

    title.classList.add("response-title");

    title.textContent =
        "Recommended Data Mining Reports";

    card.appendChild(title);


    // --------------------------------------------------
    // Instructions
    // --------------------------------------------------

    const instructions =
        document.createElement("p");

    instructions.textContent =
        "I found these IT Reports that may match your request.";

    card.appendChild(instructions);


    // --------------------------------------------------
    // Report results
    // --------------------------------------------------

    const resultsContainer =
        document.createElement("div");

    resultsContainer.classList.add(
        "data-mining-results"
    );


    matches.forEach(function (match, index) {
        const report = match.report;

        const reportItem =
            document.createElement("div");

        reportItem.classList.add(
            "data-mining-result"
        );


        const reportTitle =
            document.createElement("strong");

        reportTitle.textContent =
            report.reportName ||
            "Data Mining Report";

        reportItem.appendChild(
            reportTitle
        );


        if (report.reportTitle) {
            const description =
                document.createElement("p");

            description.textContent =
                report.reportTitle;

            reportItem.appendChild(
                description
            );
        }


        if (index === 0) {
            const bestMatch =
                document.createElement("span");

            bestMatch.classList.add(
                "report-best-match"
            );

            bestMatch.textContent =
                "Closest match";

            reportItem.appendChild(
                bestMatch
            );
        }


        resultsContainer.appendChild(
            reportItem
        );
    });


    card.appendChild(resultsContainer);


    // --------------------------------------------------
    // Verification notice
    // --------------------------------------------------

    const notice =
        document.createElement("p");

    notice.classList.add("pilot-notice");

    notice.textContent =
        "Report recommendations are based on the IT Report catalog. Verify the available ranges and filters before running the report.";

    card.appendChild(notice);


    messageDiv.appendChild(card);

    chatMessages.appendChild(
        messageDiv
    );

    scrollChatToBottom();
}

// ======================================================
// MAIN MESSAGE PROCESSING
// ======================================================

/**
 * Reads the user's message and decides whether to:
 *
 * 1. Respond conversationally
 * 2. Display one matching article
 * 3. Display several article choices
 * 4. Display the fallback message
 */
function sendMessage() {
    const question = userInput.value.trim();


    // Do nothing when the message box is empty.
    if (question === "") {
        return;
    }


    // Display the user's message.
    addMessage(question, "user");


    // Clear and reset the input field.
    userInput.value = "";
    hideSuggestions();
    userInput.focus();


    // --------------------------------------------------
    // Step 1: Check conversation responses
    // --------------------------------------------------

    const conversationResponse =
        getConversationResponse(question);


    if (conversationResponse !== null) {
        showTypingText(conversationResponse);
        return;
    }
// --------------------------------------------------
// Step 2: Check for Data Mining / IT Report request
// --------------------------------------------------

if (isDataMiningReportQuestion(question)) {
    const reportMatches =
        findDataMiningReports(question);

    if (reportMatches.length > 0) {
        showDataMiningReportChoices(
            reportMatches
        );

        return;
    }
}

    // --------------------------------------------------
    // Step 3: Search the Skyward knowledge base
    // --------------------------------------------------

    const matchingArticles =
        getBotResponses(question);


    // --------------------------------------------------
    // Step 4: Show one article
    // --------------------------------------------------

    if (matchingArticles.length === 1) {
        showTypingIndicator(
            matchingArticles[0]
        );

        return;
    }


    // --------------------------------------------------
    // Step 5: Show several article choices
    // --------------------------------------------------

    if (matchingArticles.length > 1) {
        showArticleChoices(
            matchingArticles
        );

        return;
    }


// --------------------------------------------------
// Step 5: No answer found
// --------------------------------------------------

recordUnansweredQuestion(question);

showTypingText(
    "I'm sorry, I couldn't find an answer for that question yet.\n\n" +
    "Try using a shorter phrase, such as password, attendance, " +
    "gradebook, reports, or student information."
);
}
// ======================================================
// AUTOCOMPLETE SUGGESTIONS
// ======================================================

/**
 * Displays article suggestions while the user types.
 *
 * @param {string} searchText - Current input field text.
 */
function showSuggestions(searchText) {
    suggestions.innerHTML = "";

    const cleanSearch = searchText
        .toLowerCase()
        .trim();


    // Do not show suggestions for very short input.
    if (cleanSearch.length < 2) {
        hideSuggestions();
        return;
    }


    // Make sure the knowledge base is available.
    if (!Array.isArray(activeKnowledgeBase)) {
        hideSuggestions();
        return;
    }


    const matches = activeKnowledgeBase.filter(function (article) {
        const topic = String(article.topic || "")
            .toLowerCase();

        const keywords = Array.isArray(article.keywords)
            ? article.keywords
            : [];


        const topicMatch =
            topic.includes(cleanSearch);


        const keywordMatch = keywords.some(function (keyword) {
            return String(keyword)
                .toLowerCase()
                .includes(cleanSearch);
        });


        return topicMatch || keywordMatch;
    });


    if (matches.length === 0) {
        hideSuggestions();
        return;
    }


    matches.slice(0, 5).forEach(function (article) {
        const suggestionItem =
            document.createElement("div");

        suggestionItem.classList.add(
            "suggestion-item"
        );


        const topic =
            document.createElement("span");

        topic.classList.add(
            "suggestion-topic"
        );

        topic.textContent =
            article.topic || "Skyward Help";


        const hint =
            document.createElement("span");

        hint.classList.add(
            "suggestion-hint"
        );

        hint.textContent =
            "Click to ask about this topic";


        suggestionItem.appendChild(topic);
        suggestionItem.appendChild(hint);


        suggestionItem.addEventListener(
            "click",
            function () {
                userInput.value =
                    article.topic || "";

                hideSuggestions();
                sendMessage();
            }
        );


        suggestions.appendChild(
            suggestionItem
        );
    });


    suggestions.style.display = "block";
}


/**
 * Hides and clears autocomplete suggestions.
 */
function hideSuggestions() {
    suggestions.style.display = "none";
    suggestions.innerHTML = "";
}

// ======================================================
// CATEGORY BROWSER
// ======================================================

/**
 * Builds the sidebar category browser using the
 * categories already stored in the knowledge base.
 */
function buildCategoryBrowser() {
    const categoryBrowser =
        document.getElementById("categoryBrowser");

    if (!categoryBrowser) {
        return;
    }

    if (!Array.isArray(activeKnowledgeBase)) {
        categoryBrowser.textContent =
            "The knowledge base could not be loaded.";

        return;
    }

    categoryBrowser.innerHTML = "";

    const categories = {};

    activeKnowledgeBase.forEach(function (article) {
        const category =
            String(article.category || "Other").trim();

        if (!categories[category]) {
            categories[category] = [];
        }

        categories[category].push(article);
    });

    Object.keys(categories)
        .sort()
        .forEach(function (categoryName) {
            const categorySection =
                document.createElement("div");

            categorySection.classList.add(
                "category-section"
            );

            const categoryButton =
                document.createElement("button");

            categoryButton.type = "button";
            categoryButton.classList.add(
                "category-toggle"
            );

            const categoryLabel =
                document.createElement("span");

            categoryLabel.textContent =
                categoryName;

            const categoryCount =
                document.createElement("span");

            categoryCount.classList.add(
                "category-count"
            );

            categoryCount.textContent =
                categories[categoryName].length;

            categoryButton.appendChild(
                categoryLabel
            );

            categoryButton.appendChild(
                categoryCount
            );

            const articleList =
                document.createElement("div");

            articleList.classList.add(
                "category-article-list"
            );

            categories[categoryName]
                .sort(function (a, b) {
                    return String(a.topic || "")
                        .localeCompare(
                            String(b.topic || "")
                        );
                })
                .forEach(function (article) {
                    const articleButton =
                        document.createElement("button");

                    articleButton.type = "button";

                    articleButton.classList.add(
                        "category-article-button"
                    );

                    articleButton.textContent =
                        article.topic ||
                        "Skyward Help";

                    articleButton.addEventListener(
                        "click",
                        function () {
                            addMessage(
                                article.topic ||
                                "Skyward Help",
                                "user"
                            );

                            showTypingIndicator(
                                article
                            );

                            chatMessages.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    );

                    articleList.appendChild(
                        articleButton
                    );
                });

            categoryButton.addEventListener(
                "click",
                function () {
                    const isOpen =
                        articleList.classList
                            .contains("open");

                    document
                        .querySelectorAll(
                            ".category-article-list.open"
                        )
                        .forEach(function (list) {
                            list.classList.remove(
                                "open"
                            );
                        });

                    document
                        .querySelectorAll(
                            ".category-toggle.active"
                        )
                        .forEach(function (button) {
                            button.classList.remove(
                                "active"
                            );
                        });

                    if (!isOpen) {
                        articleList.classList.add(
                            "open"
                        );

                        categoryButton.classList.add(
                            "active"
                        );
                    }
                }
            );

            categorySection.appendChild(
                categoryButton
            );

            categorySection.appendChild(
                articleList
            );

            categoryBrowser.appendChild(
                categorySection
            );
        });
}
// ======================================================
// FAVORITE ARTICLES
// ======================================================

/**
 * Returns the list of favorite article topics saved
 * in the browser.
 */
function getFavoriteTopics() {
    try {
        const savedFavorites =
            localStorage.getItem("skyChatboxFavorites");

        if (!savedFavorites) {
            return [];
        }

        const favorites =
            JSON.parse(savedFavorites);

        return Array.isArray(favorites)
            ? favorites
            : [];
    } catch (error) {
        console.error(
            "Favorites could not be loaded.",
            error
        );

        return [];
    }
}


/**
 * Saves favorite article topics in the browser.
 */
function saveFavoriteTopics(favorites) {
    try {
        localStorage.setItem(
            "skyChatboxFavorites",
            JSON.stringify(favorites)
        );
    } catch (error) {
        console.error(
            "Favorites could not be saved.",
            error
        );
    }
}


/**
 * Checks whether an article is already a favorite.
 */
function isFavoriteArticle(topic) {
    const favorites = getFavoriteTopics();

    return favorites.includes(topic);
}


/**
 * Adds or removes an article from Favorites.
 */
function toggleFavoriteArticle(article, button) {
    const topic =
        String(article.topic || "Skyward Help");

    let favorites = getFavoriteTopics();

    if (favorites.includes(topic)) {
        favorites = favorites.filter(
            function (favoriteTopic) {
                return favoriteTopic !== topic;
            }
        );
    } else {
        favorites.push(topic);
    }

    saveFavoriteTopics(favorites);

    updateFavoriteButton(
        button,
        favorites.includes(topic)
    );

    renderFavorites();
}


/**
 * Updates the appearance and label of a favorite button.
 */
function updateFavoriteButton(button, isFavorite) {
    if (!button) {
        return;
    }

    button.classList.toggle(
        "active",
        isFavorite
    );

    button.textContent =
        isFavorite ? "★" : "☆";

    button.title =
        isFavorite
            ? "Remove from Favorites"
            : "Add to Favorites";

    button.setAttribute(
        "aria-label",
        button.title
    );
}


/**
 * Opens an article by its exact topic name.
 */
function openArticleByTopic(topic) {
    if (!Array.isArray(activeKnowledgeBase)) {
        return;
    }

    const article = activeKnowledgeBase.find(
        function (item) {
            return String(item.topic || "")
                .toLowerCase()
                .trim() ===
                String(topic)
                    .toLowerCase()
                    .trim();
        }
    );

    if (!article) {
        showTypingText(
            "That favorite article is no longer available."
        );

        return;
    }

    addMessage(
        article.topic || "Skyward Help",
        "user"
    );

    showTypingIndicator(article);

    chatMessages.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/**
 * Displays saved favorites in the sidebar.
 */
function renderFavorites() {
    const favoritesList =
        document.getElementById("favoritesList");

    if (!favoritesList) {
        return;
    }

    favoritesList.innerHTML = "";

    const favorites = getFavoriteTopics();

    if (favorites.length === 0) {
        const emptyMessage =
            document.createElement("span");

        emptyMessage.classList.add(
            "favorites-empty"
        );

        emptyMessage.textContent =
            "No favorite articles yet.";

        favoritesList.appendChild(
            emptyMessage
        );

        return;
    }

    favorites.forEach(function (topic) {
        const favoriteItem =
            document.createElement("div");

        favoriteItem.classList.add(
            "favorite-item"
        );

        const openButton =
            document.createElement("button");

        openButton.type = "button";

        openButton.classList.add(
            "favorite-open-button"
        );

        openButton.textContent = topic;

        openButton.addEventListener(
            "click",
            function () {
                openArticleByTopic(topic);
            }
        );

        const removeButton =
            document.createElement("button");

        removeButton.type = "button";

        removeButton.classList.add(
            "favorite-remove-button"
        );

        removeButton.textContent = "×";

        removeButton.title =
            "Remove from Favorites";

        removeButton.setAttribute(
            "aria-label",
            "Remove " + topic + " from Favorites"
        );

        removeButton.addEventListener(
            "click",
            function () {
                const updatedFavorites =
                    getFavoriteTopics().filter(
                        function (favoriteTopic) {
                            return favoriteTopic !== topic;
                        }
                    );

                saveFavoriteTopics(
                    updatedFavorites
                );

                renderFavorites();

                document
                    .querySelectorAll(
                        ".favorite-article-button"
                    )
                    .forEach(function (button) {
                        if (
                            button.dataset.topic === topic
                        ) {
                            updateFavoriteButton(
                                button,
                                false
                            );
                        }
                    });
            }
        );

        favoriteItem.appendChild(
            openButton
        );

        favoriteItem.appendChild(
            removeButton
        );

        favoritesList.appendChild(
            favoriteItem
        );
    });
}
// ======================================================
// UNANSWERED QUESTION TRACKING
// ======================================================

/**
 * Returns unanswered questions saved in the browser.
 */
function getUnansweredQuestions() {
    try {
        const savedQuestions =
            localStorage.getItem("skyChatboxUnanswered");

        if (!savedQuestions) {
            return [];
        }

        const questions =
            JSON.parse(savedQuestions);

        return Array.isArray(questions)
            ? questions
            : [];
    } catch (error) {
        console.error(
            "Unanswered questions could not be loaded.",
            error
        );

        return [];
    }
}


/**
 * Saves unanswered questions in the browser.
 */
function saveUnansweredQuestions(questions) {
    try {
        localStorage.setItem(
            "skyChatboxUnanswered",
            JSON.stringify(questions)
        );
    } catch (error) {
        console.error(
            "Unanswered questions could not be saved.",
            error
        );
    }
}


/**
 * Records a question that did not match any article.
 */
function recordUnansweredQuestion(question) {
    const cleanQuestion =
        String(question || "").trim();

    if (!cleanQuestion) {
        return;
    }

    const questions =
        getUnansweredQuestions();

    const existingQuestion =
        questions.find(function (item) {
            return String(item.question || "")
                .toLowerCase()
                .trim() ===
                cleanQuestion
                    .toLowerCase()
                    .trim();
        });

    if (existingQuestion) {
        existingQuestion.count =
            Number(existingQuestion.count || 1) + 1;

        existingQuestion.lastAsked =
            new Date().toISOString();
    } else {
        questions.push({
            question: cleanQuestion,
            count: 1,
            firstAsked: new Date().toISOString(),
            lastAsked: new Date().toISOString()
        });
    }

    saveUnansweredQuestions(questions);
}
// ======================================================
// ARTICLE ANALYTICS
// ======================================================

function getArticleAnalytics() {

    try {

        const saved =
            localStorage.getItem("skyChatboxAnalytics");

        if (!saved) {
            return [];
        }

        const analytics =
            JSON.parse(saved);

        return Array.isArray(analytics)
            ? analytics
            : [];

    } catch {

        return [];

    }

}


function saveArticleAnalytics(analytics) {

    localStorage.setItem(
        "skyChatboxAnalytics",
        JSON.stringify(analytics)
    );

}


function recordArticleView(topic) {

    if (!topic) {
        return;
    }

    const analytics =
        getArticleAnalytics();

    let article =
        analytics.find(function(item){

            return item.topic === topic;

        });

    if (!article) {

        article = {

            topic: topic,
            views: 0,
            firstViewed:
                new Date().toISOString(),
            lastViewed:
                new Date().toISOString()

        };

        analytics.push(article);

    }

    article.views++;

    article.lastViewed =
        new Date().toISOString();

    saveArticleAnalytics(analytics);

}
// ======================================================
// EVENT LISTENERS
// ======================================================

// Send button.
sendButton.addEventListener(
    "click",
    function () {
        sendMessage();
    }
);


// Enter key.
userInput.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    }
);


// Show suggestions while typing.
userInput.addEventListener(
    "input",
    function () {
        showSuggestions(
            userInput.value
        );
    }
);


// Hide suggestions when clicking outside the input area.
document.addEventListener(
    "click",
    function (event) {
        const clickedInput =
            event.target === userInput;

        const clickedSuggestion =
            suggestions.contains(event.target);


        if (
            !clickedInput &&
            !clickedSuggestion
        ) {
            hideSuggestions();
        }
    }
);


// ======================================================
// STARTUP CHECKS
// ======================================================

/**
 * Checks that the required HTML elements and knowledge
 * base loaded successfully.
 */
function initializeSkyChatbox() {
    refreshActiveKnowledgeBase();
    
    if (!userInput) {
        console.error(
            'SkyChat could not find the HTML element with id="userInput".'
        );
    }

    if (!sendButton) {
        console.error(
            'SkyChat could not find the HTML element with id="sendButton".'
        );
    }

    if (!chatMessages) {
        console.error(
            'SkyChat could not find the HTML element with id="chatMessages".'
        );
    }

    if (!suggestions) {
        console.error(
            'SkyChat could not find the HTML element with id="suggestions".'
        );
    }

    if (!Array.isArray(activeKnowledgeBase)) {
        console.error(
            "The knowledgeBase array was not loaded. " +
            "Make sure the knowledge files appear before script.js in index.html."
        );
    } else {
        console.log(
    "SkyChat loaded successfully with " +
    activeKnowledgeBase.length +
    " knowledge-base articles."
);
    }

buildCategoryBrowser();
renderFavorites();
    // Place the cursor inside the message box.
    
    if (userInput) {
        userInput.focus();
    }
}


// Start SkyChat after the page finishes loading.
initializeSkyChatbox();
window.addEventListener("focus", function () {
    refreshActiveKnowledgeBase();
    buildCategoryBrowser();
    renderFavorites();
});
// ======================================================
// SKYCHAT v1.0 PILOT HOME ENHANCEMENTS
// ======================================================

function updatePilotStats() {
    const articleCount = document.getElementById("articleCount");
    const categoryCount = document.getElementById("categoryCount");

    if (!Array.isArray(activeKnowledgeBase)) {
        return;
    }

    const categories = new Set(
        activeKnowledgeBase.map(function (article) {
            return String(article.category || "General").trim();
        })
    );

    if (articleCount) {
        articleCount.textContent = activeKnowledgeBase.length;
    }

    if (categoryCount) {
        categoryCount.textContent = categories.size;
    }
}

function connectQuickTopics() {
    document.querySelectorAll("[data-question]").forEach(function (button) {
        button.addEventListener("click", function () {
            userInput.value = button.dataset.question || "";
            sendMessage();
        });
    });
}

function connectClearChat() {
    const clearButton = document.getElementById("clearChatButton");

    if (!clearButton) {
        return;
    }

    clearButton.addEventListener("click", function () {
        chatMessages.innerHTML = `
            <div class="message bot-message welcome-message">
                <strong>Hello! I’m SkyChat.</strong>
                <span>I can help you locate Skyward procedures, reports, scheduling instructions, attendance guidance, and more.</span>
            </div>
        `;
        userInput.focus();
    });
}

window.addEventListener("DOMContentLoaded", function () {
    window.setTimeout(function () {
        updatePilotStats();
        connectQuickTopics();
        connectClearChat();
    }, 0);
});
