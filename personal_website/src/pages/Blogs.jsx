function Blogs() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Blogs</h1>
        <p className="mt-2 text-lg text-slate-400">
          Thoughts, writeups, and things I've learned (im just gonna be yapping).
        </p>
      </header>

      <div className="border border-slate-700/50 rounded-lg p-10 flex flex-col items-center justify-center text-center gap-4">
        <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <h2 className="text-xl font-semibold text-slate-300">Work in Progress</h2>
        <p className="text-slate-500 max-w-sm">
          Nothing here yet — check back soon.
        </p>
      </div>
    </div>
  );
}

export default Blogs;
