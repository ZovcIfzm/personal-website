//const express = require('express');
//const bodyParser = require('body-parser');
//const request = require('request');\

/*
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8080);*/

const express = require('express');
const app = new express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, () => console.log("app started"));

//app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.urlencoded({extended:true}));
//app.set('view engine', 'ejs');
/*
app.get('/', function(req,res){
    res.render('main.html');
});*/
/*
app.post('/', function(req,res){
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    request(url, function(err,response,body){
        if(err){
            res.render('index', {weather: null, error: "error"})
        }
        else{
            let weather = JSON.parse(body);
            if(weather.main == undefined){
            res.render('index', {weather: null, error: "error"})
            }
            else{
            res.render('index', {weather: weather.main.temp, error: null});
            }
        }
    })
});*/

//app.listen(3000, () => console.log("app started"));



/*
const express = require('express');
const bodyParser = require('body-parser');
let request = require('request');
const app = express();

let apiKey = 'ffcf6ed24d85b0852bf9e285641c7264';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {  
    let city = req.body.city;  
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}';

    request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } 
        else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
                res.render('index', {weather: null, error:'Error, please try again'});
            } 
            else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})*/