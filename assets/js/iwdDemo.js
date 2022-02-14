const div = document.createElement("div");
div.textContent = "Hello World!";
div.style.height = "20vh";
div.style.width = "20vw";
div.style.backgroundColor = "lightgreen";
div.style.position = "absolute";
document.body.appendChild(div);

let x = 0, y = 0;
let dx = 1 + Math.random() * 3, dy = 1 + Math.random() * 3;
window.setInterval(function() {
    x += dx;
    y += dy;
    if (Math.abs(dx) >= 1) {
        dx *= 0.9995;
    }
    if (Math.abs(dy) >= 1) {
        dy *= 0.9995;
    }

    div.style.left = x + "px";
    div.style.top = y + "px";

    const position = div.getBoundingClientRect();
    if (position.left + dx <= 0 || position.right + dx >= window.innerWidth) {
        dx *= -1;
    }
    if (position.top + dy <= 0 || position.bottom + dy >= window.innerHeight) {
        dy *= -1;
    }
}, 10);

window.onclick = function() {
    dx += Math.random() * 3 / dx;
    dy += Math.random() * 3 / dy;
}
