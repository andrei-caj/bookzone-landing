$(document).ready(function () {
    $(document).click(function (e) {
        if (!$("div.header_menu_user").is(e.target) && !$("div.header_contul_meu").is(e.target) && !$("div.header_contul_meu *").is(e.target)) {
            $('div.header_menu_user').removeClass("deschis");
            $('div.header_contul_meu').hide();
        }
        if (!$("div.header_menu_oferte").is(e.target) && !$("div.header_oferte").is(e.target) && !$("div.header_oferte *").is(e.target)) {
            $('div.header_menu_oferte').removeClass("deschis");
            $('div.header_oferte').hide();
        }
        if (!$("div.header_cosul_meu *").is(e.target) && !$("div.header_menu_cart").is(e.target) && !$("div.header_menu_cart *").is(e.target) && !$(".header_cosul_meu_header_btn").is(e.target)) {
            $('div.header_menu_cart').removeClass("deschis");
            $('div.header_cosul_meu').hide();
        }
        if (!$("div.meniu_cantitate *").is(e.target)) {
            $('div.meniu_cantitati').removeClass("deschis");
        }
    });
    $("div.header_menu_user").click(function () {
        if ($("div.header_menu_user").hasClass("deschis")) {
            $("div.header_menu_user").removeClass("deschis");
            $('div.header_contul_meu').hide();
        }
        else {
            $("div.header_menu_user").addClass("deschis");
            $('div.header_contul_meu').show();
        }
    });
    $("div.header_menu_oferte").click(function () {
        if ($("div.header_menu_oferte").hasClass("deschis")) {
            $("div.header_menu_oferte").removeClass("deschis");
            $('div.header_oferte').hide();
        }
        else {
            $("div.header_menu_oferte").addClass("deschis");
            $('div.header_oferte').show();
        }
    });
    $("div.meniu_cantitate").click(function () {
        if ($(this).find("div.meniu_cantitati").hasClass("deschis")) {
            $(this).find("div.meniu_cantitati").removeClass("deschis");
        }
        else {
            $(this).find("div.meniu_cantitati").addClass("deschis");
        }
    });

    $("input").bind("keydown", function (event) {
        if ($("div.header_menu_user").hasClass("deschis")) {
            var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
            if (keycode == 13) {
                document.getElementById('btnLogin').click();
                return false;
            } else {
                return true;
            }
        }
        if ($("#content_txtUsername").is(":focus") || $("#content_txtPassword").is(":focus")) {
            var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
            if (keycode == 13) {
                document.getElementById('content_btnLogin').click();
                return false;
            } else {
                return true;
            }
        }
        if ($("#content_txtEmail").is(":focus")) {
            var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
            if (keycode == 13) {
                document.getElementById('content_btnContinua').click();
                return false;
            } else {
                return true;
            }
        }
        if ($("#content_txtPassword1").is(":focus") || $("#content_txtPassword2").is(":focus")) {
            var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
            if (keycode == 13) {
                document.getElementById('content_btnResetareParola').click();
                return false;
            } else {
                return true;
            }
        }

        if ($("#q_mobile").is(":focus")) {
            var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
            if (keycode == 13) {
                document.getElementById('btnCautaMobile').click();
                return false;
            } else {
                return true;
            }
        }
    });

    //Lazy
    $(function () {
        $('.lazy').Lazy();
    });

    //Detectare click pe popupuri din produs adaugat
    $(document).click(function (e) {
        if (!$("#content_pnlPopupBonusare1").is(e.target)) {
            if ($("#a_popup_bonusare_1 b").is(e.target)) {
                $("#content_pnlPopupBonusare1").removeClass("deschis");
                $("#content_pnlPopupBonusare2").addClass("deschis");
                return;
            }
            if ($("#a_popup_bonusare_1 *").is(e.target) || $("#a_popup_bonusare_1").is(e.target)) {
                if ($("#content_pnlPopupBonusare1").hasClass("deschis")) {
                    $("#content_pnlPopupBonusare1").removeClass("deschis");
                }
                else {
                    $("#content_pnlPopupBonusare1").addClass("deschis");
                }
            }
            else {
                $("#content_pnlPopupBonusare1").removeClass("deschis");
            }
        }
        if (!$("#content_pnlPopupBonusare2").is(e.target)) {
            if ($("#a_popup_bonusare_2 b").is(e.target)) {
                $("#content_pnlPopupBonusare2").removeClass("deschis");
                $("#content_pnlPopupBonusare3").addClass("deschis");
                return;
            }
            if ($("#a_popup_bonusare_2 *").is(e.target) || $("#a_popup_bonusare_2").is(e.target)) {
                if ($("#content_pnlPopupBonusare2").hasClass("deschis")) {
                    $("#content_pnlPopupBonusare2").removeClass("deschis");
                }
                else {
                    $("#content_pnlPopupBonusare2").addClass("deschis");
                }
            }
            else {
                $("#content_pnlPopupBonusare2").removeClass("deschis");
            }
        }
        if (!$("#content_pnlPopupBonusare3").is(e.target)) {
            if ($("#a_popup_bonusare_3 b").is(e.target)) {
                $("#content_pnlPopupBonusare3").removeClass("deschis");
                $("#content_pnlPopupBonusare4").addClass("deschis");
                return;
            }
            if ($("#a_popup_bonusare_3 *").is(e.target) || $("#a_popup_bonusare_3").is(e.target)) {
                if ($("#content_pnlPopupBonusare3").hasClass("deschis")) {
                    $("#content_pnlPopupBonusare3").removeClass("deschis");
                }
                else {
                    $("#content_pnlPopupBonusare3").addClass("deschis");
                }
            }
            else {
                $("#content_pnlPopupBonusare3").removeClass("deschis");
            }
        }
        if (!$("#content_pnlPopupBonusare4").is(e.target)) {
            if ($("#a_popup_bonusare_4 *").is(e.target) || $("#a_popup_bonusare_4").is(e.target)) {
                if ($("#content_pnlPopupBonusare4").hasClass("deschis")) {
                    $("#content_pnlPopupBonusare4").removeClass("deschis");
                }
                else {
                    $("#content_pnlPopupBonusare4").addClass("deschis");
                }
            }
            else {
                $("#content_pnlPopupBonusare4").removeClass("deschis");
            }
        }
    });
});

