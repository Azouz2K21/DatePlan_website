//Get the button:
mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (
    document.body.scrollTop > sticky ||
    document.documentElement.scrollTop > sticky
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Functional Sticky Navbar
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.querySelector("nav");
var services = document.querySelector("#features");
var sticky = services.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  // Preloader
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  //   Nice Select Initialization
  $("select").niceSelect();
});

// Navbar Open Function on Mobile Menu
function openNav() {
  $("#myNav").css("width", "100%");
}

// Navbar Close Function on Mobile Menu
function closeNav() {
  $("#myNav").css("width", "0");
}


document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.querySelector(".subscribe-form");
  const emailInput = emailForm.querySelector(".form-input");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.getElementById("success-message");

  const subscribeButton = emailForm.querySelector(".subscribe-btn");

  if (emailForm && emailInput && subscribeButton) {
    subscribeButton.addEventListener("click", function (event) {
      event.preventDefault();

      const userEmail = emailInput.value;

      if (userEmail) {
        const usersCollection = firebase.firestore().collection("users"); // Use the firestore() method from Firebase

        usersCollection.add({
          email: userEmail
        })
        .then(() => {
          console.log("Email saved to Firestore");
          emailInput.value = "";
          successMessage.textContent = "Email added successfully!";
          setTimeout(() => {
            successMessage.textContent = "";
          }, 5000);
        })
        .catch(error => {
          console.error("Error saving email to Firestore:", error);
          errorMessage.textContent = "An error occurred. Please try again later.";
        });
      }
    });
  }
});