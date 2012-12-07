title: Load Routes From Routes.ini Config File In Zend Application Bootstrap
author: Benjamin Sternthal
date: 2010-02-10
template: article.jade

I spent waaaay to many hours trying to load routes via a config file in Zend Framework 1.10 and I think this might be a problem with the documentation I was following on the Zend Framework site. More on that later, let's get to my solution first.

Here is the use case I am addressing: _*I want to store routes in a .ini file and have this file loaded via the Application Bootstrap. Zend Application allows me to store these in the application.ini file but I have a large number and want to store them separately.*_

<span class="more"></span>

First create your `routes.ini` file:



```ini
[production]
routes.linkA.route = "linkA"
routes.linkA.defaults.controller = "linkB"
routes.linkA.defaults.action = "linkBAction"
```

Where **linkA** is the incoming route and **linkB** is the outgoing route


New let's add the function to load this file in the Bootstrap. Add the following to your `boostrap.php`:

```php
protected function _initRewrite() {
    $front = Zend_Controller_Front::getInstance();
    $router = $front->getRouter();
   
    $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/routes.ini', 'production');      
    $router->addConfig($config,'routes');
} 
```

That's it, everything should be working :-)

The above use case is addressed in the Zend Framework Documentation but I could not get their example to work:

[http://framework.zend.com/manual/en/zend.controller.router.html](http://framework.zend.com/manual/en/zend.controller.router.html)


>Using Zend_Config with the RewriteRouter
>Sometimes it is more convenient to update a configuration file with
>new routes than to change the code. This is possible via
>the addConfig() method.
>&nbsp;
> . . .
>&nbsp;
>$config = new Zend_Config_Ini('/path/to/config.ini', 'production');
>$router = new Zend_Controller_Router_Rewrite();
>$router-&gt;addConfig($config, 'routes');


No matter how hard I tried I could not get the above to work. It is very simple code but there are no instructions on where this can/should be run. Maybe this can't be run from the bootstrap? I even wrote a plugin and but no matter what I tried I could not get this to work using  **Zend_Controller_Router_Rewrite()**.

It is also possible that I completely mis-understood the documentation and got all mixed up, I struggle with Zend Documentation sometimes.

If you figure out how to do this using **Zend_Controller_Router_Rewrite()** please leave a comment it was driving me nuts!
