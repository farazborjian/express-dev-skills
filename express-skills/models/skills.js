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
};

function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find((skills) => skills.id === parseInt(id));
}
