const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DeptorSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  account: [{
    time: {
      type: Number,
      require: true
    },
    money: {
      type: Number,
      require: true
    }
  }]
})

const Deptor = mongoose.model('Deptor', DeptorSchema)

module.exports = Deptor