import { Job, Testimonial, JobCategory } from './types';

export const JOB_CATEGORIES_DATA: JobCategory[] = [
  { id: '1', title: 'Sales / Marketing', iconName: 'TrendingUp', count: 86 },
  { id: '2', title: 'IT Software', iconName: 'Code', count: 45, isNew: true },
  { id: '3', title: 'Non-IT Operations', iconName: 'ClipboardList', count: 32 },
  { id: '4', title: 'Sales Executive', iconName: 'Briefcase', count: 60 },
  { id: '5', title: 'Engineer (Tech)', iconName: 'Cpu', count: 27 },
  { id: '6', title: 'BPO / Customer Care', iconName: 'Headphones', count: 33 },
  { id: '7', title: 'Data Entry / Back Office', iconName: 'FileText', count: 13 },
  { id: '8', title: 'HR & Admin', iconName: 'Users', count: 14 },
  { id: '9', title: 'Accountant', iconName: 'Calculator', count: 14 },
  { id: '10', title: 'Retail Executive', iconName: 'ShoppingBag', count: 22, isNew: true },
  { id: '11', title: 'Mechanic / Technical', iconName: 'Wrench', count: 35 },
  { id: '12', title: 'Management Trainee', iconName: 'Award', count: 10 },
  { id: '13', title: 'IT Hardware', iconName: 'Server', count: 6 },
  { id: '14', title: 'Office Assistant', iconName: 'Grid', count: 7 },
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Sales Manager',
    company: 'TechFlow India',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹8L - ₹12L',
    description: 'Lead our regional sales team to new heights. Proven track record in B2B sales required.',
    postedAt: '2 days ago',
    category: 'Sales / Marketing'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Innovate Solutions',
    location: 'Noida (Remote)',
    type: 'Contract',
    salary: '₹10L - ₹18L',
    description: 'Build the next generation of web applications using React and Node.js.',
    postedAt: '5 hours ago',
    category: 'IT Software'
  },
  {
    id: '3',
    title: 'HR Generalist',
    company: 'Global Services',
    location: 'Gurugram, India',
    type: 'Full-time',
    salary: '₹4L - ₹6L',
    description: 'Manage end-to-end recruitment and employee relations.',
    postedAt: '1 week ago',
    category: 'HR & Admin'
  },
  {
    id: '4',
    title: 'Operations Executive',
    company: 'Logistic Masters',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹3L - ₹5L',
    description: 'Ensure smooth back-office operations and logistics coordination.',
    postedAt: '3 days ago',
    category: 'Non-IT Operations'
  },
  {
    id: '5',
    title: 'Business Development Exec',
    company: 'Growth Corp',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹5L - ₹8L',
    description: 'Drive new business acquisition and client relationship management.',
    postedAt: '1 day ago',
    category: 'Sales Executive'
  },
  {
    id: '6',
    title: 'Customer Support Lead',
    company: 'Connect BPO',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹6L - ₹9L',
    description: 'Lead a team of 20+ support agents.',
    postedAt: '4 days ago',
    category: 'BPO / Customer Care'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'HR Director',
    company: 'TechSolutions Pvt Ltd',
    text: '2020 Technologies understood our culture intuitively. The IT candidates they presented were not just skilled, they were the perfect fit for our Noida office.',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Sales Head',
    company: 'MarketGrowth',
    text: 'The most professional hiring experience I have ever had. They closed our Sales Manager positions in record time.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Founder',
    company: 'StartUp Hub',
    text: 'Their expertise in both Non-IT and IT hiring makes them a one-stop solution for scaling startups in Delhi.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];