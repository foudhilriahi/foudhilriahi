export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  positionX: number;
  positionY: number;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 'welyne',
    company: 'Welyne',
    role: 'Python Software Engineer',
    period: '06/2025 – 08/2025',
    description: 'Built an advanced recommendation system reducing clothing size selection errors by 60%.',
    achievements: [
      'Developed morphological analysis logic',
      'Implemented category-to-garment mapping',
      'Reduced size selection errors by 60%',
      'Optimized customer journey workflows'
    ],
    positionX: 25,
    positionY: 15,
    color: '#6366F1'
  },
  {
    id: 'bna',
    company: 'Banque Nationale Agricole',
    role: 'Python Software Engineer',
    period: '07/2024 – 08/2024',
    description: 'Developed automated invoice management system reducing processing time by 70%.',
    achievements: [
      'Built 100% local Python application',
      'Automated OCR extraction',
      'Implemented document generation',
      'Reduced manual processing by 70%'
    ],
    positionX: 70,
    positionY: 18,
    color: '#10B981'
  },
  {
    id: 'yooscript',
    company: 'Yooscript Digital Solution',
    role: 'Full-Stack Developer',
    period: '02/2023 – 07/2023',
    description: 'Designed and developed job search application with Symfony API and Angular frontend.',
    achievements: [
      'Built robust Symfony API backend',
      'Created modern Angular frontend',
      'Implemented API Platform',
      'Delivered complete job search solution'
    ],
    positionX: 50,
    positionY: 85,
    color: '#F59E0B'
  },
  {
    id: 'etikks',
    company: 'Etikks',
    role: 'Frontend Developer',
    period: '07/2022 – 08/2022',
    description: 'Optimized React components improving page load times and interface responsiveness.',
    achievements: [
      'Optimized React components',
      'Reduced page load times',
      'Improved UI responsiveness',
      'Enhanced user experience'
    ],
    positionX: 75,
    positionY: 80,
    color: '#EC4899'
  }
];
