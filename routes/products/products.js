require(global.__rootDir + '/models/products')
const router = require('express').Router()
const bodyParser = require('body-parser')
const controllers = require(global.__rootDir + '/controllers/products/product_controllers')

// Get all the products with a matching name from a URI query
router.get('/', controllers.findByName)

// Save one product
router.post('/', bodyParser.json(), controllers.save)

// Get a product with a given id
router.get('/id/:id', controllers.findById)

// Edit/Update a product with a given id
router.put('/id/:id', bodyParser.json(), controllers.updateById)

// Delete a product with a given id
router.delete('/id/:id', controllers.deleteById)

// Get all the products from a given category
router.get('/category/:category', controllers.findByCategory)

// Get all the products from a given category from a store
router.get('/:store/:category', controllers.findByStoreAndCategory)

// Delete all products of a given category from a store
router.delete('/:store/:category', controllers.deleteByStoreAndCategory)

// Backup Collection to a JSON file
router.get('/backup', controllers.backup)

module.exports = router
