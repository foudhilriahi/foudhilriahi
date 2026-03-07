export interface Skill {
  name: string;
  category: string;
  x: number;
  y: number;
}

export const skillConstellations = {
  backend: {
    name: 'Backend Constellation',
    color: '#3B82F6',
    skills: [
      { name: 'Java', category: 'backend', x: 15, y: 20 },
      { name: 'Spring Boot', category: 'backend', x: 20, y: 25 },
      { name: 'Python', category: 'backend', x: 18, y: 18 },
      { name: 'Symfony', category: 'backend', x: 22, y: 22 },
      { name: 'Laravel', category: 'backend', x: 17, y: 24 },
      { name: 'PHP', category: 'backend', x: 19, y: 21 }
    ]
  },
  frontend: {
    name: 'Frontend Constellation',
    color: '#10B981',
    skills: [
      { name: 'Angular', category: 'frontend', x: 70, y: 25 },
      { name: 'React', category: 'frontend', x: 75, y: 22 },
      { name: 'TailwindCSS', category: 'frontend', x: 73, y: 28 },
      { name: 'HTML/CSS', category: 'frontend', x: 77, y: 26 },
      { name: 'Angular Material', category: 'frontend', x: 72, y: 24 }
    ]
  },
  database: {
    name: 'Database Constellation',
    color: '#F59E0B',
    skills: [
      { name: 'PostgreSQL', category: 'database', x: 25, y: 70 },
      { name: 'MySQL', category: 'database', x: 28, y: 72 },
      { name: 'SQL', category: 'database', x: 26, y: 75 },
      { name: 'SQLite', category: 'database', x: 29, y: 73 }
    ]
  },
  devops: {
    name: 'DevOps Constellation',
    color: '#8B5CF6',
    skills: [
      { name: 'Docker', category: 'devops', x: 65, y: 75 },
      { name: 'CI/CD', category: 'devops', x: 68, y: 73 },
      { name: 'Git', category: 'devops', x: 66, y: 78 },
      { name: 'AWS S3', category: 'devops', x: 70, y: 76 }
    ]
  },
  ai: {
    name: 'AI & ML Constellation',
    color: '#EC4899',
    skills: [
      { name: 'TensorFlow', category: 'ai', x: 80, y: 15 },
      { name: 'OCR', category: 'ai', x: 83, y: 18 },
      { name: 'Computer Vision', category: 'ai', x: 85, y: 16 },
      { name: 'Recommendation Systems', category: 'ai', x: 82, y: 20 }
    ]
  }
};
