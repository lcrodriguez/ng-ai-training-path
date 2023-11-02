# ng-ai-training-path

## Setup

Open the StackBlitz environment for quick setup.

https://stackblitz.com/edit/ng-ai-training-path

You will need to export the OpenAI key provided into the terminal in StackBlitz:

```
export OPENAI_API_KEY='yourkeygoeshere'
```

## Exercise 00: Prompting Training

Talk and discuss with your group and bring one use case you think can be solved with Open AI (LLM) and do a quick test inspection.

Read the PROMPTING GUIDE first to understand what can be achieved and GPT best practices that apply to any LLM provider.

- https://www.promptingguide.ai/es
- https://platform.openai.com/docs/guides/gpt-best-practices

You should be able to use the Open API service following the tutorials:

- [https://platform.openai.com/docs/quickstart](https://platform.openai.com/docs/guides/gpt)

## Exercise 01: Document Understanding

Using your previous knowdledge we need to extract all the taxes from the sample document in a digital format to be sent to a REST API service.

We will need also the invoice total and the taxes total to be included and for taxes that correspond to a state/province it should be included as well.

Please use prompting to extract the information as generic as possible.

## Exercise 02: Bot Building

Create your first chatbot application using langchain that will be able to respond on the gitlab 2023 pdf content file in the doc folder

TIP: IMPLEMENT A SIMPLE RAG SOLUTION WITH NODE:
https://js.langchain.com/docs/modules/chains/popular/vector_db_qa

TIP: LOAD FROM PDF:
https://js.langchain.com/docs/modules/data_connection/document_loaders/how_to/pdf

QUICKSTART:

- https://js.langchain.com/docs/get_started/quickstart

CHALLENGE:

- Try to use another vectorstore like FAISS from Meta

https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/faiss

## Exercise 03: Fine tune a LLAMA V2 model with your propietary documents

TBD

https://towardsdatascience.com/fine-tune-your-own-llama-2-model-in-a-colab-notebook-df9823a04a32
