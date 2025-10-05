import { Card } from './ui/card';
import { Rocket, TrendingUp, Shield, RefreshCw } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Rocket,
  TrendingUp, 
  Shield,
  RefreshCw
};

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Algorid?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business insight to deliver solutions that 
            drive real results for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card 
                key={feature.id}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-900 font-semibold">Uptime Guarantee</div>
                <div className="text-sm text-gray-600">Reliable systems you can count on</div>
              </div>
              
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">2-4 Weeks</div>
                <div className="text-gray-900 font-semibold">Rapid Delivery</div>
                <div className="text-sm text-gray-600">From concept to working prototype</div>
              </div>
              
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-900 font-semibold">Satisfaction Rate</div>
                <div className="text-sm text-gray-600">Happy clients are our priority</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};