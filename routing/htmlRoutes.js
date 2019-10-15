var path = require('path');

module.exports = function (app) {
app.get("/survey", function(req, res) {
   res.sendFile(__dirname, './Public/survey.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname, './Public/home.html');
});
};




