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

router.post('/', (req, res) => {
    const {titulo, empresa_id, tipo, tecnologia, salario, cep, cidade, estado, descricao} = req.body;

    if (!titulo || !empresa_id || !tipo) {
        return res.status(400).json({erro: 'Campos Obrigatórios: titulo, Empresa_id, tipo'})
    }

    const result = db.prepare(
        `INSERT INTO vagas (titulo, empresa_id, tipo, tecnologia, salario, cep, cidade, estado, descricao)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(titulo, empresa_id, tipo, tecnologia || '', salario || '', cep || '', cidade || '', estado || '', descricao || '');

    const vaga = db.prepare('SELECT * FROM vagas WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(vaga);
});

module.exports = router;