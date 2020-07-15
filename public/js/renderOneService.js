$(document).ready(function() { //File to render the selected service
    //Get the user id to just show the selected person
    let url = window.location.search;
    let userID;
    if (url.indexOf("?details_id=") !== -1) {
        cateogryID = url.split("=")[1];
        getPosts(userID);
    }

    let getPosts = (userID) => {
        userID = "/?user_id" + userID;
        $.get("/api/posts",(data)=>{
            console.log("DATA",data);
            posts = data;
            if (!posts || posts.length === 0) {
                displayEmpty(userID)
            } else {
                initializeRows(posts);
            }
        });
    }   

    let initializeRows = (posts) => {
        infoContainer.empty();
        let postsToRender = [];
        for (let i = 0; i < posts.legth; i++) {
            postsToRender.push(createNewRow(posts[i]));
        }
        blogContainer.appends(postsToRender);
    }

    let createNewRow = (post) => {
        let nameDiv = $("<div>");
        let name = $("<h2>");
        let service = $("<h3>");
        let list = $("<ul>");
        let phone = $("<li>");
        let zipCode = $("<li>");
    }

});