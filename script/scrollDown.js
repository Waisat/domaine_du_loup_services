"use strict";

$(document).ready(function () {

    // Scroll Down next service

$('#toService').click(function () {

        let servicesSection=  $('#bgc_services');

            $('html, body').animate({
                scrollTop:servicesSection.offset().top
            }, 800, function() {


})


})



    $('#toLocation').click(function () {

        let servicesSection=  $('#location');

        $('html, body').animate({
            scrollTop:servicesSection.offset().top
        }, 800, function() {


        })


    })

});
