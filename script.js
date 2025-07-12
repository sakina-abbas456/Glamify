document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById("product-gallery");

  const products = [
    {
      name: "Keratin Classic Shampoo",
      description: "For smooth, straight, sleek hair.",
      price: "650",
      image: "keratin classic shampoo.jpg"
    },
    {
      name: "Keratin Classic Conditioner",
      description: "Nourishes and smooths hair for a sleek finish.",
      price: "650",
      image: "keratin classic conditioner.jpg"
    }
    // Add more products...
  ];

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.description}</div>
      <div class="product-price">Rs. ${product.price}</div>
    `;
    gallery.appendChild(card);
  });
});
