// inicializar com node, Express e Prisma
// Importando as dependências
const express = require('express');
const cors = require('cors');

// Criando uma instância do aplicativo Express
const app = express();

// Configurando a porta
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Habilita CORS
app.use(express.json()); // Faz o parser do JSON no corpo das requisições

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
