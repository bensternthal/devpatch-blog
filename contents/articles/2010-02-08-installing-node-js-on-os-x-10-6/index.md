title: Installing Node.Js On OS X 10.6
author: Benjamin Sternthal
date: 2010-02-08
template: article.jade

**Updated May 7 2010, With Version 0.1.94 From GitHub**

Node.js is evented i/o for <a href="http://code.google.com/p/v8/">Google's V8 Server Side JavaScript engine</a>. For me . . . node.js means I can write apps that can handle tons of requests without having to learn/think about threads & locks (all I know about threads is that they are scary and involve big books from O'reilly). 

As a front-end developer the node.js approach is fantastic because I already think in terms of events and I love writing code in JavaScript. 

Installing node.js on OS X is super-easy and the documentation on the <a href="http://nodejs.org/">node.js</a> site is great, but I figured I would write a step-by-step for OS X since I had just installed it for the first time. The node.js install includes Google's V8 JS engine so no need to worry about installing that. 

<span class="more"></span>

##Download and Install Node.JS
Get node.js from either github or download from the node.js site. If you need GIT for OS X you can grab the code from google <a href="http://code.google.com/p/git-osx-installer/">http://code.google.com/p/git-osx-installer/</a> and follow <a href="http://help.github.com/mac-git-installation/">GitHub's install instructions</a>.

<a href="http://github.com/ry/node">http://github.com/ry/node</a>

<a href="http://nodejs.org/#download">http://nodejs.org/#download</a>

##Build & Install
Build node.js by following the instructions in the readme or just run:

```
 ./configure
 make 
 make install
```

At this stage you may get an error about a missing compiler (I did). This can be caused by outdated developer tools or completely missing developer tools. In my case I did not run the Xcode install from my Snow Leopard Disc when I upgraded. So if you get this error grab your Snow Leopard DVD, put the kettle on, and run the Xcode installer. 

You may also get a permissions error running make install, in this case just **sudo make install**.

##Test Server With Hello World

Copy the test server code from below (taken directly from<a href=" http://nodejs.org"> http://nodejs.org</a>):

`server.js`

```javascript
var sys = require('sys'),
    http = require('http');

    http.createServer(function (req, res) {
        setTimeout(function () {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World\n');
        }, 2000);
    }).listen(8000);

sys.puts('Server running at http://127.0.0.1:8000/');
```

Run it with: `node example.js`


And go the the following url in a browser: `http://127.0.0.1:8000/`


You should see the text "hello world". If you do congrats, node.js is installed!

![image](Screen-shot-2010-02-07-at-11.41.06-AM.png)

