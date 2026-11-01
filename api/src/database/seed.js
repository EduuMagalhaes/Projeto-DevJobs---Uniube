const db = require('./db');
const bcrypt = require('bcryptjs');
const { empresas, vagas } = require('./dados');

const senha = bcrypt.hashSync('123456', 10);

db.prepare('DELETE FROM vagas').run();
db.prepare('DELETE FROM empresas').run();

const inserirEmpresa = db.prepare(`
  INSERT INTO empresas (nome, email, senha_hash)
  VALUES (?, ?, ?)
`);

const inserirVaga = db.prepare(`
  INSERT INTO vagas (
    titulo,
    empresa_id,
    tipo,
    tecnologias,
    salario,
    cep,
    cidade,
    estado,
    descricao
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const seed = db.transaction(() => {
  const empresasIds = {};

  empresas.forEach((empresa) => {
    const resultado = inserirEmpresa.run(
      empresa.nome,
      empresa.email,
      senha
    );

    empresasIds[empresa.nome] = resultado.lastInsertRowid;
  });

  vagas.forEach((vaga) => {
    const empresaId = empresasIds[vaga.empresa];

    if (!empresaId) {
      throw new Error(`Empresa não encontrada: ${vaga.empresa}`);
    }

    inserirVaga.run(
      vaga.titulo,
      empresaId,
      vaga.tipo,
      vaga.tecnologias.join(','),
      vaga.salario,
      vaga.cep,
      vaga.cidade,
      vaga.estado,
      vaga.descricao
    );
  });
});

seed();

console.log('Seed concluído!');
console.log(`${empresas.length} empresas e ${vagas.length} vagas inseridas.`);