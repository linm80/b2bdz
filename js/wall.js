var msg = document.getElementById('msg');
var offre_ext = document.getElementById('offre_ext');


document.getElementById('show-msg').addEventListener('click', function () {
    msg.classList.add('show-msg');

});
document.getElementById('show-noti').addEventListener('click', function () {
    msg.classList.add('show-msg');

});
document.getElementById('close-msg').addEventListener('click', function () {
    msg.classList.remove('show-msg');
});

document.getElementById('show-ext').addEventListener('click', function () {
    offre_ext.classList.add('show-ext');
});
document.getElementById('close-ext').addEventListener('click', function () {
    offre_ext.classList.remove('show-ext');
});


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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}