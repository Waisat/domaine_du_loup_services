"use strict"

window.addEventListener('DOMContentLoaded', function (){
    const getBurgerMenu = document.getElementById('burger_svg');
    const getNav = document.getElementsByTagName('nav');

    checkForWindowSize()

    function checkForWindowSize(){
        const WindowSize = window.innerWidth

        console.log('window size', WindowSize)
    if(WindowSize < 430){

        getNav[0].style.display = 'none'

        getBurgerMenu.addEventListener('click', function (){

            if(getNav[0].style.display === 'none'){
                getNav[0].style.display = 'block'
            }else{
                getNav[0].style.display = 'none'
            }



        })

    }else {
        getNav[0].style.display = 'block'
    }

    }

    window.addEventListener('resize',function (){
        checkForWindowSize()
        console.log('resize')
    })




})
