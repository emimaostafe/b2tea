// Retrieve cart items from local storage
const storedCartItems = localStorage.getItem('cartItems');
const removeButtons = document.querySelectorAll('.remove-button');
const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

removeButtons.forEach((button) => {
    button.addEventListener('click', removeFromCart);
});

function removeFromCart(event) {
    const index = event.target.dataset.index;

    // Eliminați produsul din coș pe baza indexului
    cartItems.splice(index, 1);

    // Actualizați stocarea locală a elementelor de coș
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Actualizați chitanța și totalul
    updateReceipt();
}

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
    .map((item, index) => {
        const itemPrice = parseFloat(item.price);
        totalPrice += itemPrice;
        return `<div>${item.name} - ${itemPrice} $ <button class="remove-button" data-index="${index}">Remove</button></div>`;
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