$(document).ready(function() {
    //Get the value of every input form
    let titleInput = $("#title"); 
    let descriptionInput = $("#description");
    let contactInfoInput = $("#contactInfo");
    let phoneInput = $("#inputphoneNumber");
    let zipCodeInput = $("#inputZipCode");
    let categorySelect = $("#selectCategory");
    let userSelect = $("#userSelect");

    $(document).on('submit', '.newBusinessForm', submitWorker) //id to the form
     
    categorySelect.on("change",function(){
        console.debug("value changed");
    });


    let submitWorker = (event) => {
        event.preventDefault();
        //All fileds must be full, otherwise don't do anything.
        if (!titleInput.val().trim() || contactInfoInput.val().trim() || !phoneInput.val().trim()  || !descriptionInput.val().trim() || !zipCodeInput.val().trim().trim() ||
        !categorySelect.val() || !contactInfoInput.val().trim() || !userSelect.val()) {
            return
        } else {
            //An id will be created for this person
            sendPerson(
                {
                    title = titleInput.val().trim(),
                    description: descriptionInput.val().trim(),
                    contactInfo = contactInfoInput.val().trim(),
                    phoneNumber: phoneInput.val().trim(),
                    zipCode: zipCodeInput.val().trim(),
                    category: categorySelect.val(),
                    category: userSelect.val(),
                }
            )
        } 
    }
    //Post the new service in the page. 
    let sendPerson = (personInformation) => {
        console.log(personInformation);
        $.post("/api/service",personInformation)
        .then((console.log("Service Created!")));
    }
});