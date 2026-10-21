// Sign-up + sign-in helpers.
export function validateSignUp({ email, password }) {
  const errors = [];
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('Enter a valid email');
  if (password.length < 12 || !/[0-9]/.test(password)) errors.push('Password: 12+ characters with a number');
  return errors;
}

export function saveSession(token, refreshToken) {
  localStorage.setItem('token', token);
  localStorage.setItem('refresh', refreshToken);
}
