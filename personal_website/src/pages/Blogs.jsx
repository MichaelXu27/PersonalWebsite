import blogs from '../data/blogs';

function BlogCard({ blog }) {
  const Wrapper = blog.link ? 'a' : 'div';
  const wrapperProps = blog.link
    ? { href: blog.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block border border-slate-700/50 rounded-lg p-6 hover:border-slate-600 hover:bg-slate-900/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
          {blog.title}
        </h3>
        <span className="text-sm text-slate-500 whitespace-nowrap">{blog.date}</span>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">{blog.summary}</p>

      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block px-3 py-1 text-xs font-medium text-sky-300 bg-sky-950/50 border border-sky-800/50 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

function Blogs() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Blogs</h1>
        <p className="mt-2 text-lg text-slate-400">
          Thoughts, writeups, and things I've learned (im just gonna be yapping).
        </p>
      </header>

      {blogs.length === 0 ? (
        <div className="border border-slate-700/50 rounded-lg p-10 flex flex-col items-center justify-center text-center gap-4">
          <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h2 className="text-xl font-semibold text-slate-300">Work in Progress</h2>
          <p className="text-slate-500 max-w-sm">Nothing here yet — check back soon.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
