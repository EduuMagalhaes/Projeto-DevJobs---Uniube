const { Router } = require('express');
const router = Router();
const { vagas } = require("../../../js/dados.js");

const vagasMock = vagas;

router.get('/', (req, res) => {
    res.json(vagasMock)
});

module.exports = router;