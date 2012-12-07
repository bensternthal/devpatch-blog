--- 
layout: post
title: IDEs For Front End Development & PHP
date: 2010-10-19
comments: true
categories: JavaScript Development
wordpress_id: "908"
wordpress_url: http://www.devpatch.com/?p=908
---

{% img left /images-posts/2010/10/4-ide1.png 300 274 %}
I make my living as a front-end developer and spend the majority of my time in an IDE. So the IDE for me, is an incredibly important piece of software. I've played with and purchased a bunch of em' and what follows are my personal thoughts on each. I hope this might save you some time/money when deciding which IDE to invest in.



Some of these IDEs I used for years, others for only a short time. All were used on a minimum of one real project from creation to launch. If you are interested in a spreadsheet type feature list, head on over to Wikipedia's <a href="http://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments">http://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments</a>. If you don't want to read the pros/cons of each just skip to the conclusion.

<!--more-->

<div class="clear"></div>

<h2>Requirements</h2>
OS X is my primary OS so all the IDE's are available for that platform. Some are also available on Linux or Windows but not all. My top priorities for IDEs in no particular order are:


<ul class="disc">
    <li>Support For Various Version Control Systems (GIT and SVN minimum)</li>
    <li>Syntax coloring/validation/code completion for the following
        <ol class="num">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
        </ol>
    </li>
    <li>Support code completion for JS and PHP frameworks (jQuery/YUI and Zend Framework on the PHP side)</li>
</ul>


<h2>Contenders</h2>
The IDE's I Evaluated:
<ul class="disc">
    <li>Coda </li>
    <li>TextMate</li>
    <li>Aptana 2</li>
    <li>PhpStorm </li>
</ul>

<h2>Coda</h2>
<strong>URL:</strong> <a href="http://www.panic.com/coda/">http://www.panic.com/coda/</a>
<strong>Cost:</strong> $99
<strong>Pros:</strong>
I used this editor for many years, writing everything from basic HTML/CSS to full apps using Drupal and Zend Framework. Overall the interface is great and very intuitive.  The file browser is wonderful, better than all the other IDE's tested, you can easily duplicate and otherwise mess around with your file structure without leaving the IDE (I use duplicate file a lot). For some reason a lot of IDE's have a crappy file interface.

SVN integration is implemented fairly well but Coda does not come with a file compare tool, so to use that you need the OSX developer tools, once installed works great. 

The editor for HTMl/CSS/JavaScript is basic and works.

<strong>Cons:</strong>
Coda is a basic editor and lacks a lot of the features you need on a more complex project. Code completion works for standard HTML/CSS but is way too basic for Javascript. I could not get code completion to work with any external libraries, either jQuery or Zend Framework. This might be possible through hacks etc but it was not supported natively.

Coda (as of writing) only supports SVN, so GIT is not an option (at least not natively).

There are other features that Coda has that I never used, like sharing and the code hints. The code navigator (structure) is also too basic to be useful.


<strong>Recommendation:</strong>
I used Coda for many years as my primary IDE, however as the projects I worked on became more complex I felt Coda was actually holding back my development. It was Coda's lack of GIT integration and "real" PHP code completion that prompted me to start looking at other IDE's. 

Overall Coda is great for basic HTML/CSS and I still use it for this purpose. However on a project with non-trivial Javascript or any PHP I would look elsewhere. 

<h2>Textmate</h2>
<strong>URL:</strong> <a href="http://macromates.com/">http://macromates.com/</a>
<strong>Cost:</strong> $56
<strong>Pros:</strong>
Textmate is incredibly customizable, and if you like color themes, there are a ton out there. Textmate relies heavily on bundles to add functionality. So if you need any additional version control systems and/or language support that is not native, you grab a bundle and off you go. Basic code completion worked relatively well however you mile may vary depending on what frameworks/external libraries you use. jQuery was a bit funky, that might have been due to the bundle I used and I never got Zend Framework code completion to work. 

