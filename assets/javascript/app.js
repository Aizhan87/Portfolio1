$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
    $('.chart').easyPieChart({
    });
});

AOS.init({
    duration: 700,
});

const backToTop = document.querySelector(".gototop");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}