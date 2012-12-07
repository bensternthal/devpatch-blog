title: Painless EOT Font Generation With FontSquirrel
author: Benjamin Sternthal
date: 2010-02-03
template: article.jade

So you want to use @font-face to add some fancy fonts to your site. Well there is that pesky problem of IE needing a specific font type. Until recently you had to use Microsoft's WEFT tool to generate the right files. Personally I'd rather stick needles into my eyeballs than use this awful program, luckily some online tools have sprung up to ease the pain.

<span class="more"></span>

[Font Squirrel](http://www.fontsquirrel.com) has a great online conversion tool that handles generating the fonts/CSS and everything for you. All you need is the TrueType or OpenType version of the font.


[http://www.fontsquirrel.com/fontface/generator](http://www.fontsquirrel.com/fontface/generator)

It will even base64 encode the font, allowing you embed the entire font into your CSS (rather than having a file) to avoid the "text flashing/switching" that can occur.

Be aware that you will need to encode all variants of the font you want to use, including bold/italic so keep an eye on your file size.
