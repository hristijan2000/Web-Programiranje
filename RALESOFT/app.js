const http = require('http')
const fs = require('fs')
const port =4000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-type': 'text/html'})
    fs.readFile('osnav.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }else {
            res.write(data)
        }
        res.end()
    })

    res.write('Hello NOde');
    res.end();
})

server.listen(port, function(error){
    if(error){
        console.log('Somthing went wrong', error);
    }else {
        console.log('Server is listening on port' + port);
    }
})