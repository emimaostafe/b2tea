document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the elements
    var form = document.querySelector("#myForm");
    var payButton = document.querySelector(".pay-button");

    // Add event listener to the form submit event
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform any processing or validation here
        // ...

        // Redirect to the "goodbye.html" page
        window.location.href = "goodbye.html";
    });

    // Add event listener to the pay button click event
    payButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Perform any processing or validation here
        // ...

        // Redirect to the "goodbye.html" page
        window.location.href = "goodbye.html";
    });
});
