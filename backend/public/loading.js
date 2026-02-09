let progress = 0;
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

async function carregar() {
  percent.innerText = "Conectando...";

  await fetch('/me').catch(()=>{});
  progress = 30;

  bar.style.width = "30%";

  percent.innerText = "Carregando produtos...";
  await fetch('/produtos');
  progress = 70;

  bar.style.width = "70%";

  percent.innerText = "Finalizando...";
  setTimeout(()=>{
    bar.style.width = "100%";
    percent.innerText = "100%";
    document.getElementById("loading").style.display = "none";
    document.getElementById("app").style.display = "block";
  },1000);
}

carregar();
