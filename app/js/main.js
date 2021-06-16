/********************
TITLE: IMPLEMENTATION FOR HAMBURGER
AUTHOR: CAESAR HINLO
REVISION DATE: 6/16/2021
*********************/





function myFunction(x) {
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__menu');
const headerMobileContent = document.querySelector('.header__menu__navigation');



  if (x.matches) { // If media query matches
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
              }); // end hemburger
  } else {
    console.log("!!!!!!!!!!!!!!! HINLO DESKTOP!!");
    headerMobileContent.style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
  