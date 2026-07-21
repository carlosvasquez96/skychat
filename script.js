const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");
const suggestions = document.getElementById("suggestions");

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

    if (bestMatch) {
        return bestMatch.answer;
    }

    return "I'm sorry, I couldn't find an answer for that question yet.";
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

    const typingMessage = document.createElement("div");

    typingMessage.classList.add("message", "bot-message");
    typingMessage.textContent = "Sky Chatbox is typing...";

    chatMessages.appendChild(typingMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(function () {
        typingMessage.remove();

        const answer = getBotResponse(question);
        addMessage(answer, "bot");
    }, 800);
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

    hideSuggestions();

    addMessage(article.topic, "user");

    const typingMessage = document.createElement("div");

    typingMessage.classList.add("message", "bot-message");
    typingMessage.textContent = "Sky Chatbox is typing...";

    chatMessages.appendChild(typingMessage);

    setTimeout(function () {

        typingMessage.remove();

        addMessage(article.answer, "bot");

    }, 500);

    userInput.value = "";
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