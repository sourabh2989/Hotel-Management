const express=require("express");
const staffRoute=express.Router();
let Staff=require('./staff.model')
const bodyParser=require("body-parser");

//Add new staff member
staffRoute.route('/addstaff')
.post((req,res)=>{
    let staff=new Staff(req.body);
    staff.save().then(staff=>{
        res.status(200).json({'Staff':'Staff Added Done' +staff})
    })
    .catch(err=>{
        res.status(400).send("Unable to save to databse")
    });
});

//show

staffRoute.route('/showstaff').get((req,res)=>{
    Staff.find().then(staff=>{
        console.log(staff);
        res.send(staff);
    }).catch(err=>{
        res.status(400).send("something went wrong");
    });
});
//Update Staff Member
staffRoute.route("/updatestaff/:sid/:sname").put((req,res)=>{
    Staff.updateOne({"SId":req.params.sid},{"SId":req.params.sid,"SName":req.params.sname})
    .then(staff=>{
        res.status(200).json({"staff":"Staff Member updated successfully"+staff});
    }).catch(err=>{
        res.status(400).send("Unable to update database");
    });
});

//get staff member image
staffRoute.route("/getstaffimage/:picname").get((req,res)=>{
    res.sendFile("E:/hotel managment/backend/staffimages/"+req.params.picname);
});

module.exports=staffRoute;
