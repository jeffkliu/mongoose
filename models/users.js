var mongoose = require('mongoose');

var Profile = mongoose.model('Profiles', {
	User: {
		type: String,
		required: true,
		minlength: 8,
		trim: true
	},
	Email: {
		type: String,
		required: true,
		minlength: 8,
		trim: true
	}
})

module.exports = {Profile};