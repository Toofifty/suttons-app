function selectPage(id) {
    document.querySelector('core-animated-pages').selected = id;
    document.getElementById('drawer_panel').togglePanel();
}

function showNoLinkError() {
    document.querySelector('#nolink').show();
}

function externalOpen(site) {
    var frame = document.createElement('iframe');
    frame.src = 'myapp://?params=...';
    frame.style.display = 'none';
    document.body.appendChild(frame);
}

document.onload = function () {
    cordova.exec(null, null, "InAppBrowser", "open", [url, "_system"]);   
}