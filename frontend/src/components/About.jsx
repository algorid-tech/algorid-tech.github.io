import { CheckCircle, Target, Lightbulb, Users } from 'lucide-react';
import { Card } from './ui/card';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We focus on delivering solutions that truly solve business problems and drive growth."
    },
    {
      icon: Lightbulb, 
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team to achieve your goals."
    }
  ];

  const achievements = [
    "8+ years of proven software development experience",
    "150+ successful projects across diverse industries", 
    "Expert team specializing in modern technologies",
    "Agile methodology ensuring timely delivery",
    "24/7 support and maintenance services"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Algorid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and innovators dedicated to transforming 
            businesses through intelligent software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Building the Future, One Line of Code at a Time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between complex business needs and elegant 
                technical solutions, Algorid has grown into a trusted partner for companies looking 
                to leverage technology for competitive advantage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise spans across modern web development, enterprise software integration, 
                and artificial intelligence implementation, ensuring we can tackle projects of any 
                scale and complexity.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What Sets Us Apart</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
              Our Core Values
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};