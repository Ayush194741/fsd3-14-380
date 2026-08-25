import http from 'http';

const server = http.createServer((req,res)=>{
    res.end("<h2>Welcome to Server Side</h2>");
});


server.listen(5000,()=>{
    console.log("Server is running");
});

