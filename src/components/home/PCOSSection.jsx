// components/home/PCOSSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const MotionDiv = motion.div;

const PCOSSection = ({ pcosImage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
  >
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={pcosImage}
          alt="PCOS Treatment"
          className="rounded-2xl shadow-xl w-full order-2 md:order-1"
        />
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Polycystic Ovarian Syndrome (PCOS)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Polycystic ovary syndrome (PCOS) is a health problem that affects 1
            in 10 women of childbearing age. Women with PCOS have a hormonal
            imbalance and metabolism problems that may affect their overall
            health and appearance. PCOS is also a common and treatable cause of
            infertility.
          </p>
          <p className="text-gray-700 leading-relaxed">
            However, there are natural treatments that can restore hormone
            balance and relieve symptoms like hair loss, unwanted hair growth,
            irregular periods, iron deficiency and more.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Does PCOS Cause Infertility?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          PCOS is one of the leading causes of ovulatory infertility—but that
          doesn't mean a PCOS diagnosis equals infertility. Many people with
          PCOS conceive naturally, especially if they have mild symptoms or
          manage the condition with lifestyle changes. In other cases, fertility
          treatment can significantly increase the chances of getting pregnant.
          The key takeaway: PCOS can make getting pregnant more challenging, but
          it doesn't make it impossible.
        </p>
        <div className="bg-white p-6 rounded-xl">
          <p className="text-gray-700 italic leading-relaxed">
            "I've a patient who was deeply troubled with Hormonal imbalance,
            after weeks of using my natural treatment she is restored; her
            hormones are balanced, and her symptoms are virtually gone. She is
            happy her whole life is back."
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          How PCOS Affects Ovulation and Fertility
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At the core of PCOS is a hormonal imbalance that disrupts normal
          ovulation. In a typical cycle, a mature egg is released from the ovary
          during ovulation, providing the opportunity for pregnancy. However,
          PCOS can interfere with this process in several ways:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Irregular or absent periods:
              </span>
              <span className="text-gray-700">
                {" "}
                Many people with PCOS experience infrequent or unpredictable
                menstrual cycles, which means they may ovulate less often or not
                at all.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Excess androgens:
              </span>
              <span className="text-gray-700">
                {" "}
                PCOS is associated with elevated levels of androgens (sometimes
                called "male" hormones), which can prevent the development and
                release of eggs.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Insulin resistance:
              </span>
              <span className="text-gray-700">
                {" "}
                Many patients with PCOS also have insulin resistance, which can
                worsen hormonal imbalances and increase the risk of diabetes.
              </span>
            </div>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          These disruptions make it harder to predict ovulation or time
          intercourse for conception, which is why many people with PCOS seek
          fertility support.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl">
        <h3 className="font-bold text-2xl text-amber-900 mb-4">
          Natural Remedy for PCOS
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Pure Natural root (Orange-Totsiyaa, Andrographis Paniculata, Ginseng
          root, Yarrow root), Alkaline Water and more. This exact treatment is
          uniquely made. Unlike another natural treatment it needs the touch of
          an expert.
        </p>
      </div>
    </div>
  </motion.section>
);

export default PCOSSection;
