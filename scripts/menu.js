// When the user scrolls the page, execute myFunction
window.onscroll = function() {manageNavbarStickness()};

// Get the navbar
var navbar = document.getElementById('main-menu');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function manageNavbarStickness() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky-menu')
  } else {
    navbar.classList.remove('sticky-menu');
  }
} 