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
          required:false
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

         userSchema.methods.checkPassword = async (password)=>{
          try{
               console.log(password,User.password);
          return  bcrypt.compareSync(password,this.password);


          }
          catch(err){
               res.send({err:err.message});
          }
     }

     const User = mongoose.model("users",userSchema);

     module.exports = User;


     