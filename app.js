var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

// API call to get drinks from search.
app.get("/search", function(req, res){
    var search = req.query.drink;
    var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search;
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            var results = JSON.parse(body);
            // var drinkName = results['drinks'][0]['strDrink'];
            // var instructions = results['drinks'][0]['strInstructions']
            res.render('home', {results: results});
        } else (err, function(){
            console.log("Error");
            res.send("Could no find a drink.");
        });
    });
});

app.listen(3000, function(){
    console.log('App is running!');
});