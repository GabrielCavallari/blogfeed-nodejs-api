import { Schema, model } from 'mongoose';
import { Post } from '../types'; 

const PostSchema = new Schema<Post>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
});

const PostModel = model<Post>('Post', PostSchema);

export default PostModel;