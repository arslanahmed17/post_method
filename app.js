var express = require ('express');
var path = require ('path');
var fs = ('fs');
var bodyParser = require ('body-parser');
const app = express();
app.use(bodyParser());

app.get('/', function(req, resp){
    resp.sendFile('index.html', {root: path.join(__dirname,  './document')});
});

app.post('/', function(req, resp){
    resp.end(JSON.stringify(req.body));
});

app.listen(3000,function(err) {
    if(err) throw err; //Tell me what is the error
    console.log(`Server running on port http://localhost:3000`);
   });