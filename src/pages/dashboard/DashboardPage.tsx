import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Folder, Eye, Edit, Trash2, Globe, Users, TrendingUp, Activity } from 'lucide-react';

export function DashboardPage() {
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastModified: '2 hours ago',
      status: 'Published',
      views: 1240
    },
    {
      id: 2,
      name: 'Restaurant Landing',
      thumbnail: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastModified: '1 day ago',
      status: 'Draft',
      views: 0
    },
    {
      id: 3,
      name: 'SaaS Homepage',
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastModified: '3 days ago',
      status: 'Published',
      views: 856
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '12', icon: Folder, change: '+2 this month' },
    { label: 'Page Views', value: '24.5K', icon: Eye, change: '+12.5% from last month' },
    { label: 'Active Visitors', value: '1,847', icon: Users, change: '+8.2% from last month' },
    { label: 'Conversion Rate', value: '3.24%', icon: TrendingUp, change: '+0.5% from last month' }
  ];

  const recentActivity = [
    { action: 'Published', project: 'Portfolio Website', time: '2 hours ago', type: 'publish' },
    { action: 'Updated', project: 'Restaurant Landing', time: '1 day ago', type: 'edit' },
    { action: 'Created', project: 'SaaS Homepage', time: '3 days ago', type: 'create' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  index === 0 ? 'bg-blue-100' : 
                  index === 1 ? 'bg-green-100' :
                  index === 2 ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  <stat.icon className={`w-5 h-5 ${
                    index === 0 ? 'text-blue-600' : 
                    index === 1 ? 'text-green-600' :
                    index === 2 ? 'text-purple-600' : 'text-orange-600'
                  }`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-xs text-green-600">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Your Projects</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors group"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Updated {project.lastModified}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                        <Globe className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'publish' ? 'bg-green-500' :
                      activity.type === 'edit' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.action}</span>{' '}
                        <span className="text-gray-600">{activity.project}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}