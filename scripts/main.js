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
    // elementsByClass = document.getElementsByClassName('p-bullets');
    // for (var i = 0; i < elementsByClass.length; i++) {
    //     elementsByClass[i].addEventListener('click', setPActive, false);
    // }
    document.getElementsByClassName('pagination')[0].addEventListener('click', setPActive, false);
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
    changeVerbiage();
    changePBullet();
    i++;
}

// change this
var i = 0;
var numOfPages = 2;
// add to one, remove from all
function changePBullet() {
    $('.p-bullets').removeClass('pagination-active');
    $('.p-bullets').eq((i+1) % numOfPages).addClass('pagination-active');
}

// in this case -- add to all, remove from one
function changeVerbiage() {
    $('.about-us-verbiage').addClass('pagination-hidden');
    $('.about-us-verbiage').eq((i+1) % numOfPages).removeClass('pagination-hidden');
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