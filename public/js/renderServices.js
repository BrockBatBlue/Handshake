$(document).ready(function() { //File to render the selected service
    //let table = $("#servicesTable");
    let newPerson = $("tbody");
    let errorContainer = $(".person-container");

    let getPosts = (categoryID) => {             //Foreign Key --> refer to category (carpentry, plumbing, etc)
        //categoryID = "/?service_id=" + categoryID;
        $.get("/api/category/" + categoryID,(data)=>{ //
            console.log("DATA",data);
            posts = data;
            console.log(posts);
            if (!posts || posts.length === 0) {
                displayEmpty(categoryID);
            } else {
                initializeRows(posts);
            };
        });
    };

    let renderAll = () => {
        //console.log("HOLA");
        $.get("/api/service",(data)=>{ //
            console.log("DATA",data);
            posts = data;
            console.log(posts);
            if (!posts || posts.length === 0) {
                displayEmpty();
            } else {
                initializeRows2(posts);
            };
        });
    }
    
    //Get the id from the category to just show the selected service
    //Example of route for this page '/service?service_id=' + id of the service
    let url = window.location.search;
    let categoryID;
    if (url.indexOf("?category_id=") !== -1) {
        categoryID = url.split("=")[1];
        if (categoryID > 0) {
            getPosts(categoryID);
        } 
    } else {
        renderAll();
    }

    let initializeRows2 = (posts) => {
        
        for (let i = 0; i <posts.length; i++) {
            let newTr = $("<tr>");      //New line
            newTr.data("data",posts);
            newTr.append("<td>" + posts[i].title + "</td>");
            newTr.append("<td>" + posts[i].phoneNumber + "</td>");
            newTr.append("<td>" + posts[i].zipCode + "</td>");
            newTr.append("<td><a href='serviceDetails?service_id=" + posts[i].id + "'>Details</td>");
            newTr.append("<td><a href='reviews?service_id=" + posts[i].id + "'>Write a review</td>");
            $("tbody").append(newTr);
            //console.log(newTr);
        }
    }

    let initializeRows = (posts) => {
        //console.log(posts.Services[0].title);
        let categoryArray = posts.Services;
        //let postsToRender = [];
        for (let i = 0; i < categoryArray.length; i++) {
            //postsToRender.push(createPersonRow(posts[i]));
            let newTr = $("<tr>");      //New line
            newTr.data("data",posts);
            newTr.append("<td>" + categoryArray[i].title + "</td>");
            newTr.append("<td>" + categoryArray[i].phoneNumber + "</td>");
            newTr.append("<td>" + categoryArray[i].zipCode + "</td>");
            newTr.append("<td><a href='serviceDetails?service_id=" + categoryArray[i].id + "'>Details</td>");
            newTr.append("<td><a href='reviews?service_id=" + categoryArray[i].id + "'>Write a review</td>");
            $("tbody").append(newTr);
        };
        //renderServices(postsToRender);
    };

    /*let renderServices = (rows) => {
        console.log(rows);
        //authorList.children().not(":last").remove();
        //authorContainer.children(".alert").remove();
        if (rows.length) {
          console.log(rows);
          newPerson.prepend(rows); //Appen in the body of the table
        }  
    } */
    
    //Create a new line in the table for each person
    /*let createPersonRow = (post) => {
        console.log(post);
        let newTr = $("<tr>");      //New line
        newTr.data("data",post);
        newTr.append("<td>" + post.title + "</td>");
        newTr.append("<td>" + post.phoneNumber + "</td>");
        newTr.append("<td><a href='serviceDetails?service_id=" + post.id + "'>Details</td>");
        newTr.append("<td><a href='reviews?service_id=" + post.id + "'>Write a review</td>");
        return newTr
    }*/

    //Display this message if there is no persons offering this service.
    let displayEmpty = () => {
        errorContainer.css('display','block');
        let message =  $("<h2>");
        message.css({"text-align": "center", "margin": "20px 0"});
        message.text("No information for this service, wait for someone to offer it!");
        errorContainer.append(message);
    }

});