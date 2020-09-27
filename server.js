const express=require('express')
const app=express()

var datetime = require("node-datetime");
var dt = datetime.create(new Date());
var day = dt.format("W");
var hour = dt.format("H:M");
var sunday = "Sunday";
var saturday = "Saturday";
var MaxHour = "17:00";
var minHour = "09:00";

app.use(express.static(__dirname + '/folders html'))
app.get('/home',(req,res)=>{
    if(hour<MaxHour && hour>minHour && day!=sunday && day !=saturday) {
    res.sendFile(__dirname + '/folders html/home.html')
    }
    else {
        res.send(" working time (Monday to Friday,  from 9 to 17) ")
    }
})


app.listen(5000, function (err){
     if(err) console.log('server not running') 
     else console.log("server is running on port 5000");
 });
 
