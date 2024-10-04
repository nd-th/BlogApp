import express from 'express';
// const { Models } = require('openai/resources/models.mjs');
var router = express.Router();
import {pool} from './db.js'


//get all contacts
router.get('/', async(req,res) =>{
    try {
        const posts = await pool.query("SELECT * FROM posts");
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
    } catch (error) {
        
    }
})

//add a contact
router.post('/', async(req, res) =>{
    try {
        const {title, content} = req.body;
        const add = await pool.query("INSERT INTO posts(title, content) VALUES($1, $2) RETURNING *", [title, content]);
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
    const del = await pool.query("DELETE FROM posts WHERE contactid = $1", [id]);
    res.send("Delete contact", id);
   } catch (error) {
    console.log(error.message);
    
   }
})

export default router;
