const express = require("express");
const { OpenAI } = require("openai");
require("dotenv").config();
const path = require("path");

const app = express();
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/api/chat", async(req,res)=>{
  const result = await client.chat.completions.create({
    model:"gpt-5-mini",
    messages:[
      {role:"user", content:req.body.message}
    ]
  });

  res.json({
    reply: result.choices[0].message.content
  });
});

app.listen(process.env.PORT || 3000);
