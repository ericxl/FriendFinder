module.exports = function FriendFinder() {
    var friends=[{
        name:"Katy",
        photo:"https://www.ienglishstatus.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }];

    function getScore(a, b) {
        let score = 0;

        for (let i = 0; i < a.scores.length; i++) {
            score += Math.abs(b.scores[i] - a.scores[i]);
        }

        return score;
    }

    this.addFriend = function(profile) {
        friends.push(profile);
    }

    this.getFriends = function() {
        return friends;
    }

    this.findBestFriend = function(profile) {
        // The lower the difference in compatibility, the better
        var minDiff = 999;
        var bf = undefined;
        friends.forEach(function(f) {
            if (f !== profile && getScore(f, profile) < minDiff){
                bf = f;
                minDiff = getScore(f, profile);
            }
        });
        if (!bf) bf = profile;

        return bf;
    }
}