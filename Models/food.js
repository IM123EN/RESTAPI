const mongoose=require("mongoose");






const schema=mongoose.Schema;

const foodSchema=new schema({
    nom:String,
    price:String,
    calories=Number,
    cooked: {type:Boolean, default:false},
});

const Food = mongoose.model('food', foodSchema);
module.exports=Food;