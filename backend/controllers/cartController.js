const { v4: uuidv4 } = require("uuid");
const Cart = require("../model/Cart");
const Product = require("../model/Product");

const createCart = async (req, res) => {
  try {
    const cartId = uuidv4();
    const cart = await Cart.create({ cartId, items: [] });

    res.status(201).json({
      cartId: cart.cartId,
      cart: { cartId: cart.cartId, items: cart.items },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const addItem = async (req, res) => {
  try {
    const { cartId } = req.params;
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    if (product.outOfStock) return res.status(400).json({ message: "Product is out of stock" });

    const qty = Math.max(1, Number(quantity || 1));

    // 🔥 FIX: create cart if not exists
    let cart = await Cart.findOne({ cartId });

    if (!cart) {
      cart = await Cart.create({
        cartId,
        items: [],
      });
    }

    const existing = cart.items.find(
      (i) => String(i.productId) === String(productId)
    );

    if (existing) {
      existing.quantity += qty;
      existing.priceSnapshot = product.price;
      existing.nameSnapshot = product.name;
    } else {
      cart.items.push({
        productId,
        nameSnapshot: product.name,
        priceSnapshot: product.price,
        quantity: qty,
        imageUrlSnapshot: product.imageUrl || "",
      });
    }

    await cart.save();

    res.json({ cartId: cart.cartId, items: cart.items });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findOne({ cartId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json({ cartId: cart.cartId, items: cart.items });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeItem = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const cart = await Cart.findOne({ cartId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((i) => String(i.productId) !== String(productId));
    await cart.save();

    res.json({ cartId: cart.cartId, items: cart.items });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const clearCart = async (cartId) => {
  await Cart.updateOne({ cartId }, { $set: { items: [] } });
};

module.exports = {
  createCart,
  addItem,
  getCart,
  removeItem,
  clearCart,
};

