$(document).ready(function() {
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map');
    map.locate({setView:true,maxzoom:15});
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // add a marker in the given location, attach some popup content to it and open the popup
    var marker=L.marker([40.2838, -3.8215]);
	marker.bindPopup('<a href="http://www.etsit.urjc.es">ETSIT</a> (<a href="http://www.urjc.es">URJC</a>)').openPopup();
    marker.addTo(map);



function onMapClick(e) {
      var popup = L.popup();
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked at " + e.latlng.toString())
        .openOn(map);
};

map.on('click', onMapClick);


function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Estas a  " + radius + " metros de este punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);
};



function onLocationError(e) {
    alert(e.message);
};
map.on('locationfound', onLocationFound);
map.on('Error de localizacion', onLocationError);
});
