'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			firstName: 'Brian',
			lastName: 'McCall',
			email: 'brianmccall88@gmail.com',
            password: '$2a$08$.pWVoRyK0JB5A5eLIV4fI.Xvl4Rc1jun22bcMVg86ePqU/Kehga4e',
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
