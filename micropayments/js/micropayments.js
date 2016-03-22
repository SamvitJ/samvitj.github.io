var nested = false;

$(document).ready(function() {
    requestInitial();

    setInterval(function() {
        console.log("Requesting time-rated endpoint...");
        requestTimeRated();
    }, 15000);
});

function requestInitial(){
    $.ajax({
        type: "GET",
        url: "http://10.8.220.169:5000/payable", // "http://192.168.0.14:5000/payable",
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
                        requestInitial();
                    }, 500);
                }
            }
        },
        failure: function(err) {
            console.log("Failed to get data");
            alert(err);
        }
    })
}

function requestTimeRated(){
    $.ajax({
        type: "GET",
        url: "http://10.8.220.169:5000/payable/timerated", // "http://192.168.0.14:5000/payable/timerated",
        crossDomain: true,
        contentType: "text/html; charset=utf-8",
        success: function(resp) {
            console.log("Access maintained");
            console.log(resp);
        },
        error: function(xhr, textStatus, errorThrown) {
            if (xhr.status == 402) {
                console.log("Access lost; payment required");
            }
        },
        failure: function(err) {
            console.log("Failed to get data");
            alert(err);
        }
    })
}
