$(document).ready(function () {
    $("#hide-p").click(function () {
        $("p").hide();
    });

    $("#hide-self").click(function () {
        $(this).hide();
    });

    $("#hide-p1").click(function () {
        $("#p1").hide();
    });

    $("#hide-p2").click(function () {
        $("#p2").hide();
    });

    $("#hide-test").click(function () {
        $(".test").hide();
    });

    $("#show-p").click(function () {
        $("p").show();
    });

    $("#show-all").click(function () {
        $("body *").show();
    });

    $("#fast-hide").click(function () {
        $("#p1").toggle();
    });

    $("#slow-hide").click(function () {
        $("#p1").toggle(1000);
    });

});

