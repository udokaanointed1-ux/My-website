// Assuming you have HTML inputs with these IDs
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page from reloading

    const userCredentials = {
        email: emailInput.value,
        password: passwordInput.value // Note: In production, never save plain-text passwords!
    };

    // 1. Save user to storage (simulating a database save)
    localStorage.setItem('registeredUser', JSON.stringify(userCredentials));

    // 2. Automatically log them in by setting a session token/flag
    localStorage.setItem('isLoggedIn', 'true');

    alert('Signup successful! Redirecting...');

    // 3. Redirect them to the main website/dashboard page
    window.location.href = 'wallet.html'; 
});
console.log(userCredentials);
localStorage.getItem(userCredentials);
