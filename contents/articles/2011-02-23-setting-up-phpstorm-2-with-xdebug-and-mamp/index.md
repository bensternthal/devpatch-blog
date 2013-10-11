---
title: Setting up PhpStorm 2 with XDebug and MAMP
date: 2011-02-23
author: Benjamin Sternthal
template: article.jade
---

Getting XDebug setup and working with PhpStorm 2 is relatively painless but I thought I would add some hints I found when setting this up. These instructions assume you are debugging a web based application using MAMP as your server environment.

<span class="more"></span>

##Turn on Xdebug For MAMP
Luckily, the version of MAMP that I have, (and presumably yours too) comes with xdebug so no need to download anything. You can confirm you have everything by making sure you have the xdebug.so file in your php extensions folder (assuming you are using php 5.3).


`MAMP/bin/php5.3/lib/php/extensions/no-debug-non-zts-20090626/xdebug.so`

After confirming the above, the next step is to edit the php.ini file and enable this extension. At the bottom of your php.ini file you should already have an item under xdebug with the correct path. Uncomment this line and add an additional option to enable remote debugging. Note, in the below example I removed the full path to the extension, you should have the full path in your ini file.

```ini
[xdebug]
zend_extension="path/to/xdebug.so"
xdebug.remote_enable=true
```

After editing, save the .ini file and restart apache. You can confirm xdebug is enabled by looking at the output of phpinfo and checking that an xdebug line appears in the credits... as seen in this screenshot.

![image](phpinfo.png)


##Add Browser Shortcuts
We now need to add some "triggers" for starting and stopping debugging. Jetbrains supplies an easy way to do this via bookmarklets. You can generate these by going to <a href="http://www.jetbrains.com/phpstorm/marklets/">http://www.jetbrains.com/phpstorm/marklets/</a> and click generate under the XDebug column, drag these to your bookmarks bar in your favorite browser.

##Setup PHPStorm
The latest PHPstorm (version 2) makes this so easy! Simply go to your PHP project and click the "Start Listening PHP Debug Connections" button in the toolbar.

![image](listen-debug.png)

For testing, just add a breakpoint on a file that you can invoke with a web-browser. You can set a breakpoint by clicking in the gutter.

##Trigger the Debugger
Go back to your browser and load your app in a manner that will trigger the breakpoint. Click the bookmarklet for xDebug start session and refresh. You should see a response in phpstorm, confirming that it is able to listen to XDebug requests.

You are all done!

##Useful Links
The post from jetbrains going into more detail on using their debugger:
<a href="http://blogs.jetbrains.com/webide/2011/02/zero-configuration-debugging-with-xdebug-and-phpstorm-2-0/">http://blogs.jetbrains.com/webide/2011/02/zero-configuration-debugging-with-xdebug-and-phpstorm-2-0/</a>

An outdated video on remote debugging with PHPStorm, there are some good tid-bits at the end concerning code inspection:

<a href="http://blogs.jetbrains.com/webide/2010/08/remote-debugging-in-phpstorm/">http://blogs.jetbrains.com/webide/2010/08/remote-debugging-in-phpstorm/</a>


