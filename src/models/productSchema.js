const mongoose = require("mongoose");

const schema1 = mongoose.Schema({
    descTitle:{
          type:String,
          required:true,
     },
leftImg1:{
     type:String,
     required:true,
},
leftImg2:{
     type:String,
     required:true,
},
rightImg1:{
     type:String,
     required:true,
},
rightImg2:{
     type:String,
     required:true,
},
leftImg1d:{
          type:String,
          required:true,
     },
leftImg2d:{
          type:String,
          required:true,
     },
rightImg1d:{
          type:String,
          required:true,
     },
rightImg2d:{
          type:String,
          required:true,
     },
img4:{
          type:String,
          required:true,
     },
img3:{
          type:String,
          required:true,
     },
price:{
          type:String,
          required:true,
     },
imgFront:{
          type:String,
          required:true,
     },
imgBack:{
          type:String,
          required:true,
     },
title:{
          type:String,
          required:true,
     },
description:{
          type:String,
          required:true,
     },
banner:{
          type:String,
          required:true,
     }});

   const nutritionData =   mongoose.model("nutritiondata",schema1);

     module.exports = nutritionData;
