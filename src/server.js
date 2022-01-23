const app=require("./index");
const connect = require("./configs/db");
app.listen(3000,function(){
    connect(); 
    console.log("listen to the port 3000");
});