import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Bell, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Eye,
      content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and any other information you choose to provide.

We also automatically collect certain information when you use our services, including your IP address, browser type, operating system, referring URLs, and information about your usage of our services.`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Users,
      content: `We use the information we collect to:
      
• Provide, maintain, and improve our services
• Process transactions and send related information
• Send you technical notices and support messages
• Respond to your comments and questions
• Communicate with you about products, services, and events
• Monitor and analyze trends and usage
• Detect, investigate, and prevent fraudulent transactions`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Lock,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:

• To comply with legal obligations
• To protect and defend our rights and property
• With your explicit consent
• To trusted service providers who assist us in operating our services
• In connection with a merger, acquisition, or sale of assets`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: Bell,
      content: `We use cookies and similar tracking technologies to collect and track information and to improve and analyze our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

The types of cookies we use include:
• Essential cookies for basic site functionality
• Analytics cookies to understand how you use our services
• Marketing cookies to deliver relevant advertisements`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: FileText,
      content: `You have the right to:

• Access, update, or delete your personal information
• Object to processing of your personal information
• Request restriction of processing your personal information
• Request transfer of your personal information
• Withdraw consent where we rely on your consent

To exercise these rights, please contact us using the information provided below.`
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              Last updated: January 1, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At ConsultPro, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, 
              visit our website, or interact with us in any way.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with the terms of this Privacy Policy, please do not use our services.
            </p>
          </motion.div>

          {/* Policy Sections */}
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white mt-12"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-100">privacy@consultpro.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-blue-100">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-blue-100">Within 5 business days</p>
              </div>
            </div>
          </motion.div>

          {/* Policy Updates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on our website and updating the "Last updated" date at the top of this policy. We encourage 
              you to review this Privacy Policy periodically for any changes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your continued use of our services after we post any modifications to the Privacy Policy will constitute 
              your acknowledgment of the modifications and your consent to abide by the modified Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}