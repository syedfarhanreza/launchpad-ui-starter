import { Outlet } from 'react-router-dom';
import Header from './Header.component';
import Footer from './Footer.component';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="mx-auto min-h-[75vh] w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
