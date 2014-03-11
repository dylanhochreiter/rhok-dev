function maps(){

	var map;
	var brooklyn = new google.maps.LatLng(45.42963, -75.68841);

	var MY_MAPTYPE_ID = 'custom_style';

	function initialize() {

	  var featureOpts = [
	    {
	      stylers: [
	        { hue: '#191970' },
	        { visibility: 'simplified' },
	        { gamma: 0.5 },
	        { weight: 1.0 }
	      ]
	    },
	    {
	      featureType: 'water',
	      stylers: [
	        { color: '#293542' }
	      ]
	    }
	  ];

	  var mapOptions = {
	    zoom: 14,
	    center: brooklyn,
	    mapTypeControlOptions: {
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	    },
	    mapTypeId: MY_MAPTYPE_ID
	  };

	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	  var styledMapOptions = {
	    name: 'Custom Style'
	  };

	  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	}

	 var contentString =
      '<div id="siteNotice">'+
      '</div>'+
      '<h1>Shopify</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Our Hackathons</b>are held at Shopify. ' +
      '<p><a href="http://www.shopify.ca/contact">'+
      'click here for more info</a> '+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      // maxWidth: 200   ----We can also set a maxWidth
  });

  var marker = new google.maps.Marker({
      position: brooklyn,
      map: map,
      title: 'Shopify'

  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

	google.maps.event.addDomListener(window, 'load', initialize);

}

maps();