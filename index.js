const navLogo = document.querySelector(".nav-logo");
document.addEventListener('scroll', function() {
    if(window.scrollY > 0) {
        navLogo.classList.add('logo-thin');
    } else {
        navLogo.classList.remove('logo-thin');
    }
});