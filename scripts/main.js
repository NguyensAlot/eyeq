/**
 * Created by Anthony on 10/18/2016.
 */


$(document).ready(function() {
    enableSmoothScroll();
    addEventListeners()
})

function addEventListeners() {
    var apptBtns = document.getElementsByClassName('appt');
    for (var i = 0; i < apptBtns.length; i++) {
        apptBtns[i].addEventListener('click', sendEmail, false);
    }
    var modals = document.getElementsByClassName('fa-times');
    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', closeModal, false);
    }
}

function enableSmoothScroll() {
    // add smooth scrolling to specified class
    $(".smooth-scroll").on('click', function(e) {
        // make sure hash isn't empty
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
}

function sendEmail() {
    $('.modal').css('width', '100%');
    $('.modal-content').css('display', 'block');
    $('body').css('overflow-y', 'hidden');
}

function closeModal() {
    $('.modal').css('width','0');
    $('.modal-content').css('display', 'none');
    $('body').css('overflow-y', 'auto');
}