const path=require("path");
const ejs=require("ejs");
const express=require("express");
const app=express();

//for all the controller

const mainController=require("./controller/routeController");

//app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));


//using all the route middleware
app.use("/",mainController);



//server
module.exports=app;