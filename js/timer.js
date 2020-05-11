$(document).ready(function () {
    calculateTimer();
    startTimer();
});
function startTimer() {
    setInterval("calculateTimer()", 1000);
}
function calculateTimer() {
    var d_start = new Date();
    var dif = d_stop - d_start;
    if (dif > 0) {
        if (document.getElementById("promo_bar")) {
            document.getElementById("promo_bar").style.display = "block";
            var zile = "0" + Math.floor(dif / 1000 / 60 / 60 / 24);
            var ore = "0" + Math.floor(dif / 1000 / 60 / 60) % 24;
            var minute = "0" + Math.floor(dif / 1000 / 60) % 60;
            var secunde = "0" + Math.floor(dif / 1000) % 60;
            document.getElementById("timer_zile").innerHTML = zile.substring(zile.length - 2, 3);
            document.getElementById("timer_ore").innerHTML = ore.substring(ore.length - 2, 3);
            document.getElementById("timer_min").innerHTML = minute.substring(minute.length - 2, 3);
            document.getElementById("timer_sec").innerHTML = secunde.substring(secunde.length - 2, 3);
        }
    }
    else {
        document.getElementById("timer_zile").innerHTML = "00";
        document.getElementById("timer_ore").innerHTML = "00";
        document.getElementById("timer_min").innerHTML = "00";
        document.getElementById("timer_sec").innerHTML = "00";
        document.getElementById("promo_bar").style.display = "none";
    }
}