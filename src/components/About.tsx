import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Manual Testing', items: ['SDLC', 'STLC', 'Test Case Design', 'Defect reporting'] },
    { category: 'Automation', items: ['Selenium WebDriver'] },
    { category: 'Tools', items: ['Git', 'Selenium', 'MS Office'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Agile'] }
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and industry standards.'
    },
    {
      icon: <Palette className="w-8 h-8 text-emerald-600" />,
      title: 'Design Focus',
      description: 'Creating beautiful user interfaces with attention to detail and user experience.'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to deliver exceptional results.'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks to stay current with industry trends.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
Detail-oriented and results-driven Software Test Engineer with hands-on
experience in both manual testing and automation testing using Selenium
WebDriver. Proven ability to design and execute comprehensive test plans, identify
and document bugs, and collaborate with cross-functional teams to ensure highquality software delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Started my journey in computer science with a deep curiosity about how technology 
                can improve people's lives. What began as tinkering with HTML and CSS evolved into 
                a passion for creating full-stack applications.
              </p>
              <p>
                Over the years, I've worked with startups and established companies, contributing 
                to products used by thousands of users. I believe in writing code that's not just 
                functional, but also maintainable and scalable.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to 
                open-source projects, or mentoring aspiring developers in my community.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-3">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-gray-600 text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">What I Bring</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;