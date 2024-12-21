// Add event listener for opening the mobile navigation menu
document.getElementById('burgerMenu').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobileNav');
    // Remove the class that hides the mobile navigation
    mobileNav.classList.remove('translate-x-full');
});

// Add event listener for closing the mobile navigation menu
document.getElementById('closeMenu').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobileNav');
    // Add the class that hides the mobile navigation
    mobileNav.classList.add('translate-x-full');
});