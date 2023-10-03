/*
 * You can run this program from the terminal below with:
 *    node langchain
 */

// GOAL: Create your first chatbot application using langchain that will be able to respond on the gitlab dev.pdf content file in the doc folder
// TIP: Use a vector store to search for the data based on the question.

// https://js.langchain.com/docs/get_started/quickstart
// https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/faiss

import { OpenAI } from 'langchain/llms/openai';

const llm = new OpenAI({
  openAIApiKey: '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',
});

console.info('FINISHED!!!');
