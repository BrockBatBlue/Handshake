let apiKEY = "AIzaSyANEf3BZpRJiv5Izb20X-Zwc7wXYrEus5Y";

$(document).ready(function () {
  let categorySelect = $("#sendId");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      //console.log(position);
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      getLocation(latitude, longitude);
    });
  } else {
    //console.log("Geolocation is not supported!")
  }

  function getLocation(latitude, longitude) {
    let queryURL =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      latitude +
      "," +
      longitude +
      "&key=" +
      apiKEY;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then((response) => {
      // console.log(response);
    });

    $("#service").on("click", function (event) {
      //Get the id of the service you want to visualize
      let id = $(this).attr("data-id");
    });
  }

  /*$(".dropdown").on('change',function(event){
        event.preventDefault();
        //console.log(event.target);
        //console.log($(this).data());
        let category_id = $(this).val();
        console.log(category_id);
        $(this).attr('href',"servicesList?category_id=" + category_id);
    })*/

  categorySelect.on("change", function () {
    console.log(categorySelect.val());
    let category_id = categorySelect.val();
    $("#viewService").attr("href", "servicesList?category_id=" + category_id);
  });
});
