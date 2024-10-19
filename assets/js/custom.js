// HomePage Slick Slider 1
$(document).ready(function () {    
    if ($('main#home').length) {  // Check if main#home exists
        // Slick Slider 1
        $('#slickSlider .slick-slider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 900,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 885,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // Slick Slider 2
        $('#indoorPlantSlider .slick-slider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 885,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    // HamBurger Open
    $("#hamBurger").click(function () {
        $(this).toggleClass("active");
        $("header nav").toggleClass("active");
        $("body").toggleClass("active");
    });
    // HamBurger Close
    $("header a").click(function () {
        // e.preventDefault();
        $("#hamBurger").removeClass("active");
        $("header nav").removeClass("active");
        $("body").removeClass("active");
    });
    // Show the button when the user scrolls down 100px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    // Scroll to top when the button is clicked
    $('#scrollToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800); // Smooth scroll with animation
        return false;
    });
});
