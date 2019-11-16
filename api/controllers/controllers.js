var Message = require('../models/message');

exports.getDiscussion = function(req, res) {
  Message.find({conversationId: req.params.conversationId},
    (err, messages) => {
      if (err) {
        res.status(500).send(err);
      } 
      else {
        res.json(messages);
      }
    }
  );
};

exports.postComment = function(req, res) {
  req.body.conversationId = req.params.conversationId;

  let message = new Message(req.body);

  message.save((err, message) => {
    console.log('here');
    if (err) {
      res.status(500).send(err);
    } 
    else {
      res.json(message);
    }
  });
};
