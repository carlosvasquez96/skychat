// ======================================================
// SKY CHATBOX KNOWLEDGE MANAGER
// ======================================================

const CUSTOM_ARTICLES_KEY = "skyChatboxCustomArticles";
const DELETED_ARTICLES_KEY = "skyChatboxDeletedArticles";
const LAST_BACKUP_KEY = "skyChatboxLastBackup";
const ACTIVITY_LOG_KEY = "skyChatboxActivityLog";
const FAVORITE_ARTICLES_KEY = "skyChatboxFavoriteArticles";


let managerArticles = [];
let currentEditingId = null;


// ======================================================
// LOCAL STORAGE
// ======================================================

function getCustomArticles() {
    try {
        return JSON.parse(
            localStorage.getItem(CUSTOM_ARTICLES_KEY)
        ) || [];
    } catch (error) {
        console.error("Unable to read custom articles:", error);
        return [];
    }
}


function saveCustomArticles(articles) {
    localStorage.setItem(
        CUSTOM_ARTICLES_KEY,
        JSON.stringify(articles)
    );
}

function getFavoriteArticles() {

    try {

        return JSON.parse(
            localStorage.getItem(FAVORITE_ARTICLES_KEY)
        ) || [];

    } catch (error) {

        console.error(
            "Unable to read favorite articles:",
            error
        );

        return [];

    }

}

function saveFavoriteArticles(favorites) {

    localStorage.setItem(
        FAVORITE_ARTICLES_KEY,
        JSON.stringify(favorites)
    );

}

function getDeletedArticleTopics() {
    try {
        return JSON.parse(
            localStorage.getItem(DELETED_ARTICLES_KEY)
        ) || [];
    } catch (error) {
        console.error("Unable to read deleted articles:", error);
        return [];
    }
}


function saveDeletedArticleTopics(topics) {
    localStorage.setItem(
        DELETED_ARTICLES_KEY,
        JSON.stringify(topics)
    );
}


// ======================================================
// ARTICLE HELPERS
// ======================================================

function createArticleId(topic) {
    return topic
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


function normalizeArticle(article, source = "original") {
    return {
        id: article.id || createArticleId(article.topic),
        topic: article.topic || "",
        category: article.category || "General",
        keywords: Array.isArray(article.keywords)
            ? article.keywords
            : [],
        summary: article.summary || "",
        answer: article.answer || "",
        source
    };
}


function loadManagerArticles() {
    const deletedTopics = getDeletedArticleTopics();

    const originalArticles =
        typeof knowledgeBase !== "undefined"
            ? knowledgeBase
                .filter(article =>
                    !deletedTopics.includes(article.topic)
                )
                .map(article =>
                    normalizeArticle(article, "original")
                )
            : [];

    const customArticles = getCustomArticles()
        .map(article =>
            normalizeArticle(article, "custom")
        );

    /*
        Custom articles replace original articles that have
        the same topic. This allows existing articles to be edited
        without changing the original JavaScript files.
    */

    const customTopics = customArticles.map(article =>
        article.topic.toLowerCase()
    );

    const filteredOriginals = originalArticles.filter(article =>
        !customTopics.includes(article.topic.toLowerCase())
    );

    managerArticles = [
        ...filteredOriginals,
        ...customArticles
    ].sort((a, b) =>
        a.topic.localeCompare(b.topic)
    );
}

// ======================================================
// DASHBOARD
// ======================================================

function updateKnowledgeDashboard() {
    const customArticles = getCustomArticles();
    const deletedTopics = getDeletedArticleTopics();

    const categories = new Set(
        managerArticles.map(article => article.category)
    );

    document.getElementById(
        "dashboardTotalArticles"
    ).textContent = managerArticles.length;

    document.getElementById(
        "dashboardCustomArticles"
    ).textContent = customArticles.length;

    document.getElementById(
        "dashboardCategories"
    ).textContent = categories.size;

    document.getElementById(
        "dashboardHiddenArticles"
    ).textContent = deletedTopics.length;
    const lastBackup = localStorage.getItem(
    LAST_BACKUP_KEY
);

const lastBackupElement = document.getElementById(
    "dashboardLastBackup"
);

if (lastBackup) {
    lastBackupElement.textContent =
        new Date(lastBackup).toLocaleString();
} else {
    lastBackupElement.textContent = "Never";
}
}

// ======================================================
// DISPLAY ARTICLES
// ======================================================

function renderKnowledgeArticles(searchText = "") {
    const articleList = document.getElementById(
        "knowledgeArticleList"
    );

    if (!articleList) {
        return;
    }

    articleList.innerHTML = "";

    const query = searchText
        .toLowerCase()
        .trim();

        const favoriteArticles = getFavoriteArticles();

    const filteredArticles = managerArticles.filter(article => {
        const searchableText = [
            article.topic,
            article.category,
            article.summary,
            article.keywords.join(" ")
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(query);
    });

    if (filteredArticles.length === 0) {
        articleList.innerHTML = `
            <p class="admin-empty-message">
                No matching articles were found.
            </p>
        `;

        return;
    }

    filteredArticles.forEach(article => {
        const articleItem = document.createElement("article");

        articleItem.className = "knowledge-article-item";

        articleItem.innerHTML = `
            <div class="knowledge-article-content">

                <div class="knowledge-article-heading">

                    <h3>
                        ${escapeHtml(article.topic)}
                    </h3>

                    <span class="knowledge-category-badge">
                        ${escapeHtml(article.category)}
                    </span>

                </div>

                <p>
                    ${escapeHtml(article.summary)}
                </p>

            </div>

            <div class="knowledge-article-actions">
<button
    class="knowledge-favorite-button"
    type="button"
    data-article-id="${escapeHtml(article.id)}"
>
    ${
        favoriteArticles.includes(article.id)
            ? "⭐ Favorited"
            : "⭐ Favorite"
    }
</button>
                <button
                    class="knowledge-edit-button"
                    type="button"
                    data-article-id="${escapeHtml(article.id)}"
                >
                    Edit
                </button>

                <button
                    class="knowledge-delete-button"
                    type="button"
                    data-article-id="${escapeHtml(article.id)}"
                >
                    Delete
                </button>

            </div>
        `;

        articleList.appendChild(articleItem);
    });

    attachArticleButtonEvents();
}


function attachArticleButtonEvents() {
    
    document
    .querySelectorAll(".knowledge-favorite-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            toggleFavoriteArticle(
                button.dataset.articleId
            );

        });

    });
    document
        .querySelectorAll(".knowledge-edit-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                openEditArticleForm(
                    button.dataset.articleId
                );
            });
        });

    document
        .querySelectorAll(".knowledge-delete-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                deleteArticle(
                    button.dataset.articleId
                );
            });
        });
}


