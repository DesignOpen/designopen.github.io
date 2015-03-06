---
title: "Resource Collector"
layout: post
category: articles
author: jonlau
priority: 1
tags: featured
excerpt:
---
Design Open collects [resources](http://designopen.org/resources/) related to designers working in the open. Although it is open to the community to submit new resources, the current process involves forking the repo, adding the resource, and making a pull request. This process works, but it has a few large flaws. First, contributing to a GitHub repo is not always [simplest of tasks](http://designopen.org/articles/how-to-contribute/), especially for those who don't regularly use git. Secondly, even for those who are comfortable making pull requests it takes a lot of time and manual work to submit the resource. We wanted to make contributing resources to as simple as possible for everyone. As such, we decided to build a simple tool to streamline the process.

Initial designs of the Resource Collector involved having a database and a back-end administration dashboard to view and approve additions to the site. However, we were not satisfied with having to log in to a separate service just to review these incoming submissions. While searching for a simpler review process, we realized that it would be best to automatically submit these resources as an issue for the repo.

There are several advantages for tracking resource submissions this way:

1. The community can discuss whether or not the submitted resource should be added to the site
2. The person who submit the resource can track the status of the submission on GitHub
3. When it is eventually added to the site, the pull request can also easily reference the issue

The Resource Collector comes in two flavors:

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
