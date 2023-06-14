function addToCart(title, price) {
    // Get the cart items from localStorage
    let cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        // If cartItems exists, parse it from JSON and add the new item
        cartItems = JSON.parse(cartItems);
        cartItems.push({ title, price });
    } else {
        // If cartItems doesn't exist, create a new array with the new item
        cartItems = [{ title, price }];
    }
    // Store the updated cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
