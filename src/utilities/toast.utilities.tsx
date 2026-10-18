import { toast, ToastOptions, Id, ToastContainerProps } from 'react-toastify';

// Default toast configuration matching main.tsx settings
export const defaultToastConfig: Partial<ToastOptions> = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'light',
};

// Container-specific default configuration
export const defaultContainerConfig: ToastContainerProps = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'light',
};

// Helper function to merge default config with custom options
const mergeWithDefaults = (options?: ToastOptions): ToastOptions => {
  return { ...defaultToastConfig, ...options };
};

// Function to update default toast configuration
export const updateDefaultToastConfig = (newConfig: Partial<ToastOptions>): void => {
  Object.assign(defaultToastConfig, newConfig);
};

// Function to update default container configuration
export const updateDefaultContainerConfig = (newConfig: Partial<ToastContainerProps>): void => {
  Object.assign(defaultContainerConfig, newConfig);
};

// Function to get current default configurations
export const getCurrentToastConfig = (): Partial<ToastOptions> => ({ ...defaultToastConfig });
export const getCurrentContainerConfig = (): ToastContainerProps => ({ ...defaultContainerConfig });

// Success toast
export const showSuccessToast = (message: string, options?: ToastOptions): Id => {
  return toast.success(message, mergeWithDefaults(options));
};

// Error toast
export const showErrorToast = (message: string, options?: ToastOptions): Id => {
  return toast.error(message, mergeWithDefaults(options));
};

// Loading toast (react-toastify doesn't have a built-in loading toast, so we'll use info with custom styling)
export const showLoadingToast = (message: string, options?: ToastOptions): Id => {
  return toast.info(message, mergeWithDefaults(options));
};

// Custom toast
export const showCustomToast = (message: string, options?: ToastOptions): Id => {
  return toast(message, mergeWithDefaults(options));
};

// Info toast
export const showInfoToast = (message: string, options?: ToastOptions): Id => {
  return toast.info(message, mergeWithDefaults(options));
};

// Warning toast
export const showWarningToast = (message: string, options?: ToastOptions): Id => {
  return toast.warn(message, mergeWithDefaults(options));
};

// Promise toast - useful for async operations
export const showPromiseToast = (
  promise: Promise<unknown>,
  messages: {
    pending: string;
    success: string;
    error: string;
  },
  options?: ToastOptions
): Promise<unknown> => {
  return toast.promise(promise, messages, mergeWithDefaults(options));
};

// Dismiss a specific toast
export const dismissToast = (toastId: Id): void => {
  toast.dismiss(toastId);
};

// Dismiss all toasts
export const dismissAllToasts = (): void => {
  toast.dismiss();
};

// Update a toast
export const updateToast = (toastId: Id, options: ToastOptions): void => {
  toast.update(toastId, options);
};

// Check if a toast is active
export const isToastActive = (toastId: Id): boolean => {
  return toast.isActive(toastId);
};

export default toast;
