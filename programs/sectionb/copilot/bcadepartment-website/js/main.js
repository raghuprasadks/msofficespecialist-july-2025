// JavaScript code for interactivity and functionality on the bcadepartment website

// Function to validate the contact form
function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Thank you for your message!');
    return true;
}

// Function to handle signup form submission
function handleSignup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    alert('Signup successful! You can now log in.');
    return true;
}

// Function to handle login form submission
function handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    alert('Login successful! Welcome back.');
    return true;
}

// Event listeners for form submissions
document.getElementById('contact-form').onsubmit = validateContactForm;
document.getElementById('signup-form').onsubmit = handleSignup;
document.getElementById('login-form').onsubmit = handleLogin;