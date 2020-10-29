export class CarouselClass {
    constructor(mainCarousel, currentCarousel, folderImg,  numberCarouselImg) {
        this.folderImg=folderImg;
        this.numberImg= numberCarouselImg;
        this.mainCarousel= mainCarousel;
        this.currentCarousel= currentCarousel;
        console.log('Folder Img', this.folderImg);
        this.generateCarousel( this.mainCarousel, this.currentCarousel, this.folderImg, this.numberImg);
        this.mouseHoverStop()
    }

    generateCarousel(mainCarousel, currentCarousel, folderImg, numberImg){
        const grabIdCarousel= document.getElementById('carousel');
        const createBoard= document.createElement('div');
        let newArray=[];
        let rand;
        let verified;
        let secondVerified=[];
        let thirdVerified=[];
        let checkArrayVerify=[];

        createBoard.id='mainSlides';
        grabIdCarousel.style.width='1200px';
       // grabIdCarousel.style.height='500px';
        grabIdCarousel.style.margin='0 auto';
        grabIdCarousel.appendChild(createBoard);
        createBoard.style.width='90%';
       // createBoard.style.height='60%';
        //createBoard.style.margin='0 auto';
        //createBoard.style.backgroundColor='blue';
        createBoard.style.display='flex';
        createBoard.style.flexDirection='row';
        console.log('grabCarousel', grabIdCarousel);


        for(let i=0; i<=numberImg -1; i++){
            const createUl= document.createElement('ul');
            const createImg= document.createElement('img');
            createImg.id='img/'+i;
            createUl.id= 'ul/'+ i;


            switch (numberImg) {
                case numberImg=4:
                    createUl.style.width='20%';
                    break;
                case numberImg=3:
                    createUl.style.width='30%';
                    break;
                case  numberImg=2:
                    createUl.style.width='40%';
                    break;
                case numberImg=1:
                    createUl.style.width='80%';
                    break;
            }


            let randomNum= this.getRandomImage(folderImg.length-1);
            let checkVerif= newArray.filter(el => (el.id === randomNum.toString()));

                if(checkVerif.length !==0 ){
                    do {
                        rand= Math.floor(Math.random()*((folderImg.length-1)));
                        secondVerified= newArray.filter(el => (el.id === rand.toString()));

                        console.log('DO, Do')
                    }while (secondVerified.length !== 0 );

                    console.log('this has been changed', folderImg[randomNum]);
                    newArray.push(folderImg[rand]);
                    console.log('if', newArray);
                    console.log('verif2', checkVerif);
                } else {
                    newArray.push(folderImg[randomNum]);


                    console.log('this condition while', newArray)
                }

                createBoard.appendChild(createUl);
            for(let loopLi=1; loopLi <= 2; loopLi++){
                const createLi= document.createElement('li');
                createLi.style.listStyle='none';
                createLi.className='liInfo'+ loopLi;


                createUl.appendChild(createLi);
                if(createLi.className==='liInfo1'){
                    const createElementH3= document.createElement('h4');
                    createLi.appendChild(createElementH3);
                    createElementH3.className='h3Title';
                    createElementH3.style.color='#F4B894';
                    createElementH3.style.marginLeft='20%';
                    createElementH3.innerHTML=newArray[i].name;

                }

                if(createLi.className==='liInfo2'){
                    const createHref= document.createElement('a');
                    createHref.href= newArray[i].link;
                   // createHref.textContent=newArray[i].name;
                    createHref.className='href';
                    createImg.src='ressources/carousel/'+newArray[i].img;
                    createImg.className='imgOfCarousel';
                    createImg.title=newArray[i].name;
                    createImg.alt=newArray[i].name;
                    createImg.style.width='100%';
                    createLi.appendChild(createHref);
                    createHref.appendChild(createImg)
                }


            }

        }

        // make a loop trough the number of the array object key to create <li>
        this.setTimeOutCarousel(mainCarousel,  newArray, numberImg, folderImg);


    }

    setTimeOutCarousel(mainCarousel,newArray, numberImg, folderImg){
        let timeOut=   setTimeout(()=>this.generateNewCarousel(mainCarousel,newArray, numberImg, folderImg), 5000)
      //  this.mouseHoverStop(timeOut)
    }


    generateNewCarousel(mainCarousel,  previousCarousel, numberImg, folderImg){
        let currentCarousel=[];
        let randNewArray;
        let checkCarouselAgain;
        let checkCurrentNewAgain;
        const getLi= document.getElementsByClassName('liInfo1');
        const getSecondLi= document.getElementsByClassName('liInfo2');
        const getH3= document.getElementsByClassName('h3Title');
        const getHref= document.getElementsByClassName('href');
        const getImg= document.getElementsByClassName('imgOfCarousel');
        for(let i=0; i <= previousCarousel.length-1; i++){
            mainCarousel.push(previousCarousel[i])
        }

        console.log('main of main carousel ', mainCarousel);

        if(mainCarousel.length >=16 ){

            mainCarousel=[];
        }

        for(let b=0; b <= numberImg -1; b++){

            let randomCarousel= this.getRandomImageNew(folderImg.length-1);
            let checkCarousel= mainCarousel.filter(el=>(el.id=== randomCarousel.toString()));
            let checkCurrentDouble= currentCarousel.filter(el=>(el.id=== randomCarousel.toString()));
            if(checkCarousel.length || checkCurrentDouble.length!==0){
                do{
                    randNewArray= Math.floor(Math.random()* (folderImg.length-1));
                    checkCarouselAgain= mainCarousel.filter(el=>(el.id === randNewArray.toString()));
                    checkCurrentNewAgain=currentCarousel.filter(el=>(el.id === randNewArray.toString()));
                    console.log('Do it again')
                }while (checkCurrentNewAgain.length  || checkCarouselAgain.length !== 0);
                currentCarousel.push(folderImg[randNewArray]);

                console.log('current Carousel with if', currentCarousel);
                console.log('while value to check', checkCarousel, checkCurrentDouble)
            }else{
                currentCarousel.push(folderImg[randomCarousel]);
                console.log('current Carousel with else', currentCarousel);
                console.log('else value to check', checkCarousel, checkCurrentDouble)
            }

            for(let z=1; z <= 2; z++){
                if(getLi[b].className==='liInfo1'){

                    getH3[b].innerHTML=currentCarousel[b].name;

                }
                if(getSecondLi[b].className==='liInfo2'){
                    getHref[b].href= currentCarousel[b].link;
                    getImg[b].textContent=currentCarousel[b].name;
                    getImg[b].src='ressources/carousel/'+currentCarousel[b].img;
                    getImg[b].title=currentCarousel[b].name;
                    getImg[b].alt=currentCarousel[b].name;

                   // this.FadeIn(getImg[b], undefined)
                }

            }

            console.log('current Carousel with while', currentCarousel)

        }

        this.setTimeOutCarousel(mainCarousel, currentCarousel, numberImg, folderImg)


    }

  /*  FadeIn(objectToFade, opacityReturn) {
        let opacityStart=0;
        let i;
        const Increase=0.3;
        let totalOpacity;
        if(opacityReturn === undefined){
            totalOpacity= opacityStart + Increase;
            objectToFade.style.opacity=totalOpacity

        }else{
            totalOpacity= opacityReturn + Increase;
            objectToFade.style.opacity=totalOpacity
        }

    }*/


    getRandomImage(maximumRandom, minimumRandom=0){
        return Math.floor(Math.random()*(maximumRandom-minimumRandom)+ minimumRandom)
    }

    getRandomImageNew(maximumRandom, minimumRandom=0){
        return Math.floor(Math.random()*(maximumRandom-minimumRandom)+ minimumRandom)
    }

    mouseHoverStop(timeOutCarousel){

        const getDivCarousel= document.getElementById('carousel');
        getDivCarousel.addEventListener('mouseover', function () {
            clearTimeout(timeOutCarousel);
            console.log('mouse Hover');
        });

    }



}