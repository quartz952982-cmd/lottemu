$(function () {
    //첫화면에서는 헤더에 백컬러 없는데 ul에호버하면 백컬러가 생김
    //헤더 ul에 호버했을 때 높이 300픽셀
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 10) {
            $('header').addClass('down')
            $('.t-b-inner svg').addClass('down')
            $('.top-btm-button').addClass('down')
            $('.top-button').addClass('down')
            $('.top-text-color').addClass('down')
            $('.Licon svg').addClass('down')
             $('.header-top').addClass('active')
        } else {
            $('header').removeClass('down')
            $('.t-b-inner svg').removeClass('down')
            $('.top-btm-button').removeClass('down')
            $('.top-button').removeClass('down')
            $('.top-text-color').removeClass('down')
            $('.Licon svg').removeClass('down')
             $('.header-top').removeClass('active')
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.scroll-topbtn').fadeIn()
        } else { $('.scroll-topbtn').fadeOut() }
    })
    $('.scroll-topbtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    $('.main-listw > li').mouseenter(function () {
        $('header').addClass('on')
        $('.t-b-inner svg').addClass('on')
        $('.top-btm-button').addClass('on')
        $('.top-button').addClass('on')
        $('.top-text-color').addClass('on')
        $('.Licon').addClass('on')
        $('.header-top').addClass('active')
    })
    $('.main-listw > li').mouseleave(function () {
        $('header').removeClass('on')
        $('.t-b-inner svg').removeClass('on')
        $('.top-btm-button').removeClass('on')
        $('.top-button').removeClass('on')
        $('.top-text-color').removeClass('on')
        $('.Licon').removeClass('on')
        $('.header-top').removeClass('active')
    })

    $('.tap-wrap li').click(function () {
        let idx = $(this).index()
        $('.tap-wrap li').removeClass('on')
        $(this).addClass('on')
        $('.card-list-containal').hide()
        $('.card-list-containal').eq(idx).show()

    })

    $('.tap-wrap li').eq(0).trigger('click')
})