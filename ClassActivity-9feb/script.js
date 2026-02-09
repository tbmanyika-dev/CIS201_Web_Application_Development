const form = document.getElementById("registrationForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submit

    const fullName = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const terms = document.getElementById("terms").checked;

    errorMsg.textContent = "";

    // JS validation rules
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
        errorMsg.textContent = "Name can only contain letters and spaces.";
        return;
    }

    if (phone.length !== 10) {
        errorMsg.textContent = "Phone number must be exactly 10 digits.";
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        return;
    }

    if (age < 16 || age > 100) {
        errorMsg.textContent = "Age must be between 16 and 100.";
        return;
    }

    if (!terms) {
        errorMsg.textContent = "You must agree to the Terms & Conditions.";
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    form.reset();
});
