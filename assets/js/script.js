let hamb = document.querySelector('.menuBx i');
let navBar = document.querySelector('.navBar ul');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})