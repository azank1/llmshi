// ═══ Week/Lecture data for the entire course ═══
const WEEKS = [
  {
    id: 'w1', num: 'Week 1', title: 'Introduction to LLMs & AI Foundations',
    desc: 'AI overview, GenAI vs Traditional AI, LLM landscape, ChatGPT architecture, prompt basics',
    lectures: ['L01 — Introduction to LLMs (39 slides)'],
    labs: ['Lab 1 — EasyVQA (ResNet + SBERT)'],
    page: 'week1.html'
  },
  {
    id: 'w2', num: 'Week 2', title: 'Prompt Engineering & Prompt Injection',
    desc: 'Crafting effective prompts, zero/few-shot, chain-of-thought, jailbreaking, guardrails',
    lectures: ['L02 — Prompt Engineering & Injection (29 slides)'],
    labs: ['Lab 2 — Prompt Engineering & Guardrails'],
    page: 'week2.html'
  },
  {
    id: 'w3', num: 'Week 3', title: 'Retrieval Augmented Generation (RAG)',
    desc: 'Vector DBs, ANN search, IVF, product quantization, RAG pipelines, training RAGs',
    lectures: ['L03 — RAG (33 slides)', 'L3b — Tool Augmentation (22 slides)'],
    labs: ['Lab 3 — RAG Implementation'],
    page: 'week3.html'
  },
  {
    id: 'w4', num: 'Week 4', title: 'Agentic Workflows',
    desc: 'AI agents, multi-agent systems, HuggingGPT, orchestration, MCP, A2A, LangGraph',
    lectures: ['L04 — Agentic Workflows (36 slides)'],
    labs: ['Lab 4 — Building Autonomous Agents'],
    page: 'week4.html'
  },
  {
    id: 'w5', num: 'Week 5', title: 'NLP Fundamentals',
    desc: 'Text preprocessing, tokenization, stemming, BoW, one-hot encoding, WordNet, feature extraction',
    lectures: ['L05 — NLP Fundamentals (30 slides)'],
    labs: [],
    page: 'week5.html'
  },
  {
    id: 'w6', num: 'Week 6', title: 'Probabilistic Language Modeling & N-grams',
    desc: 'Probability theory, Shannon model, Markov process, n-gram models, smoothing, perplexity',
    lectures: ['L06 — Probabilistic Language Modeling (24 slides)'],
    labs: ['Lab 6 — N-gram Models'],
    page: 'week6.html'
  },
  {
    id: 'w7', num: 'Week 7', title: 'Word2Vec',
    desc: 'Skip-gram, CBOW, negative sampling, word embeddings, training objective, analogies',
    lectures: ['L07 — Word2Vec (19 slides)'],
    labs: ['Lab 7 — Word2Vec & Co-occurrence Matrices'],
    page: 'week7.html'
  },
  {
    id: 'w8', num: 'Week 8', title: 'Evaluating Language Models',
    desc: 'Confusion matrix, perplexity, ROUGE, BLEU, METEOR, BERTScore, G-Eval, LLM-as-Judge',
    lectures: ['L08 — Evaluating LMs (33 slides)'],
    labs: ['Lab 5 — Evaluation Tasks'],
    page: 'week8.html'
  },
  {
    id: 'w9', num: 'Week 9', title: 'RNN and LSTM',
    desc: 'Simple RNN, BPTT, vanishing gradients, LSTM gates (forget/input/output), cell state',
    lectures: ['L09 — RNN & LSTM (40 slides)'],
    labs: [],
    page: 'week9.html'
  },
  {
    id: 'w10', num: 'Week 10', title: 'Seq2Seq Models & Attention',
    desc: 'Encoder-decoder, context vector bottleneck, greedy/beam decoding, attention mechanism',
    lectures: ['L10 — Seq2Seq Models (20 slides)'],
    labs: [],
    page: 'week10.html'
  }
];
