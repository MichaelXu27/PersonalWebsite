import CoverLetterGeneratorPreview from '../assets/CoverLetterGeneratorPreview.png';
import ResearchReport from '../assets/CSE_4106___Data_Science_for_Complex_Networks_Final_Project (1).pdf';

const projects = [
  {
    id: '06',
    category: 'webdev',
    title: 'Job Application Tracker',
    preview: 'Full-stack Next.js app for tracking job applications.',
    details: 'A full-stack web app built with Claude Code and Antigravity for managing and visualizing my personal job application process. Features user auth with JWT sessions, a filterable and sortable application table, and a dashboard with stats, a doughnut chart, and a custom SVG lollipop timeline. Supports bulk import/export via Excel (.xlsx), with client-side column normalization and date inference. All filtering, sorting, and pagination are computed client-side for a snappy experience.',
    image: null,
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'SQLite', 'NextAuth.js', 'Tailwind CSS', 'Zod', 'Chart.js', 'SheetJS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/jobApplicationTracker'
      }
    ],
  },
  {
    id: '01',
    category: 'webdev',
    title: 'Personal Website',
    preview: 'A responsive portfolio built with React.',
    details: 'My personal website built with React and Tailwind CSS that your currently looking at.',
    image: null,
    tech: ['React', 'Tailwind CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/PersonalWebsite'
      }
    ],
  },
  {
    id: '02',
    category: 'webdev',
    title: 'Cover Letter Generator',
    preview: 'ChatGPT-based cover letter generator.',
    details: 'Quick little app I made using the Open AI API to assist in speeding up the job application process. Feel free to check the website below or clone the github yourself. Only requirement is an Open API key.',
    image: CoverLetterGeneratorPreview,
    tech: ['Python', 'OpenAI API', "Streamlit", "SQLite"],
    links: [
      {
        label: 'Streamlit Website',
        url: 'https://coverlettergenerator-6wmycaewas4wrhdyv5wiju.streamlit.app/'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/Cover_Letter_Generator'
      }
    ],
  },
  {
    id: '03',
    category: 'datascience',
    title: 'Musical-Collaboration-Network-Analysis',
    preview: 'A large-scale link prediction on a Discogs music collaboration network.',
    details: 'This project performs large-scale link prediction on a Discogs music collaboration network spanning more than 130 years of music history (1897–2025). It analyzes collaboration patterns among over 1,000 artists connected by more than 10,000 edges, using multiple machine learning and graph-based approaches to predict future collaborations. A central focus of the work is era-specific modeling, which accounts for major shifts in music culture, technology, and artist ecosystems across five distinct musical periods. Feel free to check out the project repository below for a more detailed description.',
    image: null,
    tech: ['Python', 'pandas', 'NumPy', 'NetworkX', 'scikit-learn', 'python-louvain', 'Spotipy', 'Gephi'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/Musical-Collaboration-Network-Analysis/tree/main'
      },
      {
        label: 'Research Report',
        url: ResearchReport
      }
    ],
  },
  {
    id: '05',
    category: 'tools',
    title: 'Coach Pass Generator',
    preview: 'Automated credential document generator for US Junior Nationals.',
    details: 'A Python automation script I built for the 2024 and 2025 US Junior National Championships to batch-generate personalized coaching credential passes. Reads coach data (name, USAB ID, membership status, background check, SafeSport certification) from a CSV, merges it into a Word template, automatically finds and inserts each coach\'s photo, and outputs individualized .docx files — processing 213 coach records in a single run.',
    image: null,
    tech: ['Python', 'pandas', 'docxtpl'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/CoachPassGenerator'
      }
    ],
  },
  {
    id: '04',
    category: 'gamedev',
    title: 'Cat vs Environment',
    preview: 'A semester-long collaborative Unity platformer game.',
    details: 'A semester-long group project where quick reflexes and sharp instincts are your best allies as you weave past obstacles, dodge danger, and collect treasures. Play as a cat navigating hazards like rocks, cars, and missiles while collecting cakes, fruits, and sweets. Features double-jump, directional dash, and power-ups including invincibility stars and extra lives. Built with 4 collaborators over the course of a semester.',
    image: null,
    tech: ['Unity', 'C#', 'ShaderLab', 'HLSL'],
    links: [
      {
        label: 'Play on itch.io',
        url: 'https://bombim21.itch.io/cat-vs-environment'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/Cat_vs_Environment'
      }
    ],
  },
];

export default projects;
