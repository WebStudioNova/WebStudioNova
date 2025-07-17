
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  galleryImages?: string[];
  problem: string;
  process: string;
  solution: string;
  result: string;
  status: 'completed' | 'coming_soon';
}

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  ctaText: string;
}

export interface Service {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
}