$(document).ready(function() {
    //Get the value of every input form
    let titleInput = $("#title"); 
    let descriptionInput = $("#description");
    let contactInfoInput = $("#contactInfo");
    let phoneInput = $("#phoneNumber");
    let zipCodeInput = $("#zipCode");
    let categorySelect = $("#selectCategory");
    let userSelect = $("#userSelect");
     
    /*categorySelect.on("change",function(){
        console.debug("value changed");
    });*/


    let submitWorker = (event) => {
        event.preventDefault();
        console.log(categorySelect);
        //All fileds must be full, otherwise don't do anything.
        /*if (!titleInput.val().trim() || contactInfoInput.val().trim() || !phoneInput.val().trim()  || !descriptionInput.val().trim() || !zipCodeInput.val().trim().trim() ||
        !categorySelect.val() || !contactInfoInput.val().trim()) {
            return "No info"
        } else {*/
            //An id will be created for this person
            sendPerson(
                {
                    title: titleInput.val().trim(),
                    description: descriptionInput.val().trim(),
                    contactInfo: contactInfoInput.val().trim(),
                    phoneNumber: phoneInput.val(),
                    zipCode: zipCodeInput.val(),
                    CategoryId: categorySelect.val(),
                    UserId: userSelect.val()
                }
            )
        //}
    }
    /*categorySelect.on('change',function(){
        console.log(categorySelect.val());
    })*/
    // Initializing toasts fail and success
    $('.toast.serviceSuccessful').toast({animation: true, autohide: true, delay: 2000});
    $('.toast.serviceUnSuccessful').toast({animation: true, autohide: true, delay: 2000});

    $("#submitService").on('click', submitWorker) //id to the form

    //console.log("Hola");
    //Post the new service in the page. 
    let sendPerson = (personInformation) => {
    if (personInformation.title == "" || 
    personInformation.description == "" || 
    personInformation.contactInfo == "" ||
    personInformation.phoneNumber == "" ||
    personInformation.zipCode == "") {
        $('.toast.serviceUnSuccessful').toast("show");
     } else {
        console.log(personInformation);
        $.post("/api/service",personInformation)
        .then(()=>{
            $('.toast.serviceSuccessful').toast("show");
            console.log("Service Created! :", personInformation);
            $("#addNewService").trigger("reset");
        })
    }
        /*.catch(()=>{
            $('.toast.serviceUnSuccessful').toast("show");
        });*/
    }
});