// ======================================================
// FORM
// ======================================================

function openNewArticleForm() {
    currentEditingId = null;

    document.getElementById(
        "articleFormTitle"
    ).textContent = "New Article";

    document.getElementById(
        "knowledgeArticleForm"
    ).reset();

    document.getElementById(
        "editingArticleIndex"
    ).value = "";

    showArticleForm();
}


function openEditArticleForm(articleId) {
    const article = managerArticles.find(
        item => item.id === articleId
    );

    if (!article) {
        return;
    }

    currentEditingId = article.id;

    document.getElementById(
        "articleFormTitle"
    ).textContent = "Edit Article";

    document.getElementById(
        "editingArticleIndex"
    ).value = article.id;

    document.getElementById(
        "articleTopic"
    ).value = article.topic;

    document.getElementById(
        "articleCategory"
    ).value = article.category;

    document.getElementById(
        "articleKeywords"
    ).value = article.keywords.join(", ");

    document.getElementById(
        "articleSummary"
    ).value = article.summary;

    document.getElementById(
        "articleAnswer"
    ).value = article.answer;

    showArticleForm();
}


function showArticleForm() {
    const formPanel = document.getElementById(
        "articleFormPanel"
    );

    formPanel.hidden = false;

    formPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    document.getElementById(
        "articleTopic"
    ).focus();
}


function closeArticleForm() {
    currentEditingId = null;

    document.getElementById(
        "knowledgeArticleForm"
    ).reset();

    document.getElementById(
        "articleFormPanel"
    ).hidden = true;
}


function saveArticleFromForm(event) {
    event.preventDefault();
    const isEditing = Boolean(currentEditingId);

    const topic = document.getElementById(
        "articleTopic"
    ).value.trim();

    const category = document.getElementById(
        "articleCategory"
    ).value.trim();

    const keywords = document.getElementById(
        "articleKeywords"
    ).value
        .split(",")
        .map(keyword => keyword.trim())
        .filter(keyword => keyword !== "");

    const summary = document.getElementById(
        "articleSummary"
    ).value.trim();

    const answer = document.getElementById(
        "articleAnswer"
    ).value.trim();

    if (!topic || !category || !summary || !answer) {
        alert("Please complete all required fields.");
        return;
    }

    const customArticles = getCustomArticles();

    const savedArticle = {
        id: createArticleId(topic),
        topic,
        category,
        keywords,
        summary,
        answer
    };

    /*
        Remove the previous edited copy, if one exists.
    */

    const updatedCustomArticles = customArticles.filter(article => {
        const articleId =
            article.id || createArticleId(article.topic);

        return articleId !== currentEditingId &&
               article.topic.toLowerCase() !== topic.toLowerCase();
    });

    updatedCustomArticles.push(savedArticle);

    saveCustomArticles(updatedCustomArticles);

    /*
        If an original article was previously deleted and is now
        recreated, remove it from the deleted list.
    */

    const updatedDeletedTopics =
        getDeletedArticleTopics().filter(
            deletedTopic =>
                deletedTopic.toLowerCase() !==
                topic.toLowerCase()
        );

    saveDeletedArticleTopics(updatedDeletedTopics);

    loadManagerArticles();
renderKnowledgeArticles();
updateKnowledgeDashboard();

addActivity(
    isEditing ? "Updated Article" : "Created Article",
    savedArticle.topic
);

renderRecentActivity();

closeArticleForm();

alert("Article saved successfully.");
}

