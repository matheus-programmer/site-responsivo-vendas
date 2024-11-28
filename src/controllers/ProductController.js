const ProductModel = require('../models/ProductModel');

class ProductController {
    static listAll(req, res) {
        const products = ProductModel.getAll();
        res.json(products);
    }
}

module.exports = ProductController;
