# Lecture 03 Retrieval Augmented Generation

**Source:** `Lecture 03_Lab 2/Lecture 03 Retrieval Augmented Generation/Lecture 03 Retrieval Augmented Generation.pptx`  
**Type:** pptx  
**Slides/Pages:** 33

---

## Slide 1

Lecture 03: Retrieval Augmented Generation

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Large Language Models

---

## Slide 3

Knowledgeable and versatile Language models

3

---

## Slide 4

Large Language Models at Inference Time

4

No explicit access to pre-training corpus at inference time!

---

## Slide 5

Problems in LMs: Hallucinations

5

---

## Slide 6

Problems in LMs: Hallucinations

6

---

## Slide 7

Problems in LMs: Lack of Attributions

7

Explain who Faisal Shafait is and include some of his famous papers

Language Model

His most famous paper is, "ICDAR 2011 Document Image Binarization Contest (DIBCO 2011)"

---

## Slide 8

Problems in LMs: Cost of Training

8

---

## Slide 9

Problems in LMs: Copyright and Privacy

9

Dodge et al., Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus. EMNLP 2021.

Copy-right protected data

---

## Slide 10

Problems in LMs: Long-Tail Information

10

LLMs capture knowledge about the world around us

LLM’s ability to answer questions relates to how many related documents seen during pretraining.

Log-linear relationship between model parameters and QA accuracy. However, this requires drastically scaling up the model.

Difficult to capture long-tail information.

How to capture long-tail information?

---

## Slide 11

Retrieval Augmented Generation (RAG)

11

GOAL: Identify a small subset of documents in the datastore that are similar to the query.

---

## Slide 12

Retrieval

12

Traditional databases:

Store scalar data in rows and columns.

Usually query for rows where the value matches exactly with our query.

Deep learning models make use of vector embedding that contain semantic information

Traditional Scalar Databases can’t keep up with data complexity.

SOLUTION?

We need a specialised database to handle this data type.

---

## Slide 13

Vector Databases

13

Store vector embeddings for fast retrieval and similarity search

Offer optimised storage and querying capabilities

Have capabilities of traditional databases

---

## Slide 14

How Does a Vector Database Work?

14

Use similarity metric to find a vector most similar to our query

A combination of different algorithms used that all participate in Approximate Nearest Neighbor Search (ANN).

Optimize search process through hashing, quantization and graph-based search.

Provides approximate results

Trade off between speed and accuracy

---

## Slide 15

Approximate Nearest Neighbor

15

Nearest neighbor (kNN) algorithm can find the most similar passages with respect to query, but

Computational Complexity: Parameters	N = number of document vectors

d = embedding dimension (e.g. 768 for BERT)

k = number of neighbors retrieved

How to make this faster?

Distance computation

Top-k selection

Total per query

Memory

O(N · d)

O(N)

O(N · d)

O(N · d)

---

## Slide 16

Quantization

16

Quantization = mapping a continuous space to a finite discrete set

Pros

Reduce memory

Reduce computation

Improve cache efficiency

Cons

Introduces quantization error

Precision - efficiency trade-off

---

## Slide 17

Vector Quantization

17

Vector Quantization = maps a given vector to one centroid

Centroids calculated by k-means clustering

K-means is the backbone of almost all approximate nearest neighbor techniques

All centroids are stored as a global codebook

Each vector is stored as an index to the codebook

Codebook size grows exponentially with distance

---

## Slide 18

IVF (InVerted File index) Method

18

Clustering based ANN method: search only in the most relevant clusters

Run k-means to get m centroids

Assign each vector to nearest centroid

Store vectors in inverted lists, such that the storage has

Centroids

Lists of vector IDs per centroid

At query time

Compute distance to all centroids

Select top c clusters

Search vectors only inside those clusters

Return top-K

Computational Complexity?

---

## Slide 19

K-Means Computational Complexity

19

---

## Slide 20

Product Quantization

20

---

## Slide 21

Product Quantization

21

---

## Slide 22

Product Quantization: Lookup Tables

22

---

## Slide 23

A Typical IVF + PQ RAG Algorithm

23

Query embedding q

Find nearest IVF centroids (coarse search)

Collect candidate vectors from inverted lists

Rank candidates using PQ + lookup tables (approximate)

Select top R candidates (e.g., R = 100 to 1,000)

Re-rank top R using exact vectors

---

## Slide 24

A Typical Vector DB Pipeline

24

---

## Slide 25

Training RAGs

25

The database is too large to update the index during training and can be computationally expensive.

Training language models can be expensive

Back-propagation

---

## Slide 26

Training RAGs: Independent Training

26

Retrieval and language models are often trained independently

Training Language models

Training retrieval models

Types of retrieval models include:

Sparse retrieval models (TF-IDF & BM25)

Dense retrieval models (DPR & PineCone)

---

## Slide 27

Training RAGs

27

Independent training

Work with off-the-shelf models (no extra training required)

Each part can be improved independently

LMs are not trained to leverage retrieval

Retrieval models are not optimized for LM tasks/domains

Sequential Training

Joint Training w/ asynchronous index update

Joint Training w/ in-batch approximation

---

## Slide 28

RAG Benefits

28

---

## Slide 29

RAG Benefits: Copyrighted / Real-Time Information

29

---

## Slide 30

Multi-Modal RAG

30

Retriever

Query

LM

---

## Slide 31

Application Areas of RAG

31

---

## Slide 32

When to use RAG

32

---

## Slide 33

Any Questions?

33

---
