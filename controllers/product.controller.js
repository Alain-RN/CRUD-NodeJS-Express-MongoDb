const Product = require("../models/product.model.js")


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


const postProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }
}


const putProducts = async (req, res) => {
    try {
        const { id } = req.params
        const updateProd = await Product.findByIdAndUpdate(id, req.body)
        if (!updateProd) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const nvprod = await Product.findById(id)
        res.status(200).json(updateProd)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProd = await Product.findByIdAndDelete(id)

        if (!deletedProd) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.status(200).json({ message: 'Product deleted successfully' })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    getAllProducts,
    getProduct,
    postProducts,
    putProducts,
    deleteProducts
}