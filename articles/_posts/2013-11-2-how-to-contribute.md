---
title: "How To Contribute to a Jekyll Blog on Github"
layout: post
category: articles
tags: GitHub collaboration
author: areus
date: '2013-11-2 02:10:02'
---
## Installing dependencies
The [designopen.org](http://designopen.org) website is on GitHub pages, which runs atop of [Jekyll](http://jekyllrb.com). Lets install it so we can get this cloned and running locally.

### Installing Ruby
- Follow the guide over at [InstallRails](http://installrails.com/) to get rails installed on your machine.  Technically this guide will step you through installing Ruby and Rails, but all you really need for Jekyll is Ruby.

#### First time user?
  If you are working on Windows, you might need to install update packages beforehand. Be sure to check out the [SSL upgrades on rubygems.org and RubyInstaller versions](https://gist.github.com/luislavena/f064211759ee0f806c88#installing-using-update-packages-new) if you run into trouble.

### Installing Git:
- Download the installer for your system on the [git-scm website](http://git-scm.com/downloads).

### Installing Jekyll:

1. Fire Up Terminal
2. Install Jekyll by running `sudo gem install jekyll`. It'll ask for your computer password, then start building. It'll look like absolutely nothing is happening, but stuff is definitely happening. Everything is done when you can see your prompt and blinking cursor again.
3. After installation, type `jekyll --version` and hit enter. It should spit out the current version of Jekyll, which at the time of writing this is `jekyll 1.0.1`. At this point, you're ready to clone the repo!

## Setting up your Fork
Now that we're running Jekyll locally, we need to get a copy of the site onto our own account so it's safe to make modifications to it without affecting the main repo.

1. Browse on over to the [GitHub Repo](https://github.com/DesignOpen/designopen.github.io), and click on the "Fork" button at the top right of the page.
2. After all that hardcore forking is over with, GitHub will show you the new fork on your account. Copy the Clone URL (bottom right of the sidebar), and go back to Terminal.
3. For the sake of this guide, I'm going to put this project in `~/Documents/Projects/`.
4. In Terminal `cd ~/Documents/Projects` and press enter.
5. Then type the clone command, paste the URL we just copied, then a folder name `git clone git@github.com:[yourusername]/opensourcedesignis.github.io.git designopen.org`
6. Once it's done cloning, type `cd designopen.org` to go into the folder that was just created.
7. From here you can simply run `jekyll serve`, then browse to [http://localhost:4000](http://localhost:4000), and you should see the designopen.org site running locally on your computer.

### Getting changes from Upstream
Now that you're running a copy of the site on your computer, you want to make sure that you're always getting the latest and greatest version of the site right? Of course you do. When a contributor publishes an article, makes a design change, moves files, & so on, you want to be able to apply these updates without having to completely remove everything you've done and start over.

1. Browse to the directory that you cloned the repo in. In this case it's `~/Documents/Projects/designopen.org`
2. Type in `git remote add upstream https://github.com/DesignOpen/designopen.github.io` and press enter. We've essentially told our repo to look at the official designopen.org repo for changes.
3. Then enter `git fetch upstream`. This will get all the changes from the main repo that haven't been updated on your computer. Chances are nothing will happen when you do this since you just finished cloning the most up to date version, but in the future this is incredibly helpful. If there are changes, Git will show a few lines saying that it updated, and which files were updated.
4. If/When you 'fetch' updates from the main repo, we need to merge them with the code on your computer before you can see those new changes.
5. Type in `git merge upstream/master`. You've got a perfect clone of what is online at designopen.org!

### The Final bits
- When developing locally, you have to edit the URL in `_config.yml` from http://designopen.org to http://localhost:4000. If you don't do this, all the links you click will put you on the live site instead of the version you have on your computer.
- If you're making changes to the site locally, and your changes aren't showing up, run jekyll with the watch flag `jekyll serve --watch`. Now you don't have to kill Jekyll every time you make a modification.
