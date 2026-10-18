import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Ready-to-extend starter',
    text: 'Ship projects faster with a clean architecture and reusable app patterns.',
  },
  {
    title: 'Modern UI system',
    text: 'Dark mode, responsive layouts, and polished components you can adapt to your product.',
  },
  {
    title: 'Production-minded setup',
    text: 'Structured routing, context state, and environment config for applications of any size.',
  },
];

const HomePage = () => (
  <div className="space-y-12 py-6">
    <section className="grid items-center gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-8 text-white shadow-2xl shadow-violet-500/20 md:grid-cols-2 md:p-12">
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-100">
          For any kind of application
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Launchpad UI Starter</h1>
          <p className="max-w-lg text-base text-violet-100 md:text-lg">
            A flexible React + TypeScript foundation for building any kind of web application, from a simple website to a full-scale product.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/dashboard"
            className="rounded-full bg-white px-5 py-3 font-semibold text-violet-700 transition hover:bg-violet-50"
          >
            Open dashboard
          </Link>
          <Link
            to="/login"
            className="rounded-full border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            Try login flow
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/20 bg-slate-950/20 p-5 backdrop-blur-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Projects', '24'],
            ['Launches', '08'],
            ['Uptime', '99.9%'],
            ['Satisfaction', '4.9/5'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-violet-100">{label}</div>
              <div className="mt-2 text-3xl font-bold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="grid gap-5 md:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500" />
          <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h2>
          <p className="text-slate-600 dark:text-slate-300">{feature.text}</p>
        </div>
      ))}
    </section>
  </div>
);

export default HomePage;
