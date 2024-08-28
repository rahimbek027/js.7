document.addEventListener("DOMContentLoaded", function() {
    let elLoginForm = document.querySelector(".login-form");
    const isRegistered = JSON.parse(localStorage.getItem("isRegistered"))
    elLoginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        if(isRegistered){
            if (data.username === isRegistered.newUsername && data.password === isRegistered.newPassword) {
                // Use window.location.href to navigate
                window.location.href = "admin.html"; // Update this path as necessary
            } else {
                alert("Login yoki parol xato !!!");
            } 
        }else{
            if (data.username === "Rahimbek" && data.password === "123") {
                // Use window.location.href to navigate
                window.location.href = "admin.html"; // Update this path as necessary
            } else {
                alert("Login yoki parol xato !!!");
            }
        }
    });
});
