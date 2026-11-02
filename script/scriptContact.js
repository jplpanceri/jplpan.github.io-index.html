// Get the elements by ID
const form = document.getElementById("contactForm");
const result = document.getElementById("result");
const phone = document.getElementById("phone");


//Function to run when the submit button is clicked
form.addEventListener("submit", function (event) {
    
    // Stops the browser from reloading the page.
    event.preventDefault();
   
    // Keeping digits only so spaces and punctuation don't count.
    const phoneDigits = phone.value.replace(/\D/g, "");
    
    // Allowing optional + and common phone formatting characters and a lenght between 7 and 15
    const validPhone =
        /^\+?[\d\s().-]+$/.test(phone.value) &&
        phoneDigits.length >= 7 &&
        phoneDigits.length <= 15;   

    // If the phone number is invalid, show an error and focus that field.
    if (!validPhone) {
        result.textContent = "Please enter a valid phone number.";
        phone.focus();
        return; // Stop here; don't show the success message.
    }
    // Displays a confirmation message.
    result.textContent = "Thank you! Request sent.";
});

// Runs this function whenever the user changes an input.
form.addEventListener("input", function () { 
    // Clears the result message while the user edits the form.
    result.textContent = ""; 
});
