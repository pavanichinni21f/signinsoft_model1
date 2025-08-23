import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

export function TermsOfServicePage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using ConsultPro's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: FileText,
      content: `ConsultPro provides professional consulting services including:

• IT consulting and strategy development
• Software development and implementation
• UI/UX design services
• Visa and immigration consulting
• Business development consulting
• Technology solutions and support

We reserve the right to modify or discontinue any service at any time without notice.`
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Users,
      content: `As a user of our services, you agree to:

• Provide accurate and complete information
• Maintain the confidentiality of your account credentials
• Use our services in compliance with all applicable laws
• Not interfere with the proper functioning of our services
• Respect intellectual property rights
• Not engage in any fraudulent or illegal activities`
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: Scale,
      content: `Payment terms vary by service type:

• Consultation fees are due prior to scheduled appointments
• Project-based work requires a deposit before commencement
• Monthly retainer services are billed in advance
• All fees are non-refundable unless specified otherwise
• Late payment may result in service suspension
• Prices are subject to change with 30 days notice`
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: Shield,
      content: `We maintain strict confidentiality regarding all client information:

• All client data is protected under professional confidentiality agreements
• We do not share client information with third parties without consent
• Confidentiality obligations survive termination of services
• Clients retain ownership of their proprietary information
• We implement industry-standard security measures`
    },
    {
      id: 'limitations',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: `Our liability is limited as follows:

• We provide services on an "as is" basis
• We do not guarantee specific outcomes or results
• Our total liability shall not exceed the fees paid for services
• We are not liable for indirect, incidental, or consequential damages
• Some jurisdictions do not allow limitation of liability
• These limitations apply to the fullest extent permitted by law`
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. They govern your use of ConsultPro's platform and services.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              Last updated: January 1, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to ConsultPro</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service ("Terms") govern your use of ConsultPro's website, services, and platform. 
              By using our services, you agree to these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              ConsultPro reserves the right to modify these Terms at any time. We will notify users of significant 
              changes via email or through our platform. Continued use of our services after changes constitutes 
              acceptance of the new Terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
                id={section.id}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intellectual Property</h3>
                <p className="text-gray-600 leading-relaxed">
                  All content, trademarks, and intellectual property on our platform remain the property of ConsultPro. 
                  Users may not reproduce, distribute, or create derivative works without explicit permission.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Termination</h3>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate services with 30 days written notice. ConsultPro reserves the right to 
                  immediately terminate services for violation of these Terms or illegal activity.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of New York State. Any disputes will be resolved in the courts 
                  of New York County, New York.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Severability</h3>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain 
                  in full force and effect.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-slate-800 rounded-2xl shadow-lg p-8 text-white mt-12"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact our legal team:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Legal Department</h3>
                <p className="text-gray-300">legal@consultpro.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Business Address</h3>
                <p className="text-gray-300">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-300">Within 3 business days</p>
              </div>
            </div>
          </motion.div>

          {/* Agreement Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8 text-center"
          >
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Agreement Confirmation</h2>
            <p className="text-gray-700">
              By using ConsultPro's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}