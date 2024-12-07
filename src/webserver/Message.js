const mongoose = require('mongoose');
const bodyParser = require('body-parser');




const MessageSchema = new mongoose.Schema({
    word: String,
  


  });
  const Messages = mongoose.model('messagedb', MessageSchema);
  module.exports = Messages;

  