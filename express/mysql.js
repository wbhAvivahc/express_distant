const mysql = require('mysql');


//链接数据库配置
const connection = mysql.createConnection({
  host: '180.76.100.134',
  user: 'wbh',
  password: 'wangbinghan',
  database: 'test_mysql'
});

//连接数据库
connection.connect(function(err){
  if(err){
    console.log(err);
    return
  };

  
  console.log('connection success!')
})



//获取数据库信息
const query = 'SELECT * FROM food_table'

connection.query(query,function(err,result,filed){
  if(err){
    throw err
  }else {
    console.log(result,filed,'怎么了')
  }
})
