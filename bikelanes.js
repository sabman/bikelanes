$(document).ready(function () {
  function initialize() {
    //set styles for maps with bike routes
    var bikeStyles = [
      {
        "featureType": "road.highway",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "administrative",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#f3f3f3" },
          { "visibility": "on" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]

    //set styles for maps with car routes
    var carStyles = [
      {
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "administrative",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#f3f3f3" },
          { "visibility": "on" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#ffffff" },
          { "visibility": "on" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#a75d53" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]

    //cities names, coords
    var cities = [
      ['New York', 40.713658, -73.981054],
      ['Los Angeles', 34.0194, -118.4108],
      ['Chicago', 41.8376, -87.6818],
      ['Houston', 29.7805, -95.3863],
      ['Philadelphia', 40.0094, -75.1333],
      ['Phoenix', 33.5722, -112.088],
      ['San Antonio', 29.4724, -98.5251],
      ['San Diego', 29.4724, -98.5251],
      ['Dallas', 32.7757, -96.7967],
      ['San Jose' , 37.2969, -121.8193],
      ['Austin', 30.3072, -97.756],
      ['Indianapolis', 39.7767, -86.1459],
      ['Jacksonville', 30.337, -81.6613],
      ['San Francisco', 37.7751, -122.4193],
      ['Columbus', 39.9848, -82.985],
      ['Charlotte', 35.2087, -80.8307],
      ['Fort Worth', 32.7795, -97.3463],
      ['Detroit', 42.383, -83.1022],
      ['El Paso', 31.8484, -106.427],
      ['Memphis ', 35.1035, -89.9785]
    ]

    //function to set the center of the map for each city and other options
    function setMapOptions(lat, lng) {
      var mapOptions = {
        center: { lat: lat, lng: lng},
        zoom: 12,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
      };
      return mapOptions
    }

    $(cities).each(function(index) {
      $("#mainSqueeze").append(
      '<div class="row textrow row-centered">'+ 
        '<div class="col-xs-11 col-md-11 col-centered title"><h2>'+cities[index][0]+'</h2></div>'+
        '<div class="col-xs-11 col-md-11 col-centered title"></div>'+
      '</div>'+ 
      '<div class="row maprow row-centered">'+
        '<div class="col-xs-5 col-md-5 col-centered" id="bike-'+cities[index][0]+'"></div>'+
        '<div class="col-xs-1 col-md-1 col-centered"></div>'+
        '<div class="col-xs-5 col-md-5 col-centered" id="car-'+cities[index][0]+'"></div>'+
      '</div>'+
      '<div class="row textrow row-centered">'+ 
        '<div class="col-xs-11 col-md-11 col-centered title"></div>'+
      '</div>'
      );
      mapOptions = setMapOptions(cities[index][1],cities[index][2])
      
      bikeMap = new google.maps.Map(document.getElementById('bike-'+cities[index][0]),
      mapOptions);
      bikeMap.setOptions({styles: bikeStyles});
      var bikeLayer = new google.maps.BicyclingLayer();
      bikeLayer.setMap(bikeMap);

      var carMap = new google.maps.Map(document.getElementById('car-'+cities[index][0]),
      mapOptions);
      carMap.setOptions({styles: carStyles});

    })

  }
  google.maps.event.addDomListener(window, 'load', initialize);
});