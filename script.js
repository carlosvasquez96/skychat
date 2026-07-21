const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");
const suggestions = document.getElementById("suggestions");

// Displays a regular user or bot message.
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Displays a knowledge-base article as a formatted card.
function addArticleCard(article) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "bot-message", "article-message");

    const card = document.createElement("div");
    card.classList.add("response-card");

    // Article title
    const title = document.createElement("h3");
    title.classList.add("response-title");
    title.textContent = article.topic;
    card.appendChild(title);

    // Category
    if (article.category) {
        const category = document.createElement("span");
        category.classList.add("category-badge");
        category.textContent = article.category;
        card.appendChild(category);
    }

    // Summary
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

    // Main answer
    const divider = document.createElement("hr");
    divider.classList.add("response-divider");
    card.appendChild(divider);

    const answer = document.createElement("div");
    answer.classList.add("response-answer");
    answer.textContent = article.answer;
    card.appendChild(answer);

    // Related articles
    if (article.related && article.related.length > 0) {
        const relatedDivider = document.createElement("hr");
        relatedDivider.classList.add("response-divider");
        card.appendChild(relatedDivider);

        const relatedTitle = document.createElement("p");
        relatedTitle.classList.add("section-label");
        relatedTitle.textContent = "Related Articles";
        card.appendChild(relatedTitle);

        const relatedContainer = document.createElement("div");
        relatedContainer.classList.add("related-articles");

        article.related.forEach(function (relatedTopic) {
            const relatedButton = document.createElement("button");

            relatedButton.type = "button";
            relatedButton.classList.add("related-button");
            relatedButton.textContent = relatedTopic;

            relatedButton.addEventListener("click", function () {
                openRelatedArticle(relatedTopic);
            });

            relatedContainer.appendChild(relatedButton);
        });

        card.appendChild(relatedContainer);
    }

    messageDiv.appendChild(card);
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Finds the best article for the user's question.
function getBotResponse(question) {
    const text = question.toLowerCase();

    let bestMatch = null;
    let highestScore = 0;

    for (const item of knowledgeBase) {
        let score = 0;

        for (const keyword of item.keywords) {
            if (text.includes(keyword.toLowerCase())) {
                score++;
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }
    }

    return bestMatch;
}

// Opens an article when a related-article button is clicked.
function openRelatedArticle(topic) {
    const article = knowledgeBase.find(function (item) {
        return item.topic.toLowerCase() === topic.toLowerCase();
    });

    addMessage(topic, "user");

    if (!article) {
        addMessage(
            "That related article has not been completed yet.",
            "bot"
        );

        return;
    }

    showTypingIndicator(article);
}

// Shows the typing message and then displays the article.
function showTypingIndicator(article) {
    const typingMessage = document.createElement("div");

    typingMessage.classList.add("message", "bot-message");
    typingMessage.textContent = "Sky Chatbox is typing...";

    chatMessages.appendChild(typingMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(function () {
        typingMessage.remove();
        addArticleCard(article);
    }, 800);
}

function sendMessage() {
    const question = userInput.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    userInput.value = "";
    hideSuggestions();
    userInput.focus();

    const article = getBotResponse(question);

    if (article) {
        showTypingIndicator(article);
    } else {
        const typingMessage = document.createElement("div");

        typingMessage.classList.add("message", "bot-message");
        typingMessage.textContent = "Sky Chatbox is typing...";

        chatMessages.appendChild(typingMessage);

        setTimeout(function () {
            typingMessage.remove();

            addMessage(
                "I'm sorry, I couldn't find an answer for that question yet.",
                "bot"
            );
        }, 800);
    }
}

function showSuggestions(searchText) {
    suggestions.innerHTML = "";

    const cleanSearch = searchText.toLowerCase().trim();

    if (cleanSearch.length < 2) {
        hideSuggestions();
        return;
    }

    const matches = knowledgeBase.filter(function (article) {
        const topicMatch = article.topic
            .toLowerCase()
            .includes(cleanSearch);

        const keywordMatch = article.keywords.some(function (keyword) {
            return keyword.toLowerCase().includes(cleanSearch);
        });

        return topicMatch || keywordMatch;
    });

    if (matches.length === 0) {
        hideSuggestions();
        return;
    }

    matches.slice(0, 5).forEach(function (article) {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");

        const topic = document.createElement("span");
        topic.classList.add("suggestion-topic");
        topic.textContent = article.topic;

        const hint = document.createElement("span");
        hint.classList.add("suggestion-hint");
        hint.textContent = "Click to ask about this topic";

        suggestionItem.appendChild(topic);
        suggestionItem.appendChild(hint);

        suggestionItem.addEventListener("click", function () {
            userInput.value = article.topic;
            hideSuggestions();
            sendMessage();
        });

        suggestions.appendChild(suggestionItem);
    });

    suggestions.style.display = "block";
}

function hideSuggestions() {
    suggestions.style.display = "none";
    suggestions.innerHTML = "";
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

userInput.addEventListener("input", function () {
    showSuggestions(userInput.value);
});