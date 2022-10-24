$(document).ready(function () {
    /* Video */
    const videoSrc = $(".player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($(".player-1").attr("src") == '') {
                $(".player-1").attr("src", videoSrc);
            }
        }

    });
});

function scrollUp() {
    const scrollUp = document.querySelector('.scroll-up');
    // Lorsque le défilement est supérieur à la hauteur de 200 viewport, ajoutez la classe show-scroll à la balise a avec la classe scroll-top
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/* Services */
$('.services-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        2000:{
            items:5,
        }
    }
  });
  