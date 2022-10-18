const express = require('express');

const {
  handleCreateProduct,
  handleCreateManyProducts,
  handleGetAllProducts,
  handleGetProductById,
  handleDeleteProductById,
  handleUpdateProductById,
} = require('../controllers/product.controller');

const productRouter = express.Router();

/* 
/api/destinations will be prepended to all these routes in server.js!
*/

// Notice, handleCreateDestination is not called now, it's called back later
// when the route is visited.
productRouter.post('/new', handleCreateProduct);
productRouter.post('/many', handleCreateManyProducts);

// data at the :id spot in url is accessed with req.params.id.
// route params can be named anything and the name will be added to req.params.
productRouter.get('/:id', handleGetProductById);
productRouter.get('/', handleGetAllProducts);
productRouter.delete('/:id', handleDeleteProductById);
productRouter.put('/:id', handleUpdateProductById);

module.exports = { productRouter: productRouter };