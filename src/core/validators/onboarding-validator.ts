export function validate(inputValue: string): boolean {
  if (inputValue.length > 2 && inputValue.length < 150) {
    return false;
  } else {
    return true;
  }
}
