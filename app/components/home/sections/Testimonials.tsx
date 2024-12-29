'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "This platform has transformed how we handle our data processing. The performance improvements are remarkable.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "The analytics insights we've gained have been invaluable. It's like having a data scientist on the team.",
    author: "Michael Chen",
    role: "Product Manager at DataFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "Incredible ease of use combined with powerful features. Our team's productivity has increased tenfold.",
    author: "Emily Rodriguez",
    role: "Engineering Lead at ScaleUp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face"
  }
];

export function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col justify-between bg-white p-8 shadow-lg rounded-2xl"
            >
              <blockquote className="text-lg text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-8 flex items-center gap-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}