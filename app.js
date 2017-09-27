var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./todo.db');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

db.run("CREATE TABLE if not exists todolist (id INTEGER PRIMARY KEY AUTOINCREMENT,task TEXT, status BOOLEAN)");


app.use('/', express.static(__dirname + "/public/"));


app.get('/task',function (req, res) {
	db.all("select * from todolist", function(err, rows) {
    if(rows){
	    	rows.forEach(function(row, i){
	    		rows[i].status = row.status?true:false;
	    	});
    	res.status(200).json(rows)
    }else{
    	console.log(err);
    	res.status(200).json({result:"Task Not Found", status: false})
    }
  });
});

app.post('/task',function (req, res) {
	db.get("insert into todolist (task,status) VALUES ('"+req.body.task+"', "+ (req.body.status?1:0) +")", function(err, rows) {
    if(!err){
    	res.status(200).json({result:"Task Added", status: true});
    }else{
    	console.log(err);
    	res.status(503).json({result:"Something went wrong!", status: true});
    }
  });
});

app.put('/task',function (req, res) {
	console.log(req.body);
	db.get("update todolist set status = "+ (req.body.status?1:0) +" where id = "+req.body.id, function(err, rows) {
    if(!err){
    	res.status(200).json({result:"Task Updated", status: true});
    }else{
    	console.log(err);
    	res.status(503).json({result:"Something went wrong!", status: true});
    }
  });
});

app.delete('/task/:id',function (req, res) {
	db.get("delete from todolist where id = "+req.params.id, function(err, rows) {
    if(!	err){
    	res.status(200).json({result:"Task Deleted", status: true});
    }else{
    	console.log(err);
    	res.status(503).json({result:"Something went wrong!", status: true});
    }
  });
});



app.listen('5000',function(){
	console.log('Server Started');
});

