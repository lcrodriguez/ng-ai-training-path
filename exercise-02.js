/*
 * You can run this program from the terminal below with:
 *    node exercise-02
 */

import { OpenAI } from 'langchain/llms/openai';

const llm = new OpenAI();

// HELPERS:
// https://js.langchain.com/docs/modules/data_connection/document_loaders/how_to/pdf
// https://js.langchain.com/docs/modules/chains/popular/vector_db_qa
console.info('FINISHED!!!');
