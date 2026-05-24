/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "admin@nusaeon.com" }],
    subject: "New Order from " + e.record.get("company_name") + " - NUSAEON",
    html: "<h2>New Order Received</h2>" +
          "<p><strong>Order ID:</strong> " + e.record.id + "</p>" +
          "<p><strong>Company Name:</strong> " + e.record.get("company_name") + "</p>" +
          "<p><strong>Email:</strong> " + e.record.get("email") + "</p>" +
          "<p><strong>Phone:</strong> " + e.record.get("phone") + "</p>" +
          "<p><strong>Product Type:</strong> " + e.record.get("product_type") + "</p>" +
          "<p><strong>Quantity:</strong> " + e.record.get("order_quantity") + "</p>" +
          "<p><strong>Special Message:</strong> " + (e.record.get("special_message") || "N/A") + "</p>" +
          "<p><strong>Order Date:</strong> " + e.record.get("order_date") + "</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "orders");