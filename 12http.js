const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Welcome to my first node server")
    }
    if(req.url === "/about"){
        res.end("Here's a bit of text about us")
    }
    res.end(
        `<h2> Oops! </h2>
        <p> We could'nt find the page you are looking for </p>
        <a href = "/"> Back Home </a>`
    )
})

server.listen(5000)