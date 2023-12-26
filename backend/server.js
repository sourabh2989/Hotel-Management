const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=6969;
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./DB');
const roomRoute=require('./roomtype.route');
const stateRoute=require('./state.route');
const cityRoute=require("./city.route")
const staffRoute = require('./staff.route');
const multer=require('multer');
const roombookRoute = require('./roombook.route');
mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true})
.then(()=>{
    console.log('Database is connected '+config.DB)
},err=>{
    ('can not connected to the database',+err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/rooms', roomRoute);
app.use('/state',stateRoute);
app.use('/city',cityRoute);
app.use('/staff', staffRoute);
app.use('/booking',roombookRoute)

const st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'staffimages/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})
const upload=multer({storage:st});
app.post('/uploadstaffimage',upload.single('file'),(req,res)=>{
    res.json({})
});
app.listen(PORT,function(){
    console.log('server is running on PORT',PORT);
});
