var express = require('express');
const path = require('path');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var models = require('./api/models/message');

var routes = require('./api/routes/routes');

var port = process.env.PORT || 3001;
var app = express();
var Message = mongoose.model('Message')

// Uncomment this line to run it on development mode (localhost) -- discussion is our db name //
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/discussion');

// This line is working on production mode //
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0-xucmg.mongodb.net/test?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  console.log("production");
}

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'))
});

app.listen(port);

console.log('Server running on port ' + port);
