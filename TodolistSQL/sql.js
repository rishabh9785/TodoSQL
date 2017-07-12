/**
 * Created by rishabh on 12/7/17.
 */
var mysql=require('mysql');

var dbconfig={
    host:'localhost',
    user:'newuser',
    password:'newpassword',
    database:'newdb'
}
function Todolist(query,cb,params){
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    connection.query(query,function(err,data){
        if(err) throw(err)
        cb(data);
        console.log(data);
        connection.end();
    })

}
module.exports={
    Todolist
};