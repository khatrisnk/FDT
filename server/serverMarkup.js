export const markup = (markup) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>FDT - Pro Wrokflow</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = {}</script>
        </head>
        <body>
            <div id="app">${markup}</div>
        </body>
    </html>
    `;