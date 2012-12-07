--- 
layout: post
title: Should You Extend or Wrap jQuery UI 1.8 Widgets
date: 2010-05-21
comments: true
categories: JavaScript JQuery
wordpress_id: "807"
wordpress_url: http://www.devpatch.com/?p=807
---
As part of a recent project I was tasked with creating a set of custom jQuery UI widgets. When specing my  widgets I discovered almost all would use some existing widget features, like sortable.<strong> I found myself trying to decide if I should extend existing widgets or somehow wrap the existing widgets with my custom code?</strong> I think this is a common question.

The <a href="http://jqueryui.com/docs/Developer_Guide">jQuery UI widget factory</a> provides a method to inherit one and only one widget. For example If you look at some of the jquery ui widget source code (draggable, droppable, sortable) you will notice that most inherit <strong>mouse</strong>. However when writing my own widgets I found that I never needed to do any of the things inheritance was intended for, such as overriding methods.

For me, I just needed some of the default widget behaviors (like sortable) applied to my own custom code.<strong> I decided to wrap the existing widget behavior rather than extend.</strong>

So how does this work? Let's take the example of a page selector.

<!--more-->

My hypothetical page selector widget needs to do the following:
<ul class="disc">
	<li>User can click to select a page</li>
        <li>User can reorder pages</li>
        <li>Selecting or Reordering triggers an ajax save</li>
        <li>I want to append the draggabe handle in the JS</li>
</ul>

As you can see there is a mix of behavior, the reordering is boiler plate sortable, but appending the draggable handle and other features are all custom.

A quick visual:

{% img /images-posts/2010/05/page-selector.png 455 95%}

So for this widget I want to use sortable to handle the sorting, but everything else will be custom code.

Here is the base/empty code for our widget:
{% codeblock base.js%}
$(function(){
    $.widget("ui.pageSelector", {
        options: {
        
        },

        _create : function() {

       },

        _destroy : function() {

       }

     }); 
});
{% endcodeblock %}

<h2>Options</h2>
Our first challenge are the options. We have two sets of options, the options for sortable and the options for pageSelector (our custom widget). You can handle options as either one object or two.

<h3>One Object</h3>
{% codeblock jquery.ui.pageSelector.js %}
$.widget("ui.pageSelector", {
    options: {
        customName : "customValue",
        items: '.sort-item',
        handle:'.sort-handle',
        containment: '.page-slider-container',
        placeholder: 'sort-item-placeholder ui-state-highlight',
        forcePlaceholderSize: true,
        opacity:'0.6',
        revert:'100',
        delay:'100'
    },
{% endcodeblock %}

In the above example options for the wrapped widget and the custom widget are all together (<strong>customName</strong> is for the pageSelector widget). I think there are significant problems with this approach, for example when we instantiate sortable we pass it options it does not need, and I can imagine name conflicts (if you are not careful).

<h3>Two Objects</h3>
{% codeblock jquery.ui.pageSelector.js %}
$.widget("ui.pageSelector", {
    options: {
        customName : "customValue",
        sortableOptions: {
            items: '.sort-item',
            handle:'.sort-handle',
            containment: '.page-slider-container',
            placeholder: 'sort-item-placeholder ui-state-highlight',
            forcePlaceholderSize: true,
            opacity:'0.6',
            revert:'100',
            delay:'100'
        }
    },
{% endcodeblock %}

I like the second approach better as we can handle the sortable options separately. Later when we invoke sortable we can pass just the options it needs.

<h2>Instantiating The Wrapped Widget</h2>
In the <strong>_create</strong> method we can now instantiate the sortable, passing in the sortableOptions object:

{% codeblock jquery.ui.pageSelector.js %}
_create : function() {
    var self = this, o = this.options, e = this.element;

    e.sortable(o.sortableOptions);
{% endcodeblock %}

<h2>Hooking Into The Wrapped Widget</h2>
Now that our widget is instantiated we can start adding the widget specific behavior. In this example we want to trigger a save on the wrapped sortable's event <strong>sortupdate</strong>. To do this we can bind that event in our <strong>_create</strong> method:

{% codeblock jquery.ui.pageSelector.js %}
_create : function() {
    var self = this, o = this.options, e = this.element;

    e.sortable(o.sortableOptions);

    e.bind("sortupdate",function(event,ui){
        self._saveSortOrder();
    })
{% endcodeblock %}

You can also invoke methods on your sortable using this syntax:
{% codeblock foo.js %}
e.sortable('serialize');
{% endcodeblock %}

The above approach has worked really well for me and I was able to create custom widgets that encapsulated the behavior I needed.

<h2>Option Based Function Callbacks</h2>
Semi-related: I discovered that some "widgets" that you might want to wrap (say non jQuery UI like tinyMCE) allow callback functions to be defined as an option. This can cause problems if you want to invoke a function from within your widget.

For example
{% codeblock jquery.ui.pageSelector.js %}
$.widget("ui.pageSelector", {
    options: {
        customName : "customValue",
        someFooOptions: {
            save_callback : function () {
             //I want to do something here!
            },
        }
    },
{% endcodeblock %}

In the above example I want the save behavior to be handled by my custom widget, but the code I am wrapping only provides a callback method. You can't invoke widget methods from the options since there is no scope.

My solution was to use a trigger bound to this widgets instance:

{% codeblock jquery.ui.pageSelector.js %}
$.widget("ui.pageSelector", {
    options: {
        customName : "customValue",
        someFooOptions: {
            save_callback : function (id) {
                // Trigger Custom Event
                $(id).trigger("my:customSaveEvent");
            },
        }
    },

. . .
   _create : function() {
        var self = this, o = this.options, e = this.element;

        $(e).bind("my:customSaveEvent", function(){
           //do stuff
        }),

{% endcodeblock %}

In this example I trigger the "my:customSaveEvent" in the callback. This event is bound to behavior in my widget. For this to work you just need to somehow get the id of the widget passed in (or some other identifier). You want to be careful not to trigger the event on the entire document as you may have multiple widgets instantiated.


