const fs = require('fs');
const bcrypt = require('bcryptjs');

const USERS_FILE = './db/users.json';

function loadUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function register(nome, email, senha) {
  const users = loadUsers();

  if (users.find(u => u.email === email)) return false;

  users.push({
    id: Date.now(),
    nome,
    email,
    senha: bcrypt.hashSync(senha, 10),
    saldo: 0
  });

  saveUsers(users);
  return true;
}

function login(email, senha) {
  const users = loadUsers();
  const user = users.find(u => u.email === email);

  if (!user) return null;
  if (!bcrypt.compareSync(senha, user.senha)) return null;

  return user;
}

module.exports = { register, login };
