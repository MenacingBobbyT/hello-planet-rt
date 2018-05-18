var solarSystem = require("../planets/planets").solarSystem;

exports["setUp"] = function(callback) {
	solarSystem.reset();
	callback();
};

exports["Can Add Planet"] = function(test) {
	solarSystem.addPlanet("Mercury");
	test.equal(solarSystem.getPlanetCount(), 1);
	test.done();
};

exports["Can return planet count"] = function(test) {
	
	solarSystem.addPlanet("Mercury");
	solarSystem.addPlanet("Venus");
	
	test.equal(solarSystem.getPlanetCount(), 2);
	test.done();
}