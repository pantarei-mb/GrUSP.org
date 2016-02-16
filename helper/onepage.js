---
---
(function (data) {
    var $mp = $("#media-partners");
    var tag = $mp.data("tag");

    $.each(data, function(k, v) {
        if (v.tags && (!tag || $.inArray(tag, v.tags) == -1)) {
            return;
        }

        $mp.append($("<A>")
            .attr("href", v.url)
            .attr("title", v.name)
            .addClass("banner")
            .append($("<IMG>")
                .attr("src", v.img)
                .attr("title", v.name)
            )
        );
    });

    $mp.append($("<DIV>").addClass("clear"));
})({{ site.data.media_partners | sort: 'name' | jsonify }});