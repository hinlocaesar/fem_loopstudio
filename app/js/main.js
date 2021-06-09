//Function to change hero image depending on view source
function myFunction(x) {

    if (x.matches) { // If media query matches
      document.querySelector('.hero__myImg').src = "./images/hero-mobile.jpg";
    } else {

      document.querySelector('.hero__myImg').src = "./images/hero-desktop.jpg";
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



//Function To check validation of email address
function getInputValue(){
      // Selecting the input element and get its value 
      let inputVal = document.getElementById("myInput").value;
      let element = document.querySelector(".content__form__group__icon");
      if(!inputVal.includes('@')){
        document.querySelector(".content__alert").innerHTML="Please provide valid email";
        element.style.visibility = "visible";

      }else{
        document.querySelector(".content__alert").innerHTML="Succesfully Registered";
        document.querySelector(".content__alert").style.color = "green";
        element.style.visibility = "hidden";
      }

}
  