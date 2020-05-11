var currentSlide = 0;
var timerNormal = 5000;
var timerOnClick = 10000;
var timer = timerNormal;
var auto_slide = setTimeout("next_slide()", timer);
$(document).ready(function () {
    var sliderSource = "/upload/altele/default/slider/";
    var sliderDiv = document.getElementById("slider");
    if (sliderDiv)
    {
        var nextSlide = document.createElement("div");
        nextSlide.className = "next_slide";
        nextSlide.setAttribute("onclick", "next_slide()");
        var previousSlide = document.createElement("div");
        previousSlide.className = "previous_slide";
        previousSlide.setAttribute("onclick", "previous_slide()");
        sliderDiv.appendChild(nextSlide);
        sliderDiv.appendChild(previousSlide);
        for (i = 0; i < slider.length; i++) {
            var slide = document.createElement("div");
            var img_pc = document.createElement("img");
            var img_mobil = document.createElement("img");
            var a = document.createElement("a");
            a.href = slider[i][2];
            img_pc.src = sliderSource + slider[i][0];
            img_pc.className = "slide_pc";
            img_mobil.src = sliderSource + slider[i][1];
            img_mobil.className = "slide_mobil";
            a.appendChild(img_pc);
            a.appendChild(img_mobil);
            slide.appendChild(a);
            slide.className = "slide";
            slide.id = "id" + i;
            if (i == currentSlide) slide.className = "slide on";
            sliderDiv.appendChild(slide);
        }
        var slider_nav = document.createElement("div");
        slider_nav.className = "slider_nav";
        for (i = 0; i < slider.length; i++) {
            var a = document.createElement("a");
            if (i == currentSlide) a.className = "on";
            a.id = "id" + i + "a";
            a.setAttribute("onclick", "alege_slide('id" + i + "')");
            slider_nav.appendChild(a);
        }
        sliderDiv.appendChild(slider_nav);
    }
});
function alege_slide(id) {
    clearTimeout(auto_slide);
    timer = timerOnClick;
    for (i = 0; i < slider.length; i++) {
        document.getElementById("id" + i).className = "slide";
        document.getElementById("id" + i + "a").className = "";
    }
    document.getElementById(id).className = "slide on";
    document.getElementById(id + "a").className = "on";
    auto_slide = setTimeout("next_slide()", timer);
}
function next_slide() {
    clearTimeout(auto_slide);
    timer = timerNormal;
    currentSlide += 1;
    if (currentSlide == slider.length) {
        currentSlide = 0;
    }
    for (i = 0; i < slider.length; i++) {
        document.getElementById("id" + i).className = "slide";
        document.getElementById("id" + i + "a").className = "";
    }
    document.getElementById("id" + currentSlide).className = "slide on";
    document.getElementById("id" + currentSlide + "a").className = "on";
    auto_slide = setTimeout("next_slide()", timer);
}
function previous_slide() {
    clearTimeout(auto_slide);
    timer = timerOnClick;
    currentSlide -= 1;
    if (currentSlide < 0) {
        currentSlide = slider.length-1;
    }
    for (i = 0; i < slider.length; i++) {
        document.getElementById("id" + i).className = "slide";
        document.getElementById("id" + i + "a").className = "";
    }
    document.getElementById("id" + currentSlide).className = "slide on";
    document.getElementById("id" + currentSlide + "a").className = "on";
    auto_slide = setTimeout("next_slide()", timer);
}