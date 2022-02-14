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