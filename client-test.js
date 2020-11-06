const webContent =
    `<html>

    <head>
        <script>
            console.log('loading script');
            var script = document.createElement('script');
            script.src = 'file://C:/Users/feren/Projects/webview-sandbox/client-test-in-webview.js';
    
            document.head.appendChild(script);
        </script>
    </head>
    
    <body>
        <div id="result"></div>
    </body>
    
    </html>`;

const webview = document.createElement('webview');
webview.setAttribute('nodeintegration', 'true');
webview.setAttribute('nodeintegrationinsubframes', 'true');
webview.setAttribute('enableremotemodule', 'true');
webview.setAttribute('disablewebsecurity', 'true');
webview.setAttribute('webpreferences', 'allowRunningInsecureContent');
//webview.setAttribute('src', 'file://C:/Users/feren/Projects/webview-sandbox/webview.html');

webview.src = 'data:text/html;base64,' + window.btoa(webContent);

document.getElementById('webViewPlace').appendChild(webview);