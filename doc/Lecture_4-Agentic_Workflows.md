# Lecture 4-Agentic Workflows

**Source:** `Lecture 04_Lab 3/Lecture 4 Agentic Workflows/Lecture 4-Agentic Workflows.pptx`  
**Type:** pptx  
**Slides/Pages:** 36

---

## Slide 1

1

Lecture 4: Agentic Workflows

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

Automating Complex, Multi-step Tasks (Agentic Workflows)

Agenda

3

---

## Slide 4

What is a Workflow?

A workflow is an ordered sequence of steps that transforms an input into an output.

A workflow defines when and how models, tools, and logic are used.

4

---

## Slide 5

Motivation

How do we work on programming assignments? Agentic Flow

How do we write research papers? Agentic Flow

5

---

## Slide 6

Agentic Workflow

6

---

## Slide 7

HuggingGPT

* HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face, Shen et.al., Dec 2023

7

---

## Slide 8

HuggingGPT

* HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face, Shen et.al., Dec 2023

8

---

## Slide 9

Important Findings

Performance Evaluation on

Single Tasks

Sequential Tasks

Graph Tasks

Need for a stronger LLM coordinator to plan nd reason for complex tasks

9

* HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face, Shen et.al., Dec 2023

---

## Slide 10

Why need an Agent?

Problem with plain LLMs

Single-turn reasoning

No memory

No actions

No goals

Real-world tasks need

Multiple steps

Decisions

Tools

Adaptation

10

LLM Workflow | Agentic Workflow

Input → LLM → Output | Goal → Plan → Act → Observe → Reflect → Repeat

Linear
Predefined
Developer-controlled | Iterative
Dynamic
Agent-controlled

---

## Slide 11

What is an Agent?

An AI Agent is an LLM equipped with tools, memory, and a decision loop to act toward a goal.

Key components

LLM - The model powering the agent’s reasoning and decision-making.

Tools - Functions or External API’s the agent can use to take action.

Memory - Short term or long term to retrieve context

Control loop – a repeating cycle where an agent decides → acts → observes → decides again until a goal is met.

Prompt/Instructions - Explicit guidelines defining how the agent behaves.

11

---

## Slide 12

Multi Agent Systems

Individual Agent

Multi Agent System

12

---

## Slide 13

Multi Agent Systems

Philosophers Chatting

Online Painter

13

---

## Slide 14

14

Multi Agent Collaboration

Collaboration: Multiagent collaboration involves multiple language models or agents working together through interaction to complete complex tasks.

Example: For instance, simulating experts in different roles, like doctors and nurses, can help in jointly developing diagnostic and treatment plans.

Avoid Conflicts: The crucial aspect of this approach is training the agents to collaborate efficiently, ensuring a clear division of labor to prevent conflicts and contradictions.

Future: In the future, multiagent systems could become a powerful tool for solving complex problems, showcasing a level of collaborative ability that exceeds that of individual agents.

---

## Slide 15

What is Agentic AI?

Agentic AI is a system of multiple agents that collaborate, plan, and execute tasks autonomously.

Key traits

Multiple agents

Delegation

Long-term goals

Self-correction

15

---

## Slide 16

16

LLMsRAGAI AgentAgentic AI

---

## Slide 17

Core Agentic Workflow

Generic agent loop

Receive goal

Plan next step

Choose tool

Execute

Observe result

Decide next action

This loop continues until:

Goal achieved

Failure condition met

17

---

## Slide 18

What Are Agentic Frameworks?

Agentic frameworks are software frameworks that help build, manage, and control AI agents and agentic workflows.

Why they exist?

Agent logic is complex

Manual implementation is error-prone

Frameworks standardize best practices

They provide:

Tool orchestration

State & memory handling

Control loops

Multi-agent coordination

Debugging & observability

18

---

## Slide 19

Examples of Agentic Frameworks

LangChain

Foundation layer

Tools, memory, prompt orchestration

LangGraph

Graph-based agent workflows

Explicit state & loops

Production-grade control

CrewAI

Multi-agent collaboration

Role-based agents

Task delegation

19

---

## Slide 20

Debugging in Agentic AI Systems

Why debugging is hard

Multiple LLM calls

Tool usage & failures

Non-linear control loops

Hidden reasoning steps

Common failure modes

Wrong tool selection

Infinite loops

Hallucinated decisions

Unexpected state transitions

What needs to be debugged

Prompts

Tool inputs/outputs

State changes

Control flow decisions

20

---

## Slide 21

Observability and Traceability Tools

The ability to understand what an agent is doing internally from the outside.

Key observability signals

Traces (step-by-step execution)

Logs (inputs, outputs, errors)

Metrics (latency, cost, success rate)

Example Tools:

Langsmith

Langfuse

21

---

## Slide 22

Why Protocols are Important?

Agentic systems need:

Standard communication

Safety

Interoperability

Without protocols:

Agents can’t cooperate across systems

Emerging ideas:

Agent-to-agent messaging

Task contracts

Tool permissioning

Action verification

22

---

## Slide 23

Standardize Tool CommunicationMCP (model context protocol by Anthropic)

23

---

## Slide 24

MCP (model context protocol)

24

---

## Slide 25

Standardize Agent CommunicationA2A (Agent to Agent by Google)

25

---

## Slide 26

A2A Compliments MCP

26

---

## Slide 27

What is happening in industry?

27

---

## Slide 28

What is out there right now?

28

---

## Slide 29

What is out there right now? (Recall Function Calling Example)

29

Agent Block: Most popular and stable approach as of today.

---

## Slide 30

What is out there right now?

30

---

## Slide 31

What is out there right now?

31

---

## Slide 32

Agents Orchestration pattern

Multi-agent systems

Manager pattern

Example: Translation Assistant

Decentralized pattern

Example: Support Assistant

32

---

## Slide 33

Extra: Agentic Design Patterns

33

---

## Slide 34

Extra: Agentic Design Patterns

34

---

## Slide 35

35

Andrew Ng’s Future Prediction

Expand: The set of tasks AI can do will expand dramatically because of Agentic workflows.

Delegate: We have to get used to delegating tasks to AI agents and patiently wait for a response.

Low quality LLM usage: Fast token generation is important. Generating more tokens even from a lower quality LLM can give good results.

Agents over Models: If you are looking forward to running GPT-5/Claude 4/Gemini 2.0 (zero shot) on your application, you might already be able to get similar performance with agentic reasoning on an earlier model.

---

## Slide 36

36

Thank you!

---
