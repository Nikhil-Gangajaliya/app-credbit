// login.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorBox = document.getElementById('error');

  // Simple demo validation (replace with DB/API validation)
  if (username === "admin" && password === "1234") {
    // set cookie (so server knows user is logged in)
    document.cookie = "loggedIn=true; path=/";

    // also keep in localStorage (optional)
    localStorage.setItem("user", JSON.stringify({ username }));

    // redirect to home
    window.location = "/index.html";
  } else {
    errorBox.textContent = "Invalid username or password!";
  }
});
