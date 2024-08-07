function isPasswordSecure(password) {
    const minLength = 8;  
    const hasUpperCase = /[A-Z]/.test(password);  
    const hasLowerCase = /[a-z]/.test(password); 
    const hasDigit = /\d/.test(password);  
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); 

    return (
        password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar
    );
}
module.exports = {
    isPasswordSecure: isPasswordSecure
};