const Appointment = require('../models/appointment');


function index(req, res) {
  Appointment.find({}, function (err, appointments) {
    res.status(200).json(appointments)
  })
}

function create(req, res) {
  Appointment.create(req.body, function (err, appointment) {
    res.status(201).json(appointment);
    console.log(err)
  })
}

function update(req, res) {
  Appointment.findByIdAndUpdate(req.params.id, req.body, function () {
    index(req, res)
  })
}

function deleteAppt(req, res) {
  Appointment.findByIdAndDelete(req.params.id, function () {
    index(req, res);
  })
}

module.exports = {
  index,
  create,
  update,
  delete: deleteAppt,
}
