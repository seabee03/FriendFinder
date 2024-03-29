
var express = require("express");
// var friends = require("./app/data/friends");



var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });