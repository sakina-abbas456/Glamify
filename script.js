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
     
    },
     {
      name: "keratin classic conditioner",
      description: "nourishes and smooths hair for a sleek finish.",
      price: "650",
      image: "keratin classic conditioner.jpg"
     
    },
    {
      name: "eyeshadow kit",
      description: "High-pigment eyeshadows for bold and natural style.",
      price: "1900",
      image: "eyeshadow kit.jpg"
    },
     {
      name: "matte lip gloss",
      description: "Creamy texture with a soft matte glow.",
      price: "150",
      image: "matte lip gloss.jpg"
    },
    {
      name: "deep hydration spa kit",
      description: "Nourishes and revitalizes dry skin with intense moisture.",
      price: "1000",
      image: "deep hydration spa kit.jpg"
    },
    {
      name: "soap",
      description: "Gently cleanses and refreshes your skin.",
      price: "320",
      image: "soap.jpg"
    },
    {
      name: "gluta white night cream 'acne care'",
      description: "Reduces breakouts and soothes skin overnight.",
      price: "500",
      image: "gluta white night cream 'acne care'.jpg"
    },
     {
      name: "gluta white night cream 'skin whitening anit-aging'",
      description: "Whitens skin and reduces signs of aging overnight.",
      price: "500",
      image: "gluta white night cream 'skin whitening anit-aging'.jpg"
    },
    {
      name: "make-up kit (sunisa foundation , pack of eyeshadow , bene tint)",
      description: "Complete makeup kit with foundation, eyeshadow, and lip & cheek tint for a flawless look.",
      price: "11,00",
      image: "make-up kit (sunisa foundation , pack of eyeshadow , bene tint.jpg"
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
