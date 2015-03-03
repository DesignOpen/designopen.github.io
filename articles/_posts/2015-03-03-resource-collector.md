---
title: "Resource Collector"
layout: post
category: articles
author: jonlau
priority: 1
tags: featured
excerpt:
---
Contributing to a Jekyll site on GitHub is clearly [not the simplest of things](http://designopen.org/articles/how-to-contribute/) for designers. Readers of Design Open regularly tweet us with useful resources to add to the site. While that is convinent for them, it makes reviewing all the incoming links difficult for us. We wanted to make contributing resources to Design Open as simple as possible for everyone. As such, we decided to build a simple tool that would make this an easy process for all.

Initial designs of the Resource Collector involved having a database and a back-end administration dashboard to view and approve additions to the site. However, we were not satisfied with having to log in to a separate service just to review these incoming submissions. While searching for a simplier review process, we figured that it would be good if these submissions could trigger a bot to automatically open an issue for it on GitHub.

There are several advantages for tracking resource submissions this way:

1. The community can discuss whether or not the submitted resource should be added to the site
2. The person who submit the resource can track the status of the submission on GitHub
3. When it is eventually added to the site, the pull request can also easily reference the issue

The Resource Collector comes in two flavour:

- Chrome Extension
- JavaScript Bookmarklet

## Chrome Extension

To install the Chrome Extension, simply [view the listing](https://chrome.google.com/webstore/detail/design-open/jahbclkpigpnoeamhgdilpdocgicnmml) on the Chrome Web Store and click the "Add to Chrome" button.

## JavaScript Bookmarklet

For users who do not use Google Chrome, you may generate a bookmarklet with your Twitter handle and drag it into your bookmarks bar. Typing in your Twitter handle is optional, but would save you time by embedding it into the bookmarklet.

Twitter Handle:
<input type="text" id="bookmarklet-twitter" placeholder="@somebody">

Drag this link to your bookmarks bar:
<a id="bookmarklet-link">Add to OSD</a>

<script type="text/javascript" src="https://osdrc.herokuapp.com/javascripts/bookmarklet.js"></script>