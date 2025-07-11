
const products = [
    // Add your 70 products here. Example
    <!-- inside your page's product loop -->
<div class="product">
  <h2>keratin classic conditioner</h2>
  <img src="images/conditioner2.jpg" alt="keratin classic conditioner">
  <p>promote smooth, straight, sleek hair.</p>
  <p>Price: ₹650</p>
</div>

    

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
