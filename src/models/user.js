const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");

const userSchema = mongoose.Schema({
     email:{
          type:String,
          required:true,
     }, 
     password:{
          type:String,
          required:true,
     },roles:[{
          type:String,
          required:true
     }],
     },
     {
          versionkey:false,
          timestamps:true,
     });

     userSchema.pre('save', async function save(next) {
          try {
           if (!this.isModified('password')) return next();         
           const hash =  bcrypt.hashSync(this.password, 10);
           this.password = hash;
           return next();
          } catch (error) {
           return next(error);
          }
         });

         userSchema.methods.checkPassword = (password)=>{
          try{
          return bcrypt.compare(password,this.password);
          }
          catch(err){
               res.send({err:err.message})
          }
     }

     const User = mongoose.model("users",userSchema);

     module.exports = User;


     