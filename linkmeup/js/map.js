/*jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});*/

// Display multiple markers on a map
var map;
var markers, icons;

var hasLoadedMap;

// function makeDataRequest() {
// jQuery(function($) {
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://34.209.91.166:80/",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(resp) {
            markers = resp.locations;
            console.log(markers);
            if (hasLoadedMap) {
                console.log("Got data + adding markers");
                addMarkers();
            }
            else {
                console.log("Got data + waiting for map");
            }
        },
        failure: function(err) {
            alert(err);
        }
    })
});

function addMarkers() {

    var infoWindowContent = new Array()
    var infoWindow = new google.maps.InfoWindow();

    // Loop through our array of markers & place each one on the map  
    var marker, i;
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        // bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icons[markers[i][3]]["icon"],
            title: markers[i][0]
        });

        htmlArray = ['<div class="info_content">' +
        '<h3>' + markers[i][0] + '</h3>' +
        '<p></p>' + '</div>'];
        infoWindowContent.push(htmlArray);
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        /* map.fitBounds(bounds); */
    }
}

function createLegend() {

    // icons correspond to time code
    var icon_red = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    var icon_blue = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    var icon_green = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    var icon_yellow = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";

    // less recent -> more recent
    icons = [{
        "name": "Past hour",
        "icon": icon_yellow
    }, {
        "name": "Past day",
        "icon": icon_green
    }, {
        "name": "Past week",
        "icon": icon_blue
    }, {
        "name": "Since launch",
        "icon": icon_red
    }];

    // add legend to map
    var legend = document.getElementById('legend');
    var j;
    for (j = 0; j < icons.length; j++) {
      var type = icons[j];
      var name = type.name;
      var icon = type.icon;
      var div = document.createElement('div');
      div.innerHTML = '<img src="' + icon + '"> ' + name;
      legend.appendChild(div);
    }

    // push legend to bottom right corner of map
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

    // load markers + set status
    if (markers != null) {
        addMarkers();
    }
    hasLoadedMap = true;
}

function initMap() {

    // Map options
    var mapOptions = {
        mapTypeId: 'roadmap',
        center: {lat: 38.0, lng: -95.0},
        zoom: 5
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Set map bounds to include all of contiguous United States
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(60, 40.00));
    bounds.extend(new google.maps.LatLng(60, -20.00));
    bounds.extend(new google.maps.LatLng(-40, 40.00));
    bounds.extend(new google.maps.LatLng(-40, -20.00));

    var lastAutoBounds;
    var boundsListener = google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
        console.log("First bounds change");
        lastAutoBounds = map.getBounds();
    });
    map.fitBounds(bounds);

    // Adjust map bounds if user changes screen size
    var userChangedBounds = false;
    var eventsListener = google.maps.event.addDomListener(window, 'resize', function() {

        if (!userChangedBounds) {

            if (lastAutoBounds != null && map.getBounds() != lastAutoBounds) {
                console.log("User changed bounds");
                userChangedBounds = true;
            }
            else {
                console.log("User didn't change bounds, so adjusting bounds");
                boundsListener = google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
                    lastAutoBounds = map.getBounds();
                });
                map.fitBounds(bounds);
            }
        }
    });

    // Create legend and add markers
    createLegend();
}
