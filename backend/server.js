const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/produtos", (req, res) => {
  res.json([
    { nome: "Curso Renda Online", preco: 97 },
    { nome: "IA para Negócios", preco: 147 },
    { nome: "Marketing Digital Pro", preco: 197 }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando na porta", PORT);
});
