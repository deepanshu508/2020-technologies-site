export enum ViewState {
  HOME = 'HOME',
  JOB_CATEGORIES = 'JOB_CATEGORIES',
  JOBS = 'JOBS',
  AI_AGENT = 'AI_AGENT',
  CONTACT = 'CONTACT'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedAt: string;
  category?: string;
}

export interface JobCategory {
  id: string;
  title: string;
  iconName: string;
  count: number;
  isNew?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}
