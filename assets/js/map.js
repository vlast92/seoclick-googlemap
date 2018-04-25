var map, markerPath = '/map/logo_small.png';;
var places = [
  ['Малоритский РК', 51.791602, 24.084557],
  ['Каменецкий РК', 52.400218, 23.823244],
  ['Жабинковский РК', 52.188494, 24.033224],
  ['Кобринский РК', 52.208886, 24.355961],
  ['Пружанский РК', 52.555603, 24.462931],
  ['Березовский РК', 52.533057, 24.981924],
  ['Дрогичинский РК', 52.185510, 25.159328],
  ['Ивацевичский РК', 52.709522, 25.339375],
  ['Пинский РК', 52.124666, 26.116591],
  ['Пинский ГК', 52.114852, 26.112117],
  ['Барановичский РК', 53.129950, 26.018583],
  ['Ляховичский РК', 53.036920, 26.269473],
  ['Ганцевичский РК', 52.762451, 26.427783],
  ['Лунинецкий ГК', 52.245769, 26.797328], 
  ['Столинский РК', 51.889875, 26.849613]  
];
var all_markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.090868, lng: 23.699472}, 
    scrollwheel: false,
    zoom: 15
  });
  
  var controls = document.createElement('div');
    controls.id = 'controls';
    controls.innerHTML = '<p>Левый клик по маркеру - приблизить</p><p>Правый клик по маркеру - отдалить</p>';
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controls);
    infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.close();

    var marker = new google.maps.Marker({
    position: {lat:52.091843, lng:23.678246},
    map: map,
	animation: google.maps.Animation.DROP,
    title: 'Брестский РК',
    icon: markerPath
  });
   event(marker);
   var marker2 = new google.maps.Marker({
    position: {lat:52.088067, lng:23.712678},
    map: map,
	animation: google.maps.Animation.DROP,
    title: 'Брестский ГК',
    icon: markerPath
  });
    event(marker2);
    map.addListener('rightclick', function() {
    map.setZoom(8);
    map.setCenter({lat: 52.598942, lng: 25.349901});
  });
}
function event (marker){
	marker.addListener('click', function() {
    map.setZoom(16);
    map.setCenter(marker.getPosition());
  });
    map.addListener('rightclick', function() {
    map.setZoom(8);
    map.setCenter({lat: 52.598942, lng: 25.349901});
  });
}
function drop() {
	document.getElementById("drop").disabled = true;
	map.setZoom(8);
    map.setCenter({lat: 52.598942, lng: 25.349901});
	clearMarkers();
  for (var i = 0; i < places.length; i++) {
		markers(i);
    }
}

function clearMarkers() {
  for (var i = 0; i < all_markers.length; i++) {
    all_markers[i].setMap(null);
  }
  all_markers = [];
}

function markers(i){
	 window.setTimeout(function() {
	 var place = places[i];
     all_markers.push(new google.maps.Marker({
      position: {lat: place[1], lng: place[2]},
	  animation: google.maps.Animation.DROP,
	  map: map,
      icon: markerPath,
      title: place[0]
	 }));
	if(i==places.length-1) {
		document.getElementById("drop").disabled = false;
	}
	all_markers[i].addListener('click', function() {
    map.setZoom(16);
    map.setCenter(all_markers[i].getPosition());
 	 });
	 },200*i);
}