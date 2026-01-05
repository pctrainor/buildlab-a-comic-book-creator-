export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateUsername = (username: string): ValidationResult => {
  const isValid = /^[a-zA-Z0-9_]{3,20}$/.test(username);
  return isValid
    ? { isValid: true }
    : { isValid: false, message: 'Username must be 3-20 characters and contain only letters, numbers, and underscores.' };
};

export const validatePassword = (password: string): ValidationResult => {
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  return isValid
    ? { isValid: true }
    : { isValid: false, message: 'Password must be at least 8 characters long and include at least one letter and one number.' };
};

export const debounce = <T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>): void => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};