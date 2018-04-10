class Geolocation{
    constructor(){
        this.map = document.querySelector('.map'),
        this.coords();
    }

    coords(){
        window.navigator.geolocation.getCurrentPosition((position) => {
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            console.log(latitud);
            console.log(longitud);

            /* Geolocation.initMap(latitud, longitud) */
        });
        console.log(this)
        
    }

   /*  initMap(la,ln){
        new google.maps.Map(document.querySelector('.map'), {
            center: {lat: la, lng: ln},
            zoom: 8
          });
    } */
}




(function () {
    document.addEventListener("DOMContentLoaded", () => new Geolocation(), false)
    console.log('geo loaded')
})()