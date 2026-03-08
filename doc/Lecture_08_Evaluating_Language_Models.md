# Lecture 08 Evaluating Language Models

**Source:** `Lecture 07+08_Lab 5/Lecture 08 Evaluating Language Models/Lecture 08 Evaluating Language Models.pptx`  
**Type:** pptx  
**Slides/Pages:** 33

---

## Slide 1

Lecture 08: Evaluating Language Models

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Large Language Models

---

## Slide 3

Evaluating ML Models

3

How do we analyze machine learning algorithms’ performance?

Confusion Matrix: a table layout of different outcomes of prediction and results of classification problem and helps visualize its outcomes

---

## Slide 4

4

Confusion Matrix

---

## Slide 5

5

Accuracy → proportion of correctly classified values

(TP + TN) / (TP + TN + FP + FN)

Precision → Model’s ability to classify positive values correctly

TP / (TP + FP)

Recall → Model’s ability to predict the positive values

TP / (TP + FN)

F1-Score → Harmonic mean of Recall and Precision

(2 * Precision * Recall ) / (Precision + Recall)

Precision, Recall, and F-Score

---

## Slide 6

Many Bias Measures: How do we

select what we care about?

6

Many Measures: How do we select what we care about?

---

## Slide 7

Evaluating LLM Aspects before Deployment

7

Answer Relevancy: Determines whether an LLM output is able to address the given input in an informative and concise manner.

Task Completion: Determines whether an LLM agent is able to complete the task it was set out to do.

Correctness: Determines whether an LLM output is factually correct based on some ground truth.

Hallucination: Determines whether an LLM output contains fake or made-up information.

Tool Correctness: Determines whether an LLM agent is able to call the correct tools for a given task.

---

## Slide 8

Evaluating LLM Aspects before Deployment

8

Contextual Relevancy: Determines whether the retriever in a RAG-based LLM system is able to extract the most relevant information for your LLM as context.

Responsible Metrics: Includes metrics such as bias and toxicity, which determines whether an LLM output contains (generally) harmful and offensive content.

Task-Specific Metrics: Includes metrics such as summarization, which usually contains a custom criteria depending on the use-case.

---

## Slide 9

LLM Evaluation Stages

9

---

## Slide 10

LLM Evaluation Metrics

10

---

## Slide 11

11

Pretraining Evaluation: Perplexity

A.k.a. “Rolling Loglikelihood”

(Exponentiated) average per-token negative loglikelihood

Directly measures language modeling → good for base LMs ; scales smoothly

Can be performed using any data distribution–no annotation or labeling required

---

## Slide 12

12

Limitations of Perplexity

Not as useful for instruction-tuned LMs.

Does not measure “real-world” freeform generation.

Doesn’t reflect semantic or factual correctness.

---

## Slide 13

13

Downstream Tasks Evaluation: NER

Precision: relevant items among retrieved → TP / (TP + FP).

Recall: relevant items that were retrieved → TP / (TP + FN).

F1‑score balances the two (harmonic mean).

Example use‑case: evaluating Named‑Entity Recognition outputs.

---

## Slide 14

14

Downstream Tasks Evaluation: Text Summarization

Recall‑Oriented Understudy for Gisting Evaluation (ROUGE)

Measures n‑gram overlap between system and reference summaries.

Variants: ROUGE‑1, ROUGE‑2, ROUGE‑L (Longest Common Subsequence).

Higher ROUGE ⇒ greater lexical similarity; standard in summarization benchmarks.

---

## Slide 15

15

Limitations of ROUGE

Surface‑level overlap ignores paraphrases & factual accuracy.

Sensitive to stop‑words and summary length – can be gamed.

Does not measure coherence or readability.

Weaker correlation with human judgment for abstractive summaries.

---

## Slide 16

16

Bilingual Evaluation Understudy (BLEU)

---

## Slide 17

17

Limitations of BLEU

Precision‑oriented; neglects recall and meaning equivalence.

Sentence‑level scores unstable; low human correlation.

Needs multiple references for robustness

Penalizes legitimate paraphrases and word re‑ordering

---

## Slide 18

18

Metric for Evaluation of Translation with Explicit Ordering (METEOR)

---

## Slide 19

19

Limitations of METEOR

Language dependent (use of synonyms)

Limited semantic understanding

Weak handling of paraphrasing

Computationally expensive

---

## Slide 20

20

Generalized Evaluation: BERTScore

