import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => { 
    // res.setHeader('Content-Type','text/html');
    // res.statueCode = 404;
    console.log(req.url);
    console.log(req.method);
    res.writeHead(300, { 'Content-Type': 'text/html'})
    res.end('<h1>vdfgh</h1>');
});

server.listen(PORT, () => {
    console.log(`sERVER RUNNING ON ${PORT}`)
});