var mongoose = require('mongoose');

var guideSchema = new mongoose.Schema(
{
	Cost:Number,
	Age:Number,
	Name: String,
	NIC: {type : String, index:{unique : true}},
	Image: String,
}
	);

module.exports = mongoose.model('Guide', guideSchema);
