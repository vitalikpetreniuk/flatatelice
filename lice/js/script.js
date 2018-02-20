$(function () {
    if($('.lt-hi-ins').length)
    {
        $('.lt-hi-ins').slimScroll({
            height: '100vh'
        });
    }

    $('.lt-tm-m > ul').dcAccordion({
        speed: 'fast',
        menuClose: true
    });

    $('.lt-toggle').on('click', function(){
        $('header').toggleClass('lt-show');
        $('.lt-header-in').toggleClass('lt-show');
        $('.lt-body').toggleClass('lt-mleft');
        $('footer').toggleClass('lt-mleft');
        $('.lt-header-m').toggleClass('lt-mleft');
        $('.lt-toggle-o').toggleClass('lt-mleft');
        $('body').toggleClass('lt-overflow');
    });

    $('.lt-ln-close').on('click', function(){
        $('header').toggleClass('lt-show');
        $('.lt-header-in').toggleClass('lt-show');
        $('.lt-body').toggleClass('lt-mleft');
        $('footer').toggleClass('lt-mleft');
        $('.lt-header-m').toggleClass('lt-mleft');
        $('.lt-toggle-o').toggleClass('lt-mleft');
        $('body').toggleClass('lt-overflow');
    });

    $(".lang-switch ").on('click', function (e) {
        $(".lt-lang").toggleClass('open');
    });
    $(".lang-switch a").on('click', function (e) {
        e.preventDefault();

        var url = $(this).attr('href');

        $.ajax({
            url: url,
            type: 'POST',
            success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa

                if (data == 1) {
                    window.location.reload();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                alert(thrownError); // и тeкст oшибки
            }

        });
    });
    // on FAQs page
    if($('.panel-heading').length)
    {
        $('.panel-heading a').on('click', function () {
            event.preventDefault();
        });
        $(".panel-heading").on("click", function () {
            if (false == $(this).next().is(':visible')) {
                $('.panel-collapse').slideUp();
                $('.panel').removeClass('active');
            }
            $(this).next().slideToggle();
            $(this).parent('.panel').toggleClass('active');
         });
    }

    // on Reviews page
    if($('.reviews-item').length)
    {
        $('.read-more a').on('click', function () {
            event.preventDefault();
        });
        $(".read-more").on("click", function () {
            if (false == $(this).prev().is(':visible')) {
                $('.reviews-cont .cont').slideUp();
                $('.reviews-cont').removeClass('active');
            }
            $(this).prev().slideToggle();
            $(this).parent('.reviews-cont').toggleClass('active');
        });
    }

    // shop_all

    if($('.shop .shoop-item .quantity').length){
        $(function() {
            $('.shop > .shoop-item').each(function() {
                $(this).find($('a.minus')).click(function() {
                    var q = $(this).prev();
                    var data = $(q).val();
                    if(data > 0) {
                        $(q).val(parseInt(data) - 1);
                    }
                    return false
                });
                $(this).find($('a.plus')).click(function() {
                    var q = $(this).next();
                    var data = $(q).val();
                    $(q).val(parseInt(data) + 1);
                    return false
                });
            });
        });
    }

    //shop_inner
    if($('.shop-inner').length)
    {
        $('.lt-btn-b.white').on('click', function () {
            event.preventDefault();
        });
        $(".lt-btn-b.white").on("click", function () {
            if (false == $(this).next().is(':visible')) {
                $('.description').slideUp();
            }
            $(this).next().slideToggle();
        });
    };
    if($('.shoop-item .quantity').length){
        $(function() {
            $('.shop-inner > .shoop-item .quantity input').each(function() {
                $('a.minus').click(function() {
                    var data = $('input.num').val();
                    if(data > 0) {
                        $('input.num').val(parseInt(data) - 1);
                    }
                    return false
                });

                $('a.plus').click(function() {
                    var data = $('input.num').val();
                    $('input.num').val(parseInt(data) + 1);
                    return false
                });
            });
        });
    }


});
