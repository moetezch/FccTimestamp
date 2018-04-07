const express=require('express');
//const bodyParser = require('body-parser')
const moment=require('moment');

const app=express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.get("/",(req,res)=>{

    res.send("Add date");

})

app.get("/:str",(req,res)=>{
    const parameter=req.params.str;
    
if (moment(parameter).isValid()) {
    res.send({
        "unix":moment(parameter).unix(),
        "natural":parameter
    });
}else if (moment.unix(parameter).isValid()) {
    res.send({
        "unix":parameter,
        "natural":moment.unix(parameter).format("MMMM D, YYYY")
    });
}else{
    res.send({
        "unix":null,
        "natural":null}
);
}

})
app.listen(3000);