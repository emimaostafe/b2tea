
const storedCartItems = localStorage.getItem('cartItems');
const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

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
            return `<div>${item.name} - ${itemPrice} $</div>`;
        })
        .join('');
}
if (totalPriceElement) {
    totalPriceElement.textContent = totalPrice + ' $';
}

const payNowButton = document.getElementById('payNowButton');
payNowButton.addEventListener('click', function () {
  localStorage.removeItem('cartItems');

  const url = 'http://localhost:8123/api/products'; // Update the URL
  const headers = {
    'Content-Type': 'application/json'
  };

  // Data to send to the server
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const jsonPayload = JSON.stringify(cartItems);

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: jsonPayload
  })
    .then(function (response) {
      if (response.ok) {
        console.log('Order submitted successfully!');
      } else {
        console.error('Failed to submit order.');
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
});
