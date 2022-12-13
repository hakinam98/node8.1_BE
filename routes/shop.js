const express = require('express');
const router = express.Router();


const shopController = require('../controllers/shop')

router.get('/products', shopController.getProducts)

router.get('/products/:productId', shopController.getProduct)

router.post('/cart', shopController.PostCart);



module.exports = router;