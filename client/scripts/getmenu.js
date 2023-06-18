// Fetch products using AJAX
var xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:8123/api/products", true);
xhr.onload = function() {
    if (xhr.status === 200) {
        var products = JSON.parse(xhr.responseText);
        populateTeaMenu(products);
    }
};
xhr.send();

// Function to populate the tea menu section with products
function populateTeaMenu(products) {
    var cardsContainer = document.querySelector('.cards');
    products.forEach(function(product) {
        var card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = 'url(' + product.imageUrl + ')';

        var top = document.createElement('div');
        top.className = 'top top_1';
        card.appendChild(top);

        var actions = document.createElement('div');
        actions.className = 'actions';
        top.appendChild(actions);

        var btnIcon = document.createElement('div');
        btnIcon.className = 'btn btn__icon';
        actions.appendChild(btnIcon);

        var icon = document.createElement('i');
        icon.className = 'ri-shopping-cart-line';
        btnIcon.appendChild(icon);

        var bottom = document.createElement('div');
        bottom.className = 'bottom';
        card.appendChild(bottom);

        var info = document.createElement('div');
        info.className = 'info';
        bottom.appendChild(info);

        var title = document.createElement('div');
        title.className = 'title';
        info.appendChild(title);

        var text = document.createElement('div');
        text.className = 'text';
        text.textContent = product.name;
        title.appendChild(text);

        var price = document.createElement('div');
        price.className = 'price';
        price.textContent = product.price + ' $';
        title.appendChild(price);

        var description = document.createElement('div');
        description.className = 'description';
        description.textContent = product.description;
        info.appendChild(description);

        cardsContainer.appendChild(card);
    });
}