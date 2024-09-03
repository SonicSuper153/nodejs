import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => { 
    // res.setHeader('Content-Type','text/html');
    // res.statueCode = 404;
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end('<h1>vdfgh</h1>');
});

app.post('/users',() => {})

server.listen(PORT, () => {
    console.log(`sERVER RUNNING ON ${PORT}`)
});
