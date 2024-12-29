import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Culture', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Support Center', href: '#' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Apps', href: '#' },
      { label: 'Cloud Services', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'DevOps', href: '#' },
      { label: 'Security', href: '#' }
    ]
  },
  {
    title: 'Contact',
    content: [
      '123 Business Street',
      'San Francisco, CA 94111',
      'contact@example.com',
      '+1 (555) 123-4567',
      'Mon-Fri: 9:00 AM - 6:00 PM',
      'Sat-Sun: Closed'
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">
            {section.title}
          </h3>
          <div className="mt-4 space-y-3">
            {section.links ? (
              section.links.map((link) => (
                <div key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-base text-indigo-100 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))
            ) : (
              section.content?.map((text) => (
                <p key={text} className="text-base text-indigo-100">
                  {text}
                </p>
              ))
            )}
          </div>
        </div>
      ))}
      
      <div className="lg:col-span-4 mt-8 pt-8 border-t border-indigo-800">
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-indigo-300 hover:text-white transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}