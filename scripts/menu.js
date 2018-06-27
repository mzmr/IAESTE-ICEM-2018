// When the user scrolls the page, execute myFunction
window.onscroll = function() {manageNavbarStickness()};

// Get the navbar
var navbar = document.getElementById('main-menu');
var mainPageImage = document.getElementById('main-page-image');

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function manageNavbarStickness() {
  if (navbar.getBoundingClientRect().top <= -45 && mainPageImage.getBoundingClientRect().bottom <= 45) {
    navbar.classList.add('sticky-menu')
    mainPageImage.classList.add('sticky-menu');
  } else {
    navbar.classList.remove('sticky-menu');
    mainPageImage.classList.remove('sticky-menu');
  }
}


function openNav() {
  document.getElementById('mobile-menu-left').style.width = '50%';
  document.getElementById('mobile-menu-right').style.width = '50%';
  document.getElementById('mobile-menu-left').classList.add('active');
  document.getElementById('mobile-menu-right').classList.add('active');
}

function closeNav() {
  document.getElementById('mobile-menu-left').classList.remove('active');
  document.getElementById('mobile-menu-right').classList.remove('active');
  document.getElementById('mobile-menu-left').style.width = '0';
  document.getElementById('mobile-menu-right').style.width = '0';
}