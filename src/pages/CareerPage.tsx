import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Heart, Trophy, Coffee, Zap } from 'lucide-react';

export function CareerPage() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$120K - $160K',
      description: 'Join our engineering team to build scalable web applications and innovative solutions for our global client base.',
      requirements: ['5+ years React/Node.js experience', 'Cloud platform expertise', 'Strong problem-solving skills']
    },
    {
      title: 'Immigration Consultant',
      department: 'Visa Services',
      location: 'Toronto, ON',
      type: 'Full-time',
      salary: '$70K - $95K',
      description: 'Help clients navigate complex immigration processes while providing expert guidance and support throughout their journey.',
      requirements: ['Immigration law knowledge', 'Excellent communication', 'Client service experience']
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'London, UK / Remote',
      type: 'Full-time',
      salary: '£45K - £65K',
      description: 'Create intuitive and beautiful user experiences for our web applications and client portals.',
      requirements: ['3+ years UX/UI experience', 'Figma proficiency', 'User research skills']
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90K - $130K + Commission',
      description: 'Drive growth by identifying new business opportunities and building relationships with potential clients.',
      requirements: ['B2B sales experience', 'Relationship building', 'Goal-oriented mindset']
    }
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance, mental health support, and wellness programs' },
    { icon: Coffee, title: 'Work-Life Balance', description: 'Flexible working hours, remote work options, and unlimited PTO' },
    { icon: Trophy, title: 'Growth & Development', description: 'Professional development budget, mentorship programs, and career advancement' },
    { icon: Users, title: 'Team Culture', description: 'Inclusive environment, team events, and collaborative workspace' },
    { icon: DollarSign, title: 'Compensation', description: 'Competitive salary, performance bonuses, and equity participation' },
    { icon: Zap, title: 'Innovation', description: 'Latest technology, creative freedom, and opportunity to make impact' }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Senior Developer',
      content: 'The learning opportunities here are incredible. I\'ve grown more in 2 years than I did in my previous 5 years combined.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maria Garcia',
      role: 'Immigration Consultant',
      content: 'Every day I help people achieve their dreams. The work is meaningful and the team is incredibly supportive.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      content: 'The creative freedom and collaborative environment here allows me to do my best work and continuously innovate.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const applicationSteps = [
    { step: '1', title: 'Apply Online', description: 'Submit your resume and cover letter through our careers portal' },
    { step: '2', title: 'Initial Review', description: 'Our HR team reviews your application within 48 hours' },
    { step: '3', title: 'Phone Screen', description: 'Brief call to discuss your background and the role' },
    { step: '4', title: 'Technical Interview', description: 'In-depth interview with the hiring manager and team' },
    { step: '5', title: 'Final Round', description: 'Meet with leadership and discuss next steps' },
    { step: '6', title: 'Offer', description: 'Welcome to the ConsultPro family!' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Build your career with a company that values innovation, growth, and making a meaningful impact in people's lives.
            </p>
            <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors">
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why ConsultPro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a workplace – we're a community of passionate professionals committed to excellence and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career and make an impact with our team.
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <div className="text-purple-600 font-medium">{position.department}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {position.salary}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-semibold group-hover:shadow-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Team Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our employees about their experience working at ConsultPro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Application Process</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We've designed a straightforward process to help us get to know you and for you to learn about us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-purple-100">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}