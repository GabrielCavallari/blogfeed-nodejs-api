import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            console.error("MONGO_URI não definida no arquivo .env");
            process.exit(1);
        }
        await mongoose.connect(mongoURI);
        console.log("MongoDB conectado com sucesso.");
    } catch (error) {
        console.error("Erro ao conectar com o MongoDB:", error);
        process.exit(1); // Encerra o processo com falha
    }
};

export default connectDB;