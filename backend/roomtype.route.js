const express =require("express");
const roomRoute=express.Router();
let RoomTypes=require("./roomtype.model");
const bodyparser= require("body-parser");

// Add New Room Type Code
roomRoute.route("/addroomtypes").post((req,res)=>{
    let room=new RoomTypes(req.body);
    room.save().then(room=>{
        res.status(200).json({"room":"Room Added Successfully"+room});
    }).catch(err=>{
        res.status(400).send("Unable to save to database");
});
});

//Show All
roomRoute.route("/showroomtypes").get((req,res)=>{
    RoomTypes.find().then(room=>{
        console.log(room);
        res.send(room);
    }).catch(err=>{
        res.status(400).send("Something went wrong");
    });
});

//Update Room Type
roomRoute.route("/updateroomtypes/:typeid/:typename/:charges").put((req,res)=>{
    RoomTypes.updateOne({"roomTypeId":req.params.typeid},{"roomTypeId":req.params.typeid,"roomTypeName":req.params.typename,"roomCharges":req.params.charges})
    .then(room=>{
        res.status(200).json({"room":"room Updated Successfully"+room});
    }).catch(err=>{
        res.status(400).send("Unable To Update Database");
    });
});

//Delete

roomRoute.route("/deleteroomtypes/:typeid").delete((req,res)=>{
    RoomTypes.deleteOne({"roomTypeId":req.params.typeid}).then(room=>{
        res.status(200).json({ "room":"Room Deleted Successfully"+room});
    }).catch(err=>{
        res.status(400).send("Unable to delete database");
    });
});
//show room id by room type

roomRoute.route("/showidbytype/:rmtype").get((req,res)=>{
    RoomTypes.find({"RmType":req.params.rmtype}).then(rm=>{
        res.send(rm);
    }).catch(err=>{
        res.status(400).send("Something Went Wrong");
    });
}); 



module.exports=roomRoute;
