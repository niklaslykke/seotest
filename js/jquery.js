// FRONT PAGE SLIDESHOW -START-
$(document).ready(function () {
    console.log("ready!");
    var slideContainer_SlideshowTransitions = [
        {
            $Duration: 800,
            $Opacity: 2
        }
            ];

    var slideContainer_options = {
        $AutoPlay: 1,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: slideContainer_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var slideContainer_slider = new $JssorSlider$("slideContainer", slideContainer_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 2560;

    function ScaleSlider() {
        var containerElement = slideContainer_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            slideContainer_slider.$ScaleWidth(expectedWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
});
// FRONT PAGE SLIDESHOW -END-

// SHOP SEARCH -START-
$(document).ready(function ($) {
    $(".searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#searchShop *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $("img").show();
            $("br").show();
            $(".buy").show();
            $("span").show();
        });
    });
    $("#search").click(function () {
        $(".searchInput").toggle();
        $(this).toggleClass("searchActive");
    });

// "BUY" BUTTON
    $(".buy span").click(function() {
        $(this).css("background-color", "green");
        $(this).css("padding", "9% 17.5%");
        $(this).text("Tilføjet til kurv");
    });

// GENRE SORT
    $(".genre").click(function () {
        $(this).toggleClass("active");
        $(".genre").not(this).removeClass("active");
    });
    
    $(".allProducts").click(function () { 
        $(".heading").text("Alle Vinyler");
        $(".all").show();
    });
    
    $(".allMetal").click(function () { 
        $(".heading").text("Alt i Metal");
        $(".all").show();
        $(".all").not(".allM").hide();
    });
    
    $(".alternativeMetal").click(function () { 
        $(".heading").text("Alternative Metal");
        $(".all").show();
        $(".all").not(".altMetal").hide();
    });
    
    $(".blackMetal").click(function () { 
        $(".heading").text("Black Metal");
        $(".all").show();
        $(".all").not(".black").hide();
    });
    
    $(".deathcore").click(function () { 
        $(".heading").text("Deathcore");
        $(".all").show();
        $(".all").not(".dCore").hide();
    });
    
    $(".deathMetal").click(function () { 
        $(".heading").text("Death Metal");
        $(".all").show();
        $(".all").not(".death").hide();
    });
    
    $(".doomMetal").click(function () { 
        $(".heading").text("Doom Metal");
        $(".all").show();
        $(".all").not(".doom").hide();
    });
    
    $(".folkMetal").click(function () { 
        $(".heading").text("Folk Metal");
        $(".all").show();
        $(".all").not(".folk").hide();
    });
    
    $(".glamMetal").click(function () { 
        $(".heading").text("Glam Metal");
        $(".all").show();
        $(".all").not(".glam").hide();
    });
    
    $(".grindcore").click(function () { 
        $(".heading").text("Grindcore");
        $(".all").show();
        $(".all").not(".gCore").hide();
    });
    
    $(".grooveMetal").click(function () { 
        $(".heading").text("Groove Metal");
        $(".all").show();
        $(".all").not(".groove").hide();
    });
    
    $(".heavyMetal").click(function () { 
        $(".heading").text("Heavy Metal");
        $(".all").show();
        $(".all").not(".heavy").hide();
    });
    
    $(".industrialMetal").click(function () { 
        $(".heading").text("Industrial Metal");
        $(".all").show();
        $(".all").not(".industrial").hide();
    });
    
    $(".melodeathMetal").click(function () { 
        $(".heading").text("Melodic Death Metal");
        $(".all").show();
        $(".all").not(".melodeath").hide();
    });
    
    $(".metalcore").click(function () { 
        $(".heading").text("Metalcore");
        $(".all").show();
        $(".all").not(".mCore").hide();
    });
    
    $(".powerMetal").click(function () { 
        $(".heading").text("Power Metal");
        $(".all").show();
        $(".all").not(".power").hide();
    });
    
    $(".progressiveMetal").click(function () { 
        $(".heading").text("Progressive Metal");
        $(".all").show();
        $(".all").not(".progMetal").hide();
    });
    
    $(".symphonicMetal").click(function () { 
        $(".heading").text("Symphonic Metal");
        $(".all").show();
        $(".all").not(".symphMetal").hide();
    });
    
    $(".thrashMetal").click(function () { 
        $(".heading").text("Thrash Metal");
        $(".all").show();
        $(".all").not(".thrash").hide();
    });
    
    $(".allRock").click(function () { 
        $(".heading").text("Alt i Rock");
        $(".all").show();
        $(".all").not(".allR").hide();
    });
    
    $(".alternativeRock").click(function () { 
        $(".heading").text("Alternative Rock");
        $(".all").show();
        $(".all").not(".altRock").hide();
    });
    
    $(".Grunge").click(function () { 
        $(".heading").text("Grunge");
        $(".all").show();
        $(".all").not(".grunge").hide();
    });
    
    $(".hardRock").click(function () { 
        $(".heading").text("Hard Rock");
        $(".all").show();
        $(".all").not(".hard").hide();
    });
    
    $(".progressiveRock").click(function () { 
        $(".heading").text("Progressive Rock");
        $(".all").show();
        $(".all").not(".progRock").hide();
    });
    
    $(".punkRock").click(function () { 
        $(".heading").text("Punk Rock");
        $(".all").show();
        $(".all").not(".punk").hide();
    });
    
    $(".symphonicRock").click(function () { 
        $(".heading").text("Symphonic Rock");
        $(".all").show();
        $(".all").not(".symphRock").hide();
    });
});

//SLIDESHOW PÅ PRODUKTSIDER
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
