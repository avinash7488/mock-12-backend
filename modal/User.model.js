const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    total_Investment_Amount:Number,
    total_Interest_Gained:Number,
    total_Maturity_Value:Number ,
    is_active:Boolean
},{
    versionKey:false
});

const UserModel=mongoose.model("user",userSchema);

module.exports={UserModel};