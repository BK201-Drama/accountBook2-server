const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CreditSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  id: {
    type: Number,
    require: true
  },
  rank: {
    type: Number,
    require: true
  }
})

const Credit = mongoose.model('Credit', CreditSchema)

module.exports = Credit