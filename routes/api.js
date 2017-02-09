var express = require('express');
var router = express.Router();
var app = express();
var sys = require('sys')
var exec = require('child_process').exec;
// var Product = require('../models/product');
var Command = require('../models/command');

// router.get('/products', function(req, res){
// 	res.send('api is working');
// });

router.get('/commands', function(req, res){
	res.send('api is working');
});

router.get('/commands/:name', function(req, res){
	// req.params.name = '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE';
	string8 = '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE';

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
	  out = stdout;
	  sys.print('out: ' + out);
	  res.send(out);
	});




	// var data = {command: '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE'};
	// res.render('profile', {person: req.params.name, data: data});
});

// app.get('/profile/:name', function(req, res){
// 	var data = {command: '|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE'};
// 	res.render('profile', {person: req.params.name, data: data});
// 	// res.send('You are watching profile: ' + req.params.name);
// });

// Product.methods(['get', 'put', 'post', 'delete']);
// Product.register(router, '/products');

Command.methods(['get', 'put', 'post', 'delete']);
Command.register(router, '/commands');

module.exports = router;



// var sys = require('sys')
// var exec = require('child_process').exec;


// var string1 = "|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE";
// var string1 = command
// var string2 = "test7-2.vw";
// var string3 = "vw -t " + string2 + " -i train7.model -p test7-2.predict"

// var string4 = "echo \"" + string1 + "\" | netcat localhost 26542"

// function puts2(error, stdout, stderr) { sys.puts(stderr) }
// function puts(error, stdout, stderr) {}

// //create daemon of vw in port 26542
// var child0;
// string0 = "vw -i train7.model -t --daemon --quiet --port 26542";
// child0 = exec(string0, puts);

// //run command
// var child2;
// child2 = exec(string4, function (error, stdout, stderr) {
//   sys.print('stdout: ' + stdout);
//   sys.print('stderr: ' + stderr);
//   if (error !== null) {
//     console.log('exec error: ' + error);
//   }
// });

// // var child3;
// // child3 = exec(string3, puts2);