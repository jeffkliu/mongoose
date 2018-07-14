var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

var newTodo = new Todo({
	text: 'testing completed',
	completed: true
});

newTodo.save().then((doc)=>{
	console.log('Saved todo', doc);
}, (e) => {
	console.log(e);
});

// User 
//email - require it - trim it - set type - set min length of 1

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

var newProfile = new Profile({
	User: 'jliu0123',
	Email: 'jeffliu@gmail.com'
})

newProfile.save().then((doc)=>{
	console.log('Created new profile', doc);
}, (e)=> {
	console.log(e);
});