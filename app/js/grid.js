
function ChangeGridToDesktop(x){
    if(x.matches){
        console.log("HINLO MOBILE ChangeGridToDesktop")
        document.querySelector('.card__img1').src = "./images/mobile/image-deep-earth.jpg";
        document.querySelector('.card__img2').src = "./images/mobile/image-night-arcade.jpg";
        document.querySelector('.card__img3').src = "./images/mobile/image-soccer-team.jpg";
        document.querySelector('.card__img4').src = "./images/mobile/image-grid.jpg";
        document.querySelector('.card__img5').src = "./images/mobile/image-from-above.jpg";
        document.querySelector('.card__img6').src = "./images/mobile/image-pocket-borealis.jpg";
        document.querySelector('.card__img7').src = "./images/mobile/image-curiosity.jpg";
        document.querySelector('.card__img8').src = "./images/mobile/image-fisheye.jpg";
    }else{
        console.log("HINLO DESKTOP ChangeGridToDesktop")

        document.querySelector('.card__img1').src = "./images/desktop/image-deep-earth.jpg";
        document.querySelector('.card__img2').src = "./images/desktop/image-night-arcade.jpg";
        document.querySelector('.card__img3').src = "./images/desktop/image-soccer-team.jpg";
        document.querySelector('.card__img4').src = "./images/desktop/image-grid.jpg";
        document.querySelector('.card__img5').src = "./images/desktop/image-from-above.jpg";
        document.querySelector('.card__img6').src = "./images/desktop/image-pocket-borealis.jpg";
        document.querySelector('.card__img7').src = "./images/desktop/image-curiosity.jpg";
        document.querySelector('.card__img8').src = "./images/desktop/image-fisheye.jpg";

 
    }
}

var x = window.matchMedia("(max-width: 600px)")
ChangeGridToDesktop(x) // Call listener function at run time
x.addListener(ChangeGridToDesktop) // Attach listener function on state changes