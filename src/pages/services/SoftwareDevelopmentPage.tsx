import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Smartphone, Globe, Database, Cloud } from 'lucide-react';

export function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      icon: Database,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise software solutions for complex business needs',
      technologies: ['Microservices', '.NET', 'Java', 'Oracle', 'Redis']
    },
    {
      icon: Cloud,
      title: 'Cloud Applications',
      description: 'Cloud-native applications designed for scalability and performance',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Software Development</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl">
              Custom software solutions that power your business growth with modern technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end software development services using the latest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: '01', title: 'Discovery & Planning', description: 'Understanding your requirements and defining project scope' },
                { step: '02', title: 'Design & Architecture', description: 'Creating user experience designs and technical architecture' },
                { step: '03', title: 'Development & Testing', description: 'Agile development with continuous testing and integration' },
                { step: '04', title: 'Deployment & Support', description: 'Launch your application with ongoing maintenance and support' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Software Solution?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's transform your ideas into powerful software that drives business success
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}