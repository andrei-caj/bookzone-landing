$(document).ready(function () {

    //$(document).click(function (e) {
    //    if ($("div.progresiva div.header").is(e.target) || $("div.progresiva div.header *").is(e.target)) {
    //        if (parseInt($("div.progresiva").css("marginBottom").replace("px","")) < 0)
    //        {
    //            $("div.progresiva div.header img.arrow.up").css("display", "none");
    //            $("div.progresiva div.header img.arrow.down").css("display", "inline-block");
    //            $("div.progresiva").animate({
    //                marginBottom: "0"
    //            }, 500);
    //        }
    //        else
    //        {
    //            $("div.progresiva div.header img.arrow.up").css("display", "inline-block");
    //            $("div.progresiva div.header img.arrow.down").css("display", "none");
    //            $("div.progresiva").animate({
    //                marginBottom: "-188px"
    //            }, 500);
    //        }
    //    }
    //})

    variable = document.getElementById('pnlProgresiva').className;

    setInterval(function () {
        if (variable != document.getElementById('pnlProgresiva').className) {
            variable = document.getElementById('pnlProgresiva').className;
            $('#updProgresiva').delay(1000).fadeIn();
            $('#updProgresiva').delay(4000).fadeOut();
        }
    }, 1000);

    $('.progresiva on').fadeIn('slow', function () {
        $('#updProgresiva').delay(5000).fadeOut();
    });
    $('.progresiva').fadeIn('slow', function () {
        $('#updProgresiva').delay(5000).fadeOut();
    });

});