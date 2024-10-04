import express from "express";
import {pool} from "./db.js"
import cors from 'cors'
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
import postRouter  from './posts.js';

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/posts', postRouter)





























// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-4o-mini",




















//AI 

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Write a story about a magic backpack.";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());








// Generate a text stream
// By default, the model returns a response after completing the entire text generation process. You can achieve faster interactions by not waiting for the entire result, and instead use streaming to handle partial results.

// The following example shows how to implement streaming using the streamGenerateContent method to generate text from a text-only input prompt.




app.get("/summarize/:id", async(req,res)=>{
    const {id} = req.params();
    const content = await pool.query("SELECT content FROM posts WHERE id=$1", [id]);
    const prompt = content;
    const result = await model.generateContentStream(prompt);
    // for await (const chunk of result.stream) {
    //     const chunkText = chunk.text();
    //     process.stdout.write(chunkText);
    res.json(result);
})





















// Build an interactive chat
// You can use the Gemini API to build interactive chat experiences for your users. Using the chat feature of the API lets you collect multiple rounds of questions and responses, allowing users to step incrementally toward answers or get help with multipart problems. This feature is ideal for applications that require ongoing communication, such as chatbots, interactive tutors, or customer support assistants.

// The following code example shows a basic chat implementation:


// // Make sure to include these imports:
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
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


//model: general/nmt
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'us-central1';
// const modelId = 'YOUR_MODEL_ID';
// const text = 'text to translate';

// Imports the Google Cloud Translation library
// const {TranslationServiceClient} = require('@google-cloud/translate');

// // Instantiates a client
// const translationClient = new TranslationServiceClient();
// async function translateTextWithModel() {
//   // Construct request
//   const request = {
//     parent: `projects/${projectId}/locations/${location}`,
//     contents: [text],
//     mimeType: 'text/plain', // mime types: text/plain, text/html
//     sourceLanguageCode: 'en',
//     targetLanguageCode: 'ja',
//     model: `projects/${projectId}/locations/${location}/models/${modelId}`,
//   };

//   // Run request
//   const [response] = await translationClient.translateText(request);

//   for (const translation of response.translations) {
//     console.log(`Translated Content: ${translation.translatedText}`);
//   }
// }

// translateTextWithModel();



// /**
//  * TODO(developer): Uncomment these variables before running the sample.
//  */
// // const projectId = 'YOUR_PROJECT_ID';
// // const location = 'global';

// // Imports the Google Cloud Translation library
// const {TranslationServiceClient} = require('@google-cloud/translate');

// // Instantiates a client
// const translationClient = new TranslationServiceClient();

// async function getSupportedLanguages() {
//   // Construct request
//   const request = {
//     parent: `projects/${projectId}/locations/${location}`,
//   };

//   // Get supported languages
//   const [response] = await translationClient.getSupportedLanguages(request);

//   for (const language of response.languages) {
//     // Supported language code, generally consisting of its ISO 639-1 identifier, for
//     // example, 'en', 'ja'. In certain cases, BCP-47 codes including language and
//     // region identifiers are returned (for example, 'zh-TW' and 'zh-CN')
//     console.log(`Language - Language Code: ${language.languageCode}`);
//     // Human readable name of the language localized in the display language specified
//     // in the request.
//     console.log(`Language - Display Name: ${language.displayName}`);
//     // Can be used as source language.
//     console.log(`Language - Support Source: ${language.supportSource}`);
//     // Can be used as target language.
//     console.log(`Language - Support Target: ${language.supportTarget}`);
//   }
// }

// getSupportedLanguages();







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

app.get('/', (req, res) =>{
    res.send('Hi')
})
















app.listen(port, ()=>{console.log(`server start at http://localhost:${port}`)})