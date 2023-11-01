const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ContactModel = require("./models/Contacts")

const app = express();

require('./db/connection');

app.use(cors());
app.use(express.json());

app.get("/getContacts", (req, res) => {
    ContactModel.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.json(err))
})

app.post("/", async (req, res) => {
    let contact = new ContactModel(req.body);
    let result = await contact.save();
    res.send(result);
})

const port = 3001;

app.listen(port, () => {console.log(`Sunucu ${port} portunda başlatıldı.`)})