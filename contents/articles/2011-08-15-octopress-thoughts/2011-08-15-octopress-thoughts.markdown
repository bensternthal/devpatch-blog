---
layout: post
title: Octopress . . .Some Thoughts
date: 2011-08-15
comments: true
published: true
categories: Development
---

I recently switched my blog from Wordpress to Octopress. Below are some thoughts/points I collected during this process.
<!-- more -->

## Summary

I generally like Octopress, and for me there are big advantages to using a static site generator over Wordpress (better security, no mysql, faster).
However there are some issues (mostly minor) that came about as I began to really use it.


## The Technology Stack

Octopress is a "framework" in the sense that it combines various technologies into a static site generator. On the plus side, you can leverage
lots of interesting tools. On the bad side, if you are not already familiar with these tools you will have a lot to learn.

You could just use the stock design and feature set, but I think the most common use of this product will to be to customize the
HTML/CSS/JS and stick with the Jekyll page generation framework.

That being said, to create a custom theme you will need to understand the CSS/JS/HTML (unless you start from scratch) along with the SASS & COMPASS
technologies.

If you run into any bugs or display issues there are a lot of layers you may need to pull back. The below list is what I consider
the significant technologies in use. If there is a display error (for example an IE8 bug I found) you may need to go through a lot of layers in the
stack before finding the cause.

### Source Control, Configuration, Preview, Build, and Deploy

1. Git
2. Ruby
3. RVM
4. Rake
5. Jekyll

### Theming (CSS)

1. SASS
2. COMPASS-style

### Theming (JS)

1. Modernizer.js (including plugins like respond.js, yepnope.js)
2. ender.js

### Theming (Templates & Posts/Pages)

1. HTML5
2. YAML
3. Markdown


## Keeping Updated

Updating Octopress from github is not as smooth as it can/should be. My workflo has been to update into a branch and confirm I have a good read
on everything before doing a merge.

This should be improved/less risky in future versions and I already see some tweaks being pushed to github. However it pays to be careful.

## Conclusion

Octopress is pretty cool and if you have the time to tinker it can be a lot of fun. I would just re-iterate that it's still relatively young and
is a work-in-progress.








