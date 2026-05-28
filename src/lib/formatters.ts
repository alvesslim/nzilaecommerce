export function formatCurrency(value: number): string {
  return `AKZ ${value.toLocaleString('pt-AO')}`;
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('pt-AO', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date));
}

export function truncate(str: string, length: number = 80): string {
  return str.length > length ? str.substring(0, length) + '...' : str;
}
