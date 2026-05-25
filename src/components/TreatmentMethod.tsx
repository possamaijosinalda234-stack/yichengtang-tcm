import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TreatmentMethod: React.FC = () => {
  const features = [
    '純天然中草藥，無化學添加',
    '根據個人體質定制方案',
    '內在調理，從根本改善',
    '溫和無副作用',
    '16年臨床經驗驗證'
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-6 text-white shadow-xl"
        >
          <div className="text-center mb-6">
            <div className="inline-block bg-amber-400/20 rounded-full px-4 py-1 mb-3">
              <span className="text-amber-300 text-sm font-medium">治療理念</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">純中草藥內在調理</h2>
            <p className="text-emerald-200 text-sm">
              講究的是純中草藥內在調理身體，從根本上改善體質
            </p>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-emerald-200 text-sm italic">
              "治未病，調陰陽，和氣血"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentMethod;
