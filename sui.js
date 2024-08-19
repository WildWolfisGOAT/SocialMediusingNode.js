let http = require('node:http');
let fileScan=require('node:fs');
const cricketers = [
    {
        'name':'AB De Villiers',
        'type':'Batsman',
        'nation':'South Africa'
    },
    {
        'name':'Ricky Punter Pointing',
        'type':'Batsman',
        'nation':'Australia'
    },
    {
        'name':'Jasprit Bumrah',
        'type':'Bowler',
        'nation':'India'
    },
    {
        'name':'Hardik Pandya',
        'type':'All-Rounder',
        'nation':'India'
    },
    {
        'name':'Andrew Flintoff',
        'type':'All-Rounder',
        'nation':'England'
    }
];
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    let url = req.url;

    if (url === '/cricketers') {
        res.write(JSON.stringify(cricketers))
    } else if (url.startsWith('/cricketers/')) {
        let urlPaths = url.split('/');
        let cric=JSON.stringify(urlPaths[urlPaths.length -1]);
        res.write(`${cric}`);
    }
    res.end();
}).listen(3001);