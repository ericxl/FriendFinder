var express    = require("express");
var path       = require("path");
var bodyParser = require("body-parser");

var app  = express();
var PORT = process.env.PORT || 3000;

var directory_public = path.join(__dirname, "app", "public");
var directory_routes = path.join(__dirname, "app", "routing");

// Set public directory
app.use(express.static(directory_public));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.text());


var router_html = require(path.join(directory_routes, "htmlRoutes.js"));
var router_api  = require(path.join(directory_routes, "apiRoutes.js"));

app.use("/", router_html);
app.use("/api", router_api);

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}.`);
});