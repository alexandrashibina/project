//with plugin
const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false
});

$('.arrow-destination-prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.arrow-destination-next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})


//without plugin
// const arrowLeft = document.querySelectorAll('#arrow-left');
// const arrowRight = document.querySelectorAll('#arrow-right');
// const slideWidth = document.querySelector('.slider__item');
// const sliderList = document.querySelector('.slider__list');

// let sliderPosition = 0;

// arrowRight.forEach((arrow) => {
//     arrow.addEventListener ('click', () => moveRight ());
// });

// arrowLeft.forEach((arrow) => {
//     arrow.addEventListener ('click', () => moveLeft ());
// });

// sliderList.addEventListener ('swiped-right', ()=> moveLeft());
// sliderList.addEventListener ('swiped-left', ()=> moveRight());

// function moveRight () {
//     sliderPosition += slideWidth.scrollWidth;

//     if (sliderPosition === slideWidth.scrollWidth * 2) {
//         sliderPosition = 0;
//     }
    
//     sliderList.style.transform = `translateX(-${sliderPosition}px)`;  
// }

// function moveLeft () {
//     if (sliderPosition === 0) {
//         sliderPosition = sliderList.scrollWidth - slideWidth.clientWidth;
//     } else{
//         sliderPosition -= slideWidth.scrollWidth;
//     }

//     sliderList.style.transform = `translateX(-${sliderPosition}px)`;
// }
