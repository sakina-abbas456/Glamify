// Step 1: Prepare your product data
const products = [
  {
    name: "Keratin Classic Shampoo",
    description: "Keratin smooths cells which means more manageable hair and less frizz. 450ml",
    image: "/images/shampoo.jpeg",
    price: 650
  },
  {
    name: "Argan Oil Conditioner",
    description: "Deeply nourishes hair, leaving it silky and shiny. 400ml",
    image: "/images/argan_conditioner.jpeg",
    price: 700
  },
  // ... Add more products up to 70
];

// Step 2: Add all products at once to your database or array
// Example: Adding to an in-memory array (for demo purposes)
let storeProducts = [];
storeProducts = storeProducts.concat(products);

// Now you have all your products in storeProducts
console.log(`Total products: ${storeProducts.length}`);


