$(function() {
    $('a[href^="#"]').click(function(e) {
        var href = this.getAttribute('href');
        $("html, body").animate({
            scrollTop: $(href).offset().top - 140
        }, 350);
    });
});