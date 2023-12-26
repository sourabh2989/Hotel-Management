const express =require("express");
const cityRoute=express.Router();
let City=require("./city.model")
const bodyparser=require("body-parser");

//Add New State 
cityRoute.route("/addcity").post((req,res)=>{
    let city =new City(req.body);
    city.save().then(city=>{
        res.status(200).json({"city":"city added successfully"+city});
    }).catch(err=>{
        res.status(400).send("Unable to save to database");
    });
});
//show city by state id
cityRoute.route("/showcitybystate/:stid").get((req,res)=>{
    City.find({"StId":req.params.stid}).then(city=>{
        res.send(city);
    }).catch(err=>{
        res.status(400).send("Something Went Wrong");
    });
}); 
//Show
cityRoute.route("/showcity").get((req,res)=>{
    City.find().then(city=>{
        res.send(city);
    }).catch(err=>{
        res.status(400).send("Something went wrong");
    });
});
//Update City
cityRoute.route("/updatecity/:ctid/:ctname/:stid").put((req,res)=>{
    City.updateOne({"CtId":req.params.ctid},{"CtId":req.params.ctid,"CtName":req.params.ctname,"StId":req.params.stid})
    .then(city=>{
        res.status(200).json({"city":"City updated successfully"+city});
    }).catch(err=>{
        res.status(400).send("Unable to update database");
    });
});
//Delete City
cityRoute.route("/deletecity/:ctid").delete((req,res)=>{
    City.deleteOne({"CtId":req.params.ctid}).then(city=>{
        res.status(200).json({"city":"City deleted successfully"+city});
    }).catch(err=>{
        res.status(400).send("Unable to update database");
    });
});
module.exports=cityRoute;