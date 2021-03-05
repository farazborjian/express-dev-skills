const skills = [
	{ id: 125223, skill: 'Painting', done: true },
	{ id: 127904, skill: 'Drawing', done: false },
	{ id: 139608, skill: 'Running', done: false },
];

function getAll() {
	return skills;
}
module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
};

function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find((skills) => skills.id === parseInt(id));
}
function create(skill) {
	// Add the id
	skills.id = Date.now() % 1000000;
	// New skillss wouldn't be done :)
	skills.done = false;
	skills.push(skill);
}
function deleteOne(id) {
	// Find the index based on the id of the skills object
	const idx = skills.findIndex((skills) => skills.id === parseInt(id));
	skills.splice(idx, 1);
}
