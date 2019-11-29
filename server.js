var express  = require('express');
var app      = express();                               
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');
var compression = require('compression');
const request = require('request');
const btoa = require('btoa');
var db = require('./models');
var admin = require('firebase-admin');
 
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

const credential = require('./egov-big-firebase-adminsdk-7b29q-c8133a42cc.json');
admin.initializeApp({
  credential: admin.credential.cert(credential),
  projectId: "egov-big",
  databaseURL: "https://egov-big.firebaseio.com",
  storageBucket: "egov-big.appspot.com"
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
app.post('/api/insert-id', (req,res) => {
  const body = req.body;
  db.sequelize.query(`INSERT INTO device_list (device_id, nip) VALUES ('${body.device_id}', '${body.nip}');`,
  {type: db.sequelize.QueryTypes.INSERT}).then((result) => {
    console.log(result);
    res.send({
      sukes: true
    });
  }).catch((err) => {
    console.log(err);
    res.send({
      sukses: false
    });
  });
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
  request.get({ url:url1, "rejectUnauthorized": false},function optionalCallback(err, httpResponse, body2) {
      if (err) {
        return console.error('login failed:', err);
      }
      console.log(body2);
      console.log(headers);
      let hasil;
      const body3 = JSON.parse(body2);
      if (body3.length >= 1){
        hasil = `{"success": true, "data":${body2}}`
      } else {
        hasil = '{"success": false}'
      }
      res.send(hasil);
  })
})

app.post('/api/upload-atasan', (req, res) => {
  const body = req.body;
  db.atasan.bulkCreate(body, 
    {
      fields: ['id', 'nama', 'nip', 'panggol', 'eselon', 'satker', 'jnsjabatan', 'statt', 'ket', 'tgl'],
      individualHooks: false
    }
  ).then((result) => {
      res.json({
        sukses: true,
        msg: "OK"
      });
  }).catch((err) => {
    res.json({
      sukses: false,
      msg: "ERROR GAN"
    });
  });
})

app.get('/api/get-atasan', (req,res) => {
  const body = req.body;
  const head = req.headers;
  db.sequelize.query(`SELECT * from atasan WHERE nama ILIKE '%${head.search ? head.search : ''}%' ORDER BY nama ASC`, 
  {type: db.sequelize.QueryTypes.SELECT}).then((result) => {
    res.json({
      sukses: true,
      data: result
    });
  }).catch((err) => {
    res.json({
      sukses: false,
      msg: JSON.stringify(err)
    });
  })
})

app.post('/api/send-notif' , (req, res) => {
  const body = req.body;
  db.sequelize.query(`SELECT device_id from device_list where nip IN (${body.nip}) and status = 1`
  ,{type: db.sequelize.QueryTypes.SELECT}).then(async (result) => {
    var listId = [];
    await result.map((val, index) => {
      if (val.device_id) {
        listId.push(val.device_id);
      }
    })
    if (listId.length > 0) {
      const data = {
        msg: 'You have request',
        url: '/perjalanan-dinas'
      };
      admin.messaging().sendMulticast({
        tokens: listId,
        data: data,
        notification: {
          title: "GO Green",
          body: "You have request"
        }
      }).then((success) => {
        console.log(success);
        res.send({
          sukes: true,
          msg: "Send notification successfully"
        })
      }).catch((err) => {
        console.log(err);
        res.send({
          sukes: false,
          msg: "Failed send notification"
        });
      })
    } else {
      res.send({
        sukes: true,
        msg: "No user login"
      });
    }
    console.log(listId);
    // res.send({
    //   sukses: true
    // });
  }).catch((err) => {
    console.log(err);
    res.send({
      sukses: false,
      msg: "Failed send notification"
    });
  })
})
 
app.use(express.static('www'));
app.use(compression());
app.use(express.static('www'));
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/www/index.html');
// })
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});