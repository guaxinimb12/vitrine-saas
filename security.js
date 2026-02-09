const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const sanitizeHtml = require("sanitize-html");

function security(app) {

  // 🔐 headers de segurança
  app.use(helmet());

  // 🚫 proteção contra ataque
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300
  }));

  // 🧹 sanitização contra XSS
  app.use((req, res, next) => {
    if (req.body) {
      for (let key in req.body) {
        if (typeof req.body[key] === "string") {
          req.body[key] = sanitizeHtml(req.body[key], {
            allowedTags: [],
            allowedAttributes: {}
          });
        }
      }
    }
    next();
  });

}

module.exports = security;
