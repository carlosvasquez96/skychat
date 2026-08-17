// ======================================================
// SKY CHATBOX ADMIN DASHBOARD
// ======================================================

const articleCount =
    document.getElementById("articleCount");

const categoryCount =
    document.getElementById("categoryCount");

const favoriteCount =
    document.getElementById("favoriteCount");

const unansweredCount =
    document.getElementById("unansweredCount");

const unansweredQuestionsList =
    document.getElementById(
        "unansweredQuestionsList"
    );

const clearUnansweredButton =
    document.getElementById(
        "clearUnansweredButton"
    );


// ======================================================
// LOCAL STORAGE HELPERS
// ======================================================

function getAdminFavorites() {
    try {
        const savedFavorites =
            localStorage.getItem(
                "skyChatboxFavorites"
            );

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


function getAdminUnansweredQuestions() {
    try {
        const savedQuestions =
            localStorage.getItem(
                "skyChatboxUnanswered"
            );

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


// ======================================================
// DASHBOARD STATISTICS
// ======================================================

function updateDashboardStatistics() {
    const articles =
        typeof knowledgeBase !== "undefined" &&
        Array.isArray(knowledgeBase)
            ? knowledgeBase
            : [];

    const categories =
        new Set(
            articles.map(function (article) {
                return String(
                    article.category || "Other"
                ).trim();
            })
        );

    const favorites =
        getAdminFavorites();

    const unansweredQuestions =
        getAdminUnansweredQuestions();

    if (articleCount) {
        articleCount.textContent =
            articles.length;
    }

    if (categoryCount) {
        categoryCount.textContent =
            categories.size;
    }

    if (favoriteCount) {
        favoriteCount.textContent =
            favorites.length;
    }

    if (unansweredCount) {
        unansweredCount.textContent =
            unansweredQuestions.length;
    }
}


// ======================================================
// UNANSWERED QUESTION LIST
// ======================================================

function formatAdminDate(dateValue) {
    if (!dateValue) {
        return "Unknown date";
    }

    const date =
        new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "Unknown date";
    }

    return date.toLocaleString();
}


function renderUnansweredQuestions() {
    if (!unansweredQuestionsList) {
        return;
    }

    unansweredQuestionsList.innerHTML = "";

    const questions =
        getAdminUnansweredQuestions();

    if (questions.length === 0) {
        const emptyMessage =
            document.createElement("p");

        emptyMessage.classList.add(
            "admin-empty-message"
        );

        emptyMessage.textContent =
            "No unanswered questions have been recorded.";

        unansweredQuestionsList.appendChild(
            emptyMessage
        );

        return;
    }

    questions
        .sort(function (a, b) {
            return Number(b.count || 1) -
                Number(a.count || 1);
        })
        .forEach(function (item) {
            const questionCard =
                document.createElement("article");

            questionCard.classList.add(
                "unanswered-question-card"
            );

            const questionText =
                document.createElement("h3");

            questionText.textContent =
                item.question ||
                "Unknown question";

            const questionDetails =
                document.createElement("div");

            questionDetails.classList.add(
                "unanswered-question-details"
            );

            const countText =
                document.createElement("span");

            countText.textContent =
                "Asked " +
                Number(item.count || 1) +
                " time(s)";

            const dateText =
                document.createElement("span");

            dateText.textContent =
                "Last asked: " +
                formatAdminDate(
                    item.lastAsked
                );

            questionDetails.appendChild(
                countText
            );

            questionDetails.appendChild(
                dateText
            );

            questionCard.appendChild(
                questionText
            );

            questionCard.appendChild(
                questionDetails
            );

            unansweredQuestionsList.appendChild(
                questionCard
            );
        });
}

// ======================================================
// TOP VIEWED ARTICLES
// ======================================================

function getArticleAnalytics() {
    try {
        const savedAnalytics =
            localStorage.getItem(
                "skyChatboxAnalytics"
            );

        if (!savedAnalytics) {
            return [];
        }

        const analytics =
            JSON.parse(savedAnalytics);

        return Array.isArray(analytics)
            ? analytics
            : [];
    } catch (error) {
        console.error(
            "Article analytics could not be loaded.",
            error
        );

        return [];
    }
}


function renderTopArticles() {
    const topArticlesList =
        document.getElementById(
            "topArticlesList"
        );

    if (!topArticlesList) {
        return;
    }

    const analytics =
        getArticleAnalytics()
            .sort(function (a, b) {
                return Number(b.views || 0) -
                    Number(a.views || 0);
            })
            .slice(0, 10);

    topArticlesList.innerHTML = "";

    if (analytics.length === 0) {
        const emptyMessage =
            document.createElement("p");

        emptyMessage.classList.add(
            "admin-empty-message"
        );

        emptyMessage.textContent =
            "No article views have been recorded.";

        topArticlesList.appendChild(
            emptyMessage
        );

        return;
    }

    analytics.forEach(function (article, index) {
        const articleItem =
            document.createElement("div");

        articleItem.classList.add(
            "top-article-item"
        );

        const rank =
            document.createElement("span");

        rank.classList.add(
            "top-article-rank"
        );

        rank.textContent =
            index + 1;

        const topic =
            document.createElement("span");

        topic.classList.add(
            "top-article-topic"
        );

        topic.textContent =
            article.topic ||
            "Unknown article";

        const views =
            document.createElement("span");

        views.classList.add(
            "top-article-views"
        );

        const viewCount =
            Number(article.views || 0);

        views.textContent =
            viewCount +
            (viewCount === 1
                ? " view"
                : " views");

        articleItem.appendChild(rank);
        articleItem.appendChild(topic);
        articleItem.appendChild(views);

        topArticlesList.appendChild(
            articleItem
        );
    });
}
// ======================================================
// CLEAR QUESTIONS
// ======================================================

function clearUnansweredQuestions() {
    const confirmed =
        window.confirm(
            "Clear all unanswered questions?"
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        "skyChatboxUnanswered"
    );

    updateDashboardStatistics();
    renderUnansweredQuestions();
}


if (clearUnansweredButton) {
    clearUnansweredButton.addEventListener(
        "click",
        clearUnansweredQuestions
    );
}


// ======================================================
// START ADMIN DASHBOARD
// ======================================================

function initializeAdminDashboard() {
    updateDashboardStatistics();
    renderTopArticles();
    renderUnansweredQuestions();
}

initializeAdminDashboard();