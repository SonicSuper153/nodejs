import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => { 
    // res.setHeader('Content-Type','text/html');
    // res.statueCode = 404;
    
    res.writeHead(500, { 'Content-Type': 'text/html'})
    res.end('<h1>vdfgh</h1>');
});

app.post('/users',() => {})

server.listen(PORT, () => {
    console.log(`sERVER RUNNING ON ${PORT}`)
});
