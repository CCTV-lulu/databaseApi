var pg = require('pg');
var ljconfig = require('./ljconfig')
// 数据库配置
var config = {
    user:"postgres",
    database:"houseData",
    password:"password",
    port:5432,

    // 扩展属性
    max:20, // 连接池最大连接数
    idleTimeoutMillis:3000, // 连接最大空闲时间 3s
}
var pool = new pg.Pool(config); //创建连接池

module.exports = {
    ljGetByCity:function (req,res) {
        pool.connect(function (err,client) {
            var city_id = ljconfig.config(req.query.city_id)
            var limit = req.query.number
            var page = req.query.page * req.query.number - 1
            client.query("select * from  communities where city_id=$1 limit $2 OFFSET $3",[city_id,limit,page],function (err,result) {
                if (err){
                   return res.send({status: false, message: err})
                }
                client.release()
                res.send(result.rows)
            })
        })

    },
    liGetByID:function (req,res) {
        pool.connect(function (err,client) {
            client.query("select * from communities where id =$1 ",[req.query.id],function (err,result) {
                if(err){
                    return res.send({status: false, message: err})
                }
                client.release()
                res.send(result.rows)
            })
        })
    },
    jlGetByCity:function (req,res) {
        pool.connect(function (err,client) {
            client.query("select * from  juli_data where city_name = $1 limit $2 OFFSET $3",[req.query.city_id,req.query.number,req.query.page],function (err,result) {
                if (err){
                    return res.send({status: false, message: err})
                }
                client.release()
                res.send(result.rows)
            })
        })
    },
    jlGetById:function (req,res) {
        pool.connect(function (err,client) {
            client.query("select * from juli_data where id =$1 ",[req.query.id],function (err,result) {
                if(err){
                    return res.send({status: false, message: err})
                }
                client.release()
                res.send(result.rows)
            })
        })
    },
    delectData:function (req,res) {
        pool.connect(function (err,client) {
            client.query("delete from lianjiaershou where city = $1",['廊坊'],function (err) {
                if(err){
                    return console.log(err)
                }
                client.release()
                console.log('删除成功！')

            })
        })
    }
}
