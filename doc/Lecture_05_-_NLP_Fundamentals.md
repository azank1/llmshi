# Lecture 05 - NLP Fundamentals

**Source:** `Lecture 05+06_Lab 4/Lecture 05 - NLP Fundamentals/Lecture 05 - NLP Fundamentals.pptx`  
**Type:** pptx  
**Slides/Pages:** 30

---

## Slide 1

Lecture 05: NLP Fundamentals

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Large Language Models

2

---

## Slide 3

NLP is a branch of AI that,

Receives human language (spoken or written) as input.

Processes it to understand the meaning.

Acts upon it or responds.

NLP is a multidisciplinary field

It borrows concepts from AI, Computational Linguistics, and Cognitive Science among others.

What is Natural Language Processing (NLP)?

3

---

## Slide 4

Language helps preserve and propagate knowledge.

Across time, across space

Bandwidth of humans to generate, process and propagate knowledge is limited.

If computers can understand natural language it can greatly help advance human civilisation.

Why Natural Language Processing is important?

4

---

## Slide 5

NLP Applications

5

---

## Slide 6

68

6

Text Preprocessing

Text to Data and Viceversa

Information Retrieval and Document Ranking

Classification

Text to Text Generation

Topics & Keywords

Text Reasoning

Fake News & Hate Speech Detection

Chatbots

Knowledge bases, Entities & Relations

NLP Tasks

NLP Tasks

---

## Slide 7

To make computers understand human language, first we need to understand it ourselves.

She poured the water from the jug into the cup until it was full.

She poured the water from the jug into the cup until it was empty.

Human languages are complex.

Words only don’t convey the meaning.

How can we teach human language to computers?

7

---

## Slide 8

Denotation

Every word in natural languages has a Denotation and a Connotation

Connotation

Home: A place to live in

Childish:  Like a child

Plant: A manufacturing facility, Photosynthetic organisms, An action of putting into place

Home: Security, Family and Shelter

Childish:  Innocent,  stupid, immature

Plant: Colonies, conceal

Mostly used in Poetry and Literature

Mostly used in Formal Communication

8

---

## Slide 9

To make computers understand human language, first we need to understand it ourselves.

She poured the water from the jug into the cup until it was full.

She poured the water from the jug into the cup until it was empty.

Human languages are complex.

Words only don’t convey the meaning.

They have a very small bandwidth.

Cannot convey large amount of information in short amount of time.

Natural languages make use of compression.

Requires knowledge of listener and context to fill the gaps.

How can we teach human language to computers?

9

---

## Slide 10

Text Processing

Take raw input text, clean it, normalize it, and convert it into a form that is suitable for feature extraction.

Feature Extraction (word/document representation)

Extract and/or produce feature representations that are appropriate for the type of NLP task at hand and the type of model to be used.

Modelling

Design a model, fit its parameters to training data, use an optimization procedure, and then evaluate it to make predictions about unseen data.

There could be additional steps depending upon application

Pipeline of NLP consists of three main components

10

---

## Slide 11

Cleaning: Remove irrelevant items like HTML tags, symbols, non-alphabetic characters, excessive punctuations, and extra spaces.

“The Pakistan Cricket Team, led by Salman Agha, won the thrilling match 	against India by       5 wickets in the ICC T20 World Cup 2026!!!”

After Cleaning

“The Pakistan Cricket Team led by Salman Agha won the thrilling match 	against India by 5 wickets in the ICC T20 World Cup 2026”

Pre-processing Operations

11

---

## Slide 12

Normalisation: Convert all words to lowercase.

After Normalisation

“the pakistan cricket team led by salman agha won the thrilling match against 	india by 5 wickets in the icc t20 world cup 2026”

Tokenisation: Split the text into words, also known as tokens.

After Tokenisation

["the", "pakistan", "cricket", "team", "led", "by", ”salman", ”agha", "won", "the", 	"thrilling", "match", "against", "india", "by", "5", "wickets", "in", "the", "icc", 	“t20”, ”world", ”cup", "2026"]

Pre-processing Operations

12

---

## Slide 13

Stop Words Removal: Remove the most common words (a, an, the, etc.).

After Stop Words Removal

["pakistan", "cricket", "team", "led", ”salman", ”agha", "won", "thrilling", 	"match", "india", "5", "wickets", "icc", “t20”, ”world", ”cup", "2026"]

Stemming: Convert words into their canonical forms by removing suffixes (not always a proper dictionary word).

After Stemming

["pakistan", "cricket", "team", "led", ”salman", ”agha", "won", "thrill", "match", 	"india", "5", "wicket", "icc", “t20”, ”world", ”cup", "2026"]

Pre-processing Operations

13

---

## Slide 14

Lemmatisation: Convert words into meaningful root words.

