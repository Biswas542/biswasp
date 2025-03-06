document.getElementById("myForm").onsubmit = function(event) {
    // Get Values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // Error Message Fields
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let phoneError = document.getElementById("phone-error");
    let passwordError = document.getElementById("password-error");

    // Validation Patterns (Regex)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^[0-9]{10}$/;
    
    let isValid = true; // Form Validity Check

    // Name Validation
    if (name === "" || name.length < 3) {
        nameError.textContent = "⚠ नाम कम्तिमा ३ अक्षरको हुनुपर्छ!";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    if (email === "" || !emailPattern.test(email)) {
        emailError.textContent = "⚠ कृपया मान्य इमेल राख्नुहोस्!";
        isValid = false;
    } else {
        emailError.textContent = "";
        
        // Phone Validation
        if (phone === "" || !phonePattern.test(phone)) {
            phoneError.textContent = "⚠ मोबाइल नम्बर १० अंकको मात्र हुनुपर्छ!";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        // Password Validation
        if (password === "" || password.length < 6) {
            passwordError.textContent = "⚠ पासवर्ड कम्तिमा ६ क्यारेक्टरको हुनुपर्छ!";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // यदि कुनै पनि Field गलत छ भने Form रोक्ने
        if (!isValid) {
            event.preventDefault();
        }
    };

