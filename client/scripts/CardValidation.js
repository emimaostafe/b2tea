// Get the input element
const nameInput = document.getElementById("name");

// Add an input event listener
nameInput.addEventListener("input", function(event) {
    const input = event.target.value;
    const filteredInput = input.replace(/[^A-Za-z]/g, ""); // Remove non-letter characters
    nameInput.value = filteredInput; // Update the input value
});
// Get the input element
const cardNumberInput = document.getElementById("cardnumber");

// Add an input event listener
cardNumberInput.addEventListener("input", function(event) {
    const input = event.target.value;
    const filteredInput = input.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    cardNumberInput.value = filteredInput; // Update the input value
});
// Get the input element
const expirationDateInput = document.getElementById("expirationdate");

// Add an input event listener
expirationDateInput.addEventListener("input", function(event) {
    const input = event.target.value;
    const filteredInput = input.replace(/[^0-9/]/g, ""); // Remove non-numeric and non-slash characters
    const formattedInput = formatExpirationDate(filteredInput); // Format the input as mm/yy
    expirationDateInput.value = formattedInput; // Update the input value
});

// Function to format the expiration date as mm/yy
function formatExpirationDate(input) {
    const digits = input.replace(/\D/g, ""); // Remove non-numeric characters
    const month = digits.slice(0, 2);
    const year = digits.slice(2, 4);
    let formattedDate = month;

    if (year) {
        formattedDate += "/" + year;
    }

    return formattedDate;
}
// Get the input element
const securityCodeInput = document.getElementById("securitycode");

// Add an input event listener
securityCodeInput.addEventListener("input", function(event) {
    const input = event.target.value;
    const filteredInput = input.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    const formattedInput = filteredInput.slice(0, 3); // Take only the first 3 digits
    securityCodeInput.value = formattedInput; // Update the input value
});
// Function to check if all fields are completed
function areAllFieldsCompleted() {
    const name = nameInput.value.trim();
    const cardNumber = cardNumberInput.value.trim();
    const expirationDate = expirationDateInput.value.trim();
    const securityCode = securityCodeInput.value.trim();

    return name !== '' && cardNumber !== '' && expirationDate !== '' && securityCode !== '';
}
// Get the "Pay" button element
const payCardButton = document.getElementById("payCardButton");

// Function to handle the pay button click event
function handlePayCardClick() {
    event.preventDefault();
    if (areAllFieldsCompleted()) {
        // All fields are completed, perform the payment action
        window.location.href = "/goodbye.php";
    } else {
        // Some fields are incomplete, show an error message
        alert("Please complete all the required fields.");
    }
}

// Add a click event listener to the "Pay" button
payCardButton.addEventListener("click", handlePayCardClick);
payCardButton.addEventListener('click', function () {
    // Clear the cart items from local storage
    localStorage.removeItem('cartItems');

});