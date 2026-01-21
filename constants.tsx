
import React from 'react';
import { 
  Search, 
  Target, 
  BarChart3, 
  Megaphone, 
  PenTool, 
  Globe, 
  MapPin, 
  TrendingUp, 
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import { Service, Project, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  { id: '1', title: 'SEO', description: 'Driving organic growth through strategic keyword optimization and technical SEO excellence.', icon: 'Search' },
  { id: '2', title: 'Social Media Marketing', description: 'Meta Ads, TikTok Ads, and LinkedIn Ads management to reach your target audience.', icon: 'Megaphone' },
  { id: '3', title: 'Social Media Management', description: 'Maintaining and growing your brand presence across all social platforms consistently.', icon: 'Target' },
  { id: '4', title: 'PPC & Google Ads', description: 'High-converting pay-per-click campaigns designed for maximum ROI.', icon: 'TrendingUp' },
  { id: '5', title: 'Content Marketing', description: 'Compelling copywriting and content strategies that engage and convert users.', icon: 'PenTool' },
  { id: '6', title: 'Analytics & Tracking', description: 'Deep data analysis and tracking setup to measure every marketing dollar spent.', icon: 'BarChart3' },
  { id: '7', title: 'Brand Building', description: 'Establishing a cohesive and powerful online identity for your business.', icon: 'Globe' },
  { id: '8', title: 'Local SEO', description: 'Optimizing Google My Business to dominate local search results.', icon: 'MapPin' },
  { id: '9', title: 'Email Marketing', description: 'Automated email sequences that nurture leads and drive repeat business.', icon: 'Mail' },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'E-commerce SEO Overhaul', description: 'Increased organic traffic by 150% in 6 months for a major fashion brand.', category: 'SEO', image: 'https://picsum.photos/seed/seo1/600/400', link: '#' },
  { id: '2', title: 'Global SaaS Meta Campaign', description: 'Scalable lead generation campaign with $2.50 CPL.', category: 'Social Media Marketing', image: 'https://picsum.photos/seed/smm1/600/400', link: '#' },
  { id: '3', title: 'Local Dentist GMB Growth', description: 'Boosted local leads by 300% using targeted local SEO strategies.', category: 'Local SEO', image: 'https://picsum.photos/seed/localseo/600/400', link: '#' },
  { id: '4', title: 'Content Strategy for Tech Blog', description: 'Developed a content calendar that doubled newsletter signups.', category: 'Content Marketing', image: 'https://picsum.photos/seed/content/600/400', link: '#' },
  { id: '5', title: 'Real Estate PPC Campaign', description: 'Highly optimized Google Ads campaign with 12% conversion rate.', category: 'PPC', image: 'https://picsum.photos/seed/ppc/600/400', link: '#' },
  { id: '6', title: 'Brand Identity - FitLife', description: 'Full brand rollout including visual identity and digital strategy.', category: 'Brand Building', image: 'https://picsum.photos/seed/brand/600/400', link: '#' },
  { id: '7', title: 'B2B LinkedIn Strategy', description: 'LinkedIn outreach and ad strategy for a leading logistics firm.', category: 'Social Media Marketing', image: 'https://picsum.photos/seed/linkedin/600/400', link: '#' },
  { id: '8', title: 'Automated Email Funnel', description: 'Recovered 20% of abandoned carts via Klaviyo flows.', category: 'Email Marketing', image: 'https://picsum.photos/seed/email/600/400', link: '#' },
  { id: '9', title: 'Data Dashboard for Retail', description: 'Custom GA4 and Looker Studio dashboard for real-time tracking.', category: 'Analytics', image: 'https://picsum.photos/seed/data/600/400', link: '#' },
  { id: '10', title: 'YouTube Growth Plan', description: 'Strategy for a tech creator to hit 100k subscribers.', category: 'Social Media Management', image: 'https://picsum.photos/seed/yt/600/400', link: '#' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'John Doe', role: 'CEO at Techflow', content: 'Shoaib transformed our digital presence. His SEO strategy alone tripled our monthly inquiries!', avatar: 'https://i.pravatar.cc/150?u=john' },
  { id: '2', name: 'Sarah Malik', role: 'Marketing Director, Luxe', content: 'The ROI we saw from the Meta campaigns Shoaib managed was incredible. Truly a data-driven marketer.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: '3', name: 'Zain Abbas', role: 'Founder of AgriLocal', content: 'Finally, an expert who understands local SEO. Our GMB profile is now always at the top.', avatar: 'https://i.pravatar.cc/150?u=zain' },
  { id: '4', name: 'Emily Chen', role: 'E-commerce Owner', content: 'Professional, responsive, and highly skilled. He handled our email automation perfectly.', avatar: 'https://i.pravatar.cc/150?u=emily' },
];

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: '1', 
    title: '5 SEO Trends for 2024', 
    excerpt: 'Discover the latest algorithm shifts and how to stay ahead in organic search rankings.', 
    content: 'Full SEO strategy analysis for the upcoming year focusing on AI integration and E-E-A-T principles...', 
    image: 'https://picsum.photos/seed/blog1/800/600', 
    date: 'Oct 12, 2023',
    author: 'Shoaib Latif'
  },
  { 
    id: '2', 
    title: 'Meta Ads vs Google Ads', 
    excerpt: 'Which platform should you choose for your business? A comprehensive comparison.', 
    content: 'When it comes to digital advertising, the choice between Meta and Google depends on your objective...', 
    image: 'https://picsum.photos/seed/blog2/800/600', 
    date: 'Nov 05, 2023',
    author: 'Shoaib Latif'
  },
  { 
    id: '3', 
    title: 'The Power of Content Marketing', 
    excerpt: 'How storytelling can transform your brand and build lasting customer loyalty.', 
    content: 'Content is still king, but only if it serves a purpose. Here is how to create a strategy that works...', 
    image: 'https://picsum.photos/seed/blog3/800/600', 
    date: 'Dec 01, 2023',
    author: 'Shoaib Latif'
  },
  { 
    id: '4', 
    title: 'Why Data Tracking is Crucial', 
    excerpt: 'You cannot improve what you do not measure. Setting up the right analytics.', 
    content: 'In digital marketing, every click counts. If you are not tracking conversions, you are wasting money...', 
    image: 'https://picsum.photos/seed/blog4/800/600', 
    date: 'Jan 10, 2024',
    author: 'Shoaib Latif'
  },
  { 
    id: '5', 
    title: 'Local SEO Mastery', 
    excerpt: 'A step-by-step guide to ranking your business on Google Maps.', 
    content: 'Local search is the lifeblood of small businesses. Optimize your GMB profile today...', 
    image: 'https://picsum.photos/seed/blog5/800/600', 
    date: 'Feb 15, 2024',
    author: 'Shoaib Latif'
  },
  { 
    id: '6', 
    title: 'Email Marketing Secrets', 
    excerpt: 'Increase your open rates and conversions with these proven email tactics.', 
    content: 'The most direct way to your customer is their inbox. Learn how to write emails that sell...', 
    image: 'https://picsum.photos/seed/blog6/800/600', 
    date: 'Mar 20, 2024',
    author: 'Shoaib Latif'
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#', icon: <Facebook size={20} /> },
  { name: 'Twitter', url: '#', icon: <Twitter size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={20} /> },
  { name: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { name: 'YouTube', url: '#', icon: <Youtube size={20} /> },
];
