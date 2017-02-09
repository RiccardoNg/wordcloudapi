var restful = require('node-restful');
var mongoose = restful.mongoose;

var commandSchema = new mongoose.Schema({
	command: String
});

module.exports = restful.model('Commands', commandSchema);