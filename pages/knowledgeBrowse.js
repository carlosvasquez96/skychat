(function () {
    const searchInput = document.getElementById("procedureSearch");
    const clearButton = document.getElementById("clearProcedureSearch");
    const categoryFilters = document.getElementById("categoryFilters");
    const procedureGroups = document.getElementById("procedureGroups");
    const resultCount = document.getElementById("procedureCount");
    const emptyState = document.getElementById("browseEmptyState");

    const modal = document.getElementById("procedureModal");
    const modalTitle = document.getElementById("procedureModalTitle");
    const modalCategory = document.getElementById("procedureModalCategory");
    const modalBody = document.getElementById("procedureModalBody");
    const modalClose = document.getElementById("closeProcedureModal");

    const articles = typeof getKnowledgeBase === "function"
        ? getKnowledgeBase()
        : (typeof knowledgeBase !== "undefined" ? knowledgeBase : []);

    let selectedCategory = "All";
    let searchText = "";

    function normalizedText(value) {
        return String(value || "").toLowerCase().trim();
    }

    function getSearchableText(article) {
        return [
            article.topic,
            article.category,
            article.summary,
            article.purpose,
            article.answer,
            article.manual,
            ...(Array.isArray(article.keywords) ? article.keywords : []),
            ...(Array.isArray(article.navigation) ? article.navigation : []),
            ...(Array.isArray(article.procedure) ? article.procedure : []),
            ...(Array.isArray(article.notes) ? article.notes : [])
        ].join(" ").toLowerCase();
    }

    function getCategories() {
        const counts = {};

        articles.forEach(function (article) {
            const category = article.category || "General";
            counts[category] = (counts[category] || 0) + 1;
        });

        return Object.keys(counts)
            .sort(function (a, b) { return a.localeCompare(b); })
            .map(function (category) {
                return { name: category, count: counts[category] };
            });
    }

    function renderCategories() {
        categoryFilters.innerHTML = "";

        const allButton = createCategoryButton("All", articles.length);
        categoryFilters.appendChild(allButton);

        getCategories().forEach(function (category) {
            categoryFilters.appendChild(
                createCategoryButton(category.name, category.count)
            );
        });
    }

    function createCategoryButton(category, count) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "browse-category-button";

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        const label = document.createElement("span");
        label.textContent = category === "All" ? "All Procedures" : category;

        const badge = document.createElement("span");
        badge.className = "browse-category-count";
        badge.textContent = count;

        button.appendChild(label);
        button.appendChild(badge);

        button.addEventListener("click", function () {
            selectedCategory = category;
            renderCategories();
            renderProcedures();
        });

        return button;
    }

    function getFilteredArticles() {
        const query = normalizedText(searchText);

        return articles.filter(function (article) {
            const categoryMatches = selectedCategory === "All" ||
                (article.category || "General") === selectedCategory;

            const searchMatches = !query || getSearchableText(article).includes(query);

            return categoryMatches && searchMatches;
        });
    }

    function renderProcedures() {
        const filtered = getFilteredArticles();
        procedureGroups.innerHTML = "";
        emptyState.hidden = filtered.length !== 0;

        resultCount.textContent = filtered.length === 1
            ? "1 procedure found"
            : filtered.length + " procedures found";

        if (!filtered.length) {
            return;
        }

        const grouped = {};

        filtered.forEach(function (article) {
            const category = article.category || "General";
            if (!grouped[category]) grouped[category] = [];
            grouped[category].push(article);
        });

        Object.keys(grouped)
            .sort(function (a, b) { return a.localeCompare(b); })
            .forEach(function (category) {
                const group = document.createElement("section");
                group.className = "browse-category-group";

                const headingRow = document.createElement("div");
                headingRow.className = "browse-group-heading";

                const heading = document.createElement("h2");
                heading.textContent = category;

                const count = document.createElement("span");
                count.textContent = grouped[category].length;

                headingRow.appendChild(heading);
                headingRow.appendChild(count);
                group.appendChild(headingRow);

                const grid = document.createElement("div");
                grid.className = "browse-procedure-grid";

                grouped[category]
                    .sort(function (a, b) {
                        return (a.topic || "").localeCompare(b.topic || "");
                    })
                    .forEach(function (article) {
                        grid.appendChild(createProcedureCard(article));
                    });

                group.appendChild(grid);
                procedureGroups.appendChild(group);
            });
    }

    function createProcedureCard(article) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "browse-procedure-card";

        const title = document.createElement("h3");
        title.textContent = article.topic || "Untitled Procedure";

        const summary = document.createElement("p");
        summary.textContent = article.summary || article.purpose || "Open this procedure for more information.";

        const footer = document.createElement("div");
        footer.className = "browse-procedure-footer";

        const source = document.createElement("span");
        source.textContent = article.page ? "Page " + article.page : "View procedure";

        const open = document.createElement("span");
        open.className = "browse-open-label";
        open.textContent = "Open →";

        footer.appendChild(source);
        footer.appendChild(open);

        button.appendChild(title);
        button.appendChild(summary);
        button.appendChild(footer);

        button.addEventListener("click", function () {
            openProcedure(article);
        });

        return button;
    }

    function addSection(label, contentNode) {
        const section = document.createElement("section");
        section.className = "procedure-detail-section";

        const heading = document.createElement("p");
        heading.className = "procedure-detail-label";
        heading.textContent = label;

        section.appendChild(heading);
        section.appendChild(contentNode);
        modalBody.appendChild(section);
    }

    function textNodeParagraph(text, className) {
        const p = document.createElement("p");
        if (className) p.className = className;
        p.textContent = text;
        return p;
    }

    function listNode(items, ordered) {
        const list = document.createElement(ordered ? "ol" : "ul");
        list.className = ordered ? "procedure-detail-list ordered" : "procedure-detail-list";

        items.forEach(function (item) {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });

        return list;
    }

    function openProcedure(article) {
        modalTitle.textContent = article.topic || "Skyward Procedure";
        modalCategory.textContent = article.category || "General";
        modalBody.innerHTML = "";

        if (article.summary) {
            addSection("Summary", textNodeParagraph(article.summary));
        }

        if (article.purpose) {
            addSection("Purpose", textNodeParagraph(article.purpose));
        }

        if (Array.isArray(article.navigation) && article.navigation.length) {
            addSection(
                "Navigation",
                textNodeParagraph(article.navigation.join(" → "), "procedure-navigation")
            );
        }

        if (Array.isArray(article.procedure) && article.procedure.length) {
            addSection("Procedure", listNode(article.procedure, true));
        } else if (article.answer) {
            const answer = textNodeParagraph(article.answer, "procedure-answer");
            answer.style.whiteSpace = "pre-line";
            addSection("Procedure", answer);
        }

        if (Array.isArray(article.notes) && article.notes.length) {
            addSection("Notes", listNode(article.notes, false));
        }

        if (article.manual || article.page) {
            const source = document.createElement("div");
            source.className = "procedure-source-box";

            if (article.manual) {
                const manual = document.createElement("strong");
                manual.textContent = article.manual;
                source.appendChild(manual);
            }

            if (article.page) {
                const page = document.createElement("span");
                const pageText = String(article.page).includes("-") ? "Pages " : "Page ";
                page.textContent = pageText + article.page;
                source.appendChild(page);
            }

            addSection("Source", source);
        }

        if (Array.isArray(article.related) && article.related.length) {
            const related = document.createElement("div");
            related.className = "procedure-related-links";

            article.related.forEach(function (topic) {
                const button = document.createElement("button");
                button.type = "button";
                button.textContent = topic;
                button.addEventListener("click", function () {
                    const match = articles.find(function (candidate) {
                        return normalizedText(candidate.topic) === normalizedText(topic);
                    });
                    if (match) openProcedure(match);
                });
                related.appendChild(button);
            });

            addSection("Related Procedures", related);
        }

        modal.hidden = false;
        document.body.classList.add("procedure-modal-open");
        modalClose.focus();
    }

    function closeProcedure() {
        modal.hidden = true;
        document.body.classList.remove("procedure-modal-open");
    }

    searchInput.addEventListener("input", function () {
        searchText = searchInput.value;
        renderProcedures();
    });

    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        searchText = "";
        selectedCategory = "All";
        renderCategories();
        renderProcedures();
        searchInput.focus();
    });

    modalClose.addEventListener("click", closeProcedure);

    modal.addEventListener("click", function (event) {
        if (event.target.hasAttribute("data-close-modal")) {
            closeProcedure();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) {
            closeProcedure();
        }
    });

    renderCategories();
    renderProcedures();
})();
