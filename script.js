// Simple interaction for the "Join Now" buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! Our team will contact you soon.');
    });
});

// --- ADD THE NEW CODE BELOW ---
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Correct logic: Loop through all links to remove 'active'
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' to the specific one you just clicked
        this.classList.add('active');
    });
});

const modal = document.getElementById("paymentModal");
const btn = document.querySelector(".membership-btn"); // Point this to your plan button
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}