After Lemmatisation

["pakistan", "cricket", "team", "lead", ”salman", ”agha", "win", "thrilling", 	"match", "india", "5", "wicket", "icc", “t20”, ”world", ”cup", "2026”]

Pre-processing Operations

14

---

## Slide 15

Parts of Speech Tagging: Assign grammatical roles to each word.

Pre-processing Operations

15

After Parts of Speech Tagging

pakistan  	Proper Noun (NNP)

cricket 	Noun (NN)

team 		Noun (NN)

lead 		Verb (VBD)

salman 	Proper Noun (NNP)

agha 		Proper Noun (NNP)

win 		Verb (VB)

thrilling 	Adjective (JJ)

---

## Slide 16

Named Entity Recognition: Identify real-world entities such as names, organizations, locations, dates, and numerical values

Pre-processing Operations

16

After Named Entity Recognition

Pakistan 		Country

Salman Agha	Person

India 			Country

ICC 			Organization

T20 World Cup	Event

2026			Date

---

## Slide 17

Text Processing

Take raw input text, clean it, normalize it, and convert it into a form that is suitable for feature extraction.

Feature Extraction (word/document representation)

Extract and/or produce feature representations that are appropriate for the type of NLP task at hand and the type of model to be used.

Modelling

Design a model, fit its parameters to training data, use an optimization procedure, and then evaluate it to make predictions about unseen data.

There could be additional steps depending upon application

Pipeline of NLP consists of three main components

17

---

## Slide 18

How do computers understand the meaning of a word?

By using WordNet: A thesaurus containing lists of synonyms and hypernyms.

https://wordnet.princeton.edu/

18

---

## Slide 19

WordNet

WordNet is an online lexical database in which English nouns, verbs, adjectves and adverbs are organized into sets of synonyms.

Each word represents a lexicalized concept. Semantic relations link the synonym sets (synsets)

WordNet contains more than 118,000 different word forms and more than 90,000 senses.

Approximately 17% of the words in WordNet are polysemous (have more than on sense); 40% have one or more synonyms (share at lease one sense in common with other words).

19

---

## Slide 20

Many applications including information retrieval, text classification, text summarization, machine translation, word sense disambiguation, and semantic similarity analysis.

Six broad semantic relations are presented in WordNet.

20

WordNet

---

## Slide 21

SentiWordNet

SentiWordNet is a lexical resource explicitly devised for supporting sentiment analysis and opinion mining applications.

SentiWordNet is the result of the automatic annotation of all the synsets of WordNet according to the notions of “positivity”, “negativity” and “objectivity”.

21

---

## Slide 22

WordNet is like a Swiss Army knife

Missing new meaning of words.

Wicked, Wizard, Ninja

Very difficult to keep up-to-date

Subjective

Therefore, incomplete

Requires manual labor to curate

What’s the purpose of AI, then?

Can’t compute accurate word similarity

No partial resemblance

Has only fixed synonym set

22

---

## Slide 23

Text Processing

Take raw input text, clean it, normalize it, and convert it into a form that is suitable for feature extraction.

Feature Extraction (word/document representation)

Extract and/or produce feature representations that are appropriate for the type of NLP task at hand and the type of model to be used.

Modelling

Design a model, fit its parameters to training data, use an optimization procedure, and then evaluate it to make predictions about unseen data.

There could be additional steps depending upon application

Pipeline of NLP consists of three main components

23

---

## Slide 24

How can we input Text to Neural Networks?

24

---

## Slide 25

Will Pakistan win the Match?

For prediction, the following features are provided:

x = [toss outcome, bat first/chase, Wins in last 5 matches, ground location]

How can we feed these features to the neural network?

25

---

## Slide 26

How to feed the features to the Neural Network?

Toss = [1,0]

Bat first/chase first = [1,0]

Wins in last 5 matches= [0 – 5]

Ground Loc = [Dubai, Qaddafi] ?

Computers only understand NUMBERS, not WORDS

26

---

## Slide 27

How to convert Words into Numbers?

Assign random values to the words.

I    live    in    Islamabad

34    52   12         98

Doesn’t work due to too much randomness and lots of computational requirements

27

---

## Slide 28

ASCII or Unicode characters which maps each character to a number.

Individual characters don’t carry much information/meaning.

Does not capture the meaning of a word and its relationship with other words.

L | I | S | T | E | N

76 | 73 | 83 | 84 | 69 | 78

How to convert Words into Numbers?

S | I | L | E | N | T

83 | 73 | 76 | 69 | 78 | 84

28

---

## Slide 29

One-hot Vector – A Simple Representation

A vector length is equal to the dictionary size (total number of words in the world)

Any vector has one non-zero element

cat

cats

dog

29

---

## Slide 30

Any Questions!

30

---
