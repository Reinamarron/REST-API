const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name:{
    String,
    required:true
  },
  subscribedToChannel:{
    String,
    required:true
  },
  subscribeDate:{
    String,
    required:true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber',subscriberSchema)