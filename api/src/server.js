const express = require('express');
const cors = require('cors');
require('dotenv').config();

const vagasRoutes = require('./routes/vagas.routes')
const authRoutes = require('./routes/auth.routes')

const app = express();
const PORT = process.env.PORT || 3001;
require('./database/db');

app.use(cors());
app.use(express.json());

app.use('/api/vagas', vagasRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`DevJobs API rodando em http://localhost:${PORT}`);
});
