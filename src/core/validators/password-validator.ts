export function validatePassword(password: string): boolean {
  let hasNumber = /[0-9]/;
  let hasUpperCase = /[A-Z]/;
  let hasLowerCase = /[a-z]/;
  if (password.length > 10 && hasNumber.test(password) && hasUpperCase.test(password) && hasLowerCase.test(password)) {
    return false;
  } else {
    return true;
  }
}
