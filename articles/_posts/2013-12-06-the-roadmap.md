---
title: "The Roadmap"
layout: post
tags:
  - design
  - update
author: garthdb
date: '2013-12-06 10:15:00'
excerpt: Someone in the IRC asked how they could contribute and what our roadmap is.  I thought I would lay out a few places where anyone could jump in if they wanted to help out.
---
Someone in the IRC[^1] asked how they could contribute and what our roadmap is.  I thought I would lay out a few places where anyone could jump in if they wanted to help out.

## Authors Wanted

Feel free to write about anything related to open source and design and how designers can get involved.  [Areus Wade](https://twitter.com/areus) wrote a great post on [how to contribute a post to the blog](/articles/how-to-contribute/).

If you need a place to start we have a running list of topics in the [github issues](https://github.com/designopen/designopen.github.io/issues?direction=desc&labels=editorial+idea%2C1+-+Ready&page=1&sort=updated&state=open).  You can [add any new ideas](https://github.com/designopen/designopen.github.io/issues/new), or pick one of the following:

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js"></script>

<script>
  Zepto(function($){
    $.ajax({
      url: "https://api.github.com/repos/designopen/designopen.github.io/issues?labels=editorial+idea,1+-+Ready&state=open",
      success: function(data){
        for (var i=0;i<data.length;i++) {
          var listItem = '<li><a href="'+data[i].html_url+'">'+data[i].title+'</a></li>';
          $('#article-issues').append(listItem);
        }
      }
    });

    $.ajax({
      url: "https://api.github.com/repos/designopen/designopen.github.io/issues?labels=design+discussion&state=open",
      success: function(data){
        for (var i=0;i<data.length;i++) {
          var listItem = '<li><a href="'+data[i].html_url+'">'+data[i].title+'</a></li>';
          $('#design-discussions').append(listItem);
        }
      }
    });

    $.ajax({
      url: "https://api.github.com/repos/designopen/designopen.github.io/issues?labels=post+design,1+-+Ready&state=open",
      success: function(data){
        for (var i=0;i<data.length;i++) {
          var listItem = '<li><a href="'+data[i].html_url+'">'+data[i].title+'</a></li>';
          $('#post-designs').append(listItem);
        }
      }
    });

  });
</script>

<ul id="article-issues"></ul>

## Designers Wanted

This is a site about open source design, and has a definite lack of design going on here.  The easiest way to jump in is to comment in the [design discussions](https://github.com/designopen/designopen.github.io/issues?direction=desc&labels=design+discussion&page=1&sort=updated&state=open):

<ul id="design-discussions"></ul>

If you want to do some actual design, you could create a custom design for any post that doesn't have one ([another list on Github Issues](https://github.com/designopen/designopen.github.io/issues?direction=desc&labels=post+design&sort=updated&state=open)):

<ul id="post-designs"></ul>

You can do any part of it: just visual design, or actual coding.  [One post](/articles/using-github-for-design-collaboration/) at least has been done and I plan to put together a tutorial on how to create a custom layout, but until then feel free to take a look at the [source code](https://github.com/designopen/designopen.github.io/blob/master/_layouts/using-github-for-design-collaboration.html) as an example.

The idea is each post should be unique, so there is no style guide to follow; make your own.

## Resource Seekers Wanted

Sorry, resource seeker sounds lame, but I couldn't think of a more elegant want to put it.  We have a running list of resources and examples of open source design.  Feel free to tweet [@designopen](http://www.twitter.com/designopen) if you have anything you'd like to add.

[^1]: Our IRC channel is #opensourcedesign on Freenode
