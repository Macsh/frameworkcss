////////////
// Navbar //
////////////

$("#navbarDropdown").on('click', function(){
    if($(".dropdown-menu").is(":visible")){
        $(".dropdown-menu").hide();
    }
    else {
        $(".dropdown-menu").show();
    }
})

$(document).on('click', function(e) {
    let container = $("#navbarDropdown");
    if ($('.modal').is(":visible")){
        let modal = $(".modal:visible")[0];
        if (!$(e.target).closest("#"+modal.id).length > 0) {
            $("#"+modal.id).hide();
        }
    };
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

////////////
// Popins //
////////////

$('.popin-dismiss').on('click', function(){
    $('.modal').hide();
});

$("button").on('click', function(e){
    e.stopPropagation();
    let modalTarget = $(this).attr('data-target');
    $('#'+modalTarget).show();
});

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        if ($(".modal").is(":visible")){
            let modal = $(".modal:visible")[0];
            $("#"+modal.id).hide();
        }
    }
});

/////////////
// Onglets //
/////////////

$(".tab-list li").on('click', function(e){
    let ongTarget = $(this).attr('data-target');
    if(!$(this).hasClass('active')){
        $("li[class*='active']").toggleClass('active');
        $(this).toggleClass('active');
        $(".tab-content div.active").toggleClass('active');
        $("#"+ongTarget).toggleClass('active');
    }
});

////////////////
// Infobulles //
////////////////

let content;
let timer;

$('button.tooltip').mouseover(function(e){
    content = $(this).attr('title');
    let initPosition = $(this).attr('data-placement');
    let position = $(this).position();
    let left = -10;
    let top = -15;
    $(this).attr('title', "");

    switch(initPosition) {
        case "right":
            left = 105;
            break;
        case "left":
            left = -105;
            break;
        case "top":
            top = -70;
            break;
        case "bottom":
            top = 42;
            break;
        default:
            top = -40;
            break;
    }   
    let posX = position.left + left;
    let posY = position.top + top;
    timer = setTimeout(function() {
        $('<div class="tooltip">'+ content +'</div>').appendTo('body');
        $('div.tooltip').css({'top': posY, 'left': posX});
    }, 1000);
}).mouseout(function(){
    $('div.tooltip').remove();
    $(this).attr('title', content);
    clearTimeout(timer);
});