import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, TrendingUp, Shield } from 'lucide-react';

export function AboutPage() {
  const team = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Strategic Planning', 'Business Development', 'Client Relations']
    },
    {
      name: 'Sarah Williams',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Software Architecture', 'Cloud Solutions', 'Technology Innovation']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Visa Services',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Immigration Law', 'Document Processing', 'Client Consultation']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead UI/UX Designer',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['User Experience', 'Interface Design', 'Design Systems']
    }
  ];

  const timeline = [
    { year: '2008', title: 'Company Founded', description: 'Started as a small IT consulting firm in New York' },
    { year: '2012', title: 'Visa Services Added', description: 'Expanded to include comprehensive visa and immigration services' },
    { year: '2016', title: 'International Expansion', description: 'Opened offices in London and Toronto' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platforms and remote consultation services' },
    { year: '2023', title: '15 Years of Excellence', description: 'Celebrating 15 years of successful client partnerships' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project and consultation, delivering results that exceed expectations.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest, transparent communication and ethical business practices in all our client relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously evolving our services and adopting cutting-edge technologies for better outcomes.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About ConsultPro</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Empowering businesses and individuals worldwide through expert consulting, 
              innovative technology solutions, and comprehensive visa services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, ConsultPro began with a simple mission: to bridge the gap between 
                technology innovation and business success. What started as a small IT consulting 
                firm has evolved into a comprehensive service provider, helping thousands of clients 
                achieve their professional and personal goals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In 2012, recognizing the growing need for expert immigration guidance, we expanded 
                our services to include comprehensive visa and immigration consultation. This 
                strategic addition allowed us to serve clients not just in their business endeavors, 
                but also in their life-changing journeys across borders.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we pride ourselves on being a trusted partner that combines technical 
                expertise with personalized service, helping businesses transform digitally and 
                individuals navigate complex immigration processes with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-blue-900 mb-2">2,500+</div>
                <div className="text-blue-700">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                <Globe className="w-8 h-8 text-teal-600 mb-4" />
                <div className="text-3xl font-bold text-teal-900 mb-2">45+</div>
                <div className="text-teal-700">Countries Served</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <Award className="w-8 h-8 text-green-600 mb-4" />
                <div className="text-3xl font-bold text-green-900 mb-2">15+</div>
                <div className="text-green-700">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
                <div className="text-3xl font-bold text-purple-900 mb-2">98%</div>
                <div className="text-purple-700">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global recognition, here's how we've grown and evolved over the years
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-100 rounded-full -z-10"></div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our mission to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}