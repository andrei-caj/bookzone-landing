$(document).ready(function () {
        $("a.btn_white.sm.citeste_tot").click(function () {
            $("div.descriere_inner").css("overflow", "show");
            $("div.descriere_inner").css("height", "auto");
            $("div.descriere_inner div.gradient").hide();
            $("div.pagina_descriere_read_more").hide();
        });
});
