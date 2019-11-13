var controller = require('../controllers/controllers');

module.exports = function(app) {
  app.route('/api/discussion/:conversationId')
    .get(controller.getDiscussion)
    .post(controller.postComment);
};
