// When the user scrolls the page, execute myFunction
window.onscroll = function() {manageNavbarStickness()};

// Get the navbar
var navbar = document.getElementById('main-menu');
var mainPageImage = document.getElementById('main-page-image');

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function manageNavbarStickness() {
  var offset = window.innerWidth > 767 ? 45 : 20;
  
  if (navbar.getBoundingClientRect().top <= -offset
      && mainPageImage.getBoundingClientRect().bottom <= 45) {
    navbar.classList.add('sticky-menu')
    mainPageImage.classList.add('sticky-menu');
  } else {
    navbar.classList.remove('sticky-menu');
    mainPageImage.classList.remove('sticky-menu');
  }
}



var navbarOpener = document.getElementById('navbar-opener');
// var mobileMenuLeft = document.getElementById('mobile-menu-left');
// var mobileMenuRight = document.getElementById('mobile-menu-right');
var mobileMenu = document.getElementById('mobile-menu');

function openNav() {
  navbarOpener.style.display = 'none';
  // mobileMenuLeft.style.width = '50%';
  // mobileMenuRight.style.width = '50%';
  // mobileMenuLeft.classList.add('active');
  // mobileMenuRight.classList.add('active');
  mobileMenu.style.width = '100%';
  mobileMenu.classList.add('active');
}

function closeNav() {
  navbarOpener.style.display = 'inline-block';
  // mobileMenuLeft.classList.remove('active');
  // mobileMenuRight.classList.remove('active');
  // mobileMenuLeft.style.width = '0';
  // mobileMenuRight.style.width = '0';
  mobileMenu.style.width = '0';
  mobileMenu.classList.remove('active');
}