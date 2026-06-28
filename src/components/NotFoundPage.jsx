import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-white/10 bg-slate-900/80 px-6 py-12 text-center shadow-2xl shadow-slate-950/40 backdrop-blur sm:px-10">
        <div className="mb-6 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
          404 error
        </div>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          The page you are looking for may have moved, been removed, or never existed. Let’s get you back to a delicious place.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
