const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  if(!showMenu){
    burger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((navItem)=>{
      navItem.classList.add("open");
    })
    showMenu = true;
  }else{
    burger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((navItem)=>navItem.classList.remove("open"));
    showMenu = false;
  }
}
