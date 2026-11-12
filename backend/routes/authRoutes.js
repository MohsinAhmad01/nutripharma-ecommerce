const express = require("express");
const jwt = require("jsonwebtoken");

const protect = require("../middleware/authMiddleware");

const {
  loginAdmin,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/verify", protect, (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("accessToken");

  res.clearCookie("refreshToken");

  res.json({
    message: "Logout Success",
  });
});

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "No Refresh Token",
    });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    );

    const accessToken = jwt.sign(
      {
        id: decoded.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    res.json({
      message: "Token Refreshed",
    });
  } catch (error) {
    res.status(401).json({
      message: "Invalid Refresh Token",
    });
  }
});

module.exports = router;