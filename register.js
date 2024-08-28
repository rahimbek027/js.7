document.addEventListener("DOMContentLoaded", function() {
    let elRegisterForm = document.querySelector(".register-form");

    elRegisterForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const newData = {
            newUsername: e.target.username.value,
            newPassword: e.target.password.value
        };
        
        // Save registration data to localStorage
        localStorage.setItem("isRegistered", JSON.stringify(newData));
        
        // Redirect to index.html using window.location.href
        window.location.href = "index.html"; // Adjust path if needed
    });
});
