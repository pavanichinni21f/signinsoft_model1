import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Zap, Eye } from 'lucide-react';

export function UIUXDesignPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-pink-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl">
              Create exceptional user experiences that delight users and drive business results through thoughtful design.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}