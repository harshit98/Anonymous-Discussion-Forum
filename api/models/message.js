var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var message = new Schema({
  conversationId: {
    type: String,
    required: [true, 'No conversation Id']
  },
  parent: Schema.Types.ObjectId,
  text: {
    type: String,
    required: [true, 'No text']
  }
});

module.exports = mongoose.model('Message', message);
