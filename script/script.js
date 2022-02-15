$("#navbarDropdown").on('click', function(){
    if($(".dropdown-menu").is(":visible")){
        $(".dropdown-menu").hide();
    }
    else {
        $(".dropdown-menu").show();
    }
})

$(document).on('click', function(e) {
    var container = $("#navbarDropdown");
    if (!$(e.target).closest(container).length) {
        $(".dropdown-menu").hide();
    }
});

$('.dropdown-menu li').hover(function() {
    if ($(this).children().hasClass('dropdown-item')) {
        $(this).toggleClass('background-hover');
        $(this).toggleClass('cursor-pointer')
    }
});

$('.navbar-toggler').on('click', function(){
    if($(".navbar-nav").is(":visible")){
        $(".navbar-nav").css("display", "none");
    }
    else {
        $(".navbar-nav").css("display", "block");
    }
    if($("form").is(":visible")){
        $("form").css("display", "none");
    }
    else {
        $("form").css("display", "block");
    }
});

$(window).on('resize', function(){
    if(!$(".navbar-toggler").is(":visible")){
        $(".navbar-nav").css("display", "flex");
        $("form").css("display", "flex");
    }
    else{
        $(".navbar-nav").css("display", "none");
        $("form").css("display", "none");
    }
});