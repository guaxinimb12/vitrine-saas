const bar = document.getElementById("progress");
const percent = document.getElementById("percent");
const sound = document.getElementById("bootSound");

sound.volume = 0.5;
sound.play().catch(()=>{});

let progress = 0;
const totalTime = 18000;
const interval = totalTime / 100;

const timer = setInterval(() => {
  progress++;
  bar.style.width = progress + "%";
  percent.innerText = progress + "%";

  if (progress >= 100) {
    clearInterval(timer);
    window.location.href = "/home";
  }
}, interval);

// partículas
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    s: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "gold";

  particles.forEach(p => {
    p.y += p.s;
    if (p.y > canvas.height) p.y = 0;
    ctx.fillRect(p.x, p.y, 2, 2);
  });

  requestAnimationFrame(animate);
}

animate();
