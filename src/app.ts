import express from 'express';
import postRoutes from './routes/postRoutes';

const app = express();
const port = 3000;

// Middleware para permitir que o Express entenda JSON
app.use(express.json());

// Usar as rotas de postagens
app.use('/api', postRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});