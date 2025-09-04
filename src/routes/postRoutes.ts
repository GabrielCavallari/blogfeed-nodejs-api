import { Router, Request, Response } from 'express';
import PostModel from '../models/postModel'; // Importamos o modelo

const router = Router();

// GET /posts: Recuperar todas as postagens
router.get('/posts', async (req: Request, res: Response) => {
    try {
        const posts = await PostModel.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar posts." });
    }
});

// POST /posts: Criar uma nova postagem
router.post('/posts', async (req: Request, res: Response) => {
    try {
        const newPost = new PostModel({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar post." });
    }
});

// GET /posts/:id: Recuperar uma única postagem pelo seu ID
router.get('/posts/:id', async (req: Request, res: Response) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: "ID de post inválido." });
    }
});

export default router;