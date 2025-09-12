import React from 'react';
import { Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Adactin Hotel Management Application',
      description:
        'Adactin Hotel App is an online hotel booking platform that enables users to register, login, search, book, and cancel hotels. The QA scope included functional and regression testing using both manual and automation coverage.',
      image: 'https://adactinhotelapp.com/img/main-image-hotel-app.jpeg',
      technologies: {
        Frontend: ['HTML', 'CSS', 'JavaScript'],
        Middleware: ['Java (Servlets, JSP)'],
        Backend: ['MySQL Database'],
        TestingTools: ['Manual Testing', 'Selenium WebDriver', 'TestNG', 'JIRA']
      },
      role: 'Software Tester (Manual + Automation)',
      responsibilities: [
        'Reviewed requirements and prepared test scenarios, test cases, and test data.',
        'Performed Functional, Integration, Regression, Smoke, and Sanity testing.',
        'Validated end-to-end booking workflow: Login → Search → Book → Confirm → Cancel.',
        'Conducted cross-browser/UI testing on Chrome, Firefox, and Edge.',
        'Logged and tracked defects in JIRA, collaborated with developers.',
        'Prepared RTM (Requirement Traceability Matrix) and execution reports.',
        'Automated Login, Search Hotel, and Booking Confirmation modules using Selenium WebDriver + TestNG.'
      ],
      liveUrl: 'https://adactinhotelapp.com/',
      githubUrl: '#'
    },
    {
      title: 'EatClub.in – Online Food Ordering & Delivery Platform',
      description:
        'EatClub is a food ordering & delivery platform that connects customers, restaurants, and delivery partners. It provides modules like Customer, Vendor, Delivery Partner, Admin, Payments, and Notifications for seamless order and delivery experiences.',
      image: 'https://assets.box8.co.in/logo/eatclub/eatclub_logo.png',
      technologies: {
        Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
        Middleware: ['Node.js', 'REST APIs'],
        Backend: ['MySQL Database'],
        TestingTools: [
          'Manual Testing',
          'Postman (API Testing)',
          'Selenium WebDriver',
          'JIRA',
        ]
      },
      role: 'Software Tester (Manual + API Testing)',
      responsibilities: [
        'Reviewed business/functional requirements and created test cases across all modules.',
        'Performed Functional, Integration, Regression, and Sanity testing (Web & Mobile).',
        'Conducted API testing using Postman for order creation, payments, and vendor workflows.',
        'Verified payment gateway flows (UPI, Wallets, Refunds) and validated DB transactions in MySQL.',
        'Executed cross-browser testing (Chrome, Firefox, Edge) and cross-device testing (Android, iOS).',
        'Logged and tracked issues in JIRA; participated in bug triage and daily stand-ups.',
        'Validated live order tracking, notifications (SMS, Email, Push).',
        'Prepared test summary reports and shared results with stakeholders.'
      ],
      liveUrl: 'https://eatclub.in/',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my technical skills, testing expertise, and role-based contributions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li><strong>Frontend:</strong> {project.technologies.Frontend.join(', ')}</li>
                    <li><strong>Middleware:</strong> {project.technologies.Middleware.join(', ')}</li>
                    <li><strong>Backend:</strong> {project.technologies.Backend.join(', ')}</li>
                    <li><strong>Testing Tools:</strong> {project.technologies.TestingTools.join(', ')}</li>
                  </ul>
                </div>

                {/* Role */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Role:</h4>
                  <p className="text-gray-700 text-sm">{project.role}</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-500 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
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
