const express = require("express");
const protect = require("../middleware/authMiddleware");

const Product = require("../model/Product");
const Order = require("../model/Order");

const router = express.Router();

router.get("/stats", protect, async (req, res) => {
  try {
    const [
      totalOrders,
      pendingCount,
      completedCount,
      declinedCount,
      incomeCompletedAgg,
      productCount,
      outOfStockCount,
      outOfStockProducts,
    ] = await Promise.all([
      Order.countDocuments({}),
      Order.countDocuments({ status: "pending" }),
      Order.countDocuments({ status: "completed" }),
      Order.countDocuments({ status: "declined" }),
      Order.aggregate([
        { $match: { status: "completed" } },
        { $group: { _id: null, total: { $sum: "$income" } } },
      ]),
      Product.countDocuments({}),
      Product.countDocuments({ outOfStock: true }),
      Product.find({ outOfStock: true }).select("name -_id").lean(),
    ]);

    const incomeTotal = incomeCompletedAgg?.[0]?.total || 0;
    const outOfStockNames = (outOfStockProducts || []).map((p) => p.name);

    res.json({
      stats: {
        totalOrders,
        pendingCount,
        completedCount,
        declinedCount,
        incomeTotal,
        productCount,
        outOfStockCount,
        outOfStockNames,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

