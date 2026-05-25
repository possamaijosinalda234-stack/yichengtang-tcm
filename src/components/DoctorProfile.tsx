import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  const doctorImage = 'https://conversation.cdn.meoo.host/conversations/306329297893900288/image/2026-05-25/1779687769723-image.png?auth_key=97b1e2ea50acdf04cd9c01af13279db48d95a59dfece28747dfba570afd0fd87';

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative h-80 bg-gradient-to-b from-stone-100 to-stone-200">
            <img
              src={doctorImage}
              alt="陳麗醫師"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 bg-emerald-800/90 text-white px-4 py-2 rounded-lg">
              <span className="text-lg font-bold">陳麗 醫師</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-emerald-600 rounded-full"></div>
              <h2 className="text-xl font-bold text-stone-800">專業背景</h2>
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">
              從事醫療工作已有 <span className="text-emerald-700 font-bold text-lg">16年</span>，
              專注於中醫內科調理，擅長運用純中草藥進行內在調養。
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-emerald-50 rounded-xl p-3 text-center">
                <Clock className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <span className="text-xs text-stone-600">16年經驗</span>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-center">
                <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <span className="text-xs text-stone-600">專業認證</span>
              </div>
              <div className="bg-rose-50 rounded-xl p-3 text-center">
                <Heart className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                <span className="text-xs text-stone-600">用心服務</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorProfile;
