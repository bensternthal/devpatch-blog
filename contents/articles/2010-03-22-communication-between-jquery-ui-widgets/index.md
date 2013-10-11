---
title: Communication Between jQuery UI Widgets
date: 2010-03-22
template: article.jade
---

When writing user interfaces using jQuery I often need widgets to interact with each other. For example, an ajax status widget that displays a spinner when an ajax call starts, and displays a status message when the ajax call completes. This widget should be accessible by whatever other widgets are on the page.

In the past I directly called methods from each widget, but this creates a lot of "glue code" and dependencies.  I had recently watched this <a href="http://developer.yahoo.com/yui/theater/video.php?v=zakas-architecture">YUI Theatre video on Scalable Javascript Application Architecture</a> and wanted to apply the following to my jQuery UI Widgets:

<span class="more"></span>

* Widgets should be able to live on their own
* Keep everything loosely coupled


##Approach
Given the above I decided to use jQuery's custom events to enable publish/speak and subscribe/listen into my widgets. Each widget would publish certain events and subscribe to others. This approach effectively decouples the widgets and allows them to function independently.

The two key jQuery methods:

* <strong><a href="http://api.jquery.com/bind/">bind</a></strong> - Bind will perform the "listen" or "subscribe"
* <strong><a href="http://api.jquery.com/trigger/">trigger</a></strong> - Trigger will perform the "speak" or "publish"

##Example Code Subscribe/Listen
Note I am using <strong>jQuery 1.4.2</strong> & <strong>jQuery UI 1.8rc3</strong>.

The following is a bare bones widget and has most of the code removed so it can serve as an example. This widget has two bound custom events <strong>dpui:ajaxStart</strong> & <strong>dpui:ajaxEnd</strong> (DPUI is just my namespace for events "DevPatch UI"). Whenever the custom events are triggered the widget will output text to a firebug console.

<strong>UPDATED March 22, 2010</strong>
I updated my custom event format to <em>namespace:eventName</em>.

<strong>UPDATED July 20, 2011</strong>
Removed unnecessary jquery.

```javascript
$(function(){
    $.widget("ui.ajaxStatus", {
        options: {

        },
        _create : function() {
            var self = this;

            self.element.addClass("dpui-widget")

            self.element.bind("dpui:ajaxStart", function(e) {
                console.log("ajax start");
            });

            self.element.bind("dpui:ajaxEnd", function(e) {
                console.log("ajax end");
            });
        },
        destroy: function(){
            $.Widget.prototype.destroy.apply(this, arguments);
        },
    });
});
```

##Example Code Speak/Publish
Below is the code that would be in another widget.

```javascript
$(".dpui-widget").trigger("dpui:ajaxStart");
```

The class .dpui-widget is my namespace class that is applied to every UI widget with speak/listen. If you wanted to do this globally you could use:
```javascript
$(document).trigger("dpui:ajaxStart");
```

Important to note here that I am not calling <strong>dpui:ajaxStart</strong> on the ajax widget, instead I am triggering this event on a sub-set of document objects. Any document objects that are subscribed to this custom event will have their action triggered.


##Conclusion
I think the above approach solves many of my problems, but I can imagine some issues, especially on larger projects.

If you have additional thoughts or suggestions for a different approach please leave a comment.

The following two blog posts were very helpful and are a good intro to jQuery widgets and event pooling.

<a href="http://bililite.com/blog/understanding-jquery-ui-widgets-a-tutorial/">http://bililite.com/blog/understanding-jquery-ui-widgets-a-tutorial/</a>

<a href="http://www.michaelhamrah.com/blog/2009/12/organizing-javascript-for-event-pooling-with-jquery/">http://www.michaelhamrah.com/blog/2009/12/organizing-javascript-for-event-pooling-with-jquery/</a>


