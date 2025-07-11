document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById("product-gallery");
const products = [
  
  {
    name: "Keratin Classic Shampoo",
    image:<img src="https://kiwla.com/products/Keratin-Shampoo-400ml/image.png" 
     alt="Keratin Classic Shampoo 400ml – purple bottle">,  
    description: "For smooth, straight, sleek hair.",
    price: "650"
  },

  {
    name: "Keratin Classic Conditioner",
    description: "Nourishes and smooths hair for a sleek finish.",
    price: "650"
  },
  {
    name: "Moc❤️Allure eyeshadow kit",
    description: "Premium fragrance for a luxurious scent experience.",
    price: "1800"
  },
  {
    name: "Eyeshadow Kit",
    description: "Multi-shade palette for stunning eye looks.",
    price: "1900"
  },
  {
    name: "Matte Lip Gloss",
    description: "Smooth, long-lasting matte finish for your lips.",
    price: "150"
  },
  {
    name: "Deep Hydration Spa Kit",
    description: "Complete skincare for deep moisturization.",
    price: "1000"
  },
  {
    name: "Soap",
    description: "Gentle cleansing for soft and refreshed skin.",
    price: "320"
  },
  {
    name: "Gluta White Night Cream - Acne Care",
    description: "Fights acne and brightens skin overnight.",
    price: "500"
  },
  {
    name: "Gluta White Night Cream - Whitening & Anti-Aging",
    description: "Skin whitening with anti-aging benefits.",
    price: "500"
  },
  {
    name: "Makeup Kit",
    description: "Includes Sunisa foundation, eyeshadow pack, and Bene tint.",
    price: "1100"
  },
  {
    name: "Make-up Brush",
    description: "Soft-bristled brush for flawless makeup application.",
    price: "235"
  },
  {
    name: "Derma Face Wash Kit",
    description: "Deep cleansing kit for daily skincare routine.",
    price: "1480"
  },
  {
    name: "Urgent Facial (300g)",
    description: "Instant glow facial treatment for dull skin.",
    price: "625"
  },
  {
    name: "Lemon Face Wash",
    description: "Cleanses and refreshes with natural lemon extract.",
    price: "425"
  },
  {
    name: "Ordinary Face Kit Deal",
    description: "Complete skincare kit for everyday use.",
    price: "850"
  },
  {
    name: "Derma Gold Facial Kit",
     image: "C:\Users\Malaica1\Downloads\shampoo.jpeg",
    description: "Brightening and anti-aging facial treatment.",
    price: "1230"
  },
  {
    name: "Derma Brightening Facial Kit",
    description: "Glowing skin treatment with brightening formula.",
    price: "930"
  },
  {
    name: "Shiner Gloss",
    description: "Adds instant shine and glamour to your lips.",
    price: "200"
  },
  {
    name: "Johnson White Cosmetics Facial Kit",
    description: "Premium facial kit for intensive skin care.",
    price: "8000"
  },
  {
    name: "Lip and Eye Crayon (Waterproof)",
    description: "Dual-use waterproof crayon for eyes and lips.",
    price: "100"
  },
  {
    name: "Johnson White Kit Pack of 5",
    description: "Set of 5 skincare kits for brightening and care.",
    price: "3000"
  },
  {
    name: "Blender Box 3in1",
    description: "Set of 3 beauty blenders for smooth application.",
    price: "300"
  },
  {
    name: "Blender Box Pack of 6",
    description: "Pack of 6 beauty blenders in assorted colors.",
    price: "400"
  },
  {
    name: "Ice Face Cleanser",
    description: "Cooling cleanser that refreshes and hydrates.",
    price: "300"
  },
  {
    name: "Lip Oil",
    description: "Moisturizes and nourishes dry lips.",
    price: "500"
  },
  {
    name: "Skin Nourishing Liquid Foundation",
    description: "Lightweight foundation with skin-friendly ingredients.",
    price: "400"
  },
  {
    name: "Bene Tint",
    description: "Multi-use lip and cheek tint for natural flush.",
    price: "300"
  },
  {
    name: "Lofty Skin Whitening",
    description: "Effective whitening solution for glowing skin.",
    price: "300"
  },
  {
    name: "24K Gold Brightening Face Wash",
    description: "Enriched with gold particles for glowing skin.",
    price: "400"
  },
  {
    name: "20 Colours Eyeshadow Makeup Kit",
    description: "Diverse color range for creative eye makeup.",
    price: "300"
  },
  {
    name: "10 Pieces Lashes Box",
    description: "Set of 10 natural-looking false eyelashes.",
    price: "700"
  },
  {
    name: "Face Primer",
    description: "Smooths skin for long-lasting makeup.",
    price: "700"
  },
  {
    name: "Fair & Lovely Face Wash (80g)",
    description: "Lightens and brightens skin tone.",
    price: "400"
  },
  {
    name: "Mascara",
    description: "Volumizing and lengthening mascara.",
    price: "400"
  },
  {
    name: "Blush and Highlighter",
    description: "Each 400, Pack of 4: 1000 - adds color and glow.",
    price: "400"
  },
  {
    name: "Huda Beauty Foundation",
    description: "High-coverage foundation for flawless skin.",
    price: "3000"
  }
]



    

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
