const Cart = require("../model/Cart");
const Product = require("../model/Product");
const Order = require("../model/Order");

const checkout = async (req, res) => {
  try {
    const { cartId } = req.params;
    const { delivery } = req.body;

    if (!cartId) {
      return res.status(400).json({
        message: "Missing cart ID",
      });
    }

    if (!delivery) {
      return res.status(400).json({
        message: "Missing delivery details",
      });
    }

    if (
      !delivery.fullName ||
      !delivery.phone ||
      !delivery.addressLine1 ||
      !delivery.city ||
      !delivery.country
    ) {
      return res.status(400).json({
        message: "Please fill all required delivery fields",
      });
    }

    const cart = await Cart.findOne({ cartId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    if (!cart.items || cart.items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const items = [];

    for (const ci of cart.items) {
      const product = await Product.findById(ci.productId);

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (product.outOfStock) {
        return res.status(400).json({
          message: `Product out of stock: ${product.name}`,
        });
      }

      items.push({
        productId: product._id,
        nameSnapshot: product.name,
        priceSnapshot: product.price,
        quantity: ci.quantity,
        imageUrlSnapshot: product.imageUrl || "",
      });
    }

    const income = items.reduce(
      (sum, i) => sum + Number(i.priceSnapshot) * Number(i.quantity),
      0
    );

    const order = await Order.create({
      cartId,
      items,
      delivery,
      status: "pending",
      income,
    });

    /*
      Clear cart after order is created.
      This is normal checkout behavior.
      The order is saved in Order collection before cart is cleared.
    */
    await Cart.updateOne(
      { cartId },
      {
        $set: {
          items: [],
        },
      }
    );

    const backendUrl = process.env.BACKEND_URL || "";

    const itemsText = items
      .map((i) => {
        const imageUrl = i.imageUrlSnapshot
          ? `${backendUrl}${i.imageUrlSnapshot}`
          : "No image";

        return `
• ${i.nameSnapshot}
Qty: ${i.quantity}
Price: ${Number(i.priceSnapshot) * Number(i.quantity)}
Image: ${imageUrl}
`;
      })
      .join("\n");

    const whatsappMessage = `
🛒 *New Order*

👤 Name: ${delivery.fullName}
📞 Phone: ${delivery.phone}
📍 Address: ${delivery.addressLine1}
${delivery.addressLine2 ? `📍 Address 2: ${delivery.addressLine2}` : ""}
🏙 City: ${delivery.city}
🌍 Country: ${delivery.country}
${delivery.postalCode ? `📮 Postal Code: ${delivery.postalCode}` : ""}

📦 Products:
${itemsText}

💰 Total: ${income}

🆔 Order ID:
${order._id}
`;

    return res.status(201).json({
      message: "Order created successfully",
      orderId: order._id,
      whatsappMessage,
    });
  } catch (error) {
    console.log("Checkout error:", error);

    return res.status(500).json({
      message: error.message || "Checkout failed",
    });
  }
};

module.exports = { checkout };