
var c, currentScrollTop = 0, navbar;

document.addEventListener("DOMContentLoaded", () => {
    navbar = document.getElementById('navbar');
    home = document.getElementById('home');
    ground = document.getElementById('section-1-background');

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

    if (a != 0){
      navbar.classList.add("isNotTop");
    }else{
      navbar.classList.remove("isNotTop");
    }

    if(a > 0 && a <= home.offsetHeight){
      ground.style.transform = `translateY(${-(a/home.offsetHeight * 100 + 185)}px)`;
    }

    c = currentScrollTop;
});
