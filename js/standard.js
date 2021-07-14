$(document).ready(function() {
    $(".button2").html(function() {
        var btn = $(this);
        var link = btn.attr("link");
        var text = btn.attr("text");
        btn.html("<a href=" + link + ">" + text + "</a>")
    })
});