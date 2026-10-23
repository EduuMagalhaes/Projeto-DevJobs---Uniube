const { Router } = require('express');
const router = Router();
const { vagas } = require("../../../js/dados.js");
const db = require('../database/db');

const vagasMock = vagas;

router.get('/', (req, res) => {
  const vagas = db.prepare(`
    SELECT v.*, e.nome AS empresa_nome
    FROM vagas v
    JOIN empresas e ON e.id = v.empresa_id
    ORDER BY v.created_at DESC
  `).all();

  res.json(vagas);
});

module.exports = router;