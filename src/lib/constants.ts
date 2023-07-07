import { Rental } from '@/types/rental';

export const rentals: Rental[] = [
  {
    id: 172,
    title: '2023 luxury Black GMC Yukon XL w/ Rear Seat Entertainment',
    isNew: true,
    size: 7,
    rentPerHour: 90,
    rentPerMile: 4,
    images: ['/rental-2.webp'],
    type: 'SUV',
    allowsSmoking: false,
  },
  {
    id: 90,
    title: 'The Dark Knight at your service!',
    isNew: true,
    size: 7,
    rentPerHour: 125,
    rentPerMile: 4,
    images: ['/rental-1.webp'],
    type: 'SUV',
    allowsSmoking: false,
  },
];

export const socialLinks = [
  { iconPath: '/instagram.webp', url: 'https://www.instagram.com/shofeur' },
  { iconPath: '/facebook.webp', url: 'https://www.facebook.com/shofeur' },
  { iconPath: '/twitter.webp', url: 'https://twitter.com/shofeurinc' },
  {
    iconPath: '/linkedin.webp',
    url: 'https://www.linkedin.com/company/shofeur',
  },
  { iconPath: '/youtube.webp', url: 'https://www.youtube.com/@shofeur' },
  { iconPath: '/tiktok.webp', url: 'https://www.tiktok.com/@infoshofeur' },
];

export const footerInternalLinks = [
  { label: 'Contact US', path: 'contact-us' },
  { label: 'Blog', path: 'blog' },
  { label: 'Help Center', path: 'help' },
  { label: 'Privacy Policy', path: 'privacy-policy' },
  { label: 'Terms & Conditions', path: 'terms-conditions' },
];
