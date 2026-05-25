import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Sparkles } from 'lucide-react';

const Specialties: React.FC = () => {
  const specialties = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '陽痿早洩',
      desc: '運用純中草藥調理腎氣，改善男性功能障礙',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '前列腺問題',
      desc: '中藥內服外敷，緩解前列腺炎症與不適',
      color: 'from-amber-500 to-amber-700'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: '內在調理',
      desc: '根據個人體質，定制專屬中藥調理方案',
      color: 'from-rose-500 to-rose-700'
    }
  ];

  return (
    <section className="py-12 px-4 bg-white/50">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-800 mb-2">專業領域</h2>
            <p className="text-stone-500">專注男性健康調理</p>
          </div>

          <div className="space-y-4">
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md border border-stone-100 flex items-start gap-4"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
