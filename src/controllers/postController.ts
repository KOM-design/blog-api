// src/controllers/postController.ts
import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post';

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts: IPost[] = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send((error as Error).message || 'Internal Server Error');
  }
};

export const getPostById = async (req: Request, res: Response): Promise<void> => {
  try {
    let arr = ["id"]
    let keys_label = []
    for (const key in req.body) {
      console.log(key, req.body[key]);
      keys_label.push(key)    
    }
    arr.sort()
    keys_label.sort()

    if (arr.length != keys_label.length)
    {
      res.status(400).send('Bad Request');
    }

    for (let i = 0 ; i < arr.length ; i++)
    {
      if (arr[i] != keys_label[i])
      {
      res.status(400).send('Bad Request');
      }
    }
    const post: IPost | null = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send((error as Error).message || 'Internal Server Error');
  }
};

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {

    let arr = ["title", "content", "category_id"]
    let keys_label = []
    for (const key in req.body) {
      console.log(key, req.body[key]);
      keys_label.push(key)    
    }
    arr.sort()
    keys_label.sort()

    if (arr.length != keys_label.length)
    {
      res.status(400).send('Bad Request');
    }

    for (let i = 0 ; i < arr.length ; i++)
    {
      if (arr[i] != keys_label[i])
      {
      res.status(400).send('Bad Request');
      }
    }
    
    
    const { title, content, category_id } = req.body;
    const newPost: IPost = new Post({ title, content, category_id });
    const savedPost: IPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).send((error as Error).message || 'Bad Request');
  }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    let arr = ["title", "content"]
    let keys_label = []
    for (const key in req.body) {
      console.log(key, req.body[key]);
      keys_label.push(key)    
    }
    arr.sort()
    keys_label.sort()

    if (arr.length != keys_label.length)
    {
      res.status(400).send('Bad Request');
    }

    for (let i = 0 ; i < arr.length ; i++)
    {
      if (arr[i] != keys_label[i])
      {
      res.status(400).send('Bad Request');
      }
    }
    const { title, content } = req.body;
    const updatedPost: IPost | null = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, updated_at: new Date() },
      { new: true }
    );
    if (!updatedPost) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).send((error as Error).message || 'Bad Request');
  }
};

export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    let arr = ["id"]
    let keys_label = []
    for (const key in req.body) {
      console.log(key, req.body[key]);
      keys_label.push(key)    
    }
    arr.sort()
    keys_label.sort()

    if (arr.length != keys_label.length)
    {
      res.status(400).send('Bad Request');
    }

    for (let i = 0 ; i < arr.length ; i++)
    {
      if (arr[i] != keys_label[i])
      {
      res.status(400).send('Bad Request');
      }
    }
    const deletedPost: IPost | null = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send((error as Error).message || 'Internal Server Error');
  }
};
