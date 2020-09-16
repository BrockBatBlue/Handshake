$(document).ready(function () {
  let categoryNameInput = $("#categoryName");

  let sendCategory = (category) => {
    console.log(category);
    $.post("/api/category", category).then(console.log("Category Created!"));
    $("#categoryForm").trigger("reset");
  };

  $(".toast.catSuccessful").toast({
    animation: true,
    autohide: true,
    delay: 2000,
  });
  $(".toast.catUnSuccessful").toast({
    animation: true,
    autohide: true,
    delay: 2000,
  });
  $("#submitCategory").on("click", function (event) {
    event.preventDefault();

    if (!categoryNameInput.val().trim()) {
      $(".toast.catUnSuccessful").toast("show");
      return;
    } else {
      sendCategory({
        categoryName: categoryNameInput.val().trim(),
      });
      $(".toast.catSuccessful").toast("show");
      $("#categoryForm").trigger("reset");
    }
  });
});
