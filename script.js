
const products = [
    // Add your 70 products here. Example:
    {
        name: "keratin classic sonditioner",
        image: "images/product1.jpg",
        description: "promote smooth, straight, sleek hair.",
        price: "650"
    },
    {
        name: "keratin classic shampoo",
        image: "images/product2.jpg",
        description: "Nourishes and smoothens hair,
            400ml.",
        price: "650"
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
