import express from 'express';
import 'dotenv/config'
// const { Models } = require('openai/resources/models.mjs');
var router = express.Router();
import {pool} from './db.js'
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


//get all contacts
router.get('/', async(req,res) =>{
    try {
        const posts = await pool.query("SELECT * FROM posts JOIN generate ON posts.id = generate.id");
        res.json(posts.rows);
    } catch (error) {
        console.log(error.message)
    }
});

router.get('/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const post = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
        res.json(post.rows[0])
        console.log()
    } catch (error) {
        
    }
})



//add a contact
router.post('/', async(req, res) =>{
    try {
        const {title, content} = req.body;
        const add = await pool.query("INSERT INTO posts(title, content) VALUES($1, $2)", [title, content]);
    } catch (error) {
        console.log(error.message)
    }

});

// edit contact
router.put('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const {title, content} = req.body;
        const edit = await pool.query("UPDATE posts SET title=$1, content=$2 WHERE id=$5", [title, content]);
        res.send("update posts", id)
    } catch (error) {
        console.log(error.message);
    }
});


//delete a contact
router.delete('/:id', async(req, res)=>{
   try {
    const {id} = req.params;
    const gen = await pool.query("DELETE FROM generate WHERE id = $1", [id])
    const del = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    res.send("Delete post", id);
   } catch (error) {
    console.log(error.message);
    
   }
})


router.get('/gen', async(req,res) =>{
    try {
        const posts = await pool.query("SELECT * FROM posts");
        res.json(posts.rows);
    } catch (error) {
        console.log(error.message)
    }
});



// router.patch("/:id", async(req,res)=>{
//     try {
//         const {id} = req.params();
//         const {summary} = req.body;
//         const content = await pool.query("SELECT content FROM posts WHERE id=$1", [id]);
//         const prompt = `Summarize content: ${content}`;
//         const result = await model.generateContentStream(prompt);
//         const sum = await pool.query("UPDATE posts SET summary=$2 WHERE id=$3 RETURNING *", [sum, id])
//         console.log(content)
//         // console.log(prompt)
//         res.json(sum.rows)
//     // const result = await model.generateContentStream(prompt);
//     // // for await (const chunk of result.stream) {
//     // //     const chunkText = chunk.text();
//     // //     process.stdout.write(chunkText);
//     // console.log(result.response.text())
//     // res.json(result.response.text());
        
//     } catch (error) {
//         console.log(error.message)
//     }
    
// })

export default router;
