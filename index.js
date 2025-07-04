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
        input: `Enhance the following text, only respond with the enhanced text. If it's empty, respond empty.: ${req.body}`,
    });
  res.send(response.output_text);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
