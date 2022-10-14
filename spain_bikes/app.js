$(function () {
    
    /*Fixed header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
     let nav = $("#nav");


    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll (scrollPos, introH) {
        if(scrollPos> introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };


/*Smooth scroll*/

    $("[data-scroll]").on("click", function(Event) {
        Event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

    })

   /*NavToggle*/


    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
  });

});
