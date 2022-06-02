const express =require("express");

const app=express();
const DBconnect=require("./routes/dbconnect");

DBconnect();

app.use(express.json());




const port=5000;

 //app.use("/food", require("./routes/food"));
app.listen(port,(error)=>{
    error?console.log(error):console.log("server ready")
})