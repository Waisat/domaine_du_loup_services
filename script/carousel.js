"use strict";
import {FolderImg} from "./FolderImg.js";
import {CarouselClass} from "./Carousel.class.js";


window.addEventListener('DOMContentLoaded', function () {
    let stringifyId;
    let mainCarouselArray=[];
    let currentCarousel=[];

    for(let b=0; b <= FolderImg.length -1; b++){
        stringifyId=(b).toString();
        FolderImg[b].id=stringifyId;
    }


    new CarouselClass(mainCarouselArray, currentCarousel, FolderImg, 4)



});
