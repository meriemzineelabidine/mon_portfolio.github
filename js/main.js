// main.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Validate form inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            showError('Please fill in all fields.');
            return;
        }

        // Validate email format
        if (!validateEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (replace this with actual form submission logic)
        showSuccess(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear form inputs after submission
        clearForm();
    });

    // Function to display error message
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-error';
        errorDiv.appendChild(document.createTextNode(message));
        contactForm.insertBefore(errorDiv, contactForm.firstChild);

        // Remove the error message after 3 seconds
        setTimeout(function () {
            errorDiv.remove();
        }, 3000);
    }

    // Function to display success message
    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success';
        successDiv.appendChild(document.createTextNode(message));
        contactForm.insertBefore(successDiv, contactForm.firstChild);

        // Remove the success message after 6 seconds
        setTimeout(function () {
            successDiv.remove();
        }, 6000);
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to clear form inputs
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});
