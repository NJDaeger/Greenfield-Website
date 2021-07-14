$(".sidebar-item").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 700);
    return false;
});

$(window).scroll(function() {
    var itemTop = $(".sidebar-item").offset().top;
    $(".menu-slides div").each(function(index) {
        var slideId = $(this).attr("id");
        var heading3 = $(".menu-slides .slide[id=" + slideId + "] .slide-content h3");
        var heading1 = $(".menu-slides .slide[id=" + slideId + "] .slide-content h1");
        var button = $(".menu-slides .slide[id=" + slideId + "] .slide-content .button");
        if (itemTop > $(this).offset().top && itemTop <= $(this).offset().top + $(this).height()) {
            $("div a[href='#" + slideId + "']").parent().addClass("active");
            heading3.removeClass("fadeAway");
            heading1.removeClass("fadeAway");
            button.removeClass("fadeAway");
            heading3.addClass("animateFirst");
            heading1.addClass("animateSecond");
            button.addClass("animateThird");
        } else {
            $("div a[href='#" + slideId + "']").parent().removeClass("active");
            heading3.removeClass("animateFirst");
            heading1.removeClass("animateSecond");
            button.removeClass("animateThird");
            heading3.addClass("fadeAway");
            heading1.addClass("fadeAway");
            button.addClass("fadeAway");
        }
    });
});