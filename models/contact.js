// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);
