import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  // 两个LINE ID轮流跳转
  const lineIds = ['23614600', '51097845'];

  const handleLineClick = () => {
    // 追踪FB点击事件
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
    // 随机选择一个LINE ID
    const randomId = lineIds[Math.floor(Math.random() * lineIds.length)];
    // 预填充消息
    const prefillMessage = encodeURIComponent('您好，我想諮詢關於男性健康調理的問題');
    const lineUrl = `https://line.me/ti/p/~${randomId}?text=${prefillMessage}`;
    window.open(lineUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-4 right-4 z-50"
    >
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
