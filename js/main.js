
$( document ).ready(function() {
    $('.hamburger').on('click', function () {
        $('.full_menu').addClass('open');
    });

    $( '#close').on("click", function(){
        $('.full_menu').removeClass('open');
    });

    $(".nav .livestream_btn a").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $("#livestream").offset().top + offset
        }, 2000);
        $('.full_menu').removeClass('open');
    });
    $(".nav .resources_section a").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $("#get_started").offset().top + offset
        }, 2000);
        $('.full_menu').removeClass('open');
    });

    $(".watch_live").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $("#livestream").offset().top + offset
        }, 2000);
        $('.full_menu').removeClass('open');
    });


    $(".started").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $("#get_started").offset().top + offset
        }, 2000);
        $('.full_menu').removeClass('open');
    });
    $(".nav .faq_section a").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $("#vote_faq").offset().top + offset
        }, 2000);
        $('.full_menu').removeClass('open');
    });
    $(".learn_more").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $(".info_voting").offset().top + offset
        }, 2000);

    });
    $(".want_vote,.faq_participate").click(function() {
        var offset = 20;

        $('html, body').animate({
            scrollTop: $(".widget").offset().top + offset
        }, 2000);

    });


});
