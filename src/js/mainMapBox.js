
var API_KEY = 'f5b37f6727a3c631171a364ca84e8b89';
var MAP = null;

var photoArray = [];

$( document ).ready(function() {

  var hamburgCity = [53.55, 10.10];

  L.mapbox.accessToken = 'pk.eyJ1Ijoic2ViYmkiLCJhIjoiY2loM3M2aXAxMHozMnd5bTA4dzk3ZnpzNiJ9.NJTVS052Wl1FJ3aw8GTopw';
  MAP = L.mapbox.map('map', 'mapbox.streets')
    .setView(hamburgCity, 9);

  request();
  setTimeout(function(){
    $.each(photoArray, function(i, item) {
      var imageJson = {
        farm : photoArray[i].farm,
        server : photoArray[i].server,
        secret : photoArray[i].secret
      };
      getLocation(photoArray[i].id, imageJson);
    });

  }, 2000);

});

function initCircle(pos, json, photoId){
  var circle = L.circle(pos, 250, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).on('click', function(e) {
    var imageUrl = 'https://farm'+json.farm+'.staticflickr.com/'+json.server+'/'+photoId+'_'+json.secret+'.jpg';
    $('#imageBox img').attr('src', imageUrl);
    $('#imageBox').show().click(function() {
      $(this).hide();
    });

  }).addTo(MAP);
}

function request(){
  var searchQuery = 'Hamburg';
  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+API_KEY+'&text='+searchQuery+'&has_geo=1&format=json&nojsoncallback=1';
  $.getJSON(url, function( data ) {
    photoArray = data.photos.photo;
  });
}

function getLocation(photoId, imageJson){
  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key='+API_KEY+'&photo_id='+photoId+'&format=json&nojsoncallback=1';
  $.getJSON(url, function( data ) {
    var lat = data.photo.location.latitude;
    var lon = data.photo.location.longitude;
    initCircle([lat, lon], imageJson, photoId);
  });
}
