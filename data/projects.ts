export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  features: string[];
  positionX: number;
  positionY: number;
  color: string;
  size: number;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'shoplens',
    name: 'ShopLens',
    description: 'AI visual product search engine using computer vision to identify and match products from images in real-time.',
    stack: ['Spring Boot', 'Angular', 'TensorFlow Lite', 'MinIO', 'PostgreSQL'],
    features: [
      'Visual similarity matching using AI',
      'Real-time product category detection',
      'Image-based product search',
      'Optimized inference pipeline'
    ],
    positionX: 20,
    positionY: 30,
    color: '#4F46E5',
    size: 100,
    github: 'https://github.com/foudhilriahi'
  },
  {
    id: 'ocr-invoice',
    name: 'OCR Invoice Automation',
    description: 'Python OCR system automating invoice data extraction and document generation, reducing processing time by 70%.',
    stack: ['Python', 'OCR', 'Computer Vision', 'PDF Generation'],
    features: [
      'Automated invoice data extraction',
      'Document generation pipeline',
      '70% reduction in manual processing',
      'Local deployment for data security'
    ],
    positionX: 60,
    positionY: 25,
    color: '#10B981',
    size: 90
  },
  {
    id: 'hr-system',
    name: 'HR Strategic Planning System',
    description: 'Microservices architecture for employee planning, scheduling, performance analytics and resource optimization.',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    features: [
      'Automated employee scheduling',
      'Skills-based resource allocation',
      'Performance analytics dashboards',
      'Leave management system',
      'Productivity tracking'
    ],
    positionX: 75,
    positionY: 60,
    color: '#F59E0B',
    size: 95
  },
  {
    id: 'studymate',
    name: 'StudyMate',
    description: 'Mobile and web application helping students, teachers, and parents manage tasks, classes and communication.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Mobile Development'],
    features: [
      'Multi-role system (student/teacher/parent)',
      'Homework and class management',
      'Performance tracking',
      'Smart reminders',
      'Internal messaging system'
    ],
    positionX: 35,
    positionY: 70,
    color: '#8B5CF6',
    size: 85
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    description: 'Full stack e-commerce platform with authentication, product management, cart, checkout and admin panel.',
    stack: ['Spring Boot', 'Angular', 'Angular Material', 'PostgreSQL', 'JWT'],
    features: [
      'Product catalog with search',
      'Shopping cart and checkout',
      'User authentication and authorization',
      'Admin panel with CRUD operations',
      'Order management system'
    ],
    positionX: 50,
    positionY: 45,
    color: '#EC4899',
    size: 88
  }
];
