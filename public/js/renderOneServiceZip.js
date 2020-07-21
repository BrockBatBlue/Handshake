$(document).ready(function() { //File to render the selected person
    getLocation();
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Sorry, but Geolocation is not supported by this browser.");
        }
    }
  
    function showPosition(position) {
        var lat = 19.3689777 /*position.coords.latitude*/;
        var long = -99.25935699999999 /*position.coords.longitude*/;
        console.log(lat, long);
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyBcaAnYXn42whS3AAvvwoCkjsE4pbdihwU";
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (msg) {
                var results = msg.results;
                zip = results[0].address_components[5].long_name;
                //alert("Your Zip Code is: " + zip);
                console.log("Your Zip Code is: " + zip);
                getServicesByZip(zip);
            },
            error: function (req, status, error) {
                alert('Sorry, an error occurred.');
                //console.log(req.responseText);
            }
        });
    }

    let getServicesByZip = (zipCode) => {
        $.get(`/api/serviceZip/${zipCode}`,(data)=>{
            console.log("Services by Zip",data);
            renderServicesZip(data);
        });
    }
    
    let renderServicesZip = (services) => {
        services.forEach(element => {
            console.log(element);
            var colDiv=$("<div>");
            colDiv.addClass("col mb-4");
            $("#homeZipServices").append(colDiv);

            var card=$("<div>");
            card.addClass("card");
            colDiv.append(card);

            var cardBody=$("<div>");
            cardBody.addClass("card-body");
            card.append(cardBody);

            var header=$("<h5>");
            header.addClass("card-title");
            header.text(element.title);
            cardBody.append(header);

            var divRow=$("<div>");
            divRow.addClass("row text-left");
            cardBody.append(divRow);

            var divCatRat=$("<div>");
            divCatRat.addClass("col-6");
            divRow.append(divCatRat);

            var pCat=$("<p>");
            pCat.addClass("card-text");
            divCatRat.append(pCat);

            var sm=$("<small>");
            sm.addClass("text-muted");
            sm.text("("+element.Category.categoryName+")");
            pCat.append(sm);

            var divCatRat2=$("<div>");
            divCatRat2.addClass("col-6");
            divRow.append(divCatRat2);

            var pRev=$("<p>");
            pRev.addClass("card-text");
            divCatRat2.append(pRev);

            var sm2=$("<small>");
            sm2.addClass("text-muted");

            var rating="";
            //console.log("Reviews array"+element.Reviews.length)
            if(element.Reviews.length===0){
                rating="(No rating)";
            }else{
                rating="(Rating: "+element.Reviews[0].rating+" stars)";
            }
    
            sm2.text(rating);
            pRev.append(sm2);

            var pDes=$("<p>");
            pDes.addClass("card-text");
            pDes.text(element.description);
            cardBody.append(pDes);
            
            var pPhone=$("<p>");
            pPhone.addClass("card-text");
            pPhone.text("Phone number: "+element.phoneNumber);
            cardBody.append(pPhone);

            var butDiv=$("<div>");
            butDiv.addClass("text-center");
            cardBody.append(butDiv);

            var aBut=$("<a>");
            aBut.addClass("btn btn-info");
            aBut.text("View details");
            aBut.attr("href",`serviceDetails?service_id=${element.id}`);
            butDiv.append(aBut);

            var divFoot=$("<div>");
            divFoot.addClass("card-footer");
            card.append(divFoot);

            var smUser=$("<small>");
            smUser.addClass("text-muted");
            smUser.text("Added by: "+element.User.userName);
            divFoot.append(smUser);
        });
    }

});