//Arata search pe mobil
function show_search()
{
    document.getElementById("sugestii_mobil_bg").style.display = "block";
    document.getElementById("q_mobile").focus();
}

//Meniu categorii
var varArataCategorie;
var varAscundeCategorii;
var delay = 100;
function arata_categorie_meniu(str) {
    clearTimeout(varArataCategorie);
    varAscundeCategorii = setTimeout(function () { ascunde_toate_categoriile(); }, delay);
    varArataCategorie = setTimeout(function () { document.getElementById(str).style.display = "block"; }, delay);
}
function stop_arata_categorie_meniu() {
    clearTimeout(varArataCategorie);
    clearTimeout(varAscundeCategorii);
}
function ascunde_toate_categoriile() {
    var x = document.getElementsByClassName("menu_subcategorie_content");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
var setTimeoutConst;
$(document).ready(function () {
    $("div.menu_categorii").hover(function () {
        clearTimeout(setTimeoutConst);
        setTimeoutConst = setTimeout(function () {
            $("div.menu_subcategorii").addClass("deschis");
        }, delay);
    }, function () {
        clearTimeout(setTimeoutConst);
        setTimeoutConst = setTimeout(function () {
            $("div.menu_subcategorii").removeClass("deschis");
        }, delay);
    });
    $("div.menu_categorii_wrap").hover(function () {
        clearTimeout(setTimeoutConst);
        setTimeoutConst = setTimeout(function () {
            $("div.menu_subcategorii").addClass("deschis");
        }, delay);
    }, function () {
        clearTimeout(setTimeoutConst);
        setTimeoutConst = setTimeout(function () {
            $("div.menu_subcategorii").removeClass("deschis");
        }, delay);
    });
});

function showPreLoader() {
    document.getElementById("loading").style.display = "block";
}
function hidePreLoader() {
    document.getElementById("loading").style.display = "none";
}
function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}
function ascundeCos() {
    $("div.header_menu_cart").removeClass("deschis");
    $("div.header_cosul_meu").hide();
}
function ascundeOferte() {
    $("div.header_menu_oferte").removeClass("deschis");
    $("div.header_oferte").hide();
}
function ascundeMeniuContulMeu() {
    $("div.header_menu_user").removeClass("deschis");
    $("div.header_contul_meu").hide();
}
function pageLoad() {
    $(function () {
        $("div.header_menu_cart").click(function () {
            if ($("div.header_menu_cart").hasClass("deschis")) {
                $("div.header_menu_cart").removeClass("deschis");
                $("div.header_cosul_meu").hide();
            }
            else {
                $("div.header_menu_cart").addClass("deschis");
                $("div.header_cosul_meu").show();
            }
        });
        var top = ($(window).height() - $("div.popup_bg_2").height() - 40) / 2;
        if (top < 0) { top = 0 }
        $("div.popup_bg_2").css({ top: top + "px" });
        var top2 = ($(window).height() - $("div.popup_bg_3").height() - 120) / 2;
        if (top2 < 0) { top2 = 0 }
        $("div.popup_bg_3").css({ top: top2 + "px" });
    });
}
function close_left_menu() {
    document.getElementById("mobile_left_menu").style.display = "none";
}
function show_left_menu() {
    document.getElementById("mobile_left_menu").style.display = "block";
}