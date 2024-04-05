// src/routes/postRoutes.ts
import express from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController';

const router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);
router.get('/', (req, res) => {
    res.send('Hello, this is Komal');
  });
export default router;
