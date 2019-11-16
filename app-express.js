var express= require('express');

var app=express();
app.get('/quanghai',(req,res)=>{
 res.send("<h1>hi man</h1>");
})


app.listen(3000, ()=>
{
    console.log("Web server is run");
}
)