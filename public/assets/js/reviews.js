$(document).ready(function() {
    //Get the value from the review form
    let subjectInput = $("#subject");
    let commentInput = $("#comment");
    let ratingSelect = $("#rating");

    $("#comment").on('submit',handleFormSubmit)        //id for review form

    let handleFormSubmit = () => {
        if (!subjectInput.val().trim() || !commentInput.val().trim() || !ratingSelect.val()) {
            return 
        }

        let newReview = {
            subject: subjectInput.val().trim(),
            comment: commentInput.val().trim(),
            rating: ratingSelect.val()
        }
    }

});