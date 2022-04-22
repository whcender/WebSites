const toggle = document.getElementById('menu-btn');
const menu = document.getElementById('menu-items');
const homeBtn = document.getElementById('home');
const aboutBtn = document.getElementById('about1');
const contactBtn = document.getElementById('contact1');
const menuBtn = document.getElementById('menu1');
const elseBtn = document.querySelector('.header-text')

toggle.addEventListener('click', () => {
    menu.classList.add('open-menu');
});

menuBtn.addEventListener('click', () => {
    menu.classList.remove('open-menu');
})

contactBtn.addEventListener('click', () => {
    menu.classList.remove('open-menu');
})

aboutBtn.addEventListener('click', () => {
    menu.classList.remove('open-menu');
})

homeBtn.addEventListener('click', () => {
    menu.classList.remove('open-menu');
})

elseBtn.addEventListener('click', () => {
    menu.classList.remove('open-menu');
})


// scroll Animation

ScrollReveal().reveal('.ani1', {delay:250});
ScrollReveal().reveal('.ani2', {delay:500});
ScrollReveal().reveal('.ani3', {delay:750});
ScrollReveal().reveal('.ani4', {delay:1000});
ScrollReveal().reveal('.ani5', {delay:1250});
ScrollReveal().reveal('.ani6', {delay:1500});
ScrollReveal().reveal('.ani7', {delay:1750});
ScrollReveal().reveal('.ani8', {delay:2000});

// left right animation

window.sr=ScrollReveal();

sr.reveal('.anime-left',{
    duration:1000,
    origin:'left',
    distance:'15rem',
    delay:300
});

sr.reveal('.anime-right',{
    duration:1000,
    origin:'right',
    distance:'10rem',
    delay:300
});
sr.reveal('.anime-up',{
    duration:1000,
    origin:'top',
    distance:'10rem',
    delay:300
});
sr.reveal('.anime-down',{
    duration:1000,
    origin:'bottom',
    distance:'10rem',
    delay:300
});