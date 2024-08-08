function signupValidation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;
    const cnic_pattern = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/; // CNIC pattern: 00000-0000000-0
    const phone_pattern = /^[0-9]{11}$/; // Phone number pattern: 11 digits

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 5 characters long";
    } else {
        error.password = "";
    }

    if (values.cnic === "") {
        error.cnic = "CNIC should not be empty";
    } else if (!cnic_pattern.test(values.cnic)) {
        error.cnic = "Invalid CNIC format. Please enter in the format: 00000-0000000-0";
    } else {
        error.cnic = "";
    }

    if (values.phone === "") {
        error.phone = "Phone number should not be empty";
    } else if (!phone_pattern.test(values.phone)) {
        error.phone = "Invalid phone number format. Please enter 11 digits";
    } else {
        error.phone = "";
    }

    return error;
}

export default signupValidation;
