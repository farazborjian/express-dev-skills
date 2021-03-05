const Skills = require('../models/skills');

module.exports = {
	index,
	show,
	new: newTodo,
	create,
	delete: deleteSkill,
};

function index(req, res) {
	res.render('skills/index', {
		skills: Skills.getAll(),
		time: req.time,
	});
}
function show(req, res) {
	res.render('skills/show', {
		skill: Skills.getOne(req.params.id),
		someRandomTHing: 'some random thing',
		testing: 'test',
	});
}
function newTodo(req, res) {
	res.render('skills/new');
}
function create(req, res) {
	console.log(req.body);
	Skills.create(req.body);
	// The model is responsible for creating data
	// Todo.create(req.body);
	// Do a redirect anytime data is changed
	res.redirect('/skills');
}
function deleteSkill(req, res) {
	Skills.deleteOne(req.params.id);
	res.redirect('/skills');
}
