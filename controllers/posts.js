import {PostModel} from '../models/PostModel.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('posts: ', posts);
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({error: err});
    }
};