// swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
  on: {
    slideChange: function () {
      console.log("Slide changed!");
    },
  },
});


// nav menu
var MenuItem=document.getElementById("MenuItem");

MenuItem.style.maxHeight= "0px";

function menutoggle(){
    if(MenuItem.style.maxHeight == "0px")
    {
        MenuItem.style.maxHeight = "320px";
    }
    else
    {
        MenuItem.style.maxHeight = "0px";
    }
}

// form submit

function submitForm(event) {
  event.preventDefault();

  fetch("https://getform.io/f/f465d4da-98d8-4702-b3a3-0f25b6cb52d6", {
      method: "POST",
      body: new FormData(event.target),
  })
  .then(response => {
      if (response.ok) {
          // Reset the form fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("Message").value = "";

          
          alert("Form submitted successfully!");
      }
  })
  .catch(error => {
      console.error("Error submitting form:", error);
  });
}

