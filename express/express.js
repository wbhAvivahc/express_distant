const express = require('express');

const app = express()


//允许跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200);
    /让options请求快速返回/
  } else {
    next();
  }
});

app.get('/biu', function (req, res) {

  getMysql(res)
  // console.log(getMysql());
}).listen('8088', 'localhost', function (err) {
  if (err) {
    throw err
  } else {
    console.log('server is run！')
  }
});

function getMysql(res) {
  const mysql = require('mysql');

  //链接数据库配置
  const connection = mysql.createConnection({
    host: '180.76.100.134',
    user: 'wbh',
    password: 'wangbinghan',
    database: 'test_mysql'
  });

  //连接数据库
  connection.connect(function (err) {
    if (err) {
      console.log(err);
      return
    };

    console.log('connection success!')
  })

  //获取数据库信息
  const query = 'SELECT * FROM food_table'

  connection.query(query, function (err, result, filed) {
    if (err) {
      throw err
    } else {
      res.send(result);
      // console.log(result, filed, '怎么了')
    }
  });
}