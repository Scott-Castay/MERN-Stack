const { Product } = require('../models/products.model');

const createProduct = async (data) => {
  console.log('service: createProduct');

  // Use the mongoose model to interact with the database.
  const product = await Product.create(data);
  return product;
};

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const deleteProductById = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return Product;
};

const updateProductById = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    // Re-run validations.
    runValidators: true,
    // Return the updated destination.
    new: true,
  });

  return product;
};

const deleteProductById2 = async (id) => {
  // findByIdAndDelete performs both tasks together for us, without it, it
  // would look like this.

  // Or reuse our findDestinationById function.
  const foundProduct = await Product.findById(id);

  if (foundProduct === null) {
    return null;
  }

  const deletedProduct = await foundProduct.remove();
  return deletedProduct;
};

// Not needed on exam, used to load lot's of data so we can travel.
const createManyProducts = async (documents) => {
  // Don't await inside a loop, it will delay iteration.
  const createPromises = documents.map((document) =>
    createProduct(document)
  );
  // The one resulting promise will be awaited by the caller of this function.
  return Promise.allSettled(createPromises);
};

// Export all the service functions in an object.
module.exports = {
  // long-form - key: value
  createProduct: createProduct,
  // Shorthand can be used when key name matches var name
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createManyProducts,
};