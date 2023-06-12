const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            // Serve the home.html file
            const filePath = path.join(__dirname, 'pages', 'home.html');
            serveHTMLFile(filePath, res);
        } else if (req.url === '/api/data') {
            // Serve API data
            serveAPIData(res);
        } else if (req.url.startsWith('/pages/')) {
            // Serve HTML files
            const pageFilePath = path.join(__dirname, req.url.slice(1));
            serveHTMLFile(pageFilePath, res);
        } else if (req.url.startsWith('/styles/')) {
            // Serve CSS files
            const cssFilePath = path.join(__dirname, 'styles', req.url.slice(8));
            serveStaticFile(cssFilePath, 'text/css', res);
        } else if (req.url.startsWith('/media/')) {
            // Serve media files
            const mediaFilePath = path.join(__dirname, 'media', req.url.slice(7));
            serveStaticFile(mediaFilePath, getContentType(path.extname(mediaFilePath)), res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

function serveHTMLFile(filePath, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}

function serveStaticFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

function serveAPIData(res) {

    const apiData = {
        message: 'Hello, API!',
        timestamp: new Date().toISOString()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(apiData));
}

function getContentType(extension) {
    switch (extension) {
        case '.css':
            return 'text/css';
        case '.js':
            return 'application/javascript';
        case '.html':
            return 'text/html';
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.png':
            return 'image/png';
        default:
            return 'text/plain';
    }
}

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
