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

const sendNotif = (listId, title, body) => {
  const data = {
    msg: msg,
    url: '/perjalanan-dinas'
  };
  return admin.messaging().send({
    token: listId,
    data: data,
    notification: {
      title: title,
      body: body
    },
    android: {
      priority: "high",
      data: data,
      notification: {
        title: title,
        body: body,
        priority: "high",
        clickAction: "FCM_PLUGIN_ACTIVITY",
        defaultSound: true,
        defaultLightSettings: true,
        defaultVibrateTimings: true,
        visibility: "public"
      }
    }
  })
  // return admin.messaging().sendMulticast({
  //   tokens: listId,
  //   data: data,
  //   notification: {
  //     title: title,
  //     body: body,
  //   },
  //   android: {
  //     priority: "high",
  //     notification: {
  //       title: title,
  //       body: body,
  //       priority: "high",
  //       clickAction: "FCM_PLUGIN_ACTIVITY",
  //       defaultSound: true,
  //       visibility: "public"
  //     },
  //     data: {
  //       url: "/perjalanan-dinas"
  //     },
  //   }
  // })
}

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
      sukses: true
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
  db.sequelize.query(`SELECT nip, nama, eselon_int, eselon from atasan WHERE nama ILIKE '%${head.search ? head.search : ''}%' AND status = 1 GROUP BY nip, nama, eselon_int, eselon ORDER BY eselon_int DESC`,
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

app.get('/api/test-open-notif', async (req, res) => {
  var x = 'ffJVYenPZXk:APA91bG34t6wMSGlU45pKNYGhT8Y16imKIEpWUpAmRCzQljoVliRfQz3XT5Mo31X8bVcVoc6l4D0VAqOAymRltkg5uTZmJi0bZV1OXepxwXz7LQvE6ZxEWYiv3AQJzn1nfpl5OpqPLtt';
  sendNotif(x, 'Request approval perjadin', 'Ada permintaan approval perjadin baru').then((result) => {
    res.json({
      sukses: true,
      msg: result
    })
  }).catch((err) => {
    res.json({
      sukses: false
    })
  });
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
          title: "Perjalanan Dinas Butuh Approval",
          body: "Anda mempunyai permintaan approval perjalanan dinas"
        }
      }).then((success) => {
        console.log(success);
        res.send({
          sukses: true,
          msg: "Send notification successfully"
        })
      }).catch((err) => {
        console.log(err);
        res.send({
          sukses: false,
          msg: "Failed send notification"
        });
      })
    } else {
      res.send({
        sukses: true,
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

app.post('/api/create-perjadin', (req, res) => {
  const body = req.body;
  const head = req.headers;
  var insert = JSON.parse(JSON.stringify(body));
  delete insert.nipatasan;
  db.surke.create(insert).then(async (result) => {
    console.log(result.id);
    await sendNotif(body.nipatasan, "Request approval perjalanan dinas", "Anda memiliki permintaan approval perjalanan dinas baru");
    await db.persetujuan.create({
      "iddata": result.iddata,
      "instansi": result.instansi,
      "stat": result.stat,
      "tgl": result.tgl,
      "tglu": "0000-00-00 00:00:00",
      "a": "",
      "b": "",
      "c": ""
    });
    await db.persetujuan_detil.create({
      "iddata": result.iddata,
      "instansi": result.instansi,
      "stat": result.stat,
      "tgl": result.tgl,
      "a": "",
      "b": "",
      "c": ""
    });
    res.json({
      sukses: true,
      id: result.id
    });
  }).catch((err) => {
    console.log(err);
    res.json({
      sukses: false
    });
  });
});

app.post('/api/req-approval-perjadin', (req, res) => {
  const body = req.body;
  const head = req.headers;
  if (body.stat === 1) {
    db.persetujuan_detil.update({
      stat: body.stat,
      nama: body.nama_atasan,
      nip: body.nip_atasan,
      instansi: body.instansi_atasan,
      a: "DISETUJUI OLEH " + body.nama_atasan,
      b: "YA",
      c: "OK"
    }, {where: {id: body.id}}).then(() => {
      db.persetujuan.update({
        stat: body.stat,
        tglu: body.tgl,
        nama: body.nama_atasan,
        nip: body.nip_atasan,
        instansi: body.instansi_atasan,
        a: "DISETUJUI OLEH " + body.nama_atasan,
        b: "YA",
        c: "OK"
      }, {where: {id: body.id}}).then(() => {
        sendNotif(body.nip, "Perjadin di setujui", "Anda memiliki perjalanan dinas disetujui")
        .then(() => {
          res.json({
            sukses: true,
            msg: "Update perjadin berhasil"
          });
        }).catch((err) => {
          console.log(err);
          res.json({
            sukses: false,
            msg: "Failed send notif approval perjadin"
          });
        })
      }).catch((err) => {
        console.log(err);
        res.json({
          sukses: false,
          msg: "Failed update persetujuan perjadin"
        });
      });
    }).catch((err) => {
      console.log(err);
      res.json({
        sukses:false,
        msg: "Failed update persetujuan detail perjadin"
      });
    });
  } else if (body.stat === 3) {
    db.persetujuan_detil.update({
      stat: body.stat,
      nama: body.nama_atasan,
      nip: body.nip_atasan,
      instansi: body.instansi_atasan,
      a: "DIBATALKAN OLEH " + body.nama_atasan
    }, {where: {id: body.id}}).then(() => {
      db.persetujuan.update({
        stat: body.stat,
        tglu: body.tgl,
        nama: body.nama_atasan,
        nip: body.nip_atasan,
        instansi: body.instansi_atasan,
        a: "DIBATALKAN OLEH " + body.nama_atasan
      }, {where: {id: body.id}}).then(() => {
        sendNotif(body.nip, "Perjadin ditolak", "Anda memiliki perjalanan dinas ditolak")
        .then(() => {
          res.json({
            sukses: true,
            msg: "Update perjadin berhasil"
          });
        }).catch((err) => {
          console.log(err);
          res.json({
            sukses: false,
            msg: "Failed send notif approval perjadin"
          });
        })
      }).catch((err) => {
        console.log(err);
        res.json({
          sukses: false,
          msg: "Failed update persetujuan perjadin"
        });
      });
    }).catch((err) => {
      console.log(err);
      res.json({
        sukses:false,
        msg: "Failed update persetujuan detail perjadin"
      });
    });
  } else if (body.stat === 4) {
    db.persetujuan_detil.update({
      stat: body.stat,
      nama: body.nama_atasan,
      nip: body.nip_atasan,
      instansi: body.instansi_atasan,
      a: "DIHAPUS OLEH " + body.nama_atasan
    }, {where: {id: body.id}}).then(() => {
      db.persetujuan.update({
        stat: body.stat,
        tglu: body.tgl,
        nama: body.nama_atasan,
        nip: body.nip_atasan,
        instansi: body.instansi_atasan,
        a: "DIHAPUS OLEH " + body.nama_atasan
      }, {where: {id: body.id}}).then(() => {
        sendNotif(body.nip, "Perjadin dihapus", "Perjalanan dinas anda telah dihapus")
        .then(() => {
          res.json({
            sukses: true,
            msg: "Update perjadin berhasil"
          });
        }).catch((err) => {
          console.log(err);
          res.json({
            sukses: false,
            msg: "Failed send notif approval perjadin"
          });
        })
      }).catch((err) => {
        console.log(err);
        res.json({
          sukses: false,
          msg: "Failed update persetujuan perjadin"
        });
      });
    }).catch((err) => {
      console.log(err);
      res.json({
        sukses:false,
        msg: "Failed update persetujuan detail perjadin"
      });
    });
  } else if (body.stat === 2) {
    res.json({
      s: "s"
    });
  }
})

app.post('/api/create-surtug', (req, res) => {
  const body = req.body;
  const head = req.headers;
  db.sequelize.query(`INSERT INTO surtug (nip, namapeg, tglb, tglk, maksud, lokasi) VALUES ('${body.nip}', '${body.namapeg}', '${body.tglb}', '${body.tglk}', '${body.maksud}', '${body.lokasi}')`,
  {type: db.sequelize.QueryTypes.INSERT}).then((result) => {
    res.json({
      sukses: true,
      msg: 'Create surtug successfully'
    });
  }).catch((err) => {
    res.json({
      sukses: false,
      msg: 'Created surtug failed'
    });
  })
})

app.post('/api/approval-perjadin', (req, res) => {
  const body = req.body;
  db.sequelize.query(`UPDATE surtug SET status_approval = ${body.status}, atasan_nip = '${body.atasan_nip}' WHERE id = ${body.id}`, 
  {type: db.sequelize.QueryTypes.UPDATE}).then((result) => {
    res.json({
      sukses: true,
      msg: "Update surtug successfully"
    });
  }).catch((err) => {
    res.json({
      sukses: false,
      msg: "Update surtug failed"
    });
  })
})

app.get('/api/get-surtug', (req, res) => {
  const body = req.body;
  const head = req.headers;
  const queryWithAtasan = `SELECT * from surtug WHERE atasan_nip = '${head.atasan_nip}' AND status = 1`;
  const queryById = `SELECT * from surtug WHERE id = ${head.id} AND status = 1`;
  const queryAll = `SELECT * from surtug WHERE nip = '${head.nip}' AND status = 1`;
  db.sequelize.query(head.id ? queryById : head.atasan_nip ? queryWithAtasan : queryAll, 
  {type: db.sequelize.QueryTypes.SELECT}).then((result) => {
    res.json({
      sukses: true,
      data: result
    });
  }).catch((err) => {
    res.json({
      sukses: false,
      msg: 'Failed get data Surtug'
    });
  });
})
 
app.use(express.static('www'));
app.use(compression());
app.use(express.static('www'));
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
})
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});