const fs = require('fs');

const usersFile = './db/users.json';
const withdrawalsFile = './db/withdrawals.json';

function load(file) {
  return JSON.parse(fs.readFileSync(file));
}

function save(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function solicitarSaque(userId, valor, chavePix) {
  const users = load(usersFile);
  const user = users.find(u => u.id == userId);

  if (!user || user.saldo < valor) return false;

  user.saldo -= valor;

  const withdrawals = load(withdrawalsFile);

  withdrawals.push({
    id: Date.now(),
    userId,
    valor,
    chavePix,
    status: "pendente",
    data: new Date().toISOString()
  });

  save(usersFile, users);
  save(withdrawalsFile, withdrawals);

  return true;
}

function listarSaques() {
  return load(withdrawalsFile);
}

function aprovarSaque(id) {
  const withdrawals = load(withdrawalsFile);
  const saque = withdrawals.find(w => w.id == id);
  if (!saque) return false;

  saque.status = "pago";
  save(withdrawalsFile, withdrawals);

  return saque;
}

module.exports = {
  solicitarSaque,
  listarSaques,
  aprovarSaque
};
