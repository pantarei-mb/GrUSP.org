$(function(){
    var menuHeight, windowHeight;

    function getMenuHeight() {
        menuHeight   = $(".main-nav .opened-menu").outerHeight();
        windowHeight = $(window).height();
        return windowHeight - menuHeight;
    }

    $(window).on("resize", function() {
        if ($(".main-nav .mobile-button").hasClass("close")) {
            $(".slide-menu").height(getMenuHeight());
        }
    });

    $(document).on("click", ".main-nav .mobile-button", function(){
        if ($(this).hasClass("open")) {
            $(this).removeClass("open").addClass("close");
            $(".slide-menu").removeClass("closed").css({
                height : getMenuHeight()
            });
        } else {
            $(this).removeClass("close").addClass("open");
            $(".slide-menu").addClass("closed").css({
                height : 0
            });
        }
    });
});
