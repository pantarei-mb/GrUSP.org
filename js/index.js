$(function(){

    var $wookmark, options, viewports;

    $wookmark = $(".wookmark > *");

    viewports = [
        {
            columns : 4,
            size    : 1800
        },{
            columns : 4,
            size    : 1280
        },{
            columns : 3,
            size    : 1024
        },{
            columns : 2,
            size    : 768
        },{
            columns : 1,
            size    : 480
        },{
            columns : 1,
            size    : 320
        }
    ];

    options = {
        align           : "left",
        autoResize      : true,
        container       : $(".wookmark"),
        flexibleWidth   : true,
        fillEmptySpace  : false,
        itemWidth       : "25%",
        offset          : 0,
        outerOffset     : 0,
        onLayoutChanged : function() {
            checkColumnWidth(options, viewports);
            checkFakeColumnsHeight();
        }
    };

    function getColumnPerc(size) {
        for (var i = 0; viewports.length > i; i += 1) {
            if (size >= viewports[i].size) {
                return ((100 / viewports[i].columns).toFixed(4)).toString() + "%";
            }
        }
        return "0%";
    }

    function checkColumnWidth(options) {
        var columnPerc, windowWidth;

        windowWidth = parseInt($(window).width());
        columnPerc  = getColumnPerc(windowWidth);

        if (options.itemWidth !== columnPerc) {
            options.itemWidth = columnPerc;
            $wookmark.wookmark(options);
        }
    }

    function checkFakeColumnsHeight() {
        $(".bg-columns, .bg-columns > *").height($(".cards").height());
    }

    $(".wookmark > *").wookmark(options);


});
