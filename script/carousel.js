"use strict";
import {FolderImg} from "./FolderImg.js";
import {CarouselClass} from "./Carousel.class.js";



    let stringifyId;
    let mainCarouselArray=[];
    let currentCarousel=[];

    for(let b=0; b <= FolderImg.length -1; b++){
        stringifyId=(b).toString();
        FolderImg[b].id=stringifyId;
    }


    if (window.matchMedia("(min-width:700px)").matches) {

        new CarouselClass(mainCarouselArray, currentCarousel, FolderImg, 4)

    }

    if(window.matchMedia("(max-width:699px)").matches){
        new CarouselClass(mainCarouselArray, currentCarousel, FolderImg, 1)

    }

