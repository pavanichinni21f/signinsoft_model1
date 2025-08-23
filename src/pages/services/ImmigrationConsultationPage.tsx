import React from 'react';
import { motion } from 'framer-motion';

export function ImmigrationConsultationPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-violet-900 to-purple-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Immigration Consultation</h1>
            <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl">
              Navigate complex immigration processes with personalized consultation and strategic planning services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}