import products from '../controllers/product.js';

export default function(app) {

  // product Routes
  app.route('/products')
    .get(products.list());

    // product Routes
  app.route('/products/create')
  .post(products.create())
};