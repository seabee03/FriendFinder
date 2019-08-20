var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/app/data/friends", function(req, res) {;
        console.log("friends API ran");
        return res.json(testFriendship);
    });

    app.post("/app/data/friends", function(req, res) {
        var bestMatch = {};
        function testFriendship(newFriend) {
            bestMatch = {
                name: "",
                photo: "",
                difference: 100
            };

            for (let i = 0; i < friends.length; i++) {
                var difference = 0;
                for (let j = 0; j < newFriend.scores.length; j++) {
                    difference += Math.abs(newFriend.scores[j] - friends[i].scores[j]);

                    if (j === newFriend.scores.length - 1) {
                        if(bestMatch.difference > difference) {
                            bestMatch.difference > difference;
                            bestMatch.name = friends[i].name;
                            bestMatch.photo = friends[i].photo;
                        }
                    }
                };
            }

            console.log("best match", bestMatch);
            return bestMatch;
        }

        var newFriend = req.body;

        console.log("new friend: ", newFriend);
        testFriendship(newFriend);

        friends.push(newFriend);

        res.json(bestMatch);
    });
    
}