/**
 * Created by Anthony on 10/18/2016.
 */


$(document).ready(function() {
    enableSmoothScroll();
    addEventListeners()
})

function addEventListeners() {
    var elementsByClass = document.getElementsByClassName('appt');
    for (var i = 0; i < elementsByClass.length; i++) {
        elementsByClass[i].addEventListener('click', sendEmail, false);
    }
    elementsByClass = document.getElementsByClassName('fa-times');
    for (var i = 0; i < elementsByClass.length; i++) {
        elementsByClass[i].addEventListener('click', closeModal, false);
    }
    elementsByClass = document.getElementsByClassName('p-bullets');
    for (var i = 0; i < elementsByClass.length; i++) {
        elementsByClass[i].addEventListener('click', setPActive, false);
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

function setPActive(event) {
    var active = event.target;
    
    
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