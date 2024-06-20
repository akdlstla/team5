let mybutton = document.getElementById("button");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = "0";
        mybutton.style.visibility = "hidden";
    }
}
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
scrollFunction();