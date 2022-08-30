const h1 = document.getElementById("h1");
const img = document.getElementById("img");
const p = document.getElementById("p");
const btn = document.getElementById("btn");

setTimeout(() => {
    h1.classList.add("aparecer")
    h1.style.display="block"
}, 1000);

setTimeout(() => {
    img.classList.add("aparecer")
    img.style.display="block"
}, 3000);

setTimeout(() => {
    p.classList.add("aparecer")
    p.style.display="block"
}, 5000);

setTimeout(() => {
    btn.classList.add("aparecer")
    btn.style.display="block"
}, 7000);