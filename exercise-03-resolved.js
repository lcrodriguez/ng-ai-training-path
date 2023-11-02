/*
 * You can run this program from the terminal below with:
 *    node exercise-03
 */

import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const llm = new OpenAI();

// LOAD FROM PDF:
// https://js.langchain.com/docs/modules/data_connection/document_loaders/how_to/pdf
const loader = new PDFLoader("./doc/gitlab 2023.pdf");
const docs = await loader.load();

// IMPLEMENT A SIMPLE RAG SOLUTION WITH NODE:
// https://js.langchain.com/docs/modules/chains/popular/chat_vector_db
const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
const retriever = vectorStore.asRetriever();

const chain = RetrievalQAChain.fromLLM(llm, retriever);

const res = await chain.call({
  query: "Provide a summary about AI in the software development lifecycle",
});
console.log({ res });