function toggleFavoriteArticle(articleId) {

    let favorites = getFavoriteArticles();

    if (favorites.includes(articleId)) {

        favorites = favorites.filter(
            id => id !== articleId
        );

    } else {

        favorites.push(articleId);

    }

    saveFavoriteArticles(favorites);

    renderKnowledgeArticles();
    renderFavoriteArticles();

}

function renderFavoriteArticles() {

    const favoriteArticleList =
        document.getElementById(
            "favoriteArticleList"
        );

    const favoriteIds =
        getFavoriteArticles();

    const favoriteArticles =
        managerArticles.filter(article =>
            favoriteIds.includes(article.id)
        );

    if (favoriteArticles.length === 0) {

        favoriteArticleList.innerHTML = `
            <p class="admin-empty-message">
                No favorite articles yet.
            </p>
        `;

        return;
    }

    favoriteArticleList.innerHTML =
        favoriteArticles.map(article => `
            <div class="knowledge-article-item">

                <h3>
                    ${escapeHtml(article.topic)}
                </h3>

                <p>
                    ${escapeHtml(article.category)}
                </p>

                <p>
                    ${escapeHtml(article.summary)}
                </p>

            </div>
        `).join("");

}

// ======================================================
// DELETE
// ======================================================

function deleteArticle(articleId) {
    const article = managerArticles.find(
        item => item.id === articleId
    );

    if (!article) {
        return;
    }

    const confirmed = confirm(
        `Delete "${article.topic}"?`
    );

    if (!confirmed) {
        return;
    }

    const customArticles = getCustomArticles();

    const updatedCustomArticles = customArticles.filter(item => {
        const itemId =
            item.id || createArticleId(item.topic);

        return itemId !== article.id;
    });

    saveCustomArticles(updatedCustomArticles);

    /*
        Original articles cannot be physically removed from their
        JavaScript file, so their topics are placed in a hidden list.
    */

    if (article.source === "original") {
        const deletedTopics = getDeletedArticleTopics();

        if (!deletedTopics.includes(article.topic)) {
            deletedTopics.push(article.topic);
        }

        saveDeletedArticleTopics(deletedTopics);
    } else {
        /*
            A custom article may be an edited version of an original.
            Hide the original too when deleting that edited copy.
        */

        const originalExists =
            typeof knowledgeBase !== "undefined" &&
            knowledgeBase.some(item =>
                item.topic.toLowerCase() ===
                article.topic.toLowerCase()
            );

        if (originalExists) {
            const deletedTopics =
                getDeletedArticleTopics();

            if (!deletedTopics.includes(article.topic)) {
                deletedTopics.push(article.topic);
            }

            saveDeletedArticleTopics(deletedTopics);
        }
    }

    loadManagerArticles();
renderKnowledgeArticles();
updateKnowledgeDashboard();

addActivity(
    "Deleted Article",
    article.topic
);

renderRecentActivity();

closeArticleForm();
}

// ======================================================
// EXPORT ARTICLES
// ======================================================

function exportArticles() {
   
    const exportData = {
        exportedOn: new Date().toISOString(),
        version: "1.0",
        customArticles: getCustomArticles()
    };

    localStorage.setItem(
    LAST_BACKUP_KEY,
    exportData.exportedOn
);
    const json = JSON.stringify(exportData, null, 4);

    const blob = new Blob(
        [json],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "SkyChatbox_KnowledgeBackup.json";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
    addActivity("Exported Knowledge Base");
renderRecentActivity();
updateKnowledgeDashboard();
}

// ======================================================
// IMPORT ARTICLES
// ======================================================

function importArticles(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        try {

            const data = JSON.parse(e.target.result);

            if (!Array.isArray(data.customArticles)) {
                throw new Error("Invalid backup file.");
            }

            const replaceExisting = confirm(
                "Replace your current custom articles with the imported articles?\n\nClick OK to replace.\nClick Cancel to merge them."
            );

            if (replaceExisting) {

                saveCustomArticles(data.customArticles);

            } else {

                const existingArticles = getCustomArticles();

                const mergedArticles = [...existingArticles];

                data.customArticles.forEach(importedArticle => {

                    const exists = mergedArticles.some(article =>
                        article.topic.toLowerCase() ===
                        importedArticle.topic.toLowerCase()
                    );

                    if (!exists) {
                        mergedArticles.push(importedArticle);
                    }

                });

                saveCustomArticles(mergedArticles);

            }

            loadManagerArticles();
renderKnowledgeArticles();
updateKnowledgeDashboard();

addActivity("Imported Knowledge Base");
renderRecentActivity();

alert("Articles imported successfully.");

        } catch (error) {

            console.error(error);

            alert("The selected file is not a valid Sky Chatbox backup.");

        }

        event.target.value = "";

    };

    reader.readAsText(file);

}
// ======================================================
// SECURITY
// ======================================================

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ======================================================
// INITIALIZE
// ======================================================

