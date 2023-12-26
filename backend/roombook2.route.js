const express =require("express");
const roomRoute2=express.Router();
let RoomTypes=require("./roomtype.model");
const bodyparser= require("body-parser");

// Add New Room Type Code
roomRoute2.route("/addroomtype2").post((req,res)=>{
    let room=new RoomTypes(req.body);
    room.save().then(room=>{
        res.status(200).json({"room":"Room Added Successfully"+room});
    }).catch(err=>{
        res.status(400).send("Unable to save to database");
});
});


module.exports=roomRoute2;
