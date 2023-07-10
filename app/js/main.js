// @ts-nocheck
let offsetMain = 0;
let offsetFeedback = 0;

const propSwiper = document.querySelector('.prop__swiper')
const propSwiperLine = document.querySelector('.prop__line')
let pressed = false;
let startX;
let x;

document.querySelector('#select').addEventListener('click', (e) => {
   document.querySelector('.select__list').classList.toggle('disabled')
   document.querySelector('.select__icon').classList.toggle('rotated')
   if (e.target.classList == 'select__option' || e.target.classList == 'option') {
      document.querySelector('.select__value').textContent = e.target.dataset.selectvalue
      document.querySelector('.select__icon').classList.remove('rotated')
   }
})


document.querySelector('.main__btn.next').addEventListener('click', () => {
   if (offsetMain - window.innerWidth < window.innerWidth * -3) {
      offsetMain = 0
   } else {
      offsetMain -= window.innerWidth
   }
   document.querySelector('.mainBg__line').style.left = offsetMain + 'px'

})
document.querySelector('.main__btn.previous').addEventListener('click', () => {
   if (offsetMain + window.innerWidth > 0) {
      offsetMain = window.innerWidth * -3
   } else {
      offsetMain += window.innerWidth
   }
   document.querySelector('.mainBg__line').style.left = offsetMain + 'px'
})



document.querySelector('.feedback__next').addEventListener('click', () => {
   if (offsetFeedback - 1142 < 1142 * -2) {
      offsetFeedback = 0
   } else {
      offsetFeedback -= 1142
   }
   document.querySelector('.feedback__line').style.left = offsetFeedback + 'px'

})
document.querySelector('.feedback__prev').addEventListener('click', () => {
   if (offsetFeedback + 1142 > 0) {
      offsetFeedback = 1142 * -2
   } else {
      offsetFeedback += 1142
   }
   document.querySelector('.feedback__line').style.left = offsetFeedback + 'px'
})


propSwiper.addEventListener('mousedown', (e) => {
   pressed = true;
   startX = e.offsetX - propSwiperLine.offsetLeft;
   propSwiper.style.cursor = 'grabbing'
})
propSwiper.addEventListener('mouseenter', () => {
   propSwiper.style.cursor = 'grab'
})

propSwiper.addEventListener('mouseup', () => {
   propSwiper.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
   pressed = false
})

propSwiper.addEventListener('mousemove', (e) => {
   if (!pressed) { return }
   x = e.offsetX
   propSwiperLine.style.left = `${x - startX}px`
   checkboundary()
})

function checkboundary() {
   let outer = propSwiper.getBoundingClientRect();
   let inner = propSwiperLine.getBoundingClientRect();
   if (parseInt(propSwiperLine.style.left) > 0) {
      propSwiperLine.style.left = '0px'
   } else if (inner.right < outer.right) {
      propSwiperLine.style.left = `-${inner.width - outer.width}px`
   }
}