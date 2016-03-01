var nested = false;

$(document).ready(function() {
    makeRequest();
});

function makeRequest(){
    $.ajax({
        type: "GET",
        url: "http://10.8.235.166:5000/payable",
        crossDomain: true,
        contentType: "text/html; charset=utf-8",
        success: function(resp) {
            console.log("Access granted");
            console.log(resp);
            $(".adsbygoogle").remove();
        },
        error: function(xhr, textStatus, errorThrown) {
            if (xhr.status == 402) {
                console.log("Payment required");
                if (!nested) {
                    nested = true;
                    setTimeout(function() {
                        console.log("Making 2nd request...");
                        makeRequest();
                    }, 2000);
                }
            }
        },
        failure: function(err) {
            console.log("Failed to get data");
            alert(err);
        }
    })
}
