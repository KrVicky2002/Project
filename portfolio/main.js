    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Error elements
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      // Reset errors
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      let isValid = true;

      // Name validation
      if (name.length < 2) {
        nameError.textContent = "Name must be at least 2 characters long.";
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      // Message validation
      if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        isValid = false;
      }

      // If valid
      if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
      }
    });
