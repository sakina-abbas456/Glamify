// --- Product Data (replace with your actual products and images) ---
const products = [
    // Add your 70 products here. Example:
    {
        name: "Rose Glow Face Cream",
        image: "images/product1.jpg",
        description: "Hydrating cream for glowing skin.",
        price: "$15"
    },
    {
        name: "Silky Hair Serum",
        image: "images/product2.jpg",
        description: "Nourishes and smoothens hair.",
        price: "$12"
    },
    // ...add all your 70 products in this array
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