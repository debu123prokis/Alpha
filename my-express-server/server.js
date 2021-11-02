const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.send("<h1>Hello World!!!</h1>");
});

app.listen(4521,function(){
    console.log("Server is running fine at port 4521!!!");
});