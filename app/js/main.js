/********************
TITLE: IMPLEMENTATION FOR HAMBURGER
AUTHOR: CAESAR HINLO
REVISION DATE: 6/16/2021
*********************/
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__menu');
const headerMobileContent = document.querySelector('.header__menu__navigation');
headerMobile.classList.remove('header__menu');
headerMobileContent.style.display = "none";
headerMobile.style.visibility="hidden";


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    headerMobile.classList.add('header__menu');
    headerMobileContent.style.display = "block";
    menuOpen = true;
    headerMobile.style.visibility="visible";
  } else {
    menuBtn.classList.remove('open');
    headerMobile.classList.remove('header__menu');
    menuOpen = false;
    headerMobileContent.style.display = "none";
  }
});
  