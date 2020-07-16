$(document).ready(function() { //File to render the selected service

    let newPerson = $("tbody");
    let errorContainer = $(".person-container");
    //Get the id from the category to just show the selected service
    //Example of route for this page '/service?service_id=' + id of the service
    let url = window.location.search;
    let serviceID;
    if (url.indexOf("?service_id=") !== -1) {
        serviceID = url.split("=")[1];
        getPosts(serviceID);
    }

    let getPosts = (serviceID) => {             //Foreign Key --> refer to category (carpentry, plumbing, etc)
        serviceID = "/?service_id=" + serviceID;
        $.get("/api/service" + serviceID,(data)=>{ //
            console.log("DATA",data);
            posts = data;
            if (!posts || posts.length === 0) {
                displayEmpty(serviceID);
            } else {
                initializeRows(posts);
            };
        });
    };   

    let initializeRows = (posts) => {
        let postsToRender = [];
        for (let i = 0; i < posts.length; i++) {
            postsToRender.push(createPersonRow(posts[i]));
        };
        renderServices(postsToRender);
    };

    let renderServices = (rows) => {
        //authorList.children().not(":last").remove();
        //authorContainer.children(".alert").remove();
        if (rows.length) {
          console.log(rows);
          newPerson.prepend(rows); //Appen in the body of the table
        }  
    } 
    
    //Create a new line in the table for each person
    let createPersonRow = (post) => {
        let newTr = $("<tr>");      //New line
        newTr.data("data",data);
        newTr.append("<td>" + post.firstName + "</td>");
        newTr.append("<td>" + post.lastName + "</td>");
        newTr.append("<td>" + phoneNumber + "</td>");
        newTr.append("<td>" + zipCode + "</td>");
        newTr.append("<td><a href='/services?user_id=" + post.id + "'>See in Detail</a></td>");
        return newTr
    }

    //Display this message if there is no persons offering this service.
    let displayEmpty = () => {
        errorContainer.css('display','block');
        let message =  $("<h2>");
        message.css({"text-align": "center", "margin": "20px 0"});
        message.text("No information for this service, wait for someone to offer it!");
        errorContainer.append(message);
    }

});