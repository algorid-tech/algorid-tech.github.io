import { Card } from './ui/card';
import { Link, Mail, Github } from 'lucide-react';
import { mockData } from '../mock';

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of developers, designers, and strategists brings together years of 
            experience to deliver exceptional results for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.team.map((member) => (
            <Card 
              key={member.id}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white group"
            >
              <div className="space-y-4">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-semibold">
                    {member.role}
                  </div>
                  <div className="text-sm text-gray-600">
                    {member.expertise}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-2">
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <Link className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <Mail className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Description */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Collaborative Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team operates as a cohesive unit, combining individual expertise with collaborative 
              problem-solving. Each member brings unique skills and perspectives, ensuring comprehensive 
              solutions for every project challenge.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-gray-600">Combined Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-gray-600">Certifications Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};