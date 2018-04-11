function video () {
   const maximo = 720; // ancho total en px de la barra de progreso
   let oVideo = document.querySelector('.video');
   let oReproducir = document.querySelector('.btn-reproducir');
   let oBarra = document.querySelector('.barra');

   oReproducir.addEventListener('click', clickReproducir)
   oBarra.addEventListener('click', clickBarra)

   function clickReproducir () {
       if(!oVideo.paused && !oVideo.ended) {
           //paramos el vídeo
            oReproducir.classList.add('fa-play');
            oReproducir.classList.remove('fa-pause');
            oVideo.pause();
            window.clearInterval(bucle);
        }else{
            //reproducimos el video
            oVideo.play();
            oReproducir.classList.remove('fa-play');
            oReproducir.classList.add('fa-pause');
            var bucle = window.setInterval(estado, 1000);
            // cada segundo ejecuto la función estado, que pintará la barra de estado
            return bucle;
        }	 
   };

   function clickBarra (e) {
       if(!oVideo.paused && !oVideo.ended) {
            //si el video se esta reproduciendo
            var ratonX = e.pageX - oBarra.offsetLeft;
            // valor en x de la barra: x(raton) - x(inicio barra) 
            var nuevoTiempo = ratonX * oVideo.duration/maximo;
            // valor x en segundos  x * t / x(maximo)
            oVideo.currentTime = nuevoTiempo;
            // cambio de tiempo del video
            oBarra.value = ratonX;
            // cambio de aspecto de la barra
       }
   };

   function estado(bucle){
       if(!oVideo.ended){
           // si continua la reproducción
           var total=parseInt(oVideo.currentTime * maximo/oVideo.duration);
           oBarra.value = total;
       }else{
           oBarra.value = 0;
           oReproducir.classList.add('fa-play');
           oReproducir.classList.remove('fa-pause');
           window.clearInterval(bucle);
           // termino con la ejecución repetida de la función
       };
   };
};


(function () {
   document.addEventListener("DOMContentLoaded", video, false)
   console.log('video loaded')
})()