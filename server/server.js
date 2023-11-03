const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ContactModel = require("./models/Contacts");
const UserModel = require("./models/Users");

const app = express();

require('./db/connection');

app.use(cors());
app.use(express.json());


// GET CONTACTS DATA

app.get("/getContacts", (req, res) => {
    ContactModel.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.json(err))
})

// CREATE A NEW CONTACTS DATA (FROM AN USER IN WEBSITE CONTACT FORM)

app.post("/createContacts", async (req, res) => {
    const contact = new ContactModel(req.body);
    const result = await contact.save();
    res.send(result);
})


// DELETE A CONTACT DATA

app.delete("/deleteContact/:id", (req,res) => {
   const contactId = req.params.id;
   ContactModel.findByIdAndRemove(contactId, (err, contact) => {
    if(err){
        console.log(err);
        res.status(500).send("Silme işlemi başarısız oldu.");
    } else {
        res.status(200).send("Veri başarıyla silindi.");
    }
   })
})

// TO LOGIN AS AN ADMIN

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

// GET ADMIN USERS

app.get("/getUsers", (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




const port = 3001;
app.listen(port, () => {console.log(`Sunucu ${port} portunda başlatıldı.`)})