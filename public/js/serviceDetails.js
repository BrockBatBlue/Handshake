$(document).ready(function() {
    let url = window.location.search;
    let serviceID;
    if (url.indexOf("?service_id=") !== -1) {
        serviceID = url.split("=")[1];
    }
    console.log("Service ID: ", serviceID)

    let getServiceDetails = () => {
        $.get(`/api/service/${serviceID}`,(data)=>{ //
            renderHTML(data);
        });
    }

    getServiceDetails();

    let renderHTML = (data) =>{
        console.log("Service data inside render html: ",data);
        $("#serviceTitle").text(data[0].title);
        $("#serviceDescription").text("Service description: "+data[0].description);
        $("#serviceContactInfo").text("Contact Info: "+data[0].contactInfo);
        $("#servicePhoneNum").text("Phone Number: "+data[0].phoneNumber);
        $("#serviceZipCode").text("Zip Code: "+data[0].zipCode);
        $("#serviceCategory").text("("+data[0].Category.categoryName+")");
        
        data[0].Reviews.forEach(element => {
            var reviewDiv=$("<div>");
            $("#reviewsSection").append(reviewDiv);
            var title=$("<h4>");
            title.text(element.title);
            reviewDiv.append(title);

            var rating=$("<div>");
            rating.text("Rating: "+element.rating);
            reviewDiv.append(rating);

            var reviewDetail=$("<div>");
            reviewDetail.text(element.text);
            reviewDiv.append(reviewDetail);

            var space=$("<hr>");
            reviewDiv.append(space);

        });
    }

});