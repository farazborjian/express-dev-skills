const skills = [
	{ id: 125223, skill: 'Painting', done: true },
	{ id: 127904, skill: 'Drawing', done: false },
	{ id: 139608, skill: 'Running', done: false },
];

module.exports = {
	getAll,
	
};

function getAll() {
	return skills;
}
