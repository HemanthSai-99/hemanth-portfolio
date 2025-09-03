import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Adactin Hotel Application',
      description: 'Performed end-to-end testing on Adactin Hotel App including login, hotel search, booking, and payment workflows. Covered functional, UI, and regression testing scenarios.',
      image: 'https://adactinhotelapp.com/img/main-image-hotel-app.jpeg',
      technologies: ['Manual Testing', 'Defect Tracking'],
      liveUrl: 'https://adactinhotelapp.com/',
      githubUrl: '#'
    },
    // {
    //   title: 'TaskFlow Pro',
    //   description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics for productivity tracking.',
    //   image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'WeatherWise',
    //   description: 'A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts using modern APIs.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Vue.js', 'Express', 'MongoDB', 'OpenWeather API'],
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'FinanceTracker',
    //   description: 'Personal finance management app with expense tracking, budget planning, investment monitoring, and detailed financial analytics.',
    //   image: 'https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React Native', 'Firebase', 'Chart.js', 'Plaid API'],
    //   liveUrl: '#',
    //   githubUrl: '#'
    // }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my technical skills and creative problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-gray-700" />
                  </a> */}
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;