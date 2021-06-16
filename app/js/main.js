
//// FOR HAMBURGER
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__menu');
const headerMobileContent = document.querySelector('.header__menu__navigation');
headerMobile.classList.remove('header__menu');
headerMobileContent.style.display = "none";


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    headerMobile.classList.add('header__menu');
    headerMobileContent.style.display = "block";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    headerMobile.classList.remove('header__menu');
    menuOpen = false;
    headerMobileContent.style.display = "none";
  }
});
  