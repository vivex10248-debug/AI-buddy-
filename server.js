const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("AI Buddy is running 🚀");
});

app.post("/api/chat",(req,res)=>{
  res.json({
    reply:"Hello! I am AI Buddy 🤖"
  });
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server running");
});
