const navMenu = document.getElementById('contact__nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}
/*=============== HIDDEN MENU ===============*/
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
   const navMenu = document.getElementById('contact__nav')

   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== swiper ===============*/
let swiper = new Swiper('.swiper', {
   slidesPerView: 2.5,
   spaceBetween: 30,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },

   breakpoints: {
      // when window width is >= 320px
     320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
         slidesPerView: 1.5,
         spaceBetween: 20
       },

      1024: {
         slidesPerView: 2,
         spaceBetween: 20
       },

      1400: {
        slidesPerView: 2.5,
        spaceBetween: 40
      }
    }
 });


