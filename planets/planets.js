var solarSystem = {
	
	_planets: [],
	
	addPlanet: function(name) {
		this._planets.push(name);
	},
	getPlanetCount: function() {
		return this._planets.length;
	},
	listPlanets: function() {
		for(var i = 0; i < this._planets.length; i++) {
			console.log(this._planets[i]);
		}
	},
	reset: function() {
		this._planets = [];
	}
};

exports.solarSystem = solarSystem;