function initializeKnowledgeManager() {
    loadManagerArticles();
    renderKnowledgeArticles();
    updateKnowledgeDashboard();
    renderRecentActivity();

    const newArticleButton = document.getElementById(
        "newArticleButton"
    );
const exportArticlesButton = document.getElementById(
    "exportArticlesButton"
);
const importArticlesButton = document.getElementById(
    "importArticlesButton"
);

const importArticlesInput = document.getElementById(
    "importArticlesInput"
);
    const cancelArticleButton = document.getElementById(
        "cancelArticleButton"
    );

    const articleForm = document.getElementById(
        "knowledgeArticleForm"
    );

    const searchInput = document.getElementById(
        "articleSearchInput"
    );

    

    newArticleButton.addEventListener(
        "click",
        openNewArticleForm
    );
exportArticlesButton.addEventListener(
    "click",
    exportArticles
);
importArticlesButton.addEventListener(
    "click",
    function () {
        importArticlesInput.click();
    }
);

importArticlesInput.addEventListener(
    "change",
    importArticles
);
    cancelArticleButton.addEventListener(
        "click",
        closeArticleForm
    );

    articleForm.addEventListener(
        "submit",
        saveArticleFromForm
    );

    searchInput.addEventListener("input", event => {
    renderKnowledgeArticles(
        event.target.value
    );
});

initializeSidebarNavigation();

}
function showView(viewId) {

    document.getElementById(
        "dashboardView"
    ).hidden = true;

    document.getElementById(
        "articlesView"
    ).hidden = true;

    document.getElementById(
        "favoritesView"
    ).hidden = true;

    document.getElementById(
        viewId
    ).hidden = false;

}
function initializeSidebarNavigation() {

    const dashboardSidebarLink =
        document.getElementById(
            "dashboardSidebarLink"
        );

    const articlesSidebarLink =
        document.getElementById(
            "articlesSidebarLink"
        );

    const favoritesSidebarLink =
        document.getElementById(
            "favoritesSidebarLink"
        );

    dashboardSidebarLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showView("dashboardView");

        }
    );

    articlesSidebarLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        

        showView("articlesView");

    }
);

    favoritesSidebarLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            renderFavoriteArticles();
            showView("favoritesView");

        }
    );

}

document.addEventListener(
    "DOMContentLoaded",
    initializeKnowledgeManager
);
function getActivityLog() {

    return JSON.parse(
        localStorage.getItem(ACTIVITY_LOG_KEY) || "[]"
    );

}

function saveActivityLog(activityLog) {

    localStorage.setItem(
        ACTIVITY_LOG_KEY,
        JSON.stringify(activityLog)
    );

}
function addActivity(action, articleTitle = "") {

    const activityLog = getActivityLog();

    activityLog.unshift({
        action: action,
        articleTitle: articleTitle,
        date: new Date().toISOString()
    });

    saveActivityLog(
        activityLog.slice(0, 10)
    );

}
function renderRecentActivity() {

    const activityList = document.getElementById(
        "recentActivityList"
    );

    if (!activityList) {
        return;
    }

    const activityLog = getActivityLog();

    if (activityLog.length === 0) {

        activityList.innerHTML = `
            <p class="admin-empty-message">
                No recent activity yet.
            </p>
        `;

        return;
    }

    activityList.innerHTML = activityLog.map(activity => {

        const activityDate = new Date(activity.date);

        const formattedDate = activityDate.toLocaleString();

const badgeClass = activity.action
    .toLowerCase()
    .replaceAll(" ", "-");

return `


    <div class="recent-activity-item">

        <div class="recent-activity-details">

            <span class="activity-badge ${badgeClass}">
                ${escapeHtml(activity.action)}
            </span>

            ${
                activity.articleTitle
                    ? `
                        <span class="activity-title">
                            ${escapeHtml(activity.articleTitle)}
                        </span>
                    `
                    : ""
            }

        </div>

        <span class="recent-activity-date">
            ${escapeHtml(formattedDate)}
        </span>

    </div>
`;

    }).join("");

}