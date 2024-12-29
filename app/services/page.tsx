'use client';

import { Code2, Smartphone, Palette, Gauge, Cloud, Shield, Headphones, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. We focus on creating scalable and maintainable solutions.',
    icon: Code2,
    color: 'bg-blue-500',
  },
  {
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications that work seamlessly across iOS and Android, built with React Native and Flutter.',
    icon: Smartphone,
    color: 'bg-green-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that engage users. We follow the latest design trends and best practices.',
    icon: Palette,
    color: 'bg-purple-500',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize your applications for maximum speed and efficiency. We use advanced techniques to ensure your app loads quickly.',
    icon: Gauge,
    color: 'bg-red-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure using AWS, Google Cloud, or Azure. We help you choose and implement the right cloud strategy.',
    icon: Cloud,
    color: 'bg-indigo-500',
  },
  {
    title: 'Security Services',
    description: 'Implement robust security measures to protect your applications and data from threats and vulnerabilities.',
    icon: Shield,
    color: 'bg-yellow-500',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure your applications run smoothly and issues are resolved quickly.',
    icon: Headphones,
    color: 'bg-pink-500',
  },
  {
    title: 'DevOps',
    description: 'Streamline your development and deployment processes with modern DevOps practices and tools.',
    icon: Rocket,
    color: 'bg-orange-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-primary font-medium inline-flex items-center transition-colors hover:text-primary/80">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}