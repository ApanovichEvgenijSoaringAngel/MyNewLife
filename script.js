var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}














$(document).ready(function(){
    // hide #back-top first
    $("#back-top").hide();
     
    // fade in #back-top
    $(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('#back-top').fadeIn();
    } else {
    $('#back-top').fadeOut();
    }
    });
    // scroll body to 0px on click
    $('#back-top a').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 800);
    return false;
    });
    });
    });