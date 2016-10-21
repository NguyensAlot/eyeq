/**
 * Created by Anthony on 10/18/2016.
 */


$(document).ready(function() {
    // add smooth scrolling to specified class
    $(".smooth-scroll").on('click', function(e) {
        if (this.hash !== "") {
            // override default behavior
            e.preventDefault();

            // store hash
            var hash = this.hash;

            // use jQuery's animate function to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() { // 800ms to scroll
                window.location.hash = hash;
            })
        }
    })
})