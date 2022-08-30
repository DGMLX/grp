const img = document.getElementById("img");
const p = document.getElementById("p");
const btn = document.getElementById("btn");

setTimeout(() => {
    p.style.display="block"
    p.classList.add("aparecer")
}, 1500);

setTimeout(() => {
    img.style.display="block"
    img.classList.add("aparecer")
}, 3000);

setTimeout(() => {
    btn.style.display="block"
    btn.classList.add("aparecer")
    
}, 5000);