<strong>Cons:</strong>
As I mentioned before I never got the Textmate code completion really working with jQuery or Zend Framework, this might have been my failing but honestly this stuff should be easy.

GIT integration worked via a bundle (not sure which one I used) but the interface was klunky, I still had to use the terminal.

Customization and key commands are great but not intuitive and there is a steep learning curve.

<strong>Recommendation:</strong> 
Whenever I go to a Javascript meetup or watch a front-end presentation online, tons of people use Textmate and that's why I first tried it. However in my experience it was not a very good IDE. Textmate explicitly states that it is not an IDE <em>"TextMate is not an IDE but by using its powerful snippets, macros, and unique scoping system, it can often provide features that even a language specific IDE lacks."</em>

That being said, I got frustrated trying to get everything working.. things I expected to run out of the box like GIT, did not.. and when they were installed things did not feel integrated. If you have the time, textmate can be a pretty powerful tool but for me, it was too klunky and too much of a pain to get setup the way I wanted it.


<h2>Aptana 2</h2>
URL: <a href="http://www.aptana.com/">http://www.aptana.com/</a>
Cost: Free

<strong>Pros:</strong>
It's Eclipse.

<strong>Cons:</strong>
It's Eclipse.

<strong>Recommendation:</strong>
I really tried to love Aptana. Aptana was the first IDE that I got Zend Framework code completion working. Then I upgraded to a new version, everything went to pot, and  I abandoned Aptana after that.

Aptana at it's core is Eclipse with a bunch of Aptana developed tools added on. These add support for HTML/CSS/JS code assist, JS debugging, FTP/SFTP deploying etc. All these things work, but they do not feel integrated... Aptana always feels like a java ide with some front end stuff added on ... because that's exactly what it is.

A good example are the options that eclipse has (colors, editor settings etc) there are about a million of these.. and as a front end developer you only need some of them. Lot's of Eclipse baggage.

PHP support is provided by PDT, Aptana used to bundle their own PHP plugin but this was removed in Aptana 2 and might be added back in Aptana 3. In either case the PHP code support was OK but it's buggy. 

To me Aptana is way too much and way too much that has nothing to do with front end web development. Things might change in Aptana 3 but for now this is not an IDE I would recommend.



<h2>PhpStorm</h2>
URL: <a href="http://www.jetbrains.com/phpstorm/">http://www.jetbrains.com/phpstorm/</a>
Cost: $99 or $49 if promo is running
<strong>Pros:</strong>
Great support for code completion, things tend to work out of the box. If you have jQuery or Zend in your project or path, PHP storm just finds it.. and indexes it. Code completion even works with file paths and with image sizes. So after inserting an image you can use code completion to fill out the width and height. Whoah an IDE that actually makes web development easier, very nice!! 

PHP support in my experience was flawless (used on both a Wordpress project and a Zend Framework project).

Version control is tightly integrated, GIT integration is well done. Never had to use the console.

Lots of "helpers" specifically for front end devs, great CSS editor.

<strong>Cons:</strong>
PHPstorm is a java app so it will run in windows/linux/osx. On OS X it runs fine except it's memory usage tends to increase hour by hour, eventually I restart it... especially if I have photoshop or another memory heavy app open.

The file manager is less than ideal, I often use "reveal in finder" and do copying and other file operations outside of the IDE.

The project creation process has a small learning curve, not very intuitive but also not a deal breaker. One thing I do not like, there is no master list of projects you have created, there is a list of recent projects... but I am not sure if this lists everything.

<strong>Recommendation:</strong>
Best front-end IDE out there and probably the best PHP IDE.  Actually feels like they used Front End Web Development use cases when adding features. 



<h2>Conclusion</h2>
Both Phpstorm and Coda feel like they were created specifically to make the lives of front end developers easier, and it shows. PhpStorm is the stronger IDE of the two, and I highly recommend it. It has a lot of features that make your life easier, everything feels integrated and nothing is overwhelming. So for HTML/CSS/Javascript/PHP I would (and do) use PhpStorm.

Please do share your opinions in the comments and if you have any other IDE suggestions please let me know.



