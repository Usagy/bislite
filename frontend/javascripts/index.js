$(window).on('load', function(){
    $('.has-children').on('mouseenter' , function(){
        $(this).find('.submenu').stop().slideDown('fast');
    });
    $('.has-children').on('mouseleave' , function(){
        $(this).find('.submenu').stop().slideUp('fast');
    });

        $('.carousel').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true
        });

        $('.gallery').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            adaptiveHeight: true
        });
});
