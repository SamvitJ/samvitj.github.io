// session state
var cookieName = "payments-cookie";
var cookieValue = "session-tracker";

// tab active state
var isActive = true;

window.onfocus = function() {
  isActive = true;
};

window.onblur = function() {
  isActive = false;
};

// request loop state
var nested = false;

// page load behavior
$(document).ready(function() {
    if (!readCookie(cookieName)) {
        requestInitial();
    }
    else {
        console.log("Existing cookie", document.cookie);

        $(".adsbygoogle").remove();
        startTimeRatedLoop();
    }
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
            startTimeRatedLoop();
        },
        error: function(xhr, textStatus, errorThrown) {
            if (xhr.status == 402) {
                console.log("Payment required");
                if (!nested) {
                    nested = true;
                    setTimeout(function() {
                        var schemeID = xhr.getResponseHeader("scheme_id");
                        var expiration = xhr.getResponseHeader("expiration");
                        createCookie(cookieName, schemeID, expiration);
                        console.log("Created cookie", document.cookie);

                        console.log("Making 2nd request...");
                        requestInitial();
                    }, 500);
                }
                else {
                    setTimeout(function() {
                        console.log("Rerequesting...");
                        requestInitial();
                    }, 5000);
                }
            }
        },
        failure: function(err) {
            console.log("Failed to get data");
            alert(err);
        }
    })
}

function startTimeRatedLoop() {
    setInterval(function() {
        if (isActive) {
            console.log("Requesting time-rated endpoint...");
            requestTimeRated();
        }
        else {
            console.log("Tab inactive");
        }
    }, 3000);
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
