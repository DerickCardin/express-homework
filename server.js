const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (request, response) => response.send("<h1>Derick Cardin</h1>"))

app.get('/user/:name', function(req, res) {
    res.send('Welcome ' + req.params.name + '!');
});

app.listen(process.env.PORT, process.env.IP, 8080, function() {
    console.log('Listening on port 8080');
});