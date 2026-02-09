exports.list = (req, res) => {
  res.json([
    { id: 1, name: "Curso IA", price: 97 },
    { id: 2, name: "Bot Cripto", price: 197 }
  ]);
};
