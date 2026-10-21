// Sign-in session: keep the user signed in with a refresh token.
export function saveSession(token, refreshToken) {
  localStorage.setItem('token', token);
  localStorage.setItem('refresh', refreshToken);
}
