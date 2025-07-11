// --- Product Data (replace with your actual products and images) ---
const products = [
    // Add your 70 products here. Example:
    {
        name: "keratin classic shampoo",
        image: "C:\Users\Malaica1\Downloads\shampoo.jpeg",
        description: "keratin smooths cells which means more managable hair and less frizz 
            450ml,
        price: "650"
    },
    {
        name: "keratin classic condtioner",
        image: "C:\Users\Malaica1\Downloads\conditioner (2).jpeg",
        description: "promote smooth , straight, sleek hair.
            400ml",
        price: "650"
    },
        {
        name: "mocallure",
        image: "C:\Users\Malaica1\Downloads\mocallure.jpeg",
        description: "make your beauty visible".,
        price: "1800"
    },
            {
        name: "matte lip gloss",
        image: "C:\Users\Malaica1\Downloads\lipgloss.jpeg",
        description:" non-stick cup lip gloss",
        price: "150"
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
