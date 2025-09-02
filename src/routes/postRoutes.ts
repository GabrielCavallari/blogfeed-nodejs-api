import { Router, Request, Response } from 'express';
import { Post } from '../types';

const router = Router();

// "Banco de Dados" em memória
let posts: Post[] = [
    { id: 1, title: 'Primeiro Post', content: 'Conteúdo do primeiro post.', author: 'Admin' }
];

// GET /posts: Recuperar todas as postagens
router.get('/posts', (req: Request, res: Response) => {
    res.json(posts);
});

// POST /posts: Criar uma nova postagem
router.post('/posts', (req: Request, res: Response) => {
    const newPost: Post = {
        id: posts.length + 1, // Simples geração de ID
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    // Validação simples
    if (!newPost.title || !newPost.content || !newPost.author) {
        return res.status(400).json({ message: 'Título, conteúdo e autor são obrigatórios.' });
    }

    posts.push(newPost);
    res.status(201).json(newPost);
});

// GET /posts/:id: Recuperar uma única postagem pelo seu ID
router.get('/posts/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post não encontrado.' });
    }
});

export default router;