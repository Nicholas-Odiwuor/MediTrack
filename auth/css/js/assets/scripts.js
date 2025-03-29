// Ensure DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from refreshing the page
            
            // Get user input values
            let email = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value.trim();

            // Simulate authentication (Replace with actual API call later)
            if (email === "admin@meditrack.com" && password === "password123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            // Get user input values
            let name = document.getElementById("signupName").value.trim();
            let email = document.getElementById("signupEmail").value.trim();
            let password = document.getElementById("signupPassword").value.trim();
            let confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

            // Simple validation checks
            if (name === "" || email === "" || password === "" || confirmPassword === "") {
                alert("All fields are required.");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Simulate user registration (Replace with actual API call later)
            alert("Account created successfully! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }

});
