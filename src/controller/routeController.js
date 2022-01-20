const express=require("express");

const nutritionData = require("../models/productSchema")

const router=express.Router();

router.get("",(req,res)=>{
    res.render("home");
});
router.get("/benefit",(req,res)=>{
    res.render("benefit");
});
router.get("/bodylotion",(req,res)=>{
    res.render("bodylotion");
});
router.get("/omega",(req,res)=>{
    res.render("omega");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/register",(req,res)=>{
    res.render("register");
});
router.get("/nutrition&health",async(req,res)=>{
    const items = await nutritionData.find();
    res.render("productitem",{items:items});
});
router.get("/productDetails",(req,res)=>{
    res.render("productDetails");
});

module.exports=router;