const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'database-2.cluster-cli7mg3ykqip.ap-northeast-1.rds.amazonaws.com',
    user : 'admin',
    password : process.env.password
});

connection.connect();

connection.query('show databases;', function(error, results, fields){
  console.log(error);
  console.log(results);
  console.log(fields);
})
