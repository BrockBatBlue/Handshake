$(document).ready(function() {
    //Get the value of every input form
    let titleInput = $("#title"); 
    let descriptionInput = $("#description");
    let contactInfoInput = $("#contactInfo");
    let phoneInput = $("#inputphoneNumber");
    let zipCodeInput = $("#inputZipCode");
    let categorySelect = $("#selectCategory");
    let firstNameInput = $("#inputFirstName");
    let lastNameInput = $("#inputLastName");
    let userSelect = $("#userSelect");

    $(document).on('submit', '.newBusinessForm', submitWorker) //id to the form

    let submitWorker = (event) => {
        event.preventDefault();
        //All fileds must be full, otherwise don't do anything.
        if (!firstNameInput.val().trim() || lastNameInput.val().trim() || phoneInput.val().trim()  || descriptionInput.val().trim() || !zipCodeInput.val().trim().trim() ||
        !categorySelect.val()) {
            return
        } else {
            //An id will be created for this person
            sendPerson(
                {
                    title = titleInput.val().trim(),
                    description: descriptionInput.val().trim(),
                    contactInfo = contactInfoInput.val().trim(),
                    phoneNumber: phoneInput.val().trim(),
                    firstName: titleInput.val().trim(),
                    lastName: lastNameInput.val().trim(),
                    zipCode: zipCodeInput.val().trim(),
                    category: categorySelect.val(),
                    category: ca.val(),
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