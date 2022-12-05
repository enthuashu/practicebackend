const express = require("express");
const app = express();
const dbconnection = require("./connectors/conn");
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 5000;
const USER_MODEL = require("./models/User");

app.post("/api/register", async (req, res) => {
  try {
    const { address, name, email, phonenumber } = req.body;
    const newuser = new USER_MODEL({
      email: email,
      name: name,
      phone: phonenumber,
      address: address,
    });
    await newuser.save();
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

app.get("/api/getallusers", async (req, res) => {
  try {
    const users = await USER_MODEL.find();

    return res.json({ success: true, data: users });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

dbconnection();
app.listen(port, () => console.log("server is running at ", port));
