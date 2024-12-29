'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="mt-12 border-t border-indigo-800 pt-8">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-lg font-semibold text-indigo-300 tracking-wider uppercase">
          Stay Updated
        </h3>
        <p className="mt-4 text-base text-indigo-100">
          Subscribe to our newsletter for the latest updates, industry insights, and exclusive content.
        </p>
        <form className="mt-6 sm:flex sm:max-w-md mx-auto" onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full bg-indigo-900/50 border-indigo-700 text-white placeholder:text-indigo-300"
          />
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}