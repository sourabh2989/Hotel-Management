const express =require("express");
const stateRoute=express.Router();
let State=require("./state.model")
const bodyparser=require("body-parser");

//Add New State 
stateRoute.route("/addstate").post((req,res)=>{
    let state =new State(req.body);
    state.save().then(state=>{
        res.status(200).json({"state":"state added successfully"+state});
    }).catch(err=>{
        res.status(400).send("Unable to save to database");
    });
});
//Show
stateRoute.route("/showstate").get((req,res)=>{
    State.find().then(state=>{
        res.send(state);
    }).catch(err=>{
        res.status(400).send("Something went wrong");
    });
});
//Update State
stateRoute.route("/updatestate/:stid/:stname").put((req,res)=>{
    State.updateOne({"StId":req.params.stid},{"StId":req.params.stid,"StName":req.params.stname})
    .then(state=>{
        res.status(200).json({"state":"State updated successfully"+state});
    }).catch(err=>{
        res.status(400).send("Unable to update database");
    });
});
//Delete
stateRoute.route("/deletestate/:stid").delete((req,res)=>{
    State.deleteOne({"StId":req.params.stid}).then(state=>{
        res.status(200).json({"state":"State deleted successfully"+state});
    }).catch(err=>{
        res.status(400).send("Unable to update database");
    });
});
module.exports=stateRoute;