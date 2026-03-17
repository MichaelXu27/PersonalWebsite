import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Projects</h1>
        <p className="mt-2 text-lg text-slate-400">
          Things I've built — click any card for details.
        </p>
      </header>

      {/* Project cards */}
      <div className="space-y-6">
        {projects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block border border-slate-700/50 rounded-lg p-6 hover:border-slate-600 hover:bg-slate-900/30 transition-all duration-300"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              {project.preview}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 text-xs font-medium text-sky-300 bg-sky-950/50 border border-sky-800/50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* External links */}
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
