import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit us',
    details: ['123 Business Street', 'San Francisco, CA 94111'],
  },
  {
    icon: Phone,
    title: 'Call us',
    details: ['+1 (555) 123-4567', 'Mon-Fri from 8am to 6pm'],
  },
  {
    icon: Mail,
    title: 'Email us',
    details: ['contact@example.com', 'support@example.com'],
  },
];

export function ContactInfo() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {contactInfo.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
        >
          <div className="p-3 bg-primary/10 rounded-full">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
          {item.details.map((detail) => (
            <p key={detail} className="mt-2 text-sm text-gray-600">
              {detail}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}