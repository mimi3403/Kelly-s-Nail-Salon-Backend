const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: String,
  date: Date,
  visitors: Number,
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema)