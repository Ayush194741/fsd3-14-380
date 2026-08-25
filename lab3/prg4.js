import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url=='/product'){
        res.end(`<h1>Mobile Phone</h1>
                 <h2>Price: 25000</h2>
                 <p>Discout: 5%</p>
                 <a href='#'>Buy Now</a>
                 `);
    }
    else if(req.url=='/cart'){
        res.end("<h2>cart Page</h2>");
    }
    else if(req.url=='/checkout'){
        res.end("<h2>checout page</h2>"
                 );
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404, Not found</h1>");
    }
    console.log("welcome to the club");
})

server.listen(4444,()=> console.log("Server is intitalizing"));