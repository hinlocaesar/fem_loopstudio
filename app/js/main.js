
//// FOR HAMBURGER
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__mobile');
headerMobile.classList.remove('header__mobile');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    headerMobile.classList.add('header__mobile');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    headerMobile.classList.remove('header__mobile');
    menuOpen = false;
  }
});
  