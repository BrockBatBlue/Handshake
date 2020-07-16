$(document).ready(function() {

    

    $.get("/api/workers",(data)=>{
        let rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
            rowsToAdd.push(createRow(data[i]));
        }
    })

});