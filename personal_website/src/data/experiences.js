const experiences = [
  {
    category: 'Work',
    items: [
      {
        title: 'Software Engineer Intern',
        company: 'Zocdoc',
        period: 'Summer 2026',
        description: 'Shipped a React payment-recovery module unifying failed-payment status, balance, spend-lock state, and retry timing on the billing page, replacing a manual flow behind ~20% of billing support tickets. Built a C# endpoint that charges outstanding balances on demand outside the daily billing queue, cutting balance resolution from 24h to ~5 min with locking to prevent double-charges. Extended a C# read endpoint to power decline reasons and per-account restriction state.',
        tags: ['React', 'TypeScript', 'C#', 'Payments']
      },
      {
        title: 'Software Engineer Intern',
        company: 'NISC',
        period: 'May 2025 – Sept 2025',
        description: 'Re-architected legacy billing hooks into modular Spring Boot services with structured Java DAO/BO layers, delivering a 40% runtime speedup on 100M+ statement batches. Established a repeatable PL/SQL-to-Java modernization pipeline and migration playbook across 100+ legacy billing hooks.',
        tags: ['Java', 'Spring Boot', 'SQL', 'Backend', 'Performance']
      }
    ]
  },
  {
    category: 'Leadership & Teaching',
    items: [
      {
        title: 'Head Coach',
        company: 'WashU Badminton',
        period: 'Current',
        description: 'Leading collegiate team development with emphasis on performance metrics, strategic play, and athlete growth.',
        tags: ['Coaching', 'Leadership', 'Team Development']
      },
      {
        title: 'Assistant Coach',
        company: 'Hellobirdie Badminton',
        period: 'Current',
        description: 'Coaching competitive badminton athletes at elite levels.',
        tags: ['Coaching', 'Competition', 'Athletics']
      },
      {
        title: 'Teaching Assistant',
        company: 'Washington University in St. Louis',
        period: 'Current',
        description: 'Supporting Computer Science curriculum and student development.',
        tags: ['CS Education', 'Mentorship']
      }
    ]
  },
  {
    category: 'Clubs and other interests',
    items: [
      {
        title: 'UrsaWorks Robotics — Computer Vision Team Lead',
        description: 'Sole frontend maintainer of a React platform supporting 100+ active members, shipping features and fixes across all engineering teams and cutting page-load time ~40% through component refactoring and asset optimization. Led perception pipeline development for autonomous robotics: end-to-end computer vision from data labeling through production deployment, with YOLO-based real-time object detection and Co-DETR auto-labeling on NVIDIA Jetson Orin Nano via DeepStream — contributing to a top-8 of 24 finish at RoboMaster Nationals.',
        tags: ['React', 'YOLO', 'Computer Vision', 'DeepStream', 'Jetson Orin Nano', 'Edge ML', 'RoboMaster', 'Team Leadership']
      },
      {
        title: 'CUDA Parallel Computing Kernels',
        description: 'GPU kernel implementations exploring hardware-software co-optimization: matrix multiplication, stencil computation, reductions, histogram privatization. Profiled with Nsight Compute and Nsight Systems.',
        tags: ['CUDA', 'C++', 'GPU', 'Performance Profiling']
      },
      {
        title: 'Secure Socket Encryption System',
        description: 'Client-server communication system implementing authenticated encryption with AES-256-GCM and HMAC-SHA1 via OpenSSL EVP.',
        tags: ['C', 'OpenSSL', 'Cryptography', 'Systems']
      },
      {
        title: 'FP8 Matrix Multiplication Research',
        description: 'Investigating low-precision quantization (FP8) in GEMM kernels and comparing accuracy/performance tradeoffs against FP16 on Ada GPUs.',
        tags: ['CUDA', 'Quantization', 'GPU', 'Research']
      }
    ]
  }
]

export default experiences
