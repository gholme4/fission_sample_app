
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

// Load our ExpressJS app

require('cloud/app.js');

Parse.Cloud.define("Hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.job("runJob", function(request, status) {

	status.success("Finished running job");
						
});

