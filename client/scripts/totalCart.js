// Retrieve cart items from local storage
const storedCartItems = localStorage.getItem('cartItems');
const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

// Update the HTML with the cart items
const addToCartContainer = document.querySelector('.add-to-cart');
if (addToCartContainer) {
    addToCartContainer.innerHTML = cartItems
        .map((item) => `<div>${item.name} - ${item.price}</div>`)
        .join('');
}

const totalPriceElement = document.querySelector('.total-price');
let totalPrice = 0;
if (addToCartContainer) {
    addToCartContainer.innerHTML = cartItems
        .map((item) => {
            const itemPrice = parseFloat(item.price);
            totalPrice += itemPrice;
            return `<div>${item.name} - ${itemPrice} $</div> <button class="remove-button">Remove</button></div>`;
        })
        .join('');
}
if (totalPriceElement) {
    totalPriceElement.textContent = totalPrice + ' lei';
}


// Add event listener to "Pay Now" button
const payNowButton = document.getElementById('payNowButton');
payNowButton.addEventListener('click', function () {
    // Clear the cart items from local storage
    localStorage.removeItem('cartItems');

    // Send cart items to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit-order.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful response from the server
            console.log('Order submitted successfully!');
        } else {
            // Handle error response from the server
            console.error('Failed to submit order.');
        }
    };
    xhr.send(JSON.stringify(cartItems));
});