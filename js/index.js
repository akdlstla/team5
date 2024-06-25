let mybutton = document.getElementById("button");
const productNames = document.querySelectorAll('.name');

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

truncateProductNames = () =>{
    productNames.forEach(productName=>{
        const productNameVal = productName.textContent.split('');

        if(productNameVal.length>25){
            productName.textContent = productNameVal.slice(0,20).join('')+'...';
        }

    });
}
truncateProductNames();
scrollFunction();