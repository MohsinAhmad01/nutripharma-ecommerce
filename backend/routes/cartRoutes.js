const express = require("express");
const router = express.Router();

const {
  createCart,
  addItem,
  getCart,
  removeItem,
} = require("../controllers/cartController");

router.post("/create", createCart);
router.get("/:cartId", getCart);
router.post("/:cartId/items", addItem);
router.delete("/:cartId/items/:productId", removeItem);

module.exports = router;