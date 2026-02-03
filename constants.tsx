
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
  { id: '1', title: 'SEO for Pakistan Law Bot', description: 'Increased Pakistan Law Bot organic traffic 100% in six months via SEO.', category: 'SEO', image: 'https://image2url.com/r2/default/images/1770144737747-96887485-f89a-47d6-885c-2cf4d998900a.png', link: 'https://pakistanlawbot.com/' },
  { id: '2', title: 'SEO for Haq Orthopaedic Hospital', description: 'Enhanced SEO for Haq Orthopaedic Hospital, increasing traffic and patient inquiries.', category: 'SEO', image: 'https://image2url.com/r2/default/images/1770145057862-e37f6cc8-76a8-4b31-8280-a55fcb0ac781.png', link: 'https://haq-ortho.com/home/' },
  { id: '3', title: 'SEO for Al-Huda Katy', description: 'Optimized SEO for Al Huda Katy, attracting targeted audience effectively.', category: 'SEO', image: 'https://image2url.com/r2/default/images/1770144932020-5f6f9fd1-c145-4727-a0c4-e8cafac5e0a5.png', link: 'https://alhudakaty.org/' },
  { id: '4', title: 'SEO for AITube', description: 'Developed SEO strategy for AI Tube, improving visibility, traffic, and AI video content discovery', category: 'SEO', image: 'https://image2url.com/r2/default/images/1770145300247-43c24f75-2d9d-4c7b-b799-3faf02139bff.png', link: 'https://aivideostube.com/' },
  { id: '5', title: 'SEO for Calculate Tax', description: 'Implemented SEO for tax calculator, boosting search visibility, user engagement, and organic traffic.', category: 'SEO', image: 'https://image2url.com/r2/default/images/1770145486289-5edd45d7-bd49-406e-a854-577881312333.png', link: '#' },
  { id: '4', title: 'Content Strategy for Tech Blog', description: 'Developed a content calendar that doubled newsletter signups.', category: 'Content Marketing', image: 'https://picsum.photos/seed/content/600/400', link: '#' },
  { id: '5', title: 'Real Estate PPC Campaign', description: 'Highly optimized Google Ads campaign with 12% conversion rate.', category: 'PPC', image: 'https://picsum.photos/seed/ppc/600/400', link: '#' },
  { id: '6', title: 'Brand Identity - FitLife', description: 'Full brand rollout including visual identity and digital strategy.', category: 'Brand Building', image: 'https://picsum.photos/seed/brand/600/400', link: '#' },
  { id: '7', title: 'B2B LinkedIn Strategy', description: 'LinkedIn outreach and ad strategy for a leading logistics firm.', category: 'Social Media Marketing', image: 'https://picsum.photos/seed/linkedin/600/400', link: '#' },
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
  { name: 'Facebook', url: 'https://web.facebook.com/official.shoaiblatif', icon: <Facebook size={20} /> },
  { name: 'Twitter', url: 'https://x.com/officialshoaibl', icon: <Twitter size={20} /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shoaiblatif4205/', icon: <Linkedin size={20} /> },
  { name: 'Instagram', url: 'https://www.instagram.com/official.shoaib.latif/', icon: <Instagram size={20} /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@official.shoaiblatif', icon: <Youtube size={20} /> },
  { name: 'Email', url: 'mailto:shoaiblatifofficial42@gmail.com', icon: <Mail size={20} /> },
];
