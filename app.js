var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})


app.get("/okay", function(req, res){
    var search = req.query.drink;
    var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search;
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            var results = JSON.parse(body);
            var drinkName = results['drinks'][0]['strDrink'];
            var instructions = results['drinks'][0]['strInstructions']
            res.render('home', {results: results});
        };
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('App is running!');
});