# Lecture 10 Seq2Seq Models

**Source:** `Lecture 10_Lab 07/Lecture 10 Seq2Seq Models/Lecture 10 Seq2Seq Models.pptx`  
**Type:** pptx  
**Slides/Pages:** 20

---

## Slide 1

Lecture 10: Sequence to Sequence Models

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

2

Sequence Modeling Scenarios - Revisit

Word2Vec

Image-to-Text

Sentiment Classification

Machine Translation

---

## Slide 3

3

Seq2Seq Modeling Applications

Dialogue / ChatGPT

Summarisation

Code Generation

Language Translation

---

## Slide 4

4

Language Translation

I am going to the central train station.

میں مرکزی ٹرین اسٹیشن جا رہا ہوں۔

---

## Slide 5

5

Language Translation

---

## Slide 6

6

Sequential inputs and sequential outputs

---

## Slide 7

Encoder

(Word embeddings)

Context Vector

---

## Slide 8

8

Context Vector

The decoder is used in autoregressive mode during inference.

I         am    going      to           the        central   train    station <END>

(Word embeddings)

<START>

I          am       going      to         the    central     train   station

Decoder

---

## Slide 9

9

A type of conditional language modeling

---

## Slide 10

How to train an LSTM-based Language Model?

Get a parallel corpus.

Get a seq2seq model.

Train it end-to-end.

10

---

## Slide 11

Greedy Decoding

11

---

## Slide 12

12

Greedy Decoding

---

## Slide 13

13

Beam Search Decoding

---

## Slide 14

14

For 𝑘 = 2, and an example target sentence “He hit me with a stick”.

Beam Search Decoding – An Example

---

## Slide 15

15

Beam Search Decoding – Suitable Hypothesis

---

## Slide 16

16

Language translation has achieved a lot, but many challenges remain.

Out of vocabulary words.

Domain mismatch.

Maintaining wider context.

Low-resource language pairs.

Language Translation – Challenges

---

## Slide 17

17

The whole input sentence is encoded here.

Limitation of Classical Seq2Seq Models

Context Vector

How can we solve the bottleneck problem?

---

## Slide 18

18

Attention helps decoder focus on relevant parts in the source sentence.

It resolves information bottleneck problem.

Instead of relying on a single vector to capture the whole source sentence, now decoder has two vectors for guidance.

It also helps with vanishing gradient.

Direct connections between encoder and decoder are helpful especially in longer sentences.

Attention may provide some interpretability.

Analysis of attention output can help understand what the decoder was fixating at while predicting a certain target word.

Soft alignment is achieved for free without even explicitly training for it.

Attention is all you need!

---

## Slide 19

19

<START>

Use this attention distribution to calculate weighted sum of encoder activations.

Attention Distribution

Attention is all you need!

---

## Slide 20

20

Thank you!

---
