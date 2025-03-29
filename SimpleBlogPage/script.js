// You can add JavaScript for interactivity here, such as:
// - Handling form submissions
// - Adding dynamic content
// - Creating image carousels
// - etc.

// Example: Alert when clicking a "Read More" link

function highlightHeading(id) {
    const heading = document.getElementById(id);
    if (heading) {
        heading.style.transition = "color 0.3s"; // Smooth transition
        heading.style.color = "#FFD700"; // Brighter color
        setTimeout(() => {
            heading.style.color = ""; // Reset to original color
        }, 2000); // Reset after 2 seconds
    }
}

function highlightArticle(articleId) {
    // Remove highlight from all articles
    document.querySelectorAll('.blog-post').forEach(article => {
        article.style.transition = 'background-color 0.3s'; // Add transition
        article.style.backgroundColor = '';
    });

    // Highlight the clicked article
    const article = document.getElementById(articleId);
    if (article) {
        article.style.transition = 'background-color 0.3s'; // Add transition
        article.style.backgroundColor = '#2d2d6b'; // Light blue color

        // Remove the highlight after 2 seconds
        setTimeout(() => {
            article.style.backgroundColor = '';
        }, 2000);
    }
}