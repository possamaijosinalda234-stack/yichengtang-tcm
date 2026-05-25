import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const LineCTA: React.FC = () => {
  // 两个LINE ID轮流跳转
  const lineIds = ['23614600', '51097845'];

  const handleLineClick = () => {
    // 追踪FB点击事件
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
    // 随机选择一个LINE ID
    const randomId = lineIds[Math.floor(Math.random() * lineIds.length)];
    const lineUrl = `https://line.me/ti/p/~${randomId}`;
    window.open(lineUrl, '_blank');
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-amber-200"
        >
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-stone-800 mb-2">
              有任何問題歡迎諮詢
            </h2>
            <p className="text-stone-500 text-sm">
              專業醫師為您解答，保護您的隱私
            </p>
          </div>

          <motion.button
            onClick={handleLineClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">立即獲取方案</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <div className="mt-6 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                隱私保護
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                專業解答
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                免費諮詢
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LineCTA;
