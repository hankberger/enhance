import OpenAI from "openai";
const client = new OpenAI();
import express from 'express';
const app = express();
const port = 3000;

app.use(express.text());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', async (req, res) => {
  console.log('Received a POST request with the following content:');
  console.log(req.body);
    const response = await client.responses.create({
        model: "gpt-4.1",
        input: `You are a professional writing assistant trained to improve clarity, tone, and grammar. Enhance the following text to make it more polished, professional, and fluent. If the input is empty or contains only whitespace, respond with an empty string. Output only the enhanced text — no explanations or comments. Here is the text to enhance: ${req.body}`,
    });
  res.send(response.output_text);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
