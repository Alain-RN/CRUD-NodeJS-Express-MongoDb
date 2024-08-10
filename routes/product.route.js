const express = require("express")
// const Product = require("../models/product.model.js")
const router = express.Router()
const { getAllProducts ,getProduct , postProducts, putProducts, deleteProducts } = require('../controllers/product.controller.js')

router.get('/', getAllProducts)

router.post('/', postProducts)

router.get('/:id', getProduct)

router.put("/:id", putProducts)

router.delete("/:id", deleteProducts)

module.exports = router