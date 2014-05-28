---
title: "How to get designers (or anyone) to work on your open source project"
layout: post
category: blogging_about
tags: improvement
author: vitorio
date: '2014-05-27 21:33:00'
---

> Dear twitter, please direct me to good writing on what designers need from maintainers to consider contributing to open source projects. —[@garannm](https://twitter.com/garannm/status/410885971496808448)

Let’s start with some assumptions:

1. You participate in, or you run, an open source or other public software project of some sort;
2. this project has mostly or all programmers working on it; and
3. the project needs, *and wants*, participation from more people (in this example, some sort of designer).

That last bit, about wanting them there?  That’s the most important bit.  Nothing else in this essay will work out, otherwise.  (We’ll explain why after some setup.)  This essay isn’t about getting buy-in from your project, you’re on your own for that.  It’s about the specific infrastructure you need to get *anyone* new working on your project.

Maybe you want a designer to help with your UI.  Maybe you want a technical writer to help with your documentation.  Maybe you just want some more programmers, and you’ll even take on junior programmers.  All of these people need the same sort of basic infrastructure, because they’re all *lay people.*

A lay person is “someone without specialized knowledge,” and that doesn’t mean only non-programmers.  For you, a lay person is *anyone who doesn’t already work on your project,* even if they’re a programmer of some sort.  *Your project* is the “specialized knowledge” in this case: how it’s built, how it’s maintained, your code review process, the names of your git branches, your variable naming convention, your event loop, your custom framework for this one thing, your call graph for that other thing, on and on.

The infrastructure we’re going to discuss is how to introduce a new lay person to your project, and how to support them.

## Getting anyone to contribute to your project

Let's talk about what lay people need:

1. a way to understand the value of your project
2. a way to understand the value they could provide to the project
3. a way to understand the value they could receive from contributing to the project
4. a way to understand the contribution process, end-to-end
5. a contribution mechanism suitable for their existing workflows
   * this part may vary somewhat based on their role, such as different types of designers, writers, etc.

Unfortunately, if you're looking for volunteer help, you can't skip to step five.  Having a way for lay people to contribute before you have any of the other things doesn't work, because they will still have to understand all your programmer-specific ways and means, and they won't do that, because they aren’t programmers.

Just as you prefer to have reasonable programmer-related things in projects you contribute to, like source control, responsiveness of the maintainer, commented code, etc., and you'll prefer to work on a project that has them over a project that doesn't, so it is with people who aren’t programmers.  They need the non-programmer equivalent of all of those things, or they'll prefer to work on something else.

(If you're looking to *hire* the staff you need at market rates, then you probably *can* skip to step five.)

## The value of your project

This is important because, generally speaking, only programmers within your area of expertise know why what you're doing is important.  All of your Hadoop friends understand your cluster clock synchronization problems, but your PHP or JavaScript friends really have no idea what you're talking about.

Here's a real example from a friend's open source project, [Fauxflake](http://rholder.github.io/fauxflake/).  He writes:

> Fauxflake is an easily embeddable, decentralized, k-ordered unique ID generator. It can use the same encoded ID format as Twitter's Snowflake or Boundary's Flake implementations as well as any other customized encoding without too much effort. The fauxflake-core module has no external dependencies and is meant to be about as light as possible while still delivering useful functionality. Essentially, if you want to be able to generate a unique identifier across your infrastructure with reasonable assurances about collisions, then you might find this useful.

As a programmer who doesn't deal with “clock skew” or “event chronology in clustered systems,” to understand the value of this project you have to learn what “decentralized” and “k-ordered” mean, as well as what the more generic terms “unique ID,” “encoded ID,” “snowflake,” “flake” and “customized encoding” mean *in this very particular context.*  “Unique ID” means something different outside of this context.  “Encoding” means something different outside of this context.

As a non-programmer, I'm not sure there are *any* words I understand.  So, via chat, we come to a different description.  It’s longer, but it also leaves out almost all the jargon:

> Fauxflake is a time machine.  It handles accurately assigning chronological IDs to events, across computers, so you can track as many as four million events per second.
> <br><br>
> This is important, because your local computer's clock is probably only precise down to the millisecond, so you can only keep track of events that happen, at most, 1000 times per second.
> <br><br> 
> If you have so many events per second, tens of thousands or millions, that you have lots of computers tracking events, you have the additional problem of keeping all of those computers' clocks in sync, and in doing so, you'll see strange things like time running backwards as their clocks keep adjusting themselves.
> <br><br>
> Fauxflake solves all of that for you, without needing to run a separate computer just for it, like some other solutions.

Removing the jargon makes Fauxflake’s value understandable for lay people, but also for competent programmers who have never had to deal with clock drift, or with clusters, or with high-throughput systems. Remember: a lay person is *anyone who doesn’t already work on your project,* even if they’re a programmer of some sort.

In fact, a programmer who would understand the original description may *also find value in this jargon-free description,* because it's a signal that perhaps, if you've taken the time to write it out like this, you've also taken the time to write other things out, like documentation and good examples.  Perhaps this means your project will be easier to use or integrate than Twitter's Snowflake or Boundary's Flake projects, and that they should seriously consider you.

Given that there are more non-programmers than there are programmers, and that even programmers find value in the jargon-free description, this new description should be the first description *anyone* sees of your project.  Plainly written content shouldn't be relegated to a “non-programmer's ghetto,” at risk of becoming rapidly out-of-date, but rather, you should demonstrate your accessibility and inclusiveness by writing your descriptions to be useful to everyone at all times.  Present general content for the general public first, specialized content for specialized groups (like the original, technical description, for programmers with your particular expertise) second.

## The value provided to your project

Programmers need to see their contributions be valued: if a programmer-user finds a critical bug, and contributes a fix which is never merged, they might switch to using a different project entirely, rather than have to maintain a fork.  So it is with non-programmers: their contributions need to be valued, and that value should be explained.

It’s easier for a programmer to see their value: their daily work already includes looking at source code, working with source control, replying on mailing lists or to issues, etc. When their pull request is committed, they see it in their `git log` or equivalent.  Non-programmers don’t have those workflows, so the value they provide should be clearly stated, along with ways to reference that contribution once it makes it into the project.

Let’s look at potential non-programmer contributions to Fauxflake.

* A graphic designer could provide a logo.
* A web designer and/or front-end developer could provide a custom GitHub Pages theme for the site, and for the Javadoc documentation.
* A technical writer could write prose documentation to go with the Javadoc documentation.

Fauxflake doesn’t have a [`CONTRIBUTING`](http://contributing.appspot.com/) file or related section, so in addition to discussing how programmers might contribute, he might also write (again, as jargon-free as possible):

> Proposed improvements to, or repairs for problems in, the project are welcome. (While suggestions and opinions will be accepted, it’s always better if you can actually provide the change you’re proposing.)

> We welcome proposals for project logo artwork.  Logo art would be featured in the upper left corner of [the project homepage](), in the footer of every page of [documentation](), and in every HTML status email sent by the automated reporting systems (see [an example here]()).

> We’re also interested in re-styling [the project homepage]() and/or [the Javadoc documentation]().

> We’ll take additional technical documentation as well, whether documented toy integrations, explanations of non-trivial replacements of Flake or Snowflake, or use of Fauxflake as an example project in other contexts, such as using Gradle or Maven.

Examples are especially important for documentation requests, because many programmers who are well-versed in a system forget how they learned it in the first place.  There are actually three different types of documentation, and all of them are important at different times:

* **Tutorials and “hand-holding,” step-by-step walkthroughs** get new users (whether programmers or not) comfortable enough with a system to learn more about it, and get experienced programmers working with live code very quickly when tutorials match their use cases.  These types of documents should make no assumptions about the experience level of the user (an experienced programmer will simply skip the extra explanations), and shouldn’t burden a user with technical philosophy or system architecture explanations up front; no-one wants to have to buy into a particular school of thought if they haven’t even seen that you solve their problems yet.
* **Technical overviews** often explain the philosophies and design patterns behind a system. *This* is where you explain how and why a system functions the way it does, for programmers who will have to write their own code within your system’s architecture.  Examples should be provided that illustrate not only why your system was designed the way it was, but also how other architectures’ different decisions result in different trade-offs.  This is important, because you don’t want to have to support a user who would be better off using a different technology, or who disagrees with your implementation philosophy, as they will always want your system to be something it isn’t.
* **API or function references** are the first type of documentation most programmers create, as it can be automatically generated from code comments in many languages, but they should be the last items, as the first two types of documents fulfill most users’ needs, and provide enough of a base to allow users to understand the source code directly.  Auto-generated documentation can explain each function or variable, but it often falls short of being truly comprehensive.  Good API or function references include cross-references illustrating where functions are called, by what, why, and why not other things, especially in cases of algorithms.  Great references also include not only example code, but example responses, expected response times, and performance characteristics, including CPU, memory and network usage.

## The value provided by your project

A programmer-user who contributes a fix for a bug gets a direct benefit: they don’t have to maintain their own version of the project. What does a non-programmer non-user get?

Trick question: there’s no way for you to know in advance.  You might guess a programmer’s reasons for contributing are so they don’t have to maintain a fork; you might even be right, but assumptions are dangerous.  A non-programmer is not a programmer, and you can’t assume they’re looking to “get” anything in particular out of helping you.  You shouldn’t promise anything you can’t personally deliver on, and you shouldn’t posit hypothetical benefits; at best, you might be seen as placating, at worst, you might be actively offending someone.

For example, I worked on a JavaScript project recently that was about to receive a lot of press. I suggested to another contributor that they might finally have the experience of getting their code in front of a lot of users.

They told me they already worked on Reddit.

Don’t make assumptions about anyone’s contributions.   You don’t know that a contribution would be good for their resume.  You don’t know if they’re looking to get into programming.  You don’t know if they’re looking to build up their reputation in some community or another.  Simply be thankful they are making them.

Let’s expand the three example non-programmer contribution solicitations to include benefits (in bold):

> We welcome proposals for project logo artwork.  Logo art would be featured in the upper left corner of [the project homepage](), in the footer of every page of [documentation](), and in every HTML status email sent by the automated reporting systems (see [an example here]()). **Someone running Fauxflake would see these once or twice a day on average, and you would be credited in [the contributors listing here]() in perpetuity (even if your logo is replaced).**

> We’re also interested in re-styling [the project homepage]() and/or [the Javadoc documentation]().  **This could help potential users more readily understand if the project fits their needs, and help existing users find the content, code, or support they need more easily. You would be credited in [the contributors listing here]() for as long as your theme is in use.  If you were interested, I’d also be happy to work with you to make your new themes available for other projects to use (any GitHub project page and any blog using Jekyll publishing software may be able to use a project homepage theme, and any Java software’s documentation may be able to use a Javadoc theme, meaning your work could eventually help many other software projects).**

> We’ll take additional technical documentation as well, whether documented toy integrations, explanations of non-trivial replacements of Flake or Snowflake, or use of Fauxflake as an example project in other contexts, such as using Gradle or Maven.  **Writing about work you’ve done helps others get to where you are, putting them in a position to help you in the future. All documentation will be included in the main repository, linked to on [the project home page]() and in the `README`, and I would help you maintain it as Fauxflake changes.  You would be credited in [the contributors listing here]() for as long as your documentation is current.**

These are both tangible benefits (visibility) and intangible benefits (helping current and future users, either altruistically, or with the hope that you will find help when you need it in the future). They make no assumptions about motivations or status, and the tangible benefits in particular are only ones that the project maintainer can directly implement and affect.

## The contribution process, end-to-end

As a programmer, you will ultimately integrate non-programmer patches using a programmer’s workflow, which may be something a non-programmer has no experience with.  This is not the explanation of how they submit a patch; this is the explanation of what happens after they do.  This is important, because no-one likes submitting data and not getting a response.  You submit a form on a web page and the page appears to just refresh; did they receive your data?  You apply for a job and get no acknowledgement; are you being considered?  Explaining the triage and review process helps non-programmers, and also programmers, feel comfortable after they send their pull request.

> After you send in a patch, fix, contribution, or change proposal (using one of the methods outlined below, depending on the type of change), it will get put into [the GitHub “issues” queue for the project]().  For non-code contributions, I’ll personally email you your individual “issue” URL, and that’s where we’ll discuss anything to do with your proposal, until it’s either accepted, or turned down.  If it’s turned down, we’ll talk about why, and how you can try again with whatever changes need to be made.  Other people on the project may also chime in with their opinions, and that’s okay and expected, and it’s your prerogative to take their advice or not.  (It’s also possible that someone else “owns” the part of the project you’re trying to contribute to, so while you’ll get the initial email from me, you’ll mostly talk with them in the issue queue, and they’ll accept your change or turn it down.) 
> <br><br>
> You might need a GitHub account to reply to questions or comments; you can [sign up for one of those here]().

For large projects with multiple committers, it’s especially important to outline ownership here, and preferences for commits in the next section.  Even if you have a unique submission process for non-programmers, it’s important that the review and discussion happen with the same level of involvement as code submissions, and that submissions ultimately live in the same repository, to keep non-programmers on equal footing as programmers.

## A contribution mechanism for lay workflows

A programmer’s contribution dance can be very straightforward, if you know all the steps already:

    git clone <URL>
    git branch <new branch name>
    git checkout <new branch name>
    <do some changes>
    git commit
    <email the maintainer and ask them them to pull my new branch to get my changes>

If you don’t, there may be many unfamiliar things here. An experienced programmer may have used source control, but may have never used `git`.  A junior programmer may have never used source control at all. Programmers who have never worked on open source projects before may not have a lot of experience trawling the internet for help and documentation. These aren’t failings of education or experience; they simply don’t have the same specialized knowledge you do.

Likewise with non-programmers: a technical writer may have never used a command line; an artist may not even be using your operating system. Just as you don’t really want to go to art school for four years, buy a $1000 Cintiq drawing tablet, and license Adobe Creative Cloud for $600/year “just” to make a logo, a non-programmer doesn’t really want to have to install a new operating system, learn the paradigm of working from the command line, understand package management and source control, and research and install and configure every dependency “just” to send you a picture.

You have to understand and support lay workflows to onboard lay people.

You’ve probably already seen some examples of this level of support in other open source projects: software development kits (SDK).  SDKs are often self-contained distributions of software, useful to programmers as they contain all the documentation offline, example code ready-to-run, and include dependencies such as toy databases and web servers.  They can be useful for non-programmers, too, if they let them see their changes to art or documentation immediately and in context.

Let’s look at our contribution examples again.

For a logo, an artist will need documentation on the production format(s) you’ll eventually need, a way to test their production exports (the final .JPG or .PNG files, for example) in context, a way for them to provide both their master files and their production exports to us. You’ll also need a place to store these potentially large binary objects in your source tree, but you may not be able to get the artist to put them there themselves. Asking someone whose workflows don’t already include source control to learn a whole new paradigm of managing their files, plus a toolchain to do it with, to send you one file, is unreasonable.

For the web design theme example, setting up GitHub Pages or Jekyll or Javadoc may be straightforward, or those systems may make too many assumptions about expertise. Perhaps providing specific documentation for setting up your project (“just enough Jekyll”) would make the difference.

Our third example was documentation.  Writers are becoming increasingly comfortable with source control-like systems, but may not have used `git` in particular. Working with a writer to take their first draft into source control yourself may allow them to write most of the content wherever they feel most comfortable, while completing the document and its edits directly in your system.

## Lay systems for lay people

A lay person is *anyone who doesn’t already work on your project,* even if they’re a programmer of some sort. To get anyone new working on your project, you need to demonstrate the value of your project, and of that work, in terms that contributor will understand. And, because you can’t make assumptions about their experience or motivations, you need to be open to as many contribution methods as possible.

For non-programmers in particular, once you’ve successfully accepted a contribution from one non-programmer, you’ve successfully accepted a contribution from one non-programmer. Just as programmers prefer particular languages and tools, designers, writers and others will all have their own, unique workflows. And, just as you can’t always support every developer’s preferences, it will take time before you determine what is best for both potential contributors and your project.

-----

*Thanks to Garth Braithwaite, Eileen Webb, Benjamin Jackson, Nick Disabato, and Jason Rutherford for their feedback.*
