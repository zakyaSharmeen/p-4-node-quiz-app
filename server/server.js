const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./router/router");
const  connect  = require("./databse/conn");
const PORT = process.env.PORT || 5000
config();


const app = express();


app.use(morgan("tiny"));
app.use(
    cors({
    //   origin: "http://localhost:3000", 
      origin:"https://p-4-node-quiz-app-v4j8.vercel.app", 
      methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true, 


    })
  );
app.use(express.json());
app.use("/api", router)
// connect();



app.use("/", (req, res) => {
  res.json("hii all set here");
});



// app.listen(`${PORT}`, console.log("server strated at 8000"));

connect().then(()=>{
    try{
        app.listen(`${PORT}`, console.log(`${PORT}`));



    }catch(err){
        console.log("cannot connect to the server");
        
    }

}).catch(err => {console.log("invalid databse");
})
