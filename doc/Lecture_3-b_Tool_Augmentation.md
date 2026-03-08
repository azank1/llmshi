# Lecture 3-b Tool Augmentation

**Source:** `Lecture 03_Lab 2/Lecture 3b-Tool Augmentation + Function Calling/Lecture 3-b Tool Augmentation.pptx`  
**Type:** pptx  
**Slides/Pages:** 22

---

## Slide 1

1

Lecture 3-b: Tool Augmentation + Function Calling

Large Language Models

Dr. Momina Moetesum

---

## Slide 2

Large Language Models

2

---

## Slide 3

Incorporating Tools during Fine-tuning (Tool Augmentation)

Teaching LLMs to Use APIs (Function Calling)

Agenda

3

---

## Slide 4

Tools Augmentation to Overcome Limitations ofLLMs

Inability to access up-to-date information on recent events

4

---

## Slide 5

Toolformer*

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

5

---

## Slide 6

Toolformer*

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

Toolformer autonomously decides

which APIs to call

when to call them

what arguments to pass

how to best incorporate the results into future token prediction

6

---

## Slide 7

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

Toolformer*

7

---

## Slide 8

Toolformer*

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

8

---

## Slide 9

Toolformer*

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

Image credits: https://neurips.cc/media/neurips-2023/Slides/71288.pdf

9

---

## Slide 10

Toolformer*

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

10

---

## Slide 11

Toolformer*

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

11

---

## Slide 12

*Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al., 2023

Toolformer*

12

---

## Slide 13

Incorporating Tools during Fine-tuning (Tool Augmentation)

Teaching LLMs to Use APIs (Function Calling)

Agenda

13

---

## Slide 14

Motivation

Let's say you are tasked to build a chatbot for NUST students using LLMs to provide an easier access to Qalam.

The goal is to add a conversational interface that supports

query your attendance for a given course

query your marks for a given course

query academic calendar

pay fees

How would you build such a chatbot?

14

---

## Slide 15

What is Function Calling?

15

---

## Slide 16

What is Function Calling?

1. User enters a query: “What is the

status of my fee payment?

16

---

## Slide 17

2.	Model identifies the function and its arguments

tool_calls=[ FunctionCall(name='payment_status', arguments={"transaction_id": "T1001"}) ]

What is Function Calling?

17

---

## Slide 18

3. User/Application executes the function to obtain tool results

Function Call Output:

{"status": "Paid"}

What is Function Calling?

18

---

## Slide 19

4. Model uses the results to generate the final answer

Function Call Output:

{"status": "Paid"}

The status of your fee payment for Spring 2025 semester with Challan ID SE10421 is "Paid". Is there anything else I can assist you with?

What is Function Calling?

19

---

## Slide 20

User specifies tools and enters a query

Model identifies the function and its arguments

User/Application executes the function to obtain tool results

Model uses the results to generate the final answer

What is Function Calling?

20

---

## Slide 21

What tools really are in development?

Tools extend an LLM’s abilities by accessing External APIs or mimicking human interactions.

Tools should have standardized, reusable, and well-documented definitions to enable flexibility and prevent redundancy.

Agents generally rely on three types of tools: Data, Action, and Orchestration.

Data tools: Help LLM’s retrieve necessary information (e.g., query databases, search web).

Action tools: Allow LLM’s to perform operations(e.g., updating records, sending messages).

Orchestration tools: Enable LLM’s to coordinate or delegate tasks to other LLM’s(e.g., refund agent, research agent).

21

---

## Slide 22

22

Thank you!

---
