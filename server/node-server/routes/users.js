var express = require('express');
var router = express.Router();

const mysql = require('mysql');
// 配置连接数据库信息
const dbConfig = require('../model/db.js');
// 配置增删该查的sql语句
const userSQL = require('../model/usersSql.js');
// 创建数据库连接对象
let pool = mysql.createPool(dbConfig.connection);
// 定义数据库返回对象
let responseJSON = (res, ret) => {
  if (typeof ret === undefined) {
    res.json({
      code: -200,
      msg: '查询数据库失败'
    })
  } else {
    res.json(ret)
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', (req, res, next) => {
  console.log('请求到达了吗?')
  pool.getConnection((err, conn) => {
    conn.query(userSQL.queryAll, (err, result) => {
      if (result) {
        result = {
          code: 0,
          msg: '查询成功',
          data: result
        }
      }
      responseJSON(res, result);
      // 释放数据库连接
      conn.release();
    });
  });
})
module.exports = router;
