const div = document.createElement("div");
div.textContent = "Hello World!";
div.style.height = "20vh";
div.style.width = "20vw";
div.style.backgroundColor = "lightgreen";
div.style.position = "absolute";
document.body.appendChild(div);

let x = 0, y = 0;
let dx = Math.random() * 3, dy = Math.random() * 3;
window.setInterval(function() {
    x += dx;
    y += dy;
    // dx += (Math.random() - 0.5) * 0.5;
    // dy += (Math.random() - 0.5) * 0.5;

    div.style.left = x + "px";
    div.style.top = y + "px";

    const position = div.getBoundingClientRect();
    if (position.left <= 0 || position.right >= window.innerWidth) {
        dx *= -1;
    }
    if (position.top <= 0 || position.bottom >= window.innerHeight) {
        dy *= -1;
    }
}, 10);

window.onclick = function() {
    dx += Math.random() * 3 / dx;
    dy += Math.random() * 3 / dy;
}
