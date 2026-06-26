---
title: LangChain for Developers — RAG, Chains, and Tool Calling
description: How to use LangChain with Node.js for retrieval-augmented generation, structured outputs, and tool-calling agents in Next.js apps.
date: 2026-07-03
slug: langchain-for-developers
image: /langchain.png
imageAlt: LangChain for developers — RAG, chains, and tool calling
published: true
---

# LangChain for Developers — RAG, Chains, and Tool Calling

LangChain is a framework for composing LLM applications — chains, agents, memory, and vector store integrations. It is not the only option (Vercel AI SDK, LlamaIndex, raw API calls all work), but it is the one I reach for when building multi-step AI workflows in TypeScript.

## Install

```bash
npm install langchain @langchain/openai @langchain/community
```

Set your API key:

```bash
OPENAI_API_KEY=sk-...
```

## Basic chain

A chain pipes prompt → model → output parser:

```ts
import { ChatOpenAI } from '@langchain/openai'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser } from '@langchain/core/output_parsers'

const model = new ChatOpenAI({ model: 'gpt-4o-mini', temperature: 0 })
const prompt = ChatPromptTemplate.fromMessages([
  ['system', 'You are a technical writer. Be concise.'],
  ['user', '{input}'],
])

const chain = prompt.pipe(model).pipe(new StringOutputParser())
const result = await chain.invoke({ input: 'Explain ISR in Next.js in 3 sentences.' })
```

## Retrieval-Augmented Generation (RAG)

RAG grounds LLM answers in your own documents — reducing hallucination on domain-specific questions.

### 1. Load documents

```ts
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { TextLoader } from 'langchain/document_loaders/fs/text'

const loader = new DirectoryLoader('./content/blog', {
  '.md': (path) => new TextLoader(path),
})
const docs = await loader.load()
```

### 2. Split into chunks

```ts
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 800,
  chunkOverlap: 100,
})
const chunks = await splitter.splitDocuments(docs)
```

### 3. Embed and store

```ts
import { OpenAIEmbeddings } from '@langchain/openai'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'

const vectorStore = await MemoryVectorStore.fromDocuments(
  chunks,
  new OpenAIEmbeddings()
)
const retriever = vectorStore.asRetriever({ k: 4 })
```

### 4. Query with context

```ts
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { createRetrievalChain } from 'langchain/chains/retrieval'

const combineDocsChain = await createStuffDocumentsChain({ llm: model, prompt })
const ragChain = await createRetrievalChain({
  retriever,
  combineDocsChain,
})

const answer = await ragChain.invoke({
  input: 'How does Arjun handle Payload CMS media uploads on Vercel?',
})
```

Use this pattern for internal docs search, portfolio Q&A bots, or CMS style guide assistants.

## Tool calling

Give the model functions it can invoke:

```ts
import { DynamicStructuredTool } from '@langchain/core/tools'
import { z } from 'zod'

const getProjectTool = new DynamicStructuredTool({
  name: 'get_project',
  description: 'Fetch a portfolio project by slug',
  schema: z.object({ slug: z.string() }),
  func: async ({ slug }) => {
    const project = await getProjectBySlug(slug)
    return JSON.stringify(project)
  },
})

const agent = createToolCallingAgent({ llm: model, tools: [getProjectTool], prompt })
```

The model decides when to call `get_project` based on the user's question.

## LangChain in Next.js

Run LangChain in **Route Handlers** or **Server Actions** — never expose API keys to the client:

```ts
// app/api/ask/route.ts
export async function POST(req: Request) {
  const { question } = await req.json()
  const answer = await ragChain.invoke({ input: question })
  return Response.json({ answer: answer.answer })
}
```

Add rate limiting and auth before exposing publicly.

## LangChain vs alternatives

| Tool | Best for |
|------|----------|
| LangChain | Complex multi-step chains, many integrations |
| Vercel AI SDK | Streaming UI in Next.js, simpler API |
| Raw OpenAI SDK | Full control, minimal abstraction |
| LangGraph | Stateful agents with cycles and branching |

I use LangChain when the workflow has 3+ steps. For a streaming chat widget, Vercel AI SDK is often enough.

## Pitfalls

- **Chunk size too large** — retrieval returns irrelevant context
- **No metadata filtering** — searching all docs when user asks about one project
- **Skipping evals** — test 20 real questions before shipping
- **Sync in serverless** — embedding 10k docs on every cold start; pre-build the vector index

---

**Related:** [AI Agents Guide](https://arjunvaradiyil.in/blog/ai-agents-practical-guide) · [CMS Architecture](https://arjunvaradiyil.in/blog/headless-cms-architecture)

**Connect:** [LinkedIn](https://www.linkedin.com/in/arjunvaradiyil) · [Contact](https://arjunvaradiyil.in/contact)
