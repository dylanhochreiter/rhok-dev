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

	google.maps.event.addDomListener(window, 'load', initialize);

}

maps();