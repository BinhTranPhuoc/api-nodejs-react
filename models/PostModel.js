import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    content: {
        type: 'string',
        required: true,
    },
    author: {
        type: 'string',
        required: true,
        default: 'BinhTP'
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    }
    // createdAt and updatedAt
}, {timestamps: true});

export const PostModel = mongoose.model('Post', schema);