const app = require('electron').remote.app;
const basepath = app.getAppPath();


// This html content is the same as webview.html
const webContent =
    `<html>

    <head>
    </head>
    
    <body>
        <div id="result" style="background-color: red;">JS not working!</div>
        <script src="file://${basepath}/client-test-in-webview.js">
        </script>
    </body>
    
    </html>`;

const webview = document.createElement('webview');
webview.setAttribute('nodeintegration', 'true');
webview.setAttribute('nodeintegrationinsubframes', 'true');
webview.setAttribute('enableremotemodule', 'true');
webview.setAttribute('disablewebsecurity', 'true');
webview.setAttribute('webpreferences', 'allowRunningInsecureContent');

// If we load the webview content this way, the webview will work with any electron version
//webview.setAttribute('src', `file://${basepath}/webview.html');

// If we load the webview content this way, the webview wont work with electron 9.* or 10.*.
webview.src = 'data:text/html;base64,' + window.btoa(webContent); 

document.getElementById('webViewPlace').appendChild(webview);