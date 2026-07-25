import Resume from '../assets/Michael_Xu_Resume.pdf'
import experiences from '../data/experiences.js'

function Experiences() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Experiences</h1>
        <p className="mt-2 text-lg text-slate-400">
          Work, teaching, and the systems I've built.
        </p>
      </header>
      <section className="mt-16">
        <p className="text-slate-400 mb-4">
          Don't have time to look over everything? Check out my resume:
        </p>
        <a 
          href={Resume} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded transition-colors duration-200"
        >
          Resume
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>

      <div className="mt-16 space-y-16">
        {experiences.map((section, idx) => (
          <section key={idx} className="space-y-8">
            <h2 className="text-xl font-semibold text-slate-200 border-b border-slate-700 pb-3">
              {section.category}
            </h2>
            
            <div className="space-y-8">
              {section.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className="group border border-slate-700/50 rounded-lg p-6 hover:border-slate-600 hover:bg-slate-900/30 transition-all duration-300"
                >
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                      {item.period && (
                        <span className="text-sm text-slate-500 whitespace-nowrap">
                          {item.period}
                        </span>
                      )}
                    </div>
                    {item.company && (
                      <p className="text-sm text-slate-400">
                        {item.company}
                      </p>
                    )}
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-block px-3 py-1 text-xs font-medium text-sky-300 bg-sky-950/50 border border-sky-800/50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Experiences