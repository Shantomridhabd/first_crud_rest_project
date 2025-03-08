const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// CREATE - Add new product with validation for duplicate products
router.post("/products", async (req, res) => {
  try {
    const { name, price, category, stock, description } = req.body;

    
    const existingProduct = await Product.findOne({ name, category, price });

    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists." });
    }

    
    const newProduct = new Product({
      name,
      price,
      category,
      stock,
      description,
    });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ - Get all products with pagination, sorting, and filtering
router.get("/products", async (req, res) => {
  try {
    let { page = 1, limit = 10, sort, category } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    let filter = {};
    if (category) {
      filter.category = category; 
    }

    let query = Product.find(filter);

    
    if (sort) {
      query = query.sort(sort); // 
    }

    
    const products = await query.skip((page - 1) * limit).limit(limit);
    
    
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      success: true,
      page,
      limit,
      totalPages,
      totalProducts,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// READ - Get product by id
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE - Update product by id
router.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Remove product by id
router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
