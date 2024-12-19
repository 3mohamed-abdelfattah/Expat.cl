document.getElementById('burgerMenu').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('translate-x-full');
});

document.getElementById('closeMenu').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.add('translate-x-full');
});