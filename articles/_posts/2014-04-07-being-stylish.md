---
title: "Styling Open Source"
layout: post
category: articles
tags: improvement
author: terracomma
date: '2014-04-07 10:16:00'
excerpt: We've been working on improving the design of the site, this is an update.
---

[Garth][garth] (the originator of OSD) and I are regulars at a design meetup where he first shared the vision for this site.
At the time the site's design was about 4 CSS rules away from default. I remember Garth saying something along the lines of
"I wanted the site to look kinda crappy so someone else would step in and work on it."

Well it worked, and less than a week later I stepped in and worked on it.

## Design vs Style

Early in the process, and through conversation with Garth the decision was made to avoid *designing* the site,
instead choosing to *style* it. This site is set up so that any article can (and hopefully will) get its own
design treatment. A fantastic example can be seen on the article [*USING GITHUB FOR DESIGN COLLABORATION*][ex].

With that in mind, the goal for this iteration of the look of the site became
"Nice, but still something someone would want to replace."

## A Checklist

A list of requirements was drawn up for the default design of the site:

- The style should be clean, careful to never allow style to dtract from content.
- The style should be flexible enough to support an array of article types
- The style should reflect the elements of our Markdown processor, [Kramdown][kd]
- The site should be responsive and device agnostic.
- The CSS of the styles should be simply written, to encourage collaboration.

This current iteration meets all of those requirements, but in the spirit of Open Source, we believe it can be better still.

## Moving forward

If the default design of the site is something you'd like to help with, I've opened up an [issue][stylethread] on Github
for discussion. If you're interested in designing a more robust solution for an existing article, check out the list of
[articles awaiting treatment][articles]. If you'd like to contribute to the discussion about what to do with our home page,
the talk is pretty awesome over [here][homepage].

Happy Open Sourcing!

[garth]: http://www.garthdb.com/
[ex]: /articles/using-github-for-design-collaboration/
[kd]: http://kramdown.gettalong.org/
[stylethread]: https://github.com/designopen/designopen.github.io/issues/86
[articles]: https://github.com/designopen/designopen.github.io/issues?labels=post+design&page=1&state=open
[homepage]: https://github.com/designopen/designopen.github.io/issues/85
