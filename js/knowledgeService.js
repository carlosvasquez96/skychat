// ======================================================
// SKY CHATBOX KNOWLEDGE SERVICE
// Shared article storage and loading
// ======================================================

const SKY_CUSTOM_ARTICLES_KEY =
    "skyChatboxCustomArticles";

const SKY_DELETED_ARTICLES_KEY =
    "skyChatboxDeletedArticles";


// ======================================================
// LOCAL STORAGE HELPERS
// ======================================================

function getStoredCustomArticles() {
    try {
        return JSON.parse(
            localStorage.getItem(
                SKY_CUSTOM_ARTICLES_KEY
            )
        ) || [];
    } catch (error) {
        console.error(
            "Unable to read custom articles:",
            error
        );

        return [];
    }
}


function saveStoredCustomArticles(articles) {
    localStorage.setItem(
        SKY_CUSTOM_ARTICLES_KEY,
        JSON.stringify(articles)
    );
}


function getStoredDeletedArticleTopics() {
    try {
        return JSON.parse(
            localStorage.getItem(
                SKY_DELETED_ARTICLES_KEY
            )
        ) || [];
    } catch (error) {
        console.error(
            "Unable to read deleted articles:",
            error
        );

        return [];
    }
}


function saveStoredDeletedArticleTopics(topics) {
    localStorage.setItem(
        SKY_DELETED_ARTICLES_KEY,
        JSON.stringify(topics)
    );
}


// ======================================================
// ARTICLE HELPERS
// ======================================================

function createKnowledgeArticleId(topic) {
    return String(topic)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


function normalizeKnowledgeArticle(
    article,
    source = "original"
) {
    const topic = article.topic || "";

    return {
        id:
            article.id ||
            createKnowledgeArticleId(topic),

        topic,

        category:
            article.category ||
            "General",

        keywords:
            Array.isArray(article.keywords)
                ? article.keywords
                : [],

        summary:
    article.summary ||
    "",

purpose:
    article.purpose ||
    "",

navigation:
    Array.isArray(article.navigation)
        ? article.navigation
        : [],

procedure:
    Array.isArray(article.procedure)
        ? article.procedure
        : [],

notes:
    Array.isArray(article.notes)
        ? article.notes
        : [],

        documents:
    Array.isArray(article.documents)
        ? article.documents
        : [],

answer:
    article.answer ||
    "",

        related:
            Array.isArray(article.related)
                ? article.related
                : [],

        manual:
            article.manual ||
            article.sourceManual ||
            "",

        page:
            article.page ||
            "",

        source
    };
}


// ======================================================
// FINAL KNOWLEDGE BASE
// ======================================================

function getKnowledgeBase() {
    const originalKnowledgeBase =
        typeof knowledgeBase !== "undefined"
            ? knowledgeBase
            : [];

    const deletedTopics =
        getStoredDeletedArticleTopics()
            .map(topic =>
                String(topic).toLowerCase()
            );

    const customArticles =
        getStoredCustomArticles()
            .map(article =>
                normalizeKnowledgeArticle(
                    article,
                    "custom"
                )
            );

    const customTopics =
        customArticles.map(article =>
            article.topic.toLowerCase()
        );

    const originalArticles =
        originalKnowledgeBase
            .map(article =>
                normalizeKnowledgeArticle(
                    article,
                    "original"
                )
            )
            .filter(article => {
                const normalizedTopic =
                    article.topic.toLowerCase();

                const isDeleted =
                    deletedTopics.includes(
                        normalizedTopic
                    );

                const isReplaced =
                    customTopics.includes(
                        normalizedTopic
                    );

                return !isDeleted && !isReplaced;
            });

    return [
        ...originalArticles,
        ...customArticles
    ].sort((a, b) =>
        a.topic.localeCompare(b.topic)
    );
}


// ======================================================
// SAVE OR UPDATE ARTICLE
// ======================================================

function saveKnowledgeArticle(
    article,
    previousArticleId = null
) {
    const customArticles =
        getStoredCustomArticles();

    const normalizedArticle =
        normalizeKnowledgeArticle(
            {
                ...article,
                id:
                    article.id ||
                    createKnowledgeArticleId(
                        article.topic
                    )
            },
            "custom"
        );

    const updatedArticles =
        customArticles.filter(existingArticle => {
            const existingId =
                existingArticle.id ||
                createKnowledgeArticleId(
                    existingArticle.topic
                );

            const samePreviousId =
                previousArticleId &&
                existingId === previousArticleId;

            const sameTopic =
                String(existingArticle.topic)
                    .toLowerCase() ===
                normalizedArticle.topic
                    .toLowerCase();

            return !samePreviousId && !sameTopic;
        });

    updatedArticles.push({
    id: normalizedArticle.id,
    topic: normalizedArticle.topic,
    category: normalizedArticle.category,
    keywords: normalizedArticle.keywords,
    summary: normalizedArticle.summary,
    purpose: normalizedArticle.purpose,
    navigation: normalizedArticle.navigation,
    procedure: normalizedArticle.procedure,
    notes: normalizedArticle.notes,
    documents: normalizedArticle.documents,
    answer: normalizedArticle.answer,
    related: normalizedArticle.related,
    manual: normalizedArticle.manual,
    page: normalizedArticle.page
});

    saveStoredCustomArticles(
        updatedArticles
    );

    const updatedDeletedTopics =
        getStoredDeletedArticleTopics()
            .filter(topic =>
                String(topic).toLowerCase() !==
                normalizedArticle.topic
                    .toLowerCase()
            );

    saveStoredDeletedArticleTopics(
        updatedDeletedTopics
    );

    return normalizedArticle;
}


// ======================================================
// DELETE ARTICLE
// ======================================================

function deleteKnowledgeArticle(articleId) {
    const articles =
        getKnowledgeBase();

    const article =
        articles.find(item =>
            item.id === articleId
        );

    if (!article) {
        return false;
    }

    const customArticles =
        getStoredCustomArticles();

    const updatedCustomArticles =
        customArticles.filter(item => {
            const itemId =
                item.id ||
                createKnowledgeArticleId(
                    item.topic
                );

            return itemId !== articleId;
        });

    saveStoredCustomArticles(
        updatedCustomArticles
    );

    const originalExists =
        typeof knowledgeBase !== "undefined" &&
        knowledgeBase.some(item =>
            String(item.topic)
                .toLowerCase() ===
            article.topic.toLowerCase()
        );

    if (
        article.source === "original" ||
        originalExists
    ) {
        const deletedTopics =
            getStoredDeletedArticleTopics();

        const alreadyDeleted =
            deletedTopics.some(topic =>
                String(topic).toLowerCase() ===
                article.topic.toLowerCase()
            );

        if (!alreadyDeleted) {
            deletedTopics.push(
                article.topic
            );
        }

        saveStoredDeletedArticleTopics(
            deletedTopics
        );
    }

    return true;
}