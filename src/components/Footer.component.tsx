const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 Launchpad UI Starter.</p>
        <div className="flex items-center gap-4">
          <span>React</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
