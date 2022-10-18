const {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById,
    createManyProducts,
  } = require('../services/product.service');
  
  const handleCreateProduct = async (req, res) => {
    console.log('controller: handleCreateProduct req.body:', req.body);
  
    try {
      const product = await createProduct(req.body);
      return res.json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetAllProducts = async (req, res) => {
    try {
      const products = await getAllProducts();
      return res.json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetProductById = async (req, res) => {
    try {
      const product = await getProductById(req.params.id);
      return res.json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleDeleteProductById = async (req, res) => {
    try {
      const product = await deleteProductById(req.params.id);
      return res.json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleUpdateProductById = async (req, res) => {
    try {
      const product = await updateProductById(req.params.id, req.body);
      return res.json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  // Not needed on exam, used to seed lot's of data into the DB so we can travel
  const handleCreateManyProducts = async (req, res) => {
    try {
      if (Array.isArray(req.body) === false) {
        throw new Error('The request body must be an array.');
      }
  
      const settledOutcomes = await createManyProducts(req.body);
      return res.json(settledOutcomes);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  // Export an object of our controller methods so they can be added to routes.
  module.exports = {
    // long-form - key: value
    handleCreateProduct: handleCreateProduct,
    // Shorthand can be used when key name matches var name.
    handleCreateManyProducts,
    handleGetAllProducts,
    handleGetProductById,
    handleDeleteProductById,
    handleUpdateProductById,
  };