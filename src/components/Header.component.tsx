import { Link } from 'react-router-dom';
import { useTheme } from '../context/Theme.context';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
            L
          </span>
          Launchpad UI
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          <Link to="/" className="transition hover:text-slate-900 dark:hover:text-white">Home</Link>
          <Link to="/dashboard" className="transition hover:text-slate-900 dark:hover:text-white">Dashboard</Link>
          <Link to="/login" className="transition hover:text-slate-900 dark:hover:text-white">Login</Link>
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800">
          {(['light', 'dark', 'system'] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTheme(option)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition ${
                theme === option
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
