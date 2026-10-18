import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { defaultContainerConfig } from './utilities/toast.utilities.tsx';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <ToastContainer {...defaultContainerConfig} />
  </>
);
