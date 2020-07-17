$(document).ready(function() { //File to render the selected person
    let nameContainer = $(".card-header");
    let infoContainer = $(".card-body");
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
            personInfo = data;
            if (!personInfo || personInfo.length === 0) {
                displayEmpty(userID)
            } else {
                displayInfo(personInfo);
            }
        });
    }   

    /*let initializeRows = (info) => {
        infoContainer.empty();
        let infoToRender = [];
        for (let i = 0; i < info.legth; i++) {
            postsToRender.push(createNewRow(info[i]));
        }
        blogContainer.appends(infoToRender);
    }*/

    let displayInfo = (post) => {
        let name = $("<h2>");
        let list = $("<ul>");
        let category = $("<li>");
        let phone = $("<li>");
        let description = $("<li>");
        list.addClass("infoList"); //Remove bullets
        name.text(post.fistName + " " + post.LastName);
        category.text("Service: " + post.category);
        phone.text("Phone Number: " + post.phoneNumber);
        description.text("Zip Code: " + post.description);
        list.append(category,phone,description);
        nameContainer.append(name);
        list.append(infoContainer);
    }

});