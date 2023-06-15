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
};
