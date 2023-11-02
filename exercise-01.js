/*
 * You can run this program from the terminal below with:
 *    node exercise-00
 *
 */

import { OpenAI } from 'openai';

const openai = new OpenAI();

const context = `Tu eres un experto en cruceros.`;
const question = `Hola! Que crucero me recomiendas en Europa?`;

/*
 * READ DOC: https://platform.openai.com/docs/quickstart/step-3-sending-your-first-api-request
 */ 
const response = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo-16k',
  messages: [
    {
      role: 'system',
      content: context,
    },
    {
      role: 'user',
      content: question,
    },
  ],
  temperature: 0,
  max_tokens: 8040,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(`Agent Context: ${context}\n\n`);
console.log(`User Prompt: ${question}\n\n`);

console.log(`Agent Responds:\n\n`);
console.log(response.choices[0].message.content);
