'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  end_date:{
    type: Date,
    default: 0
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Places', ListSchema);
