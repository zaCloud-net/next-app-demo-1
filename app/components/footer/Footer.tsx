import { Code2 } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';

export function Footer() {
  return (
    <footer className="bg-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Code2 className="h-10 w-10 text-indigo-300" />
          <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-indigo-300 to-blue-200 bg-clip-text text-transparent">
            Company
          </span>
        </div>
        
        <FooterLinks />
        <FooterNewsletter />
        
        <div className="mt-12 border-t border-indigo-800 pt-8">
          <p className="text-base text-indigo-200 text-center">
            © {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}