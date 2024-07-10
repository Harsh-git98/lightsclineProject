$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
        if ($("#mainListDiv").hasClass("show_list")) {
            $("#mainListDiv").removeClass("show_list");
            $("#mainListDiv").fadeOut();
            $(".navTrigger").toggleClass('active');
        }
    } else {
        $('.nav').removeClass('affix');
    }
   
});