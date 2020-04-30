function makeLinkFile(url) {
    var extention = url.replace(/^.+\.([^.]+)$/, '$1')
      , targetTag = document.getElementsByTagName('head')[0];
    if (extention == 'js') {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = url;
        scriptTag.async = false;
        if (arguments.length > 1) {
            scriptTag.onload = arguments[1];
        }
        targetTag.appendChild(scriptTag);
    }
    if (extention == 'css') {
        var linkTag = document.createElement('link');
        linkTag.type = 'text/css';
        linkTag.href = url;
        linkTag.rel = 'stylesheet';
        linkTag.media = 'screen';
        targetTag.appendChild(linkTag);
    }
}

@Example 
//Add a local file to the head
makeLinkFile('/content/mycssfile.css');
makeLinkFile('/content/mjssfile.js');

@Example
//Check if JQuery is loaded and if not load a cdn version
if (typeof jQuery == 'undefined') {
    makeLinkFile('https://code.jquery.com/jquery-3.3.1.min.js');
}
