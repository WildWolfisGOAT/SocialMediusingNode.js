const http = require('node:http');
const fileScan =require('node:fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'html'});
    if(req.url==='/'){
        let fileresp1 = fileScan.readFileSync('./homelogin.html');
        let finalfile1 = fileresp1.toString();
        res.write(finalfile1);
    }
    else if(req.url==='/register'){
        let fileresp2 = fileScan.readFileSync('./register.html');
        let finalfile2 = fileresp2.toString();
        res.write(finalfile2);
    }
    else if (req.url==='/dashboard'){
        let fileresp3 = fileScan.readFileSync('./dashboard.html');
        let finalfile3 = fileresp3.toString();
        res.write(finalfile3);
    }
    else if(req.url==='/profile'){
        let fileresp4 = fileScan.readFileSync('./profile.html');
        let finalfile4 = fileresp4.toString();
        res.write(finalfile4);
    }
    else{
        res.write('<html><h1>Error 404 Page nahi mila</h1></html>')
    }
    res.end();
}).listen(8080);