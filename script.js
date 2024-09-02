// script.js
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('modal').style.display = 'flex';
}

function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');

    errorDiv.textContent = ''; // Clear previous errors

    if (!email || !password) {
        errorDiv.textContent = 'Please fill in both fields.';
        return;
    }

    // Simulate a login process (replace this with actual API call)
    alert('Login successful!');
    closeModal();
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const errorDiv = document.getElementById('signup-error');

    errorDiv.textContent = ''; // Clear previous errors

    if (!email || !password || !confirmPassword) {
        errorDiv.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match.';
        return;
    }

    // Simulate a signup process (replace this with actual API call)
    alert('Signup successful!');
    closeModal();
}

// Set default view
showLogin();

