$(document).ready(function() {
    //Get the value of every input form
    let firstNameInput = $("#firstName");
    let lastNameInput = $("#lastName");
    let phoneInput = $("#phone");
    let zip_codeInput = $("#zip_code");
    let categorySelect = $("#category");

    $(document).on('submit', '#worker-form', submitWorker) //id to the form

    let submitWorker = (event) => {
        event.preventDefault();
        //All fileds must be full, otherwise don't do anything.
        if (!firstNameInput.val().trim().trim() || !lastNameInput.val().trim().trim() || !phoneInput.val().trim().trim() ||
        !zip_codeInput.val().trim().trim() || !categorySelect.val().trim()) {
            return
        } else {
            sendPerson(
                {
                    firstName:firstNameInput.val().trim(),
                    lastName:lastNameInput.val().trim(),
                    phone:phoneInput.val().trim(),
                    zip_code:zip_codeInput.val().trim(),
                    category:categorySelect.val()
                }
            )
        }
    }
    //Post the new information
    let sendPerson = (personInformation) => {
        $.post("/api/service",personInformation);
    }
});