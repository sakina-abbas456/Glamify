document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById("product-gallery")
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
      image: "gluta white cream 'acne care.jpg"
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
      price: "11,000",
      image: "make-up kit (sunisa foundation , pack of eyeshadow , bene tint.jpg"
    },
    {
      name: "make-up brush",
      description: "Perfect for blending foundation, blush, or powder.",
      price: "each 235",
      image: "make-up brush.jpg"
    },
    {
      name: "derma face wash kit",
      description: "Cleanses deeply to remove dirt, oil, and impurities.",
      price: "1480",
      image: "derma face wash kit.jpg"
    },
     {
      name: "urgent facial (300 gram)",
      description: "Instant glow and hydration in just one facial.",
      price: "625",
      image: "urgent facial.jpg"
    },
    {
      name: "urgent facial 2 (300 gram)",
      description: "Instant glow and hydration in just one facial.",
      price: "625",
      image: "urgent facial 2.jpg"
    },
    {
      name: "lemon face wash",
      description: "Infused with lemon to refresh and brighten your skin.",
      price: "425",
      image: "lemon face wash.jpg"
    },
    {
      name: "ordinary face kit deal",
      description: "Complete skincare kit from The Ordinary for clear, healthy skin.",
      price: "850",
      image: "ordinary face kit deal.jpeg"
    },
      {
      name: "derma gold facial kit",
      description: "Professional gold facial kit for radiant, youthful skin at home.",
      price: "1230",
      image: "derma gold facial kit.jpg"
    },
     {
      name: "derma brightening facial kit",
      description: "Brightens dull skin for a fresh, radiant glow.",
      price: "930",
      image: "derma brightening facial kit.jpg"
    },
    {
      name: "shiner lip gloss",
      description: "Glossy finish that hydrates and shines all day.",
      price: "200",
      image: "shiner lip gloss.jpg"
    },
    {
      name: "johnson white cosmetics facial kit",
      description: "Gentle facial kit for a bright, smooth, and refreshed complexion.",
      price: "8000",
      image: "johnson white cosmetics facial kit.jpg"
    },
      {
      name: "johnson white kit pack of 5",
      description: "Pack of 5 skincare essentials for bright, healthy-looking skin",
      price: "3000",
      image: "johnson white kit pack of 5.jpg"
    },
    {
      name: "lip and eye crayon water proof",
      description: "Waterproof crayon for bold lips and defined eyes in one swipe",
      price: "each 100",
      image: "lip and eye crayon water proof.jpg"
    },
     {
      name: "blender box 3in1",
      description: "3-in-1 blender set for flawless foundation, contour, and blending",
      price: "300",
      image: "blender box 3in1.jpg"
    },
     {
      name: "blender box pack of 6",
      description: "High-quality sponges for streak-free blending—wet or dry use.",
      price: "400",
      image: "blender box pack of 6.jpg"
    },
     {
      name: "ice face cleanser",
      description: "Instantly cools and cleanses for a fresh, energized feel.",
      price: "300",
      image: "ice face cleanser.jpg"
    },
    {
      name: "lip oil",
      description: "Hydrates, smooths, and adds natural shine to lips.",
      price: "500",
      image: "lip oil.jpg"
    },
    {
      name: "skin nourishing liquid foundation",
      description: "Lightweight foundation that hydrates and evens out skin tone.",
      price: "400",
      image: "skin nourishing liquid foundation.jpg"
    },
     {
      name: "bene tint",
      description: "Perfect for a natural, just-pinched look—anytime, anywhere.",
      price: "300",
      image: "bene tint.jpg"
    },
     {
      name: "huda beauty foundation",
      description: "Huda Beauty Foundation – full coverage, long-lasting perfection",
      price: "3000",
      image: "huda beauty foundation.jpg"
    },
   {
      name: "24K gold brightening face wash",
      description: "Gently cleanses while enhancing your skin’s natural glow.",
      price: "400",
      image: "24K gold brightening face wash.jpg"
    },
    {
      name: "20 colours eyeshadow make-up kit",
      description: "20-color eyeshadow kit for bold, blendable, all-day wear.",
      price: "300",
      image: "20 colours eyeshadow make-up kit.jpg"
    },
   {
      name: "10 pieces lashes box",
      description: "10 pairs of premium lashes for every mood and look.",
      price: "700",
      image: "10 pieces lashes box.jpg"
    },
    {
      name: "face primer",
      description: "Blurs pores and creates a smooth base for long-lasting makeup.",
      price: "700",
      image: "face primer.jpg"
    },
    {
      name: "fair & lovely face wash (80 gram)",
      description: "Fair & Lovely Face Wash – 80g of glow-boosting freshness.",
      price: "400",
      image: "fair & lovely face wash (80 gram).jpg"
    },
     {
      name: "mascara",
      description: "Lifts and lengthens lashes for a bold, dramatic look",
      price: "400",
      image: "mascara.jpg"
    }
  
    
   
  
    
    
    
    
    
    
    
 // Add more products...
    
  ];
 products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = 
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.description}</div>
      <div class="product-price">Rs. ${product.price}</div>
    ;
    gallery.appendChild(card);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
});

 
