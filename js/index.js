
var c, currentScrollTop = 0, navbar;

document.addEventListener("DOMContentLoaded", () => {
    navbar = document.getElementById('navbar');
    home = document.getElementById('home');
    ground = document.getElementById('section-1');

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
      console.log("1")
      navbar.classList.add("isNotTop");
    }else{
      console.log("2")
      navbar.classList.remove("isNotTop");
    }

    if(a >= home.offsetHeight/2){
      ground.classList.remove("ground-up");
    }else{
      ground.classList.add("ground-up");
    }

    c = currentScrollTop;
   
   console.log(a);
});
