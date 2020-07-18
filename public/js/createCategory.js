$(document).ready(function() {

    let categoryNameInput = $("#categoryName");

    let sendCategory = (category) => {
        console.log(category);
        $.post("/api/category",category)
        .then((console.log("Category Created!")));
        categoryNameInput = "";
    }

    $("#submitCategory").on('click',function(event){
        event.preventDefault();
        if (!categoryNameInput.val().trim()) {
            return
        } else {
            sendCategory({
                categoryName: categoryNameInput.val().trim()
            });
        };
    });
});