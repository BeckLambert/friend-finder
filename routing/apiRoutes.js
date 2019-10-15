var friends = require('../app/data/friends');

// /api/friends
// /api/friends

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res) {
        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;

        var scoreDifference;

        for(var i = 0; i < friends.length; i++) {
                var currentFriend = friends[i];
                scoreDifference = 0;
                console.log(currentFriend.name);

                for (var j = 0; j < friends.scores.length; j++) {
                    var currentFriendScore = currentFriend.score[j]
                    var userIndex = userScores[j];
    
                    scoreDifference += Math.abs(parseInt(userIndex - parseInt(currentFriendScore)));
            };
        };

    
        if (scoreDifference <= bestMatch.scoreDifference){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.difference = currentFriend.difference;
        };
        friends.push(userData);

        res.json(bestMatch);

    });
    };