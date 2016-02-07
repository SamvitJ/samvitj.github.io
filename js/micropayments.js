$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://10.8.235.166:5000/",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: "plain",
        success: function(resp) {
            console.log("Got data from server");
            console.log(resp);
        },
        failure: function(err) {
            console.log("Failed to get data");
            alert(err);
        }
    })
});
