export function validateEmail(email) {
  if (!email) return "Email is required";
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email) ? null : "Invalid email address";
}

export function validatePassword(password) {
  if (!password) return "Password is required";
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
  return re.test(password)
    ? null
    : "Password must be 8-20 chars with uppercase, lowercase, number and special char";
}

export function validateRequired(value, fieldName = "This field") {
  return value ? null : `${fieldName} is required`;
}

export function validatePhone(phone) {
  if (!phone) return "Phone is required";
  const re = /^[0-9+\-()\s]{7,20}$/;
  return re.test(phone) ? null : "Invalid phone number";
}

export function validateAddressForm(values = {}) {
  const errors = {};
  if (!values.fullName) errors.fullName = "Full name required";
  if (!values.addressLine1) errors.addressLine1 = "Address required";
  if (!values.city) errors.city = "City required";
  if (!values.postalCode) errors.postalCode = "Postal code required";
  if (!values.phone) errors.phone = "Phone required";
  return errors;
}
