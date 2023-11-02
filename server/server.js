const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ContactModel = require("./models/Contacts");
const UserModel = require("./models/Users");

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


app.post("/login", async(req, res) => {
   const {userName, password} = req.body;
   UserModel.findOne({userName: userName})
   .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Şifre yanlış.")
            }
        } else {
            res.json("Admin kullanıcısı bulunamadı.")
        }
   })
})

const port = 3001;

app.listen(port, () => {console.log(`Sunucu ${port} portunda başlatıldı.`)})