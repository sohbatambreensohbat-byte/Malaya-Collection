

/* SAMPIN TENUN MANUAL - UPDATED JAVASCRIPT */

// WhatsApp Business number
// Apna actual number country code ke sath enter karein.
// Example: Malaysia = 60..., Pakistan = 92...
const WHATSAPP_NUMBER = "923001234567";

// Product information
const products = {
  classic: {
    name: "Classic Sampin",
    price: "RM 49.99"
  },

  premium: {
    name: "Premium Tenun",
    price: "RM 69.99"
  },

  wedding: {
    name: "Wedding & Occasion",
    price: "RM 25.99 / RM 79.99"
  },

  sedondon: {
    name: "Instant Sampin Sedondon",
    price: "RM 49.99 / RM 79.99"
  },

  kanak2: {
    name: "Instant Sampin Kanak2",
    price: "RM 49.99"
  }
};

// Buy Now - WhatsApp order
function orderProduct(productName, price) {
  if (!productName || !price) {
    alert("Product details are missing.");
    return;
  }

  const message =
    `Hello SAMPIN TENUN MANUAL!\n\n` +
    `I want to order:\n` +
    `Product: ${productName}\n` +
    `Price: ${price}\n\n` +
    `Please provide order details.`;

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );
}

// Attach Buy Now buttons automatically
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(
    "[data-buy-product]"
  );

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const productKey = button.dataset.buyProduct;
      const product = products[productKey];

      if (!product) {
        alert("Product not found. Please check the product key.");
        return;
      }

      orderProduct(product.name, product.price);
    });
  });
});

