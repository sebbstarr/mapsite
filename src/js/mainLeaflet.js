/**
 * Das wird nicht verwendet, ist nur zum Ausprobieren drin.
 */
$( document ).ready(function() {
  alert( "da guckt du!" );

  var map = L.map('map').setView([51.505, -0.09], 13);

  var id = "";
  var z = "";
  var x = "";
  var y = "";
  var accessToken = "";

  https://a.tiles.mapbox.com/v4/sebbi.cih3s6h9p0y0ovkm55s4meki0/page.html?access_token=pk.eyJ1Ijoic2ViYmkiLCJhIjoiY2loM3M2aXAxMHozMnd5bTA4dzk3ZnpzNiJ9.NJTVS052Wl1FJ3aw8GTopw#4/53.55/10.00
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
  }).addTo(map);
});

