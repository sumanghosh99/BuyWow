const express=require("express");

const {register,login,newToken} = require("./auth.controller")

const nutritionData = require("../models/productSchema")

const router=express.Router();

router.get("",(req,res)=>{
    res.render("home");
});

router.post("/register",register); 
router.post("/login",login);

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
router.get("/productitem",async(req,res)=>{
    const items = await nutritionData.find();
    res.render("productitem",{items:items});
});
router.get("/productDetails",(req,res)=>{
    res.render("productDetails");
});
router.get("/checkoutpage",(req,res)=>{
    res.render("checkoutpage");
});
router.get("/shipping",(req,res)=>{
    res.render("shipping");
});
router.get("/paymentpage",(req,res)=>{
    res.render("paymentpage");
});

module.exports=router;