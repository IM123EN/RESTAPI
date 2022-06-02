const express=require("express");

const foodRouter=express.Router();


const Food=require("./routes/Models/food");


foodRouter.post("/add",async(req,res)=>{
    try {
        const newFood = new Food(req.body);
        const result= await newFood.save();
        res.send("food added successfly");
        
    } catch (error) {
      console.log(error);  
    }
});
foodRouter.get("/",async(req,res)=>{
    try {
        const result= await Food.find();
        res.status(200).send({foodlist:result, msg:"all food"});
    } catch (error) {
        console.log(error);
    }
});


foodRouter.get("/:id",async(req,res)=>{
    try {
        const result= await Food.findById({_id:req.params.id});
        res.status(200).send({searchedfood:result, msg:"food"});
    } catch (error) {
        console.log(error);
    }
});
foodRouter.delete("/remove:id",async(req,res)=>{
    try {
        let result= await Food.findByIdAndDelete({_id:req.params.id});
        res.status(200).send("user deleted");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});
foodRouter.put("/:id",async(req,res)=>{
    try {
        let result= await Food.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send("success");
    } catch (error) {
        console.log(error);
    }
})






module.exports=foodRouter;