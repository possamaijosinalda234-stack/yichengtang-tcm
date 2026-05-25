import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-stone-800 text-stone-400">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-4">
          <span className="text-stone-300 font-bold text-lg">医诚堂中医诊所</span>
        </div>
        <p className="text-sm mb-2">專業 · 用心 · 保密</p>
        <p className="text-xs text-stone-500">
          本網站僅供諮詢參考，具體治療方案請與醫師詳談
        </p>
        <div className="mt-4 pt-4 border-t border-stone-700">
          <p className="text-xs text-stone-500">
            © 2024 医诚堂中医诊所 版權所有
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
