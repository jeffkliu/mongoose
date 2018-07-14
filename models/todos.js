var mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}, 
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Object,
		default: function(){return this.completed} ? new Date() : null
	}
});

module.exports={Todo};