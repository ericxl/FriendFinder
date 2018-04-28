let express  = require("express");
let path     = require("path");

// Create an instance of Router
let router = express.Router();

// Create an instance of FriendFinder
let FriendFinder = require(path.join(__dirname, "..", "data", "friends.js"));
let friendFinder = new FriendFinder();

// Display all friends
router.get("/friends", (req, res) => {
    res.json(friendFinder.getFriends());
});

// Find the most compatible friend
router.post("/friends", (req, res) => {
    var profile = req.body;
    console.log(req.body);

    // Add the user's profile to the database
    friendFinder.addFriend(profile);

    var friend = friendFinder.findBestFriend(profile);
    
    res.send({
        my_name         : profile.name,
        friend_name     : friend.name,
        friend_photo: friend.photo
    });
});

module.exports = router;