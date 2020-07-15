$(document).ready(function() {
    //Get the value from the review form
    let subjectInput = $("#subject");
    let commentInput = $("#comment");
    let ratingSelect = $("#rating");

    $("#comment").on('submit',handleFormSubmit)        //id for review form

    //Create a new review
    let handleFormSubmit = () => {
        if (!subjectInput.val().trim() || !commentInput.val().trim() || !ratingSelect.val()) {
            return 
        }

        let newReview = {
            subject: subjectInput.val().trim(),
            comment: commentInput.val().trim(),
            rating: ratingSelect.val()
        }

        submitReview(newReview);
    }

    //Post the new review
    let submitReview = (post) => {
        $.post("/api/reviews",post,() => {
            location.reload();
        });  
    };

    //Show only the reviwes related to that person
    let url = window.location.search;
    let personID;
    if (url.indexOf("?personID") !== -1) {
        personID = url.split("=")[1];
        getReviews(personID);
    }
    
});