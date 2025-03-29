document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Basic validation
    if (email === "admin@meditrack.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "../dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid credentials, please try again.");
    }
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login
});
