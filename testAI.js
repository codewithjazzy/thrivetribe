require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
app.use(express.json());

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/getResponse', async (req, res) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{"role":'user', "content":'Say hello in 5 languages'}],
        max_tokens: 100,
    })
    console.log(response.choices[0].message.content)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})