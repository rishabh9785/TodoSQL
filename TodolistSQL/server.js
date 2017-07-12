/**
 * Created by rishabh on 12/7/17.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var sql=require('./sql')
var path=require('path');
var port=4000||process.env.port;
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname,'public_static')));
app.get('/todos/all',function(req,res){
    var query="SELECT * FROM todos";
    sql.Todolist(query,function(data){
        res.send(data);
    })
    //res.send("display all");
})
app.post('/todos/insert',function(req,res){
    console.log(req.body.todo);
    var query="INSERT into todos (task,done) VALUES('"+req.body.todo+"',true)";
    sql.Todolist(query,function(data){
        //console.log(data);
        res.send(data);
    });
    //res.send('Insert todo');
})
app.post('/todos/update',function(req,res){
    var query="UPDATE todos SET done=" + req.body.done + " where id="+ req.body.id;
    sql.Todolist(query,function(data){
        //console.log(data);
        res.send(data);
    });
    //res.send('update todo');
})
app.post('/todos/delete',function(req,res){
    var query="DELETE from todos where id="+ req.body.id;
    sql.Todolist(query,function(data){
        //console.log(data);
        res.send(data);
    });
    //res.send('delete todo');
})
app.listen(port,function(){
    console.log("server is runnning at 4000");
})

