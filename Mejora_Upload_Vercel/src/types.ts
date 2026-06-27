export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  shortDescription: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'corporativo' | 'crisis' | 'digital' | 'marketing' | 'evento' | 'aniversario';
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  stats: {
    label: string;
    value: string;
  };
}

export interface MethodStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  author: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}
