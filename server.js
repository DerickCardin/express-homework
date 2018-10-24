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

sports = ['football', 'baseball', 'basketball', 'soccer'];




app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});