let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

function msg(){
    h1.innerText = "Kya Dekh Raha Hai Bharwe";
    h1.classList.add("later");
    btn.style.display = "inline-block";
}

function surprise (){
    h1.innerText = "Here's a chumi for you! 😘";
    h1.style.fontSize = "95px";
    btn.style.display = "none";
}

btn.addEventListener("click", surprise)


setTimeout(msg, 5000)

