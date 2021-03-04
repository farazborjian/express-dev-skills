const Skills = require('../models/skills');

module.exports = {
	index,
	show,
};

function index(req, res) {
	res.render('skills/index', {
		skills: Skills.getAll(),
	});
}
function show(req, res) {
	res.render('skills/show', {
		skill: Skills.getOne(req.params.id),
		someRandomTHing: 'some random thing',
		testing: 'test',
	});
}
