import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  connected: boolean;
  category: string;
}

const integrations: Integration[] = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'CRM and customer engagement platform',
    icon: '☁️',
    color: 'from-blue-500 to-blue-600',
    connected: false,
    category: 'CRM'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Marketing, sales, and service software',
    icon: '🎯',
    color: 'from-orange-500 to-red-500',
    connected: false,
    category: 'CRM'
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Team communication and collaboration',
    icon: '💬',
    color: 'from-purple-500 to-pink-500',
    connected: false,
    category: 'Communication'
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes and docs',
    icon: '📝',
    color: 'from-gray-700 to-gray-900',
    connected: false,
    category: 'Productivity'
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    description: 'Schedule and manage events',
    icon: '📅',
    color: 'from-blue-500 to-cyan-500',
    connected: false,
    category: 'Google Workspace'
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    description: 'Cloud storage and file sharing',
    icon: '📁',
    color: 'from-green-500 to-teal-500',
    connected: false,
    category: 'Google Workspace'
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: 'Online spreadsheet application',
    icon: '📊',
    color: 'from-green-600 to-emerald-600',
    connected: false,
    category: 'Google Workspace'
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    description: 'Online document editor',
    icon: '📄',
    color: 'from-blue-600 to-indigo-600',
    connected: false,
    category: 'Google Workspace'
  },
  {
    id: 'google-slides',
    name: 'Google Slides',
    description: 'Online presentation creator',
    icon: '📽️',
    color: 'from-yellow-500 to-orange-500',
    connected: false,
    category: 'Google Workspace'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Professional networking platform',
    icon: '💼',
    color: 'from-blue-700 to-blue-800',
    connected: false,
    category: 'Social'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    description: 'Short-form video platform',
    icon: '🎵',
    color: 'from-pink-500 to-rose-600',
    connected: false,
    category: 'Social'
  }
];

export function IntegrationsPage() {
  const [activeIntegration, setActiveIntegration] = useState<Integration | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const handleConnect = (integration: Integration, index: number) => {
    setSlideDirection(index % 2 === 0 ? 'left' : 'right');
    setActiveIntegration(integration);
  };

  const handleAuthorize = async () => {
    setConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setConnecting(false);
    setActiveIntegration(null);
  };

  const categories = Array.from(new Set(integrations.map(i => i.category)));

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Integrations</h1>
          <p className="text-xl text-gray-600">
            Connect your favorite tools and services to supercharge your workflow
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations
                .filter(integration => integration.category === category)
                .map((integration, index) => (
                  <motion.div
                    key={integration.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer group"
                    onClick={() => handleConnect(integration, index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${integration.color} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {integration.icon}
                      </div>
                      {integration.connected && (
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Connected
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{integration.description}</p>

                    <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {integration.connected ? 'Manage' : 'Connect'}
                    </button>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIntegration && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => !connecting && setActiveIntegration(null)}
            />

            <motion.div
              initial={{
                x: slideDirection === 'right' ? '100%' : '-100%',
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              exit={{
                x: slideDirection === 'right' ? '100%' : '-100%',
                opacity: 0
              }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200
              }}
              className={`fixed top-0 ${slideDirection === 'right' ? 'right-0' : 'left-0'} h-full w-full md:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Connect {activeIntegration.name}
                  </h2>
                  <button
                    onClick={() => !connecting && setActiveIntegration(null)}
                    disabled={connecting}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`w-24 h-24 bg-gradient-to-r ${activeIntegration.color} rounded-2xl flex items-center justify-center text-5xl shadow-xl mb-8 mx-auto`}
                >
                  {activeIntegration.icon}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Authorization Required
                    </h3>
                    <p className="text-gray-600">
                      To connect {activeIntegration.name}, you'll need to authorize access to your account.
                      This allows us to sync your data securely.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">What we'll access:</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-2" />
                        Basic profile information
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-2" />
                        Read and sync data
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-2" />
                        Send notifications
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                    <p className="text-sm text-gray-600">
                      Your credentials are encrypted and never stored on our servers.
                      You can revoke access at any time from your account settings.
                    </p>
                  </div>

                  <button
                    onClick={handleAuthorize}
                    disabled={connecting}
                    className={`w-full bg-gradient-to-r ${activeIntegration.color} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center`}
                  >
                    {connecting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      `Authorize ${activeIntegration.name}`
                    )}
                  </button>

                  <button
                    onClick={() => setActiveIntegration(null)}
                    disabled={connecting}
                    className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
