const img = document.getElementById("img");
const img2 = document.getElementById("img2");
const p = document.getElementById("p");
const h2 = document.getElementById("h2");
const btn = document.getElementById("btn");

setTimeout(() => {
    img.style.display = "block";
    img.classList.add("aparecer");
    img2.style.display = "block";
    img2.classList.add("aparecer");
}, 1000);

setTimeout(() => {
    h2.style.display = "block";
    h2.classList.add("aparecer");
}, 3000);

setTimeout(() => {
    p.style.display = "block";
    p.classList.add("aparecer");
}, 5000);

setTimeout(() => {
    btn.style.display = "block";
    btn.classList.add("aparecer");
}, 7000);