type ClassValue = string | undefined | null | false;

// Utility to merge class names
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ');
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateOrderNumber() {
  return `WTC-${Math.floor(1000 + Math.random() * 9000)}`;
}
