const express=require('express')
const roombookRoute=express.Router();
let RoomBook=require('./roombook.model')
const bodyParser=require("body-parser")
// room booking  code
roombookRoute.route('/bookroom').
post((req,res)=>{
    let  roombook=new RoomBook(req.body);
    roombook.save()
    .then(rb=>{
        res.status(200).json({'roombook':'Room Booked successfully'+rb});

    })
    .catch(err=>{
        res.status(400).send
        ("unable to save to database");
    });
});
// show room details 
roombookRoute.route("/showbookroom").get((req,res)=>{
    RoomBook.find().then(room=>{
        res.send(room);
    }).catch(err=>{
        res.status(400).send("Something went wrong");
    });
});

module.exports=roombookRoute;