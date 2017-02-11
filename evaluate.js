var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var sys = require('sys')
var exec = require('child_process').exec;
var fs = require('fs');


// const csv=require('csvtojson')
// csv().on('data',(data)=>{
//     //data is a buffer object 
//     const jsonStr= data.toString('utf8')
// })

mongoose.connect('mongodb://localhost/rest_test');

app.set('view engine', 'ejs');
app.use('/data', express.static('data'));



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


	

app.get('/wordcloud', function(req, res){
	// res.render('wordcloud', {person: req.query});
	// converter.fromFile("data/wordFre.csv", function(err, result){
	// console.log(data/wordFre.json);
	
	fs.readFile('data/wordFre.json', 'utf8', function (err,data) {
		if (err) {
	    	return console.log(err);
		}
		//console.log(data);
		res.send(JSON.parse(data));
	});
	
	// });
	
});

app.get('/evaluateInput', function(req, res){
	res.render('form', {qs: req.query});
});

app.get('/evaluate', function(req, res){
	var qs = req.query;
	var string1 = "|age min:" + qs.agemin;
	string1 = string1 + " max:" + qs.agemax;
	string1 = string1 + " |pos " + qs.position;
	string1 = string1 + " |platform " + qs.platform;
	string1 = string1 + " |message " + qs.message;
	string1 = string1 + " |description " + qs.description;
	string1 = string1 + " |call_to_action " + qs.call_to_action;
	
	var string4 = "echo \"" + string1 + "\" | netcat localhost 26542"
	function puts(error, stdout, stderr) {}
	var out;

	var child2;
	child2 = exec(string4, function (error, stdout, stderr) {
	  sys.print('stdout: ' + stdout);
	  sys.print('stderr: ' + stderr);
	  if (error !== null) {
	    console.log('exec error: ' + error);
	  }
	  out = parseFloat(stdout);
	  sys.print('out: ' + out);
	  
	  // res.render('request-success', {data: req.body, result: out});
	  var result = []
	  result.push({'evaluation': out});
	  res.send(result);
	  
	  console.log(string1);

	});
});

app.post('/evaluateInput', urlencodedParser, function(req, res){
	// req.params.name = '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE';
	// var string1 = '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE';
	

	var string1 = "|age min:" + req.body.agemin;
	string1 = string1 + " max:" + req.body.agemax;
	string1 = string1 + " |pos " + req.body.position;
	string1 = string1 + " |platform " + req.body.platform;
	string1 = string1 + " |message " + req.body.message;
	string1 = string1 + " |description " + req.body.description;
	string1 = string1 + " |call_to_action " + req.body.call_to_action;
	

	// var string2 = "test7-2.vw";
	// var string3 = "vw -t " + string2 + " -i train7.model -p test7-2.predict"
	var string4 = "echo \"" + string1 + "\" | netcat localhost 26542"
	// var string5 = "vw -t /dev/stdin -i train7.model -p /dev/stdout --quiet"
	// var string4 =  "echo \"" + string1 + "\" | vw -d /dev/stdin -i train7.model -p /dev/stdout --quiet"
	function puts(error, stdout, stderr) {}

	//create daemon of vw in port 26542
	
	var out;

	var child2;
	child2 = exec(string4, function (error, stdout, stderr) {
	  sys.print('stdout: ' + stdout);
	  sys.print('stderr: ' + stderr);
	  if (error !== null) {
	    console.log('exec error: ' + error);
	  }
	  out = parseFloat(stdout);
	  sys.print('out: ' + out);
	  
	  // res.render('request-success', {data: req.body, result: out});
	  var result = []
	  result.push({'evaluation': out});
	  res.send(result);
	  
	  console.log(req.body);

	});
	
	
});



app.listen(3000);
console.log('API isrunning on prt 3000');