const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String

})


const Contact = mongoose.model("contacts", ContactSchema)
module.exports = Contact;