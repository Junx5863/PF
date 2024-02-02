const dropDrownMenu = document.querySelector('.dropdown_menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');


document.addEventListener('DOMContentLoaded', function() {

  hamburgerMenu.addEventListener('click', function() {
    dropDrownMenu.classList.toggle('open');
      
    });
  });



