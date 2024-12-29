'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Database, Cloud, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    name: 'Easy Integration',
    description: 'Connect with your existing tools through our robust API and pre-built integrations.',
    icon: Database,
  },
  {
    name: 'Cloud-Native',
    description: 'Built for the cloud with scalability and reliability at its core.',
    icon: Cloud,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade encryption and security measures to protect your data.',
    icon: Lock,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized performance with sub-millisecond response times.',
    icon: Zap,
  },
];

export function Integration() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Integration made simple
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect your existing tools and start processing data in minutes, not days.
                Our platform adapts to your workflow, not the other way around.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                      {feature.name}
                    </dt>
                    <dd className="inline ml-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Button>
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-tr from-primary/80 to-primary rounded-2xl p-8">
              <div className="h-full w-full bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}