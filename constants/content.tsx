
import React from 'react';
import type { Project, PricingTier, Service, Testimonial } from '../types';

export const NAV_LINKS = [
  { nameKey: 'nav_projects', path: '/projects' },
  { nameKey: 'nav_services', path: '/services'},
  { nameKey: 'nav_about', path: '/about' },
  { nameKey: 'nav_pricing', path: '/pricing' },
  { nameKey: 'nav_contact', path: '/contact'},
];

// --- ICONS ---
const DevIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>
);
const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
);
const GraphicIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" /></svg>
);
const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" /></svg>
);


export const SERVICES: Service[] = [
    {
        icon: DevIcon,
        title: 'service_dev_title',
        description: 'service_dev_desc',
    },
    {
        icon: DesignIcon,
        title: 'service_design_title',
        description: 'service_design_desc',
    },
    {
        icon: GraphicIcon,
        title: 'service_graphic_title',
        description: 'service_graphic_desc',
    },
    {
        icon: VideoIcon,
        title: 'service_video_title',
        description: 'service_video_desc',
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'testimonial_1_quote',
        author: "Kavaz Mirsad",
        company: "Sana Metall"
    },
    {
        quote: 'testimonial_2_quote',
        author: "Team Pizzeria City",
        company: "pizzeriacitybihac.com"
    }
];

export const DIFFERENTIATORS: string[] = [
    "Strategic Design",
    "Pixel-Perfect Development",
    "Human-Centered UX",
    "Lasting Partnerships",
    "Radical Ownership",
    "Purposeful Creativity",
];

export const TECHNOLOGIES: string[] = [
    "Figma",
    "Wordpress",
    "TypeScript",
    "Node.js",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Adobe After Effects",
];


export const PROJECTS: Project[] = [
  {
    id: 'sanametall',
    title: 'project_sanametall_title',
    client: 'Sana Metall',
    category: 'project_sanametall_category',
    imageUrl: '/images/projekti/sanametall/sanametall-screenshot.png',
    galleryImages: [
  '/images/projekti/sanametall/sanametall-screenshot.png',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    problem: 'project_sanametall_problem',
    process: 'project_sanametall_process',
    solution: 'project_sanametall_solution',
    result: 'project_sanametall_result',
    status: 'completed',
  },
  {
    id: 'pizzeriacity',
    title: 'project_pizzeriacity_title',
    client: 'Pizzeria City (Bihać)',
    category: 'project_pizzeriacity_category',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    galleryImages: [
      'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=85&fm=jpg&crop=entropy&cs=srgb',
    ],
    problem: 'project_pizzeriacity_problem',
    process: 'project_pizzeriacity_process',
    solution: 'project_pizzeriacity_solution',
    result: 'project_pizzeriacity_result',
    status: 'completed',
  },
  {
    id: 'casablanca',
    title: 'project_casablanca_title',
    client: 'Restoran Casablanca',
    category: 'project_casablanca_category',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    galleryImages: [
      'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=85&fm=jpg&crop=entropy&cs=srgb',
    ],
    problem: 'project_casablanca_problem',
    process: 'project_casablanca_process',
    solution: 'project_casablanca_solution',
    result: 'project_casablanca_result',
    status: 'completed',
  },
  {
    id: 'companionscorp',
    title: 'project_companionscorp_title',
    client: 'Companions Corp',
    category: 'project_companionscorp_category',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    galleryImages: [
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=85&fm=jpg&crop=entropy&cs=srgb',
    ],
    problem: 'project_companionscorp_problem',
    process: 'project_companionscorp_process',
    solution: 'project_companionscorp_solution',
    result: 'project_companionscorp_result',
    status: 'completed',
  },
  {
    id: 'soagency',
    title: 'project_soagency_title',
    client: 'Internship at SO Agency',
    category: 'project_soagency_category',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    galleryImages: [
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=85&fm=jpg&crop=entropy&cs=srgb',
      'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=85&fm=jpg&crop=entropy&cs=srgb',
    ],
    problem: 'project_soagency_problem',
    process: 'project_soagency_process',
    solution: 'project_soagency_solution',
    result: 'project_soagency_result',
    status: 'completed',
  },
  {
    id: 'project_future_1',
    title: 'project_future_1_title',
    client: 'Secret Client',
    category: 'coming_soon_category',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6538cb3f3ee5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    problem: '',
    process: '',
    solution: '',
    result: '',
    status: 'coming_soon',
  },
  {
    id: 'project_future_2',
    title: 'project_future_2_title',
    client: 'Innovator Partner',
    category: 'coming_soon_category',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    problem: '',
    process: '',
    solution: '',
    result: '',
    status: 'coming_soon',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'pricing_tier1_name',
    price: 500,
    currency: 'KM',
    description: 'pricing_tier1_desc',
    features: [
      'pricing_tier1_feat1',
      'pricing_tier1_feat2',
      'pricing_tier1_feat3',
      'pricing_tier1_feat4',
    ],
    isFeatured: false,
    ctaText: 'pricing_tier1_cta',
  },
  {
    name: 'pricing_tier2_name',
    price: 1000,
    currency: 'KM',
    description: 'pricing_tier2_desc',
    features: [
      'pricing_tier2_feat1',
      'pricing_tier2_feat2',
      'pricing_tier2_feat3',
      'pricing_tier2_feat4',
      'pricing_tier2_feat5',
    ],
    isFeatured: true,
    ctaText: 'pricing_tier2_cta',
  },
  {
    name: 'pricing_tier3_name',
    price: 3000,
    currency: 'KM',
    description: 'pricing_tier3_desc',
    features: [
      'pricing_tier3_feat1',
      'pricing_tier3_feat2',
      'pricing_tier3_feat3',
      'pricing_tier3_feat4',
      'pricing_tier3_feat5',
    ],
    isFeatured: false,
    ctaText: 'pricing_tier3_cta',
  },
];

export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
};

export const CONTACT_INFO = {
    email: 'info@webstudionova.com',
    phone: '+387 62 360 700',
};

export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
