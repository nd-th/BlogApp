import express from "express";
import 'dotenv/config'
import {pool} from "./db.js"
import cors from 'cors'
import bodyParser from "body-parser";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import router from "./posts.js";
import AiRouter from './AiModels.js'

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/posts', router)
app.use('/api', AiRouter)





app.get('/', (req, res) =>{
    res.send('Hi')
})

app.listen(port, ()=>{console.log(`server start at http://localhost:${port}`)})