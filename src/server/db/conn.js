const mongoose = require("mongoose")

const DB = "mongodb+srv://mudasser:database1234@cluster0.aarexnv.mongodb.net/usersdata?retryWrites=true&w=majority"

mongoose.connect(DB, {
   
    useNewUrlParser: true,
   
  

}).then(() => console.log("connection start")).catch((err)=> console.log(err.message));
