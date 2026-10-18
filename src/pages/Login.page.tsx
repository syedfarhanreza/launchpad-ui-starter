import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/User.context';
import { showSuccessToast } from '../utilities/toast.utilities';

const LoginPage = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('jane@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    const fakeUser = {
      name: 'Jane Doe',
      email: email.trim() || 'jane@example.com',
    };

    login(fakeUser);
    showSuccessToast('Welcome back, Jane!');
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-lg font-bold text-white">
            L
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sign in to continue to your dashboard</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-violet-900"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-violet-900"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Demo account: jane@example.com / password123
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
