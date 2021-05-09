import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const URIDB = 'mongodb+srv://admin:LBDS474yWCOqsVaL@cluster0.rtebv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.PORT || 5000;

// middleware for requests
// limit 30mb capacity client submit form
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30md'}));
app.use(cors());

// test
app.get('/', (req, res) => {
    res.send('OK');
});

// use app.use to import form routers
app.use('/post', posts);

mongoose.connect(URIDB, {useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected DB');
            
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            })
        })
        .catch((err) => {
            console.log('err', err);
        });