'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Homes', [{
			mls: 123,
            street1: "210 Kennedy dr",
            street2: "apt B",
            city: "Mount Shasta",
            state: "CA",
            zip: 54313,
            neighborhood: "uptown",
            salesPrice: 210.34,
            dateListed: new Date(),
            bedrooms: 4,
            bathrooms: 2,
            garageSize: 1000,
            squareFeet: 5000,
            lotSize: 0.5,
            description: "Shit house that seems to be falling apart and the heat barely works, nice location next to the schools in a quiet neighborhood. ",
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			mls: 956,
			street1: "1284 Skylark Ln",
			street2: "",
			city: "Green Bay",
			state: "WI",
			zip: 96067,
			neighborhood: "Ashwaubenon",
			salesPrice: 123500.09,
			dateListed: new Date(),
			bedrooms: 3,
			bathrooms: 2,
			garageSize: 750,
			squareFeet: 6000,
			lotSize: 1.5,
			description: "There is a house in New Orleans they call the rising sun and its been the ruins of many a poor boy ",
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Homes', null, {});
	}
};
