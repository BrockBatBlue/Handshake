$(document).ready(function() {
    //Get the value of every input form
    let firstNameInput = $("#firstName");
    let lastNameInput = $("#lastName");
    let phoneInput = $("#phone-number");
    let zipCodeInput = $("#zip-code");
    let categorySelect = $("#category");

    $(document).on('submit', '#worker-form', submitWorker) //id to the form

    let submitWorker = (event) => {
        event.preventDefault();
        //All fileds must be full, otherwise don't do anything.
        if (!firstNameInput.val().trim() || lastNameInput.val().trim() || phoneInput.val().trim() || !zipCodeInput.val().trim().trim() ||
        !categorySelect.val()) {
            return
        } else {
            //An id will be created for this person
            sendPerson(
                {
                    firstName: titleInput.val().trim(),
                    lastName: lastNameInput.val().trim(),
                    phoneNumber: phoneInput.val().trim(),
                    zipCode: zipCodeInput.val().trim(),
                    category: categorySelect.val(),
                }
            )
        }
    }
    //Post the new service in the page. 
    let sendPerson = (personInformation) => {
        $.post("/api/post",personInformation)
        .then((console.log("Service Created!")));
    }
});