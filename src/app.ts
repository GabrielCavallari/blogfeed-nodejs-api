import express from 'express';
import postRoutes from './routes/postRoutes';
import connectDB from './db'; // Importamos nossa função de conexão

// Conectar ao MongoDB
connectDB();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', postRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});