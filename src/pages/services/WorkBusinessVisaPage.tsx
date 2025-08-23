import React from 'react';
import { motion } from 'framer-motion';

export function WorkBusinessVisaPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Work & Business Visas</h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl">
              Advance your career globally with professional work and business visa consultation services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}