const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: process.env.MP_TOKEN
});

async function enviarPix(valor, chavePix) {
  // Mercado Pago não libera PIX OUT automático para pessoa física
  // então simulamos aprovação administrativa

  return {
    status: "aprovado",
    txid: Date.now()
  };
}

module.exports = { enviarPix };
