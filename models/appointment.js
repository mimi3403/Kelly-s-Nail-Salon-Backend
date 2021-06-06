const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  date: Date,
  time: Number,
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema)