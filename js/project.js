var scaleSection;
var inspirationSection;
var timelineSection;
var downloadsSection;
var backstorySection;

var scaleShown = false;
var inspShown = false;
var timelineShown = false;
var downloadShown = false;
var backstoryShown = false;

$(document).ready(function() {
    $(this).scrollTop(0);
    scaleSection = $("#scale");
    inspirationSection = $('#inspiration');
    timelineSection = $('#timeline');
    downloadsSection = $('#downloads');
    backstorySection = $('#backstory');
});

$(document).bind('scroll', function(ev) {
    var scrollOffset = $(document).scrollTop();
    var scaleOffset = scaleSection.offset().top - window.innerHeight;
    var inspOffset = inspirationSection.offset().top - window.innerHeight;
    var timelineOffset = timelineSection.offset().top - window.innerHeight;
    var downloadOffset = downloadsSection.offset().top - window.innerHeight;
    var backstoryOffset = backstorySection.offset().top - window.innerHeight;

    if (Math.abs(scaleOffset) < scrollOffset && !scaleShown) {
        console.log("Show Scale");
        scaleSection.find(".leftInfoBox").addClass("animate");
        scaleSection.find(".rightInfoBox").addClass("animate");
        scaleShown = true;
    }

    if (Math.abs(inspOffset) < scrollOffset && !inspShown) {
        console.log("Show Inspiration");
        inspShown = true;
    }

    if (Math.abs(timelineOffset) < scrollOffset && !timelineShown) {
        console.log("Show Timeline");
        timelineShown = true;
    }

    if (Math.abs(downloadOffset) < scrollOffset && !downloadShown) {
        console.log("Show Download");
        downloadShown = true;
    }

    if (Math.abs(backstoryOffset) < scrollOffset && !backstoryShown) {
        console.log("Show Backstory");
        backstoryShown = true;
    }

});