
/* ==========Menu==========*/

let hamb = document.querySelector('.menuBx i');
let navBar = document.querySelector('.navBar ul');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});


/* ==========Menu Onscroll==========*/
window.onscroll = () => {
    hamb.classList.remove('fa-times');
    navBar.classList.remove('active');
};

document.querySelectorAll('.three_img img').forEach(img_bx => {
    img_bx.onclick = () => {
        let src = img_bx.getAttribute('src');
        document.querySelector('.principal__home__image').src = src;
    };
});



/* ==========Animação==========*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})
sr.reveal('.footer__boxLogo, .unit-card, .box-title')
sr.reveal('.img_bx', {origin:'bottom'})
sr.reveal('.depoimentos__card__boxImg, .text-bx,.footer__boxRes', {origin:'left'})
sr.reveal('.depoimentos__boxText, .footer__boxFora, .footer__boxSosial', {origin:'right'})
sr.reveal('.servicos__boxUnit, .clientes__unit', {interval:150})


    