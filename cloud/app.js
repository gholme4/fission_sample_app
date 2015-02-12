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

app.use(function (req, res, next) {
  
  res.set('Access-Control-Allow-Origin', '*' );
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

  // Check for valid domain access
  /*
  if (_.indexOf(allowed_origins, req.get('origin')) > -1) {
    res.set('Access-Control-Allow-Origin', req.get('origin') );
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  }
  else
  {
    res.send(500);
  }
  */

  next();
});
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

  user.set('username', req.param("username", null) );
  user.set('password', req.param("password", null) );
  user.set('email', req.param("email", null) );
  user.save(null, {
    success: function(item) {
      alert(item.get('username'));
      res.json({user: item});
    },
    error: function(item, error) {
      alert(error.message);
    }
  });
});

app.listen();