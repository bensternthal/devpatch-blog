---
title: Managing CSS and JavaScript files within a Zend Framework App - A Different Approach - View Plugin
author: Benjamin Sternthal
date: 2010-02-05
template: article.jade
---

Reading this article on the Zend Framework Blog <a href="http://devzone.zend.com/article/11760-Managing-CSS-and-JavaScript-files-within-a-Zend-Framework-App">Managing CSS and JavaScript files within a Zend Framework App</a>, speaking personally as a front-end developer I would use a different system.

In my approach loading up different CSS/JS files per controller is the exception not the rule. We load additional CSS/JS when we need to do something very special, for example a page with a flash file uploader. 

I also think loading dependent files outside of the controller  can make it difficult for other developers to work on your code.  You can't just look at the controller to see what other CSS/JS dependencies are being used, you need to check the file system.

**My approach is a View Plugin that manages a standard set of CSS/JS for every layout. Additional CSS/JS if needed are added in the controllers.**

Onto the code!

<span class="more"></span>


##View Plugin Example
Here is my example view plugin from a recent project: 


```php
class Plugin_View extends Zend_Controller_Plugin_Abstract {
    public function routeStartup() {
        
        $view = new Zend_View();
        
        $view->doctype('XHTML1_STRICT');
        $view->headTitle()->setSeparator(' - ')->append('FooBar.com');
        $view->headMeta()->appendHttpEquiv('Content-Type','text/html; charset=utf-8');
        $view->headLink()->appendStylesheet('/css/style.css');
        
        $view->addHelperPath('ZendX/JQuery/View/Helper/', 'ZendX_JQuery_View_Helper');
        $view->jQuery()->enable(); 
        $view->jQuery()->uiEnable();  
        
        $view->jQuery()->setLocalPath('/js/jquery/jquery-1.3.2.min.js');
        $view->jQuery()->setUiLocalPath('/js/jquery/jquery-ui-1.7.2.custom.min.js');  
        $view->jQuery()->addStylesheet('/css/smoothness/jquery-ui-1.7.2.custom.css');
        $view->jQuery()->addJavascriptFile('/js/interface-utils.js');
           
        $viewRenderer = new Zend_Controller_Action_Helper_ViewRenderer();
        $viewRenderer->setView($view);  
        Zend_Controller_Action_HelperBroker::addHelper($viewRenderer);
    }
}
```


The code in an example layout file:

`View.php`

```php
<?= $this->doctype() ?>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>  
  <?= $this->headMeta() ?>
  <?= $this->headLink() ?>
  <?= $this->jQuery() ?>        
  <?= $this->headScript() ?> 
  <?= $this->headTitle()?> 
</head> 
<body>
```

As you can see from the above code, the Plugin handles everything needed for the HEAD area of the page, and it is all in one place.

##Adding Additional CSS/JS From A Controller

If you need to add additional CSS/JS files, you can now do this in the controller - when needed. In the following example I need to add the dependencies for "Uploadify" a flash based multifile uploader.

`UploadController.php` 


```php
class UploadController extends Zend_Controller_Action {

    public function init() {    
    
    }

    public function indexAction() {
        $this->view->headLink()->appendStylesheet('/uploadify/uploadify.css');
        $this->view->headScript()->appendFile('/uploadify/swfobject.js');
        $this->view->headScript()->appendFile('/uploadify/jquery.uploadify.v2.1.0.min.js');          
    }
}
```

The above inserts the dependencies into the layout for this controller action only. Sweet!!

From my perspective this approach works better and I think from a code organization structure it is cleaner. Any special CSS/JS can be added on a per-controller or  per-controller-action basis and it will be very clear to other developers what is being loaded and where.


