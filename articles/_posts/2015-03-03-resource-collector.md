---
title: "Introducing Our New Resource Collector"
layout: post
category: articles
author: jonlau
editor: mrondina
priority: 1
tags: featured
excerpt: We have a new design resource collector.
---
## Our Latest Feature to Design Open

Here at Design Open, we've been collecting articles and ideas related to designers working in the open. These resources build a deep bench of industry examples to inspire us all to be more open with our work. We've built a new tool to make the gathering of these articles simpler for the entire community.

## Lowering the Barrier to Participation

Initial designs of the Resource Collector involved having a database and a back-end administration dashboard to view and approve additions to the site. However, we weren't satisfied with having to log in to a separate service just to review these incoming submissions.

We weren't completely satisfied with the current process of forking, adding and making the pull request. It works, but it can be a little intimidating for some of us new to git. For those more familiar with the git workflow, it still requires a lot of time and manual effort to get a resource added. We wanted to make contributing resources as simple as possible for everyone.

While searching for a simpler process, we realized that it would be best to provide a tool that automatically submits the article or reference as an issue for the repo. The Design Open community can then review and approve the request to have new submissions added to the site.

There are several advantages for tracking resource additions this way:

1. The community can discuss whether or not the resource should be added to the site
2. The person who suggests the resource can track the status on GitHub
3. When it is eventually added to the site, the pull request easily referencea the issue and the conversation surrounding it

So, we built the Resource Collector. It comes in two flavors:

- Chrome Extension
- JavaScript Bookmarklet

## Get the Resource Collector

### Chrome Extension

To install the Chrome Extension, simply [view the listing](https://chrome.google.com/webstore/detail/design-open/jahbclkpigpnoeamhgdilpdocgicnmml) on the Chrome Web Store and click the "Add to Chrome" button.

### JavaScript Bookmarklet

For users who do not use Google Chrome, you may generate a bookmarklet with your Twitter handle and drag it into your bookmarks bar. Typing in your Twitter handle is optional, but would save you time by embedding it into the bookmarklet.

Twitter Handle:
<input type="text" id="bookmarklet-twitter" placeholder="@somebody">

Drag this link to your bookmarks bar:
<a id="bookmarklet-link">Add to OSD</a>

<script type="text/javascript" src="https://osdrc.herokuapp.com/javascripts/bookmarklet.js"></script>

## Join Us

So, please, install the bookmarklet or the extension and try it out. If you have any difficulties, or want to report an issue, or you just want to let us know how it's working; you can post your feedback in our Github repo. If you just want to let us know how it's working, you can post your feedback in our Github repo [here](https://github.com/DesignOpen/designopen.github.io/issues) or talk with us on [twitter](https://twitter.com/designopen).
