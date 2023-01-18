export function validatePassword(password: string): boolean {
  let hasNumber = /\d/;
  let hasUpperCase = /[A-Z]/;
  let hasLowerCase = /[a-z]/;
  if (password.length > 10 && hasNumber.test(password) && hasUpperCase.test(password) && hasLowerCase.test(password)) {
    return false;
  } else {
    return true;
  }
}
