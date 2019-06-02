var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

var x = navigator.geolocation;

x.getCurrentPosition(succes, failure);

function succes(position) {
    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;


    lat.innerHTML=mylat;
    long.innerHTML=mylong;

    var coords = new google.maps.LatLng(mylat, mylong);
    var mapOptions = {
        zoom: 16,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({map: map, position: coords});
}

function failure() {
    lat.innerHTML = ("<p>Nem működik a kordináták nem elérhetőek!</p>");
}