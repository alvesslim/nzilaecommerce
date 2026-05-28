import { useState } from 'react';

// Basic scaffolding for toast notifications
// In a real app we might use react-hot-toast or similar

let toastTimeout: NodeJS.Timeout;

export function useToast() {
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    
    toastTimeout = setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  return { toast, showToast };
}
