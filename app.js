const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

setTimeout(() => {
    p1.classList.add("desaparecer")
}, 3000);

setTimeout(() => {
    p1.style.display = "none"
    p2.classList.add("aparecer")
    p2.style.display="block"
}, 6000);


setTimeout(() => {
    p2.classList.remove("aparecer")
    p2.classList.add("desaparecer")
}, 9000);

setTimeout(() => {
    p2.style.display="none"
    p3.classList.add("aparecer")
    p3.style.display="block"
}, 12000);

setTimeout(() => {
    p3.classList.remove("aparecer")
    p3.classList.add("desaparecer")
}, 15000);

setTimeout(() => {
    p3.style.display="none"
    p4.classList.add("aparecer")
    p4.style.display="block"
}, 18000);

setTimeout(() => {
    p4.classList.remove("aparecer")
    p4.classList.add("desaparecer")
}, 21000);

setTimeout(() => {
    p4.style.display="none"
    p5.classList.add("aparecer")
    p5.style.display="block"
}, 24000);

setTimeout(() => {
    p5.classList.remove("aparecer");
    p5.classList.add("desaparecer")
}, 27000);
setTimeout(() => {
    p5.style.display="none";
    window.location.assign("index2.html")
}, 30000);