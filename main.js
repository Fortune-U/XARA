const menuBtn = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.closeBtn');
const sideMenu = document.querySelector('.sideMenu');

menuBtn.addEventListener('click', () => {
    sideMenu.style.transform = "translateX(-0%)"
    console.log('button clicked') });
    closeMenuBtn.addEventListener('click', () => {
        sideMenu.style.transform = "translateX(-100%)"
    }); 