# Lecture 06 Probabilistic Language Modeling

**Source:** `Lecture 05+06_Lab 4/Lecture 06 Probabilistic Language Modeling/Lecture 06 Probabilistic Language Modeling.pptx`  
**Type:** pptx  
**Slides/Pages:** 24

---

## Slide 1

Lecture 06: Probabilistic Language Modeling

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Large Language Models

2

---

## Slide 3

Search | Predicting the next word!

3

---

## Slide 4

4

---

## Slide 5

5

Probability of a Word

---

## Slide 6

A Quick Review of Probability Theory

6

6

---

## Slide 7

Sum Rule

Product Rule

7

A Quick Review of Probability Theory

---

## Slide 8

The Rules of Probability

Sum Rule

Product Rule

8

---

## Slide 9

Bayes’ Theorem

posterior  likelihood × prior

9

---

## Slide 10

Shannon’s Probabilistic Language Generation Model

Proposed by Claude Shannon in 1948

Treats language as a stochastic (probabilistic) process

Next word/letter depends on previous context

Markov assumptions

Forms the basis of modern NLP and AI-driven text generation

10

---

## Slide 11

Markov Process

11

---

## Slide 12

Shannon’s Generated Language

Zero-order Model (Random Letters with Equal Probability)

Each letter is chosen randomly and independently with equal probability.

Example output: XFOML RXKXRJFFUJ ZLPWCFWKCYJ FFJEY

First-order Model (Random Letters Based on Individual Letter Frequencies)

Letters appear with probabilities based on real-world frequency (e.g., ‘E’ is more common than ‘Z’ in English).

Example: OCRO HLI RGWR NWIELWIS EU LL NBNESEBYA

Second-order Model (Markov Model with Letter Pairs)

The probability of a letter depends on the previous letter.

Example: ON IE ANTSOUTINYS ARE T INCTORE ST BE S DEAMY .

12

---

## Slide 13

Shannon’s Word Models

First-order approximation:

Representing and speedily is an good apt or come can different natural here he the a in came the to of to expert gray come to furnishes the line message had be these

Second-order approximation:

The head and in frontal attack on an english writer that the character of this point is therefore another method for the letters that the time of who ever told the problem for an unexpected

13

---

## Slide 14

N-grams

Shannon’s probabilistic language model inspired the development of N-gram models by modeling word sequences probabilistically.

Some sequences (words/chars) are more likely than others

Given sequence, can guess most likely next

N-gram models are a fundamental approach in NLP for predicting the next word based on the previous words

Speech recognition

Spelling correction

Augmentative communication

Language Identification

Information Retrieval

14

---

## Slide 15

What is an N-Gram?

An N-Gram is a sequence of N consecutive words (or characters) from a given text.

Types of N-Grams:

1. Unigram (N=1) → Single words

2. Bigram (N=2) → Two-word sequences

3. Trigram (N=3) → Three-word sequences

4. Higher-order N-grams (N > 3)

15

---

## Slide 16

Types of N-Grams:

Example: “Pakistan won the match”

Unigrams: [“Pakistan”, “won”, “the”, “match”]

Bigrams: [“Pakistan won”, “won the”, “the match”]

Trigrams: [“Pakistan won the”, “won the match”]

Example for 4-gram: [“Pakistan won the match”]

What is an N-Gram?

16

---

## Slide 17

Probability in N-Gram Models

17

---

## Slide 18

Probability in N-Gram Models

18

---

## Slide 19

Estimating Uni-gram Probabilities

19

---

## Slide 20

Estimating Bi-gram Probabilities

20

---

## Slide 21

Corpus Counts

Estimate probabilities by counts in large collections of text/speech

Issues:

Wordforms (surface) vs lemma (root)

Case? Punctuation? Disfluency?

Type (distinct words) vs Token (total)

Corpus sensitivity

Shakespeare vs Wall Street Journal

Very unnatural

21

---

## Slide 22

Sparse Data Issues

22

---

## Slide 23

Smoothing out Zeroes

23

---

## Slide 24

Any Questions!

24

---
