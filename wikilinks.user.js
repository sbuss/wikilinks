// ==UserScript==
// @name          Wikilinks
// @namespace     http://github.com/sbuss/
// @description	  Changes the wikipedia section headlines into links.
// @include       http://*.wikipedia.org/wiki/*
// ==/UserScript==

handleTopLevelLinks(document.getElementsByClassName("toclevel-1"));

function handleTopLevelLinks(toplinks) {
    for (var i = 0; i < toplinks.length; ++i) {
        var li = toplinks[i]
        var links = li.getElementsByTagName('a');
        extractAndRewrite(links);
    }
}

function extractAndRewrite(links) {
    for (var i = 0; i < links.length; ++i) {
        var link = links[i];
        var href = link.href;
        var num = link.getElementsByClassName("tocnumber")[0].innerHTML;
        var title = link.getElementsByClassName("toctext")[0].innerHTML;
        var headline = document.getElementById(href.split("#")[1])
        var a = document.createElement('A')
        a.href = href;
        a.innerHTML = num + ". " + title;
        headline.innerHTML = "";
        headline.appendChild(a);
    }
}
