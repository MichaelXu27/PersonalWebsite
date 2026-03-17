const experiences = [
  {
    category: 'Work',
    items: [
      {
        title: 'Backend Software Engineer',
        company: 'NISC',
        period: 'Current',
        description: 'Modernizing enterprise billing systems by converting legacy PL/SQL scripts into modular Java hooks. Reduced batch runtime on a platform processing 90M+ statements per cycle.',
        tags: ['Java', 'PL/SQL', 'Backend', 'Performance']
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
        description: 'Led perception pipeline development for autonomous robotics systems, owning end-to-end computer vision from data labeling through production deployment. Implemented YOLO-based real-time object detection with Co-DETR auto-labeling to reduce annotation overhead. Optimized inference latency and throughput-accuracy tradeoffs on NVIDIA Jetson Orin Nano using DeepStream for GPU-accelerated pipelines. Focused on embedded GPU constraints including memory bandwidth, batching, and power efficiency.',
        tags: ['YOLO', 'Computer Vision', 'DeepStream', 'Jetson Orin Nano', 'Object Detection', 'Edge ML', 'GPU Optimization', 'Team Leadership']
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
