import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useUser } from '../context/User.context';
import { isDevelopment } from '../utilities/app.utilities';
import { showInfoToast } from '../utilities/toast.utilities';

const Dashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const socketUrl = import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:3000';

  const stats = useMemo(
    () => [
      { label: 'Revenue', value: '$84.2K', change: '+12.4%' },
      { label: 'Visitors', value: '12.4K', change: '+8.1%' },
      { label: 'Conversion', value: '6.8%', change: '+1.2%' },
      { label: 'Tasks', value: '128', change: '-3.5%' },
    ],
    []
  );

  useEffect(() => {
    const socket = io(socketUrl, {
      transports: ['websocket'],
      autoConnect: false,
    });

    socket.connect();

    socket.on('connect', () => {
      if (isDevelopment) console.log('Connected to server:', socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, [socketUrl]);

  const handleLogout = () => {
    logout();
    showInfoToast('You have been logged out.');
    navigate('/login');
  };

  return (
    <div className="space-y-8 py-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Overview</p>
          <h1 className="mt-2 text-3xl font-bold">Welcome back, {user?.name || 'Guest'}</h1>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
        >
          Logout
        </button>
      </div>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
              <span className="text-sm font-medium text-emerald-500">{stat.change}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">Recent activity</h2>
          <div className="space-y-4">
            {[
              ['Design review', 'Completed in 1h 20m'],
              ['Marketing launch', 'Published 2 updates'],
              ['Client sync', 'Meeting scheduled for tomorrow'],
            ].map(([title, meta]) => (
              <div key={title} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{meta}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">Live</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">Profile</h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Name</p>
              <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">{user?.name}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">{user?.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