Uses contextual embeddings from pretrained transformers (like BERT) to compare generated and reference texts.

Aligns tokens based on cosine similarity in embedding space

Captures semantic similarity rather than just surface-level n-gram matches.

---

## Slide 21

21

BERTScore: Advantages and Use Cases

Advantages:
- Context-aware: Leverages deep transformer embeddings.
- Better semantic alignment than n-gram metrics.
- Robust to synonyms and paraphrasing.
- Language-agnostic (with multilingual models).
Use Cases:
- Text summarization evaluation
- Dialogue systems (semantic match to expected responses)
- Machine translation
- Any open-ended generation task where exact matching fails

---

## Slide 22

22

BERTScore: Limitations

- Computationally expensive due to BERT inference for every evaluation.
- May overestimate quality in verbose or redundant outputs.
- Sensitive to the quality of the underlying BERT model.
- Does not account for factual accuracy.

- Requires reference text for comparison

---

## Slide 23

23

Downstream Tasks Evaluation: Code Generation

pass@1 measures the probability that a single generated sample (k = 1) passes all test cases (i.e., is a correct solution).

Simple and efficient to compute.

Reflects how well the model’s top (or single) prediction performs.

Sensitive to sampling randomness (especially when temperature ≠ 0).

Strict: if the generated output fails even one test case, it receives a score of zero.

cons@16 (consistency at 16) measures accuracy after generating 16 independent samples and selecting the majority answer (self-consistency voting).

The final answer is determined by the most frequently occurring output among the 16 samples.

The problem is counted as correct if the majority is correct

Captures robustness under stochastic decoding

Unlike pass@k, it does not reward a single lucky correct sample; it requires consistent correctness across samples.

---

## Slide 24

24

Answer Relevancy

Task Completion

Correctness

-    Hallucination

Tool Correctness

-    Contextual Relevancy

-    Responsible Metrics

Task-Specific Metrics

Evaluating LLM Aspects before Deployment

---

## Slide 25

25

LLM as a Judge

Human ratings – expensive, slow

Can LLM evaluate other LLM (typically evaluated is much larger model)

Pros:

Automated evaluation, flexible, complex, interpretable

Cons

Expensive (both API/computation costs and time)

No 100% confidence in the results, they need to be verified

---

## Slide 26

26

LLM as a Judge

Create a template grading task using LLM as a judge providing examples for grading scores

Create the first training set

Verify the quality of evaluation (by humans)

Iterate until getting a good agreement between LLM and human evaluation

Run your evaluation (either on the training set, or live in production or in other scenarios)

Advantage of LLM as a judge – can be run on live traffic

Grading LLM typically is more complex than the graded LLM (the cost of evaluation can be controlled by sampling)

---

## Slide 27

27

LLM as a Judge

The LLM as a judge may agree with human grading but it requires work on designing and tuning grading prompt templates.

Costs can be saved by using cheaper LLMs (but requires experimentation and tuning prompt templates and examples) or through sampling techniques.

The judge model can provide interpretation and explanation assuming the right template.

For alignment with human scores, important to measure interhuman alignment (this theme is frequently neglected in academic community, some tasks are inherently subjective.

---

## Slide 28

28

G‑Eval: LLM‑as‑a‑Judge Metric

---

## Slide 29

29

G‑Eval: LLM‑as‑a‑Judge Metric

G-Eval metric using GPT‑4‑style CoT prompts for scoring outputs.

Task‑agnostic & customisable (relevance, coherence, factuality, tone).

Closer alignment with human assessments than lexical metrics.

---

## Slide 30

30

G‑Eval: LLM‑as‑a‑Judge Metric

Read the system output

Compare it with a reference (if applicable)

Score it based on a rubric or evaluation criteria such as:

Fluency

Coherence

Relevance

Factual accuracy

Helpfulness or safety

It may produce numerical scores, textual justifications, or both.

---

## Slide 31

31

G‑Eval Prompting

---

## Slide 32

32

G‑Eval: Advantages and Limitations

Human-like judgment

Can rate on multiple dimensions: fluency, coherence, factuality, helpfulness, etc.

Prompts can be tailored to specific tasks (e.g., summarization vs. dialogue).

Works even when there’s no clear reference

Works across languages and domains

Can provide textual justifications for scores

Need careful prompting

May induce biases from Judge LLM

Computationally expensive

---

## Slide 33

THANK YOU!

---
