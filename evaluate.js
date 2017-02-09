var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var sys = require('sys')
var exec = require('child_process').exec;

mongoose.connect('mongodb://localhost/rest_test');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get('/api', function(req, res){
	res.render('form', {qs: req.query});
});

app.post('/api', urlencodedParser, function(req, res){
	// req.params.name = '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE';
	// var string8 = '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE';
	

	var string1 = "|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE";
	var string2 = "test7-2.vw";
	var string3 = "vw -t " + string2 + " -i train7.model -p test7-2.predict"
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