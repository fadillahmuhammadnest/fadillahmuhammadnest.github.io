const menuToggle=document.querySelector('.menu-toggle input');
const nav1=document.querySelector('.containmk-a .menu ul li:nth-child(1)')
const nav2=document.querySelector('.containmk-a .menu ul li:nth-child(2)')
const nav3=document.querySelector('.containmk-a .menu ul li:nth-child(3)')
const nav4=document.querySelector('.containmk-a .menu ul li:nth-child(4)')
const nav5=document.querySelector('.containmk-a .menu ul li:nth-child(5)')


menuToggle.addEventListener('click', function () {
    nav1.classList.toggle('slide');
    nav2.classList.toggle('slide');
    nav3.classList.toggle('slide');
    nav4.classList.toggle('slide');
    nav5.classList.toggle('slide');
});