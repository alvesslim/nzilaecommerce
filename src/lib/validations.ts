export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  return /^\+?[0-9\s-]{9,}$/.test(phone);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 6;
}
