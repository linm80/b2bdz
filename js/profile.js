var info = document.getElementById('info');
        var offres = document.getElementById('offres');
        var contact = document.getElementById('contactez');
        var acceuil = document.getElementById('acceuil');
        var service1 = document.getElementById('service1');
        var grid = document.getElementById('grids');
        var offreService = document.getElementById('offreService');

        

        document.getElementById('open-service').addEventListener('click', function(){
            offreService.classList.add('show-page');
            offres.classList.remove('show-page');
            contact.classList.remove('show-page');
            acceuil.classList.add('acceuil');

        })
        document.getElementById('open-info').addEventListener('click', function(){
            info.classList.add('show-page');
            offres.classList.remove('show-page');
            contact.classList.remove('show-page');
            offreService.classList.remove('show-page');
            acceuil.classList.add('acceuil');
        });
        document.getElementById('open-offres').addEventListener('click', function(){
            offres.classList.add('show-page');
            contact.classList.remove('show-page');
            info.classList.remove('show-page');
            offreService.classList.remove('show-page');
            acceuil.classList.add('acceuil');
        });
        document.getElementById('open-contact').addEventListener('click', function(){
            contact.classList.add('show-page');
            info.classList.remove('show-page');
            offres.classList.remove('show-page');
            acceuil.classList.add('acceuil');
        });
        document.getElementById('close').addEventListener('click', function(){
            info.classList.remove('show-page');
            offres.classList.remove('show-page');
            contact.classList.remove('show-page');
            ofrreService.classList.remove('show-page');
            acceuil.classList.remove('acceuil');
        });
        document.getElementById('service-click').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click2').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click3').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click4').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click5').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click6').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click7').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click8').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        document.getElementById('service-click9').addEventListener('click', function(){
            grid.classList.add('services');
            service1.classList.add('show-services');
        });
        
        document.getElementById('close-service').addEventListener('click', function(){
                grid.classList.remove('services');
                service1.classList.remove('show-services');
                offres.classList.add('show-page');
                contact.classList.remove('show-page');
                info.classList.remove('show-page');
                acceuil.classList.add('acceuil');
        });

        document.getElementById('show-ext').addEventListener('click', function(){
            offre_ext.classList.add('show-ext');
        });
        document.getElementById('close-ext').addEventListener('click', function(){
            offre_ext.classList.remove('show-ext');
        });



// Slider Script

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}




var slideIndexService = 1;
showSlidesService(slideIndexService);

// Next/previous controls
function plusSlidesService(n) {
    showSlidesService(slideIndexService += n);
}

// Thumbnail image controls
function currentSlideService(n) {
    showSlidesService(slideIndexService = n);
}
function showSlidesService(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesService");
    var dots = document.getElementsByClassName("dotService");
    if (n > slides.length) {slideIndexService = 1} 
    if (n < 1) {slideIndexService = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexService-1].style.display = "block"; 
    dots[slideIndexService-1].className += " active";
}
