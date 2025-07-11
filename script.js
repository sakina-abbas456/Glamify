document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById("product-gallery");
const products = [
  
  {
    name: "Keratin Classic Shampoo",
    image: "C:\Users\Malaica1\Desktop\5oy5auw7ycjy.jpg",  
    description: "For smooth, straight, sleek hair.",
    price: "650"
  }
];


    

// --- Render products ---
const gallery = document.getElementById("product-gallery");
products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-price">${product.price}</div>
    `;
    gallery.appendChild(card);
});
