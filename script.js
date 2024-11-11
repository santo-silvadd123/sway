let cartCount = 0; // Track the number of items in the cart

// Function to add an item to the cart
function addToCart() {
    cartCount++;
    document.querySelector("nav .nav-links a[href='#cart']").innerText = `Cart (${cartCount})`;
}
