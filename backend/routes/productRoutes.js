const express = require("express");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Public: customer product listing
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin: CRUD (image upload)
router.post("/", protect, upload.single("image"), createProduct);
router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateProduct
);
router.delete("/:id", protect, deleteProduct);

module.exports = router;


