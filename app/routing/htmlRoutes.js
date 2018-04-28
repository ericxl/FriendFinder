
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();

const directory_public = path.join(__dirname, "..", "public");
const paths = {
    "/"          : "home.html",
    "/survey"    : "survey.html"
};

for (let key in paths) {
    router.get(key, (req, res) => {
        res.sendFile(path.join(directory_public, paths[key]));
    });
}

module.exports = router;