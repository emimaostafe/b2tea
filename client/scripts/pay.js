// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to each button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
});

// Function to handle the "Add to Cart" button click
function addToCart(event) {
    const product = event.target.dataset.product;
    const price = event.target.dataset.price;

    // Send an AJAX request to the server to add the item to the cart
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'add_to_cart.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Item added successfully, update the receipt
            updateReceipt();
        }
    };
    xhr.send(`product=${product}&price=${price}`);
}

// Function to update the receipt
function updateReceipt() {
    // Send an AJAX request to the server to get the updated receipt
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_receipt.php');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Replace the receipt HTML with the updated receipt
            const receipt = document.querySelector('.receipt');
            receipt.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}