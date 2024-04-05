const express = require('express')
const router = express.Router()
const multer = require('multer')
const formidable = require('express-formidable')
const{ getProducts, createProduct, getSingleProduct, getProductphoto, productDelete, updateProduct, filterProduct, searchProduct } =require('../controller/product')
router.get('/product/getproducts',getProducts)
router.post('/product/create', formidable(),createProduct)
router.get('/product/getsingleproduct/:slug',getSingleProduct)
router.get('/product/getphoto/:pid', getProductphoto)
router.delete('/product/delete/:pid', productDelete)
router.put('/product/update/:pid',formidable(),updateProduct)
router.post('/product/filter',filterProduct)
router.get('/search',searchProduct)

module.exports = router