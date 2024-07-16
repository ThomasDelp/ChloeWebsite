
var c, currentScrollTop = 0, navbar;

document.addEventListener("DOMContentLoaded", () => {
    navbar = document.getElementById('navbar');

    console.log(navbar)
    
    
});

document.addEventListener("scroll", () => {
    var a = window.scrollY;
    var b = navbar.offsetHeight;
    console.log("a")
    console.log(a)
    console.log("b")
    console.log(b)
    console.log("c")
    console.log(c)


    currentScrollTop = a;
   
    if (c < currentScrollTop && a > b + b) {
        console.log("1")

      navbar.classList.add("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
        console.log("2")

      navbar.classList.remove("scrollUp");
    }
    c = currentScrollTop;
   
   console.log(a);
});
