let a = document.getElementById("number");
let b = parseInt(a.innerHTML);


let intervalId = setInterval(function(){
    console.log(b);
    a.innerHTML = b;
    b--;
}, 1000);