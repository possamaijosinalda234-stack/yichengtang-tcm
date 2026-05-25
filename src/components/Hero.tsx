import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-800">
        {/* 传统纹样装饰 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" />
              <path d="M0,10 Q5,0 10,10 T20,10" stroke="white" strokeWidth="0.3" fill="none" />
            </pattern>
            <rect width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 传统印章效果 */}
          <div className="inline-block mb-6">
            <div className="border-4 border-amber-400/80 rounded-lg px-6 py-3 bg-red-900/20">
              <span className="text-amber-300 text-lg font-bold tracking-widest">中醫傳承</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            医诚堂中医诊所
          </h1>
          <p className="text-xl text-amber-200/90 mb-2">內在調養 · 固本培元</p>
          <p className="text-lg text-stone-300">16年臨床經驗 · 專業中醫診療</p>
        </motion.div>
      </div>

      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            fill="#fdfbf7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
