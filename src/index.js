var http = require("http");

const httpServer = http.createServer(handleServer);

const customer = ({
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
})
let jsondata = JSON.stringify(customer);

function handleServer(req, res) {
    if (req.url === "/") {
        res.end("Welcome to Yash's World")
    }
    else if (req.url === '/welcome') {
        res.writeHead(200, { "Content-type": "text/plane" })
        res.end('Welcome to Dominos!')
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(jsondata)
    }
    else{
        res.writeHead(404)
        res.end("404 Page Not Found")
    }

}
httpServer.listen(8081, (err) => {
    if(err) throw err;
    console.log("Server Working")
})
module.exports = httpServer;