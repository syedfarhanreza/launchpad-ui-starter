const appType = import.meta.env.VITE_APP_TYPE?.trim().toLowerCase() || '';

export const isProduction = appType === 'production' || import.meta.env.PROD;

export const isDevelopment = appType === 'development' || import.meta.env.DEV;
