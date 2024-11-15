import express from "express";
import 'dotenv/config'
var AiRouter = express.Router();
import {pool} from './db.js'
import { GoogleGenerativeAI } from "@google/generative-ai";
import {TranslationServiceClient} from '@google-cloud/translate';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



AiRouter.get('/', async(req,res) =>{
    try {
        const generate = await pool.query("SELECT * FROM generate");
        res.json(generate.rows);
    } catch (error) {
        console.log(error.message)
    }
});




AiRouter.post('/', async(req, res) =>{
    const {id} = req.body;
    try {
        const contentResult = await pool.query("SELECT content FROM posts WHERE id=$1", [id]);
        if (contentResult.rows.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        const content = contentResult.rows[0].content;
        const prompt=`Summarize this content: ${content}`;
        const result = await model.generateContentStream(prompt);
        const getSentiment =`Please analys this content and give me just color that is the sentiment of this content in less than 6 character: ${content}`;
        const response = await model.generateContentStream(getSentiment);
        const summary = (await result.response).text();
        const sentiment = (await response.response).text()
        const add = await pool.query("INSERT INTO generate (summary, sentiment, id) VALUES($1, $2, $3) RETURNING *", [summary, sentiment, id]);
        res.json(add.rows[0])
    } catch (error) {
        console.log(error.message)
    }

});

AiRouter.delete('/:id', async(req, res)=>{
    try {
     const {id} = req.params;
     const gen = await pool.query("DELETE FROM generate WHERE gen_id = $1", [id])
     res.send("Delete post", id);
    } catch (error) {
     console.log(error.message);
     
    }
 })


// Build an interactive chat
// You can use the Gemini API to build interactive chat experiences for your users. Using the chat feature of the API lets you collect multiple rounds of questions and responses, allowing users to step incrementally toward answers or get help with multipart problems. This feature is ideal for applications that require ongoing communication, such as chatbots, interactive tutors, or customer support assistants.

// The following code example shows a basic chat implementation:


// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const chat = model.startChat({
//   history: [
//     {
//       role: "user",
//       parts: [{ text: "Hello" }],
//     },
//     {
//       role: "model",
//       parts: [{ text: "Great to meet you. What would you like to know?" }],
//     },
//   ],
// });
// let result = await chat.sendMessage("I have 2 dogs in my house.");
// console.log(result.response.text());
// result = await chat.sendMessage("How many paws are in my house?");
// console.log(result.response.text());


// const languages= null;
// // /**
// //  * TODO(developer): Uncomment these variables before running the sample.
// //  */
// const projectId = process.env.PROJECT_ID;
// const location = 'global';



// const translationClient = new TranslationServiceClient();

// async function getSupportedLanguages() {

//   const request = {
//     parent: `projects/${projectId}/locations/${location}`,
//   };

//   const [response] = await translationClient.getSupportedLanguages(request);

//   for (const language of response.languages) {
//     languages.push(language.displayName)
    
// }
// }
// getSupportedLanguages();

// AiRouter.get('/suges', (req, res) =>{

// })


// AiRouter.get('/lang', (req, res) =>{
//     res.json(languages)
// })






// // Imports the Google Cloud client library
// const textToSpeech = require('@google-cloud/text-to-speech');

// // Import other required libraries
// const {writeFile} = require('node:fs/promises');

// // Creates a client
// const client = new textToSpeech.TextToSpeechClient();

// async function quickStart() {
//   // The text to synthesize
//   const text = 'hello, world!';

//   // Construct the request
//   const request = {
//     input: {text: text},
//     // Select the language and SSML voice gender (optional)
//     voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
//     // select the type of audio encoding
//     audioConfig: {audioEncoding: 'MP3'},
//   };

//   // Performs the text-to-speech request
//   const [response] = await client.synthesizeSpeech(request);

//   // Save the generated binary audio content to a local file
//   await writeFile('output.mp3', response.audioContent, 'binary');
//   console.log('Audio content written to file: output.mp3');
// }

// await quickStart();


export default AiRouter