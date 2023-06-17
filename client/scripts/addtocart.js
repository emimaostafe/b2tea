let cartItems = [];

function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice,
    };
    cartItems.push(item);
    updateCart();
    console.log("Item added to cart:", item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function updateCart() {
    const cartElement = document.querySelector(".icon-item .ri-shopping-bag-line");
    if (cartElement) {
        cartElement.setAttribute("data-count", cartItems.length);
    }
}

window.onload = function () {
    const storedCartItems = localStorage.getItem('cartItems');
    cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    const cartButtons = document.querySelectorAll(".btn__icon");
    cartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const itemName = this.parentNode.parentNode.parentNode.querySelector(".text").textContent;
            const itemPrice = this.parentNode.parentNode.parentNode.querySelector(".price").textContent;
            addToCart(itemName, itemPrice);
        });
    });

    const receiptData = localStorage.getItem('receiptData');
    if (receiptData) {
        const { items, total, date } = JSON.parse(receiptData);
        displayReceipt(items, total, date);
        localStorage.removeItem('receiptData');
    }
};

function displayReceipt(items, total, date) {
    const receiptElement = document.getElementById('receipt');
    receiptElement.innerHTML = `
        <h2>Receipt</h2>
        <div class="receipt-info">
            <div class="receipt-data">
                <strong>Date and Time:</strong> ${date}
            </div>
            <div class="receipt-data">
                <strong>Total:</strong> ${total}
            </div>
        </div>
        <div class="receipt-items">
            <h3>Items:</h3>
            <ul id="receipt-items-list"></ul>
        </div>
    `;

    const receiptItemsList = document.getElementById('receipt-items-list');
    items.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item.name + ' - ' + item.price;
        receiptItemsList.appendChild(li);
    });
}
