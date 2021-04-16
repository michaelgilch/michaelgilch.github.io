---
layout: post
title: "Taking Notes"
---

I believe one of the most valuable habits I have picked up over the years is note-taking. Every day I both take notes and reference notes from the past. Here, I'll discuss some of the scenarios in which I take notes, how they come in handy later, and the tools I use.

## When I take notes and how I use them

### Learning a New Language or Technology

I note things like how to compile code, set up a development environment, and packages I have to install. 

I often reference my notes on languages or technologies while I am learning them until they are second nature. I am often jumping around between technology stacks, so I might work in Python today and then not again for a year or 2. By the time I get back to it, it's nice to have a few pages of notes to quickly skim to get in the right mindset, or I may be working on a new machine that does not have all of the dependencies installed already. The notes save me time having to relearn what I already knew but tucked away somewhere deep in my brain.

### Working on a New Feature or Bug Fix

I note important files or pieces of code, things I tried that did not work, and metrics.

These come in handy when I get stuck and need to discuss with co-workers, or during code reviews when asked why I made certain decisions. Additionally, if a bug appears months later on in the code I wrote, my instinct of how to fix it might not always align with what I had found while first developing it. For example, I might think _"oh I will just change **that** data structure to **this**"_ but in my notes, I have _"using **this** data structure can cause problems in some other odd way that is hard to detect"_.

### Troubleshooting Issues in the Field or Production

I note the symptoms, software versions, what was tried, and what worked.

Oftentimes, an issue will appear once and then not appear again for a while or be an ongoing issue that you just cannot figure out. It is helpful to have a history to reference, especially if something crops up again months or years later.  It is always nice to be able to reply to an email with something like "_we saw the same issue back in April of 2019 that was caused by this setting..._". If I write it down at the time, I usually do not remember the exact details but will remember _"hey I have seen this before"_.

### During Meetings

I note what was discussed, the status of others' work, the status of my work, decisions that were made, and questions that come up.

This helps keep me focused and engaged during meetings, which can often be long and drawn out. They also make for a great reference of action items before the next meeting.

## What I use to take notes

I have two primary methods of taking notes. 

If I am at my computer and going to be taking a lot of notes, I will just use a text editor ([Sublime Text](https://www.sublimetext.com/) or [Vim](https://www.vim.org)) and write in Markdown. Writing in Markdown does not add any burden to the note-taking process, allows it to be readable on any device, whether or not a markdown viewer is installed (since it's just plaintext), and both Sublime and Vim have plugins that give you a bit of special formatting in the plain text, such as boldfaced headings and syntax coloring in code blocks which helps with navigation. I can use command-line tools like grep to quickly find things I am looking for later. Additionally, if need be, I can easily convert my notes to a PDF to distribute or post on a wiki without having to worry too much about formatting them for readability.

If I am away from my computer (in a meeting or on the production floor at work), or sometimes if I just do not have enough screen real-estate to have another window open, I will use my [reMarkable2](https://remarkable.com/store/remarkable-2). (It is by far one of the best purchases I have ever made). Depending on the topic of the notes, I may or may not type them out later when I get to my computer. This usually works best if I'm later reviewing the notes (review and type them at that same time).

For organizing, I have a single folder (**notes/**) that contains all of my Markdown files, named according to the topic (python3.md, jekyll_setup.md, bash_styleguide.md, _project_name_.md, virtual_machine_info.md, you get the point). 

I do not worry too much about the notes on the reMarkable. Occasionally I will download a copy of everything and store it in the only subfolder of my notes folder (**notes/rm2/**). I can usually figure out based on the topic if I will need to reference the reMarkable or my Markdown files, at least so far (I have only had the reMarkable for about 6 months).

Additionally, I have a private Github repo where I backup my notes, just in case.