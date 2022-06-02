const mongoose=require("mongoose");




const DBconnect=async()=>{
    try {
        const result= await mongoose.connect("mongodb+srv://IMOU:imen04932298@cluster0.lzgnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("data base mrigla")
    } catch (error) {
       console.log(error) ;
    }
};
module.exports=DBconnect;
