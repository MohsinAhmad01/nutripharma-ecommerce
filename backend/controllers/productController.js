const Product = require("../model/Product");

const toImageUrl = (req) => {
  if (!req.file) return "";
  return `/uploads/${req.file.filename}`;
};

const createProduct = async (req, res) => {
  try {
    const { name, category, reviews, description, price, outOfStock } =
      req.body;

    const product = await Product.create({
      name,
      category,
      reviews: reviews ? reviews.split("\n") : [],
      description,
      price,
      // req.body.outOfStock comes as string from multipart/form-data: "true" or "false"
      outOfStock: String(outOfStock) === "true",
      imageUrl: toImageUrl(req),
    });

    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;

    const filter = {};
    if (category && category !== "All") filter.category = category;
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json({ products });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, category, reviews, description, price, outOfStock } =
      req.body;

    const update = {};
    if (name !== undefined) update.name = name;
    if (category !== undefined) update.category = category;
    if (reviews !== undefined) {
      update.reviews = reviews.split("\n");
    }
    if (description !== undefined) update.description = description;
    if (price !== undefined) update.price = price;
    if (outOfStock !== undefined)
      update.outOfStock = String(outOfStock) === "true";

    if (req.file) update.imageUrl = toImageUrl(req);

    const product = await Product.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product updated", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
