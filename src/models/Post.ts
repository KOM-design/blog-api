import mongoose, { Schema, model, Document } from 'mongoose';

export interface IPost extends Document {
  id: number;  
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  category_id: string;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  category_id: { type: String, required: true },
});

const Post = model<IPost>('Post', PostSchema);

export default Post; // Export Post as default