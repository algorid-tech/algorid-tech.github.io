import { Card } from './ui/card';
import { Button } from './ui/button';
import { AlertTriangle, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export const ProblemSolution = () => {
  const problems = [
    {
      title: "Legacy System Constraints",
      description: "Outdated technology stack limiting business growth and innovation"
    },
    {
      title: "Manual Processes",
      description: "Time-consuming manual workflows reducing efficiency and increasing errors"
    },
    {
      title: "Lack of AI Integration",
      description: "Missing opportunities to leverage AI for competitive advantage"
    },
    {
      title: "Poor User Experience",
      description: "Complex interfaces driving away customers and reducing productivity"
    }
  ];

  const solutions = [
    {
      title: "Modern Technology Stack",
      description: "Upgrade to cutting-edge frameworks like Django, React, and cloud infrastructure"
    },
    {
      title: "Process Automation",
      description: "Implement intelligent automation to streamline operations and reduce manual work"
    },
    {
      title: "AI-Powered Solutions",
      description: "Integrate machine learning and AI capabilities to unlock new possibilities"
    },
    {
      title: "Intuitive User Interfaces",
      description: "Design user-centric applications that delight users and boost engagement"
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solving Real Business Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the technology challenges businesses face and provide proven solutions 
            to overcome them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problems */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Common Problems
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Challenges We Help You Overcome
              </h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 border-l-4 border-red-400 bg-red-50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                Our Solutions
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How Algorid Transforms Your Business
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 border-l-4 border-green-400 bg-green-50 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600">
                    {solution.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Let's discuss how our solutions can solve your specific challenges and drive growth.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white hover:border-gray-100"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};