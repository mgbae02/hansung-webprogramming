const express = require('express');
const app = express();

app.use(function(req,res,next){
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
    const paramID = req.query.ID;

    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write(`<div><p>User-Agent:${userAgent}</p></div>`);
    res.write(`<div><p>Param name:${paramName}</p></div>`);
    res.write(`<div><p>Param ID:${paramID}</p></div>`);
    res.end();
});

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
});