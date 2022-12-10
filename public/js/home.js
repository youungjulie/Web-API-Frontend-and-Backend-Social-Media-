$(document).ready(() => {
    // load posts when page loads
    $.get("/api/posts", results => {
        outputPosts(results, $(".postsContainer"));
    })
})

function outputPosts(results, container) {
    container.html("");

    if(!Array.isArray(results)) {
        results = [results];
    }

    results.forEach(result => {
        var html = createPostHtml(result);
        container.append(html);
    });

    if(results.length === 0) {
        container.append("<span class='noResults'>Nothing to show.</span>");
    }
}