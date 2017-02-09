var sys = require('sys')
var exec = require('child_process').exec;


var string1 = "|age min:18 max:65 |pos feed instant_article |platform facebook audience_network |message mưa gió khỏi lo vì đã có ô gấp ngược thông number với thiết kế đóng dù sáng tạo đồng thời chất liệu dù không thấm nước chia làm number lớp thông minh bạn sẽ không còn phải lo lắng bị ướt mỗi khi trời mưa nữa click xem number |description  |call_to_action WATCH_MORE";
var string2 = "test7-2.vw";
var string3 = "vw -t " + string2 + " -i train7.model -p test7-2.predict"

var string4 = "echo \"" + string1 + "\" | netcat localhost 26542"

function puts2(error, stdout, stderr) { sys.puts(stderr) }
function puts(error, stdout, stderr) {}

//create daemon of vw in port 26542
var child0;
string0 = "vw -i train7.model -t --daemon --quiet --port 26542";
child0 = exec(string0, puts);

//run command
var child2;
child2 = exec(string4, function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});

// var child3;
// child3 = exec(string3, puts2);