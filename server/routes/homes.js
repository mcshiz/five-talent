const express = require('express');
const models = require('../models');
const router = express.Router();
const passport = require('passport');
const jwt = require('jwt-simple');


//get all homes
router.get('/', function(req, res, next) {
	// Dont need all properties for initial home listing, lets just select a few
	models.Home.findAll({
		attributes: ['mls', 'salesPrice', 'street1', 'street2', 'city', 'state', 'zip', 'bedrooms', 'bathrooms', 'squareFeet']
	})
	.then((homes) => {
		if (homes) {
			res.json(homes)
		} else {
			res.status (400).json({"error": "Nothing Found"})

		}
	}).catch((error) => {
		res.status(500).send(error)
	})
});
router.get('/search', function(req, res, next) {
	let query = req.query;
	//sequelize doesn't like to search with blank params
	for(let key in query) {
		if(query[key] === '') {
			delete query[key]
		}
	}
	models.Home.findAll({
		where: query
	})
	.then(homes => {
		if (homes) {
			res.json(homes);
		} else {
			res.status (200).json({"error": "Nothing Found"})
		}
	}).catch(error => {
		res.status(500).send('Error while searching')
	})
});



// get a specific home
router.get('/:mls', function(req, res, next) {
	let query = req.params;
	models.Home.findOne({
		where: {
			mls: query.mls
		}
	})
	.then(home => {
		if (home) {
			res.json(home)
		} else {
			res.status (400).json({"error": "Home not found"})
		}
	}).catch(error => {
		res.status(500).send('Error querying home by ID')
	})
});


// add a home
router.post('/', passport.authenticate('jwt', { session: false }),
	function(req, res) {
		if(req.user) {
			let data = req.body;
			models.Home.findOne({
				where: {
					mls: data.mls
				}
			})
			.then(home => {
				if (home) {
					res.status (400).json({"error": "That MLS number already exists"})
				} else {
					models.Home.create({
						mls: data.mls,
						street1: data.street1,
						street2: data.street2,
						city: data.city,
						state: data.state,
						zip: data.zip,
						neighborhood: data.neighborhood,
						salesPrice: parseFloat(data.salesPrice),
						dateListed: new Date(),
						bedrooms: data.bedrooms,
						bathrooms: data.bathrooms,
						garageSize: data.garageSize,
						squareFeet: data.squareFeet,
						lotSize: data.lotSize,
						description: data.description,
						createdAt: new Date(),
						updatedAt: new Date(),
					})
					.then((newListing) => {
						res.json({"success": "Listing Created", "mls": newListing.mls})
					});
				}
			})
		} else {
			res.sendStatus(401);
		}
	}
);
// update a home
router.put('/', passport.authenticate('jwt', { session: false }),
	function(req, res) {
		if(req.user) {
			let data = req.body;
			models.Home.findOne({
				where: {
					mls: data.mls
				}
			})
			.then(home => {
				if (home) {
					models.Home.update({
						mls: data.mls,
						street1: data.street1,
						street2: data.street2,
						city: data.city,
						state: data.state,
						zip: data.zip,
						neighborhood: data.neighborhood,
						salesPrice: data.salesPrice,
						bedrooms: data.bedrooms,
						bathrooms: data.bathrooms,
						garageSize: data.garageSize,
						squareFeet: data.squareFeet,
						lotSize: data.lotSize,
						description: data.description,
						createdAt: new Date(),
						updatedAt: new Date(),
					}, {
						where: {
							mls: data.mls
						}
					})


					.then(() => {
						res.json({"success": "Listing Updated"})
					});
				} else {
					res.status (400).json({"error": "MLS number not found"})
				}
			})
		} else {
			res.sendStatus(401);
		}
	}
);

// delete a home
router.delete('/', passport.authenticate('jwt', { session: false }),
	function(req, res) {
		if(req.user) {
			let data = req.body;
			if(!data.mls) {
				res.status (400).json({"error": "MLS not provided"})
			}
			models.Home.destroy({
				where: {
					mls: data.mls
				}
			})
			.then(() => {
				res.json({"success": "Listing removed"})
			}).catch((error) => {
				res.status (400).json({"error": error})
			})
		} else {
			res.sendStatus(500);
		}
	}
);


module.exports = router;