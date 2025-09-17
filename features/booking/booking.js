// Simple booking confirmation
const form = document.querySelector("form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "✅ Your booking has been confirmed!";
    form.reset();
});
