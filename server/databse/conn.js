const mongoose = require("mongoose")
async function connect(){
   await mongoose.connect(process.env.ATLAS_URL)
   console.log("DATABSE CONNECTED");
   
}

module.exports = connect