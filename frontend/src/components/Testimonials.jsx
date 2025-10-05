import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with Algorid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-600">
                Join the growing list of successful companies that trust Algorid with their development needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Company Logos Placeholder */}
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                TechCorp
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                StartupInc
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                DataDriven
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                Innovation Co
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};