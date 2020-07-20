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
    // Initializing toasts fail and success
    $('.toast.userSuccessful').toast({animation: true, autohide: true, delay: 2000});
    $('.toast.userUnSuccessful').toast({animation: true, autohide: true, delay: 2000});
    $("#userForm").on('click', createUser) //id to the form

    //Post the new service in the page. 
    let newUser = (userInfo) => {
        console.log(userInfo);
        $.post("/api/users",userInfo)
        .then(()=>{
            $('.toast.userSuccessful').toast("show");
            console.log("User Created! :", userInfo)
        })
        .catch(()=>{
            $('.toast.userUnSuccessful').toast("show");
        })
    }
});