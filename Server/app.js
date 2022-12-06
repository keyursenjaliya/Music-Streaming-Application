const express = require("express");
const app = express();
const configRoutes = require("./routes");

const cors = require("cors");
app.use(cors());

const redis = require("redis");
const client = redis.createClient();

client.connect().then(() => {});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);
app.listen(3008, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3008");
});
