const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// servir arquivos HTML, CSS, JS
app.use(express.static(path.join(__dirname, "public")));

// rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
