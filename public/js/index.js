let apiKEY = "AIzaSyANEf3BZpRJiv5Izb20X-Zwc7wXYrEus5Y";

$(document).ready(function(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
        })
    } else {
        console.log("Geolocation is not supported!")
    }

    let latitude;
    let longitude;

    let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + ","+ longitude + "&key=" + apiKEY;

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then((response)=>{
        console.log(response);
    })

    $("#service").on('click',function(event){
        //Get the id of the service you want to visualize
        let id = $(this).attr("data-id");
    })
});