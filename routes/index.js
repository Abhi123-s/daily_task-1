const router  = require('express').Router();
const Product = require('../model/productModel');


router.get('/', (req, res) => {
  res.render('add-product');          
});


router.post('/products', async (req, res) => {
  await Product.create(req.body);
  res.redirect('/products');          
});


router.get('/products', async (req, res) => {
  const products = await Product.find().lean();
  res.render('product-list', { products, total: products.length });
});

module.exports = router;