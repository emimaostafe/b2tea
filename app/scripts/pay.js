document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the elements
    var payButton = document.querySelector(".pay-button");

    // Add event listener to the pay button click event
    payButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the items from the cart
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));

        // Prepare the data for the request
        var data = {
            clientid: 0, // Set the clientid to 0
            tableid: 0, // Set the tableid to 0
            istakeaway: true, // Set istakeaway to true
            datacomanda: new Date().toISOString() // Set the current timestamp
        };

        // Combine the cart items into a single string
        var items = cartItems.map(function(item) {
            return item.name + ' (' + item.description + ')';
        }).join(', ');

        // Add the items to the data
        data.items = items;

        // Send the data to the server
        sendDataToServer(data);
    });

    // Function to send data to the server
    function sendDataToServer(data) {
        // Perform an AJAX request to the server
        // Replace the URL with the actual endpoint to save the data
        var url = "http://localhost:8000/pages/pay.html";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Success callback
                    console.log("Order saved successfully!");
                    // Clear the cart after the order is saved
                    localStorage.removeItem("cartItems");
                    // Redirect to the "goodbye.html" page
                    window.location.href = "goodbye.html";
                } else {
                    // Error callback
                    console.error("Failed to save the order!");
                }
            }
        };


        xhr.send(JSON.stringify(data));
    }
});
