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
      name: "Moc❤️Allure",
      description: "All-in-one eyeshadow palette with rich, blendable shades.",
      price: "1800",
      image: "mocallure.jpg"
     
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
