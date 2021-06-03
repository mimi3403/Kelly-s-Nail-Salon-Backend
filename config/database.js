const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false, // we do not use findandmodify anymore/
  useUnifiedTopology: true, //start and stop the connection from mongodb effienciently. so the website does not constantly bother mongodb.
})

db.on('connected', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
})