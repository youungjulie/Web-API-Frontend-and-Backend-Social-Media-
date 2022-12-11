$(document).ready(() => {
    // load posts when page loads
    $.get("/api/posts/" + postId, results => {
        outputPostsWithReplies(results, $(".postsContainer"));
    })
})
