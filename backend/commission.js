const fs = require('fs');

const usersFile = './db/users.json';
const salesFile = './db/sales.json';

function load(file) {
  return JSON.parse(fs.readFileSync(file));
}

function save(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function registrarVenda({ produto, valor, afiliadoId }) {
  const users = load(usersFile);
  const sales = load(salesFile);

  const comissao = valor * 0.5; // 50%

  const user = users.find(u => u.id == afiliadoId);
  if (!user) return false;

  user.saldo += comissao;

  sales.push({
    id: Date.now(),
    produto,
    valor,
    comissao,
    afiliadoId,
    data: new Date().toISOString()
  });

  save(usersFile, users);
  save(salesFile, sales);

  return true;
}

module.exports = { registrarVenda };
