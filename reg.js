const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordMatchError = document.getElementById('password-match-error');

// Function to check if the password and confirm password fields match
function checkPasswords() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordMatchError.textContent = 'Passwords do not match';
  } else {
    passwordMatchError.textContent = '';
  }
}

// Event listeners to check password match on input and blur
passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);
passwordInput.addEventListener('blur', checkPasswords);
confirmPasswordInput.addEventListener('blur', checkPasswords);
