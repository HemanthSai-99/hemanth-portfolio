import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hemanthsaitholikonda99@email.com',
      href: 'mailto:hemanthsaitholikonda@99@email.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8050705390',
      href: 'mobile : 8050705390'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Warangal, Telangana',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hemanth-sai-tholikonda-8935a3366/'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/HemanthSai-99/hemanth-portfolio'
    },
    // {
    //   icon: <Twitter className="w-6 h-6" />,
    //   label: 'Twitter',
    //   href: '#'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-lg">
                <p className="text-emerald-100 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                <p className="text-red-100 text-sm">
                  ✗ Failed to send message. Please try again or contact me directly.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project collaboration"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-200">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">{contact.label}</p>
                      <p className="font-semibold">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Availability</h4>
              <p className="text-blue-100 leading-relaxed">
                Currently open to new opportunities. Available for full-time positions, 
                freelance projects, and consulting work. Response time: 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-200">
            © 2025 Hemanth Sai Tholikonda. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;