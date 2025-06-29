document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  const form = document.getElementById("register-form");
  const thankYou = document.getElementById("thank-you");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      age: form.age.value
    };

    fetch("https://script.google.com/macros/s/PASTE_YOUR_URL_HERE/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.text())
    .then(data => {
      form.reset();
      thankYou.style.display = "block";
      thankYou.textContent = "Thanks! Your registration has been received 🎉";
    })
    .catch(err => {
      console.error("Error!", err.message);
      thankYou.style.display = "block";
      thankYou.textContent = "Oops! Something went wrong.";
    });
});
