// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.

// use "app.get(...)" and "app.post(...)" for GET and POST

app.get('/test', function(req, res) {
  console.log('this is the homepage');
  res.render('main', {});
});

app.get('/list', function(req, res) {
  var query = new Parse.Query("_User");
  var contacts = [];
  query.descending("createdAt");
  query.limit(5);
  query.find().then(function(contacts) {
    res.render('list_users', {users: contacts});
  });
});


// in a real application, there should be a separate "app.post('/add', ...)" here for receiving the POST data
app.get('/add', function(req, res) {
  var User = Parse.Object.extend("_User");
  var user = new User();
  user.set('username', 'user'+Math.ceil(Math.random()*100));
  user.set('password', 'fission');
  user.save(null, {
    success: function(item) {
      alert(item.get('username'));
      res.render('new_user', {user: item});
    },
    error: function(item, error) {
      alert(error.message);
    }
  });
});

app.listen();