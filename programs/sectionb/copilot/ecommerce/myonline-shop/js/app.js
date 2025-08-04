// This file contains the JavaScript code for the online shop. 
// It handles fetching product data, displaying products on the page, and managing user interactions.

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

function fetchProducts() {
    fetch('products/products.json')
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('Error fetching products:', error));
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        `;
        
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Logic to add the product to the shopping cart
    console.log(`Product ${productId} added to cart.`);
}