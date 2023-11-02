/*
 * You can run this program from the terminal below with:
 *    node exercise-02
 */

import { OpenAI } from 'langchain/llms/openai';

const llm = new OpenAI();

// IMPLEMENT A SIMPLE RAG SOLUTION WITH NODE:
// https://js.langchain.com/docs/modules/chains/popular/chat_vector_db 

// LOAD FROM PDF:
// https://js.langchain.com/docs/modules/data_connection/document_loaders/how_to/pdf

console.info('FINISHED!!!');
