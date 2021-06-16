
//// FOR HAMBURGER
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__mobile');
const headerMobileContent = document.querySelector('.header__mobile__navigation');
headerMobile.classList.remove('header__mobile');
headerMobileContent.style.display = "none";


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    headerMobile.classList.add('header__mobile');
    headerMobileContent.style.display = "block";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    headerMobile.classList.remove('header__mobile');
    menuOpen = false;
    headerMobileContent.style.display = "none";
  }
});
  