// Builds WhatsApp message and optionally sends it via configured HTTP provider.
// If no provider env vars are set, it safely logs the message.

function buildWhatsAppMessage({ order }) {
  const delivery = order.delivery || {};

  const itemsText = order.items
    .map(
      (i) =>
        `- ${i.nameSnapshot} (Qty: ${i.quantity}) | Price: ${i.priceSnapshot}`
    )
    .join("\n");

  return [
    "🧾 New Order (Pending)",
    "\nCustomer Delivery:",
    `Name: ${delivery.fullName || ""}`,
    `Phone: ${delivery.phone || ""}`,
    `Address 1: ${delivery.addressLine1 || ""}`,
    `Address 2: ${delivery.addressLine2 || ""}`,
    `City: ${delivery.city || ""}`,
    `Country: ${delivery.country || ""}`,
    `Postal Code: ${delivery.postalCode || ""}`,
    "\nProducts:",
    itemsText,
    `\nTotal Income (estimated): ${order.income}`,
    `\nOrderId: ${order._id}`,
  ].join("\n");
}

async function sendWhatsAppOrderNotification({ order }) {
  const message = buildWhatsAppMessage({ order });


  // Provider configuration (optional)
  const providerUrl = process.env.WHATSAPP_API_URL; // e.g. https://.../send
  const providerToken = process.env.WHATSAPP_API_TOKEN;
  const to = process.env.WHATSAPP_TO; // admin phone in provider format

  if (!providerUrl || !providerToken || !to) {
    console.log("[WhatsApp Fallback - not sent]");
    console.log("To:", to);
    console.log(message);
    return;
  }

  // Generic provider payload - you can adapt to your provider.
  const payload = {
    to,
    message,
  };

  const resp = await fetch(providerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${providerToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    console.log("WhatsApp send failed:", resp.status, text);
  }
}

module.exports = { sendWhatsAppOrderNotification };

