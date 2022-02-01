const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DebtsSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  id: {
    type: Number,
    require: true
  },
  account: [
    {
      time: {
        type: Date,
        require: true
      },
      money: {
        type: Number,
        require: true
      }
    }
  ]
})

const Debts = mongoose.model('Debts', DebtsSchema)

module.exports = Debts