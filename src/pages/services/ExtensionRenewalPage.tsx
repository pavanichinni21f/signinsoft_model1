import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle, Clock, FileText } from 'lucide-react';

export function ExtensionRenewalPage() {
  const services = [
    {
      title: 'Visa Extension',
      description: 'Extend your current visa status without leaving the country',
      icon: RefreshCw,
      features: ['Status review', 'Document preparation', 'Application filing', 'Follow-up support']
    },
    {
      title: 'Status Renewal',
      description: 'Renew your immigration status before expiration',
      icon: Clock,
      features: ['Eligibility check', 'Timeline planning', 'Form completion', 'Submission tracking']
    },
    {
      title: 'Document Updates',
      description: 'Update or replace immigration documents',
      icon: FileText,
      features: ['Document review', 'Update processing', 'Authentication', 'Delivery coordination']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Extension & Renewal Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Keep your immigration status current with expert extension and renewal services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Extension Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for all your visa extension and renewal needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}