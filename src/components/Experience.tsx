import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications serving 50K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led team of 5 developers on critical product launches',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupX',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and modern frontend technologies. Collaborated closely with design team to implement pixel-perfect UIs.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Reduced bundle size by 30% through optimization techniques',
        'Implemented accessibility features improving WCAG compliance'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Created custom websites and web applications for diverse clients. Gained experience in full project lifecycle from requirements to deployment.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Achieved 98% client satisfaction rating',
        'Learned and implemented 5+ new technologies'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      period: '2015 - 2019',
      honors: 'Magna Cum Laude'
    }
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google UX Design Certificate',
    'Meta React Developer Certificate'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and the experiences that have shaped my expertise.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Work Experience</h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-32 bg-emerald-200"></div>
                )}
                
                <div className="flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                        <p className="text-lg text-emerald-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end gap-1 mt-2 lg:mt-0">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-lg text-emerald-600 font-semibold mb-2">{edu.school}</p>
                <div className="flex items-center gap-4 text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-700">
                  <Award size={16} />
                  <span className="text-sm font-medium">{edu.honors}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
                >
                  <div className="p-3 bg-emerald-50 rounded-full">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;