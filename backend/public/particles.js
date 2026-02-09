const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

const particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    s: Math.random() * 2 + 1,
    v: Math.random() * 1 + 0.5
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "rgba(255,215,0,0.8)";

  particles.forEach(p=>{
    p.y += p.v;
    if(p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.s,0,Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
