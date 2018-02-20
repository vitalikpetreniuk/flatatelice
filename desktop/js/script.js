$(function () {
    var dot_index;
    if($('.top-slider').length){
        $('.top-slider').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 1200,
            fade: true,
            infinite: true,
            dots: true
        });
    }

    var navHome = $('.body-home .main-menu.menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 676) {
            navHome.addClass("f-nav");
            $('.body-home .natural').addClass("f-natural");
            $('.paralax-2.cross-big').addClass("f-cross");
        } else {
            navHome.removeClass("f-nav");
            $('.body-home .natural').removeClass("f-natural");
            $('.paralax-2.cross-big').removeClass("f-cross");
        }
    });

    $('.lt-toggle').on('click', function(){
        $('.header-dd-menu').toggleClass('lt-show');
        $('.body').toggleClass('lt-mleft');
        $('body').toggleClass('lt-overflow');
    });

    $('.lt-ln-close').on('click', function(){
        $('.header-dd-menu').toggleClass('lt-show');
        $('.body').toggleClass('lt-mleft');
        $('body').toggleClass('lt-overflow');
        $('.lt-l-nav .folder').removeClass('active');
        $('.lt-l-nav .folder ul').hide();
    });

    if($('span.control').length)
    {
        $(".lt-tm-m .folder span.control").on("click", function () {
            if (false == $(this).next().is(':visible')) {
                $('.folder ul').slideUp();
            }
            $(this).next().slideToggle();
            $(this).parent(".folder").toggleClass('active');
            $(this).parent(".folder").siblings('.folder').removeClass('active');

        });
    }

    $('.paralax').paroller({ factor: -0.3, type: 'foreground' });
    $('.paralax-2').paroller({ factor: -0.1, type: 'foreground' });
    $('.paralax-1').paroller({ factor: -0.2, type: 'foreground' });
});
