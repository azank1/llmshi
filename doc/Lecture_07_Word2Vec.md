# Lecture 07 Word2Vec

**Source:** `Lecture 07+08_Lab 5/Lecture 07 Word2Vec/Lecture 07 Word2Vec.pptx`  
**Type:** pptx  
**Slides/Pages:** 19

---

## Slide 1

Lecture 07: Word2Vec

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Prediction-based Approach for Word Embeddings

2

---

## Slide 3

Word2Vec

3

Word2Vec is a combination of two techniques

Skip-gram Model

CBoW (Continuous Bag of Words)

Both of these map word(s) to word(s)

In each case, Neural Network learns the weights which is the vector representation of the words

---

## Slide 4

Input x = One-hot encoding

Output y = One-hot encoding

For training, we have samples like (input word, output word)

4

Word2Vec: A Simple Overview

---

## Slide 5

Input x = One-hot encoding

Output y = Probability Distribution

For evaluation purposes,

5

Word2Vec: A Simple Overview

---

## Slide 6

Word2Vec using Skip-Gram Architecture

6

---

## Slide 7

My favorite PSL team is Lahore Qalandars.

Target Word

Context word

Window size = 2

Skip-grams predict the nearby words

when the target word is provided

7

Skip-Gram Overview

---

## Slide 8

(My, favorite)(My, PSL)

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

(favorite, My)(favorite, PSL)(favorite, team)

(team, favorite)(team, PSL)

8

Skip-Gram: Training Samples

---

## Slide 9

Skip-Gram: Implementation Steps

9

Step 1: Build a vocabulary of unique words from the training documents (e.g. V=10,000 unique words)

Step 2: Generate the training data (as explained in the previous slide)

Step 3: Represent the words as one-hot-encoded representation (e.g. […0, 0, 1, 0, 0, 0…])

Step 4: Feed the one-hot-encoded representation of the training word pairs to the model

---

## Slide 10

10

---

## Slide 11

Word2Vec using CBoW Architecture

11

---

## Slide 12

My favorite PSL team is Lahore Qalandars.

Target Word

Context word

Window size = 2

12

CBoW predicts target word given a bag-of-neighbours

CBOW Overview

---

## Slide 13

13

(favorite, My)(PSL, My)

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

My | favorite | PSL | team | is | Lahore | Qalander

(My, favorite)(PSL, favorite)(team, favorite)

CBOW: Training Samples

---

## Slide 14

My

favorite

team

is

PSL

team

favorite

is

Lahore

PSL

8 | 2 | 1 | 9

6 | 5 | 4 | 0

7 | 1 | 6 | 2

1 | 3 | 5 | 8

0 | 4 | 9 | 1

Embedding Weight Matrix!!

Target Word Embedding

Context Word Embedding

Embedding Weight Matrix can be obtained in three different ways:

Averaging target and context word embeddings

Concatenating target and context word embeddings

Choosing either target or context word embeddings.

---

## Slide 15

What is the word embedding of the word Team?

15

---

## Slide 16

16

Word2Vec: Training Objective and Loss

---

## Slide 17

17

Word2Vec: Negative Sampling

---

## Slide 18

18

Word2Vec Summary

Word2Vec is a technique for efficiently representing words as dense vectors in a continuous vector space.

Each word is mapped to a high-dimensional vector, capturing semantic relationships and contextual information.

Words with similar meanings have vectors closer together in the vector space.

---

## Slide 19

Thank you!

 19

---
