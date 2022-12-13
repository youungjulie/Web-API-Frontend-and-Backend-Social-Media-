function loadFollowers() {
    $.get(`/api/users/${profileUserId}/followers`, results => {
        outputUsers(results, $(".resultsContainer"));
    });
}

function loadFollowing() {
    $.get(`/api/users/${profileUserId}/following`, results => {
        outputUsers(results, $(".resultsContainer"));
    });
}

function outputUsers(results, container) {
    container.html("");

    if (!results.length) {
        container.append("<span class='noResults'>Nothing to show.</span>");
        return;
    }

    results.forEach(result => {
        var html = createHtmlUser(result, true);
        container.append(html);
    });
}

function createHtmlUser(userData, showFollowButton) {
    var name = userData.firstName + " " + userData.lastName;

    var followButton = "";
    var isFollowing = userLoggedIn.following && userLoggedIn.following.includes(userData._id);
    var text = isFollowing ? "Following" : "Follow";
    var buttonClass = isFollowing ? "followButton following" : "followButton";

    // showFollowButton for later use: notifications page
    if (showFolloweButton && userLoggedIn._id == userData._id) {
        followButton = `<div class='followButtonContainer'>
                            <button class='{buttonClass}' data-user='${userData._id}'>${text}</button>
                        </div>`;
    }

    return `<div class='user'>
                <div class='userImageContainer'>
                    <img src='${userData.profilePic}'>
                </div>
                <div class='userDetailsContainer'>
                    <a href='/profile/${userData.username}'>
                        <span class='name'>${name}</span>
                    </a>
                    <span class='username'>@${userData.username}</span>
                </div>
                ${followButton}
            </div>`;
}

$(document).ready(() => {
    if (selectedTab === "followers") {
        loadFollowers();
    }
    else {
        loadFollowing();
    }
});
