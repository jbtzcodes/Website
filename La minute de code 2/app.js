const navBurger = document.querySelector('.iconBurger');
const navListe = document.querySelector('.navigation-liste');
const navLiens = document.querySelectorAll('.navigation-item a');
const nav = document.querySelector('.navigation');
const btnRetourHaut = document.querySelector('.retourHaut');


let hauteurAvantNav = nav.offsetTop;

// Burger
navBurger.addEventListener('click', ()=> {
  navBurger.classList.toggle('active');
  navListe.classList.toggle('active');
})


// Navigation
 let navFunction = () => {
  if (window.scrollY >= 100) {
    nav.classList.add('active')
  }else {
    nav.classList.remove('active')
  }
    if (window.scrollY >= 500) {
    btnRetourHaut.classList.add('active')
  }else {
    btnRetourHaut.classList.remove('active')
  }
 }
window.addEventListener('scroll', navFunction)










