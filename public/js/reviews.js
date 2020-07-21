$(document).ready(function() {
    //Get the value from the review form
    let subjectInput = $("#subject");
    let commentInput = $("#comment");
    let ratingSelect = $("#rating");
    let userSelectRev = $("#userSelectRev");

    //Show only the reviwes related to that person
    // let getId = () => {
    //     let url = window.location.search;
    //     let personID;
    //     if (url.indexOf("?personID") !== -1) {
    //         personID = url.split("=")[1];
    //         return personID;
    //     }
    // }

    //Create a new review
    let handleFormSubmit = (event) => {
        event.preventDefault();
        //$("#servTit").text("Review for:  "+ posts[0].title);
        let url = window.location.search;
        let serviceID;
        if (url.indexOf("?service_id=") !== -1) {
            serviceID = url.split("=")[1];
        }
        console.log("Service ID: ", serviceID)
        console.log("User ID:", userSelectRev.val())


        let newReview = {

            title: subjectInput.val().trim(),
            text: commentInput.val().trim(),
            rating: ratingSelect.val(),
            UserId: userSelectRev.val(),
            ServiceId: serviceID
        }

        submitReview(newReview);
    }
    // Initializing toasts fail and success
    $('.toast.reviewSuccessful').toast({animation: true, autohide: true, delay: 2000});
    $('.toast.reviewUnSuccessful').toast({animation: true, autohide: true, delay: 2000});
    $("#reviewSubmit").on('click',handleFormSubmit)        //id for review form

    //Post the new review
    let submitReview = (post) => {
        $.post("/api/reviews",post,() => {
            location.reload();
        })
        .then(()=>{
            $('.toast.reviewSuccessful').toast("show");
        })
        .catch(()=>{
            $('.toast.reviewUnSuccessful').toast("show");
        });  
    };    
});