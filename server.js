var express  = require('express');
var app      = express();                               
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');
var compression = require('compression');
const request = require('request');
const btoa = require('btoa');
 
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});



app.post('/api/login', (req, res) => {
  const headers = req.headers;
  // let url1 = 'https://sdm.big.go.id/siap/siap.php/rest/biodatapegawai/get_pegawai_byid';
  console.log(req.body);
  const username = req.body.username ? req.body.username : '';
  const password = req.body.password ? req.body.password : '';
  const token = username + ':' + password;
  console.log(token);
  const hash = btoa(token);
  console.log(hash);
  request.post({
    url: url1,
    headers: {
      // 'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + hash
    },
    "rejectUnauthorized": false, 
    body: JSON.stringify(req.body)}, function optionalCallback(err, httpResponse, body2) {
      if (err) {
        return console.error('upload failed:', err);
      }
      // console.log('Upload successful!');//  Server responded with:', JSON.stringify(body));
      // console.log(httpResponse);
      console.log(body2);
      console.log(headers);
      let hasil;
      if (body2.includes('"success":true')){
        hasil = '{"success": true}'
      } else {
        hasil = '{"success": false}'
      }
      res.send(hasil);
  })
})

app.post('/api/login2', (req, res) => {
  const headers = req.headers;
  // let url1 = 'https://sdm.big.go.id/siap/siap.php/rest/biodatapegawai/get_pegawai_byid';
  console.log(req.body);
  const username = req.body.username ? req.body.username : '';
  const password = req.body.password ? req.body.password : '';
  const url1 = `https://sdm.big.go.id/siap/service/index.php/pegawai?NIPBARU=${username}`;
  const token = username + ':' + password;
  console.log(token);
  const hash = btoa(token);
  console.log(hash);
  request.get(url1, function optionalCallback(err, httpResponse, body2) {
      if (err) {
        return console.error('login failed:', err);
      }
      console.log(body2);
      console.log(headers);
      let hasil;
      const body3 = JSON.parse(body2);
      if (body3.length >= 1){
        hasil = '{"success": true}'
      } else {
        hasil = '{"success": false}'
      }
      res.send(hasil);
  })
})
 
app.use(express.static('www'));
app.use(compression());
// app.use(express.static('www'));
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
})
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});