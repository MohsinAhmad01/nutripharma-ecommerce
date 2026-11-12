const express = require("express");
const protect = require("../middleware/authMiddleware");
const { listOrders, updateStatus } = require("../controllers/orderController");

const router = express.Router();

router.get("/", protect, listOrders);
router.patch("/:id/status", protect, updateStatus);

module.exports = router;

