+++
date = 2025-02-19T18:57:31+01:00
description = ''
draft = true
lastmod = 2025-02-19T18:57:31+01:00
publishDate = 2025-02-19T18:57:31+01:00
tags = ['', '']
title = 'On client side styling'
+++

# Luca, why does your site look like shit?

https://www.w3.org/TR/CSS/#css
https://www.w3.org/TR/CSS2/
https://www.w3.org/TR/css-ui-3/

Well, https://www.w3.org/Style/2011/CSS-process.en.html
CSS1 https://www.w3.org/TR/2008/REC-CSS1-20080411/

Warum ich (aus Protest) keinen CSS code verwende.

Digitaler, neuer Brutalismus.

https://pedantic.software/fxc/blog/why_there_is_no_css_on_my_website.html
https://kamnuandej.neocities.org/blogentries/webdesign

_If you've just visited this website from wherever you are on the Internet, chances are the first thing that you think when you saw the landing/home page is "this website looks so frigging ugly!". You're absolutely right and you should be thinking that way._
_This website is intentionally ugly, and it will remain that way as long as this website is up and running.This website's goal isn't only just to act as an archive of my train of thoughts, but also to act as an anti-design - a silent protest in the sea of Modern Web Design which was filled to the brim with form-over-functions and near unusability._

---

Ich möchte eine barrierefreie Seite mit einem sinnvollen Standard mit überschreibbaren client-site styling. Webseite kann
fragen, ob sie ihren Style verwenden kann. Die Seite muss aber auch ohne custom styling funktionieren.
Stand von HTML und CSS ist völlig verfahren. Das nicht symtantische HTML Standard ist, sondern jeder sein eigenes Süppchen
kochen kann und niemand schreit, wenn HTML wie scheiße aussieht… \*rambling\*

It did not always look this empty.

There is nothing inherently wrong being able to style a website for it's own need.
Branding or whatever.

It's absurd that each website needs to implement foreground and background color,
typeface and font size, spacing between lines, width of a line, _should I continue_?
If you ever designed a website including CSS _and actually cared_, you know what I'm talking about.

I spend hundreds and hundreds of hours studying UI/UX and accessibility patronizing users with what I came to conclusion
is the most optimal way I can display my **text**. I never tried to design my site to distract the user from what it's about:
Reading articles.

Brutalist & minimalist: keep complexity low but don't hide complexity.

https://en.wikipedia.org/wiki/Brutalist_architecture
https://www.permacomputing.net

Doing UI/UX and accessiblity right is much harden than one would think or like.
The Web Content Accessibility Guidelines are a good start. But should every user study this, study color theory, perception of text
the quirks of web and many more topics? I don't think it should be needed.

Vgl. Gopher/Gemini: statt auf jeder Seite neu orientieren, sollte man selbst
festlegen können, welches typeface etc. festgelegt wird.

* consistent styles across websites
* websites load slowly - they don't respect my bandwidth
* Make it easy for people who don't see very well for one of 1000 reasons.
* e.g. let them use open dyslexia 1.3em with AAA contrast
* minimalism/KISS/Keep complexity down.
* no re-orientation needed
* This assumes web designers know better user preferences about styles, including color scheme, font family, and size.
  This is not true however, and I wish web designers respected my preferences.
* With a line of HTML code, you even get light-dark mode auto-switch.
* primarily used for reading stuff
* No need to use 20 Million line monsters to read my frickin text
* --> you can use a browser created by a single person
* Dynamic loading and many other factors make downloading a single website with the text much harder than it should need to be.

Did you ever try gopher or gemini?
That's what it's about. Reading and consuuming. Want to watch a video or have a look at my images? Download them and
view at them at your preferred image viewer.

Ever played minecraft? You can ask the user if they want to install a custom texture pack.
You could implement a flag to overwrite styles, if the user wants to.
But the site should be able to be readable without applying custom styles.
Otherwise it uses a great default stylesheet with great accessibility.

This would make creating accessibility much easier. Or rather, people wouldn't mess it up.

I am explixitly not against embedding scripts, logging in etc. It's nice to create interactive web applications, forums etc.
Tho, for many sites I really ask myself when did we go into the wrong direction not even providing the user the option to e.g. use the terminal to send money from your bank to another user.

```rc
; bank/send 30.81 DE12398749172893 --description "Pizza evening"
⣟ Please verify this transaction on your second device.
```

or something like that.

## HTML won't go anywhere

Vorschlag wäre, semantisches, striktes HTML zu verwenden. Seiten sollten einheitlicher werden.
Du wirst einen linter auf eine HTML Seite, die daraufhin ausspruckt:

```
* Purrr site is shit.
* Put your frickin main menu navigation into a <header><nav><ul><li><a>links
* Dis stupid
* Dis also stupid
* Really no need to support IE-7.
```

or something like that.

## Something even better

HTML works. But it's ugly. What about a simple markup that's not a XML Frankenstein?
`text/html6` oder `text/asciidoc` oder so :)

In theory, reading mode in "modern" Browser would at least unify the look of websites. But, because websites are created the way they are, Reading Mode doesn't work very well for complex sites - and even for simple, "correct", plain HTML5 sites without dynamic content, this does not work very well. 

warum ich es falsch halte, das Webseiten CSS einbetten. Meine Argumentation ist, dass standardmäßig ein barrierefreies, gut aussehendes, einheitliches Aussehen für alle Webseiten gelten soll und auf semantischem, strikem und klassenloses HTML basiert. Und nicht Webseiten <div><div><div><div><div>text</… machen.
Ich möchte Webseiten, die den Nutzenden respektieren - mit möglichen körperlichen Behinderungen, ohne schnelles Internet oder ohne sich auf jeder Seite neu orientieren zu müssen. Welche zwei Seiten verwenden den gleichen Grauton für einen Darkmode? Standards? Fehlen.
Wenn ich Open Dyslexia verwenden möchte in Schriftgröße 26 mit Web Content Accessibility Guidelines Kontrast AAA, dann soll das für alle Seiten gelten.
Ich sehe das Web, wie es im Moment aussieht, als ein großes Problem an. Ich glaube, ich hatte dazu hier ja schonmal rumgenörgelt.
Als Anti-Design habe ich CSS von meiner Seite verbannt. :D
Für alles weitere, siehe blog post (WIP).

