import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  // LINE私人号
  const lineId = '51097845';

  const handleLineClick = () => {
    // 追踪FB点击事件
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
    const lineUrl = `https://line.me/ti/p/~${lineId}`;
    window.open(lineUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-4 right-4 z-50"
    >
      <div className="bg-white rounded-xl p-3 shadow-lg mb-3">
        <p className="text-amber-600 text-xs text-center font-medium">
          💡 加LINE後請主動發送「我想諮詢」
        </p>
      </div>
      <motion.button
        onClick={handleLineClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-2xl shadow-emerald-500/40 flex items-center justify-center gap-3 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-lg">立即獲取方案</span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingCTA;
