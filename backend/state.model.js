var mongoose=require("mongoose");
const Schema =mongoose.Schema;
var State =new Schema({
    StId:{type:Number},
    StName:{type:String}
},
{Collection:"State"}
);
module.exports=mongoose.model("State",State);