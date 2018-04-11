function initMap() {
    window.navigator.geolocation.getCurrentPosition((position) => {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        
        console.log(latitud);
        console.log(longitud)
        var myLatLng = {lat: latitud, lng: longitud};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Estás aquí'
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/paddle/';
        var icon = iconBase + 'grn-blank.png'

        var features = [
            {
                position: new google.maps.LatLng(40.426118, -3.696861),
            },
            {
                position: new google.maps.LatLng(40.423492, -3.698385),
            },
            {
                position: new google.maps.LatLng(40.424440, -3.714377),
            }
        ]

        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icon,
                map: map
            });
        });
    })
}


(function () {
    document.addEventListener("DOMContentLoaded", initMap, false)
    console.log('geo loaded')
})()