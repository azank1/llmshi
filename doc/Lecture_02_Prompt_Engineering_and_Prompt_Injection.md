# Lecture 02 Prompt Engineering and Prompt Injection

**Source:** `Lecture 01+02_Lab 1/Lecture 02 - Prompt Engineering and Prompt Injection/Lecture 02 Prompt Engineering and Prompt Injection.pptx`  
**Type:** pptx  
**Slides/Pages:** 29

---

## Slide 1

Lecture 02: Prompt Engineering and Prompt Injection

Large Language Models

Prof. Dr. Faisal Shafait

---

## Slide 2

Large Language Models

---

## Slide 3

What is a Prompt?

For us, a "prompt" is "text that goes into an LM".

To "prompt it" to pay “attention” to execute a specific task

"Prompt engineering" is the art of designing that text.

Helps achieve better performance on the task

3

---

## Slide 4

Prompts are Magic Spells

For Pretrained Models | For Instruction-tuned  Models | For Agent Simulations

Prompt is a Portal | Prompt is a Wish | Prompt Creates a Persona

4

---

## Slide 5

With instruction, you can “literally just ask”.

5

Prompts as Wishes

---

## Slide 6

Prompts as Agents

6

---

## Slide 7

Two Paths to Prompting

The choice between conversational and systematic prompting largely depends on the context.

Conversational prompting is better for exploratory or casual interactions.

While systematic prompting is suited for specific, goal driven tasks.

7

---

## Slide 8

Good Prompting: Write Clear Instructions

These models can’t read your mind.

If outputs are too long, ask for brief replies.

If outputs are too simple, ask for expert-level writing.

If you dislike the format, demonstrate the format you’d like to see.

The less the model has to guess at what you want, the more likely you’ll get it.

Tactics

Include details in your query to get more relevant answers

Ask the model to adopt a persona

Use delimiters to clearly indicate distinct parts of the input

Specify the steps required to complete a task

Provide examples

Specify the desired length of the output

8

---

## Slide 9

Include details in your query

In order to get a highly relevant response, make sure that requests provide any important details or context. Otherwise, you are leaving it up to the model to guess what you mean.

Naive Prompt | Improvement

How do l add numbers in Excel? | How do I add up a row of dollar amounts in Excel? I want to do this  automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total".

Who’s president | Who was the president of Mexico in 2021, and how frequently are elections held?

Write code to calculate the Fibonacci sequence. | Write a TypeScript function to efficiently calculate the Fibonacci sequence. Comment the code liberally to explain what each piece does and why it's written that way.

Summarize the Meeting Notes | Summarize the meeting notes in a single paragraph. Then write a markdown list of the speakers and each of their key points. Finally, list the next steps or action items suggested by the speakers, if any.

9

---

## Slide 10

Adopt a persona

The system message (usually automatically included in all prompts) can be  used to specify the persona used by the model in its replies.

Providing directives such as "You are a journalist" or "Act like a historian". When the  LLM takes on these roles, it tends to deliver enhanced results.

By training on a large corpus of text data from diverse domains, the model forms a  complex understanding of various roles and the language associated with them.

When asked to adopt a specific role, the model can effectively utilize this understanding to produce accurate, role-specific responses.

10

---

## Slide 11

Example: A Lecturer Persona

11

---

## Slide 12

Use Delimiters

Delimiters like triple quotation marks, XML tags, section titles, etc. can help demarcate sections of text to be treated differently.

For straightforward tasks such as these, using delimiters might not make a difference in the output quality. However, the more complex a task is the more important they are.

12

---

## Slide 13

Example: Blog Post

Write a blog post about healthy eating. Include a section about the benefits of fruits and vegetables, a section on how to maintain a balanced diet, and some easy healthy recipes.

13

---

## Slide 14

Specify the Steps

Some tasks are best specified as a sequence of steps. Writing the steps out explicitly can make it easier for the model to follow them.

14

---

## Slide 15

Example: Event Planning

15

---

## Slide 16

Specify the Length of the Output

You can ask the model to produce outputs that are of a given target length.

The targeted output length can be specified in terms of the count of words, sentences, paragraphs, etc.

Note however that instructing the model to generate a specific number of words does not work with high precision. The model can more reliably generate outputs with a specific number of paragraphs or bullet points.

16

---

## Slide 17

Summarize Previous Dialogue

Since models have a fixed context length, dialogue between a user and an assistant in which the entire conversation is included in the context window cannot continue indefinitely.

Recent work even points our that “context is usually lost” in the middle of long conversations

There are various workarounds to this problem:

Summarize previous turns in the conversation. Once the size of the input reaches a predetermined threshold length, this could trigger a query that summarizes part of the conversation

Alternatively, prior conversation could be summarized asynchronously in the background throughout the entire conversation

17

---

## Slide 18

Provide Examples

Providing general instructions that apply to all examples is generally more efficient than demonstrating all permutations of a task by example, but in some cases providing examples may be easier.

For example, if you intend for the model to copy a particular style of responding to user queries which is difficult to describe explicitly.

This is known as "few-shot" prompting.

18

---

## Slide 19

Customer Support with an Example

19

---

## Slide 20

Emotional Prompting

20

---

## Slide 21

Prompt Injection & Hacking

21

---

## Slide 22

Jailbreaking

Jailbroken: How Does LLM Safety training Fail

22

---

## Slide 23

Jailbreaking

Jailbroken: How Does LLM Safety training Fail.

23

---

## Slide 24

Jailbreaking

Universal and Transferable Adversarial Attacks: https://arxiv.org/abs/2307.15043

Universal Transferable Suffix

24

---

## Slide 25

Prompt Injection!

Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with  Indirect Prompt Injection: https://arxiv.org/abs/2302.12173

25

---

## Slide 26

Prompt Injection

26

---

## Slide 27

Prompt Hacking

If the LLM knows private information (e.g., that help it access some other API when needed) then such info may be at risk!

27

---

## Slide 28

Magical Panda! Jailbreaking Vision Language Models (VLMs)

Visual Adversarial Examples:  https://arxiv.org/abs/2306.13213

Panda or not Panda?:  https://arxiv.org/abs/2311.13656

28

---

## Slide 29

Any Questions?

29

---
