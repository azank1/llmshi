# Lecture 09 RNN and LSTM

**Source:** `Lecture 09_Lab 6/Lecture 09 RNN and LSTM/Lecture 09 RNN and LSTM.pptx`  
**Type:** pptx  
**Slides/Pages:** 40

---

## Slide 1

Lecture 09: RNN and LSTM

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Large Language Models

2

---

## Slide 3

Input x = One-hot encoding

Output y = Probability Distribution

3

Word2Vec: A Simple Overview

---

## Slide 4

My

(Word

Embedding)

favorite

(Word

Embedding)

4

Next Word Prediction

---

## Slide 5

favorite

(Word

Embedding)

team

(Word

Embedding)

5

Next Word Prediction

---

## Slide 6

team

(Word

Embedding)

is

(Word

Embedding)

6

Next Word Prediction

---

## Slide 7

My favorite team

(Word

Embedding)

???

???

7

Next Word Prediction

---

## Slide 8

Simple Recurrent Network (SRN)

8

8

Initially developed by Jeff Elman (“Finding structure in time,” 1990).

Additional input to hidden layer is the state of the hidden layer in the previous time step.

http://colah.github.io/posts/2015-08-Understanding-LSTMs/

---

## Slide 9

RNN Computational Graph over time

9

9

Reuse the same weight matrices at every time step

---

## Slide 10

RNN State Update and Output

10

10

---

## Slide 11

Recurrent Neural Network

11

11

---

## Slide 12

Sequence Models

12

---

## Slide 13

RNN Computational Graph over time

13

---

## Slide 14

RNN Back Propagation Through Time

14

---

## Slide 15

Standard RNN Gradient Flow

15

---

## Slide 16

Limitations of RNN

16

16

Vanishing/Exploding Gradient problem

Long Term dependencies

---

## Slide 17

Long Distance Dependencies

17

17

It is very difficult to train RRNs to retain information over many time steps

This make is very difficult to learn RRNs that handle long-distance dependencies, such as subject-verb agreement.

---

## Slide 18

Long Distance Dependencies

18

18

---

## Slide 19

Long Short-Term Memory

19

19

LSTM networks, add additional gating units in each memory cell.

Forget gate

Store gate

Update gate

Output gate

Prevents vanishing/exploding gradient problem and allows network to retain state information over longer periods of time.

---

## Slide 20

20

Standard RNN

---

## Slide 21

Long Short-Term Memory (LSTM)

21

---

## Slide 22

LSTM Network Architecture

22

---

## Slide 23

Long Short-Term Memory (LSTM)

23

---

## Slide 24

Long Short-Term Memory (LSTM)

24

---

## Slide 25

Long Short-Term Memory (LSTM)

25

---

## Slide 26

Forget Gate

Forget gate computes a 0-1 value using a logistic sigmoid output function from the input, xt, and the current previous state, ht-1:

Multiplicatively combined with cell state, "forgetting" information where the gate outputs something close to 0.

26

---

## Slide 27

Long Short-Term Memory (LSTM)

27

---

## Slide 28

Store/Input Gate

First, determine which entries in the cell state to update by computing 0-1 sigmoid output.

Then determine what amount to add/subtract from these entries by computing a tanh output (valued –1 to 1) function of the input and hidden state.

28

---

## Slide 29

Long Short-Term Memory (LSTM)

29

---

## Slide 30

Cell State

Maintains a vector Ct that is the same dimensionality as the hidden state, ht

Information can be added or deleted from this state vector via the forget and input gates.

30

---

## Slide 31

Cell state is updated by using component-wise vector multiply to "forget" and vector addition to "input" new information.

Updating the Cell State

31

---

## Slide 32

Cell State Example

Want to remember person & number of a subject noun so that it can be checked to agree with the person & number of verb when it is eventually encountered.

Forget gate will remove existing information of a prior subject when a new one is encountered.

Input gate "adds" in the information for the new subject.

32

---

## Slide 33

Long Short-Term Memory (LSTM)

33

---

## Slide 34

Output Gate

Hidden state is updated based on a "filtered" version of the cell state, scaled to –1 to 1 using tanh.

Output gate computes a sigmoid function of the input and current hidden state to determine which elements of the cell state to "output".

34

---

## Slide 35

Overall Network Architecture

35

---

## Slide 36

Overall Network Architecture

36

Single or multilayer networks can compute LSTM inputs from problem inputs and problem outputs from LSTM outputs.

Ot

e.g. a word as a “one hot” vector

e.g. a word “embedding” with

reduced dimensionality

e.g. a POS tag as a “one hot” vector

---

## Slide 37

LSTM Gradient Flow

37

---

## Slide 38

LSTM Training

38

Trainable with backprop derivatives such as:

Stochastic gradient descent (randomize order of examples in each epoch) with momentum (bias weight changes to continue in same direction as last update).

ADAM optimizer (Kingma & Ma, 2015)

Each cell has many parameters (Wf, Wi, WC, Wo)

Generally requires lots of training data.

Requires lots of compute time that exploits GPU clusters.

---

## Slide 39

General Problems Solved with LSTMs

39

Sequence labeling

Train with supervised output at each time step computed using a single or multilayer network that maps the hidden state (ht) to an output vector (Ot).

Language modeling

Train to predict next input (Ot =It+1)

Sequence (e.g. text) classification

Train a single or multilayer network that maps the final hidden state (hn) to an output vector (O).

---

## Slide 40

Any Questions!

40

---
