$(document).ready(function() {
    //Get the value of every input form
    let userName = $("#userName"); 
    let name = $("#name");
    let lastName = $("#lastName");
    let email = $("#email");
     
    let createUser = (event) => {
        event.preventDefault();
        newUser(
            {
                userName: userName.val().trim(),
                name: name.val().trim(),
                lastName: lastName.val().trim(),
                email: email.val().trim()
            }
        )
    }
    /*categorySelect.on('change',function(){
        console.log(categorySelect.val());
    })*/
    $("#userForm").on('click', createUser) //id to the form

    //Post the new service in the page. 
    let newUser = (userInfo) => {
        console.log(userInfo);
        $.post("/api/users",userInfo)
        .then((console.log("User Created! :", userInfo)));
    }
});