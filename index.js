
var c, currentScrollTop = 0, navbar;

document.addEventListener("DOMContentLoaded", () => {
    navbar = document.getElementById('navbar');

    console.log(navbar)
    
    
});

document.addEventListener("scroll", () => {
    var a = window.scrollY;
    var b = navbar.offsetHeight;
    currentScrollTop = a;
   
    if (c < currentScrollTop && a > b + b) {
      navbar.classList.add("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.classList.remove("scrollUp");
    }
    c = currentScrollTop;
   
   console.log(a);
});
