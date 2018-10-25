const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//get route that displays Your personal name.
app.get('/', (request, response) => response.send("Derick Cardin"));


//dynamic get route that then says something using the parameter sent to it.
app.get('/user/:name', function(req, res) {
    res.send('Welcome ' + req.params.name + '!');
});


//query route that should accept two nums
app.get('/user/add/:num', (req, res) => {
    const num1 = parseInt(req.params.num, 10);
    const num2 = parseInt(req.params.num, 10);
    res.send(`${num1 + num2}`);
});


//login function
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "Derick" & password === "Cardin") {
    res.status(202);
    res.json(`SUCCESS!`);
  } else {
    res.status(403).json(`Wrong Password Bro`);
  }
});

// global variable array.//

const sports = ["football", "baseball", "basketball", "soccer"];

//Add an item to the array

app.post('/sport/:item', (req,res) => {
  const item = req.params.item;
  const newSport = sports.indexOf(item);
  if(newSport === -1) { 
    sports.push(item);
    res.status(202).json(`You added ${item} to your favorite sports! Here is your current list ${sports}`)}
    else {
    res.status(409).json(`${item} already exists`);
  } 
});

//Delete an item from the array
app.delete('/sports/:item', (req, res, next) => {
  const item = req.params.item;
  const byeSport = sports.indexOf(item);
  if(byeSport != -1) {
      sports.splice(byeSport, 1);
    res.json(`You deleted ${item}`);
  } else {
    res.status(406).json(`${item} not accepted, ${item} already exists`);
    next();
  }
});

app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});