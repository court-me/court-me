const mongoose = require('mongoose');
const { Schema } = mongoose;

MONGO_URI = `mongodb+srv://tbensalem:MAu62uCj2A7Xtw6a@cluster0.5bkrdhz.mongodb.net/?retryWrites=true&w=majority`

// DB CONNECTIONS
mongoose.connect(MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
  })

const db = mongoose.connection;

  db.on('error', (err) => {
    console.error(`connection error: ${err}`)
  })
  db.once('open', (err, response) => {
    console.log(`Connected to Database, Response: ${response}`)
  })

// SCHEMAS
const userSchema = new Schema({
  username: {type: String, required: true },
  password: {type: String, required: true },
})

const User = mongoose.model('user', userSchema)

module.exports = User;