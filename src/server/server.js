const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const db = require("./models");
const dbConfig = require("./config/db.config.js");
const app = express();
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const client = new MongoClient(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true, 
  serverApi: ServerApiVersion.v1 });
  client = mongoc_client_new ("mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/?serverSelectionTryOnce=false&serverSelectionTimeoutMS=15000&w=majority");
  db = mongoc_client_get_database (client, "test");
  client.connect().then((data)=>{ 
  const collection = client.db("test").collection("devices");
  
  console.log(collection);
  console.log("success")
}).catch((err)=>{ 
  console.log("Error",err); 
});
