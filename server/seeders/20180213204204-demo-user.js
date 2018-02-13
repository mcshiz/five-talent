'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			firstName: 'Five',
			lastName: 'Talent',
			email: 'demo@demo.com',
            password: '',
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
