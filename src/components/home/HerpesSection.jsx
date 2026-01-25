// components/home/HerpesSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const MotionDiv = motion.div;

const HerpesSection = ({ setCurrentPage, herpesImage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12"
  >
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Herpes Simplex Virus (HSV) Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Herpes simplex is a viral disease caused by the herpes simplex
            virus. Infections are categorised based on the part of the body
            infected. Oral herpes involves the face or mouth. It may result in
            small blisters in groups often called cold sores or fever blisters
            or may just cause a sore throat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Genital herpes, often simply known as herpes, may have minimal
            symptoms or form blisters that break open and result in small
            ulcers. These typically heal over two to four weeks. Tingling or
            shooting pains may occur before the blisters appear.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Herpes cycles between periods of active disease followed by periods
            without symptoms. The first episode is often more severe and may be
            associated with fever, muscle pains, swollen lymph nodes and
            headaches. Over time, episodes of active disease decrease in
            frequency and severity.
          </p>
        </div>
        <div className="space-y-4">
          <img
            src={herpesImage}
            alt="Herpes Treatment"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Understanding HSV Types
        </h3>
        <p className="text-gray-700 leading-relaxed">
          There are two types of herpes simplex virus, type 1 (HSV-1) and type 2
          (HSV-2). HSV-1 more commonly causes oral infections while HSV-2 more
          commonly causes genital infections. They are transmitted by direct
          contact with body fluids or lesions of an infected individual.
          Transmission may still occur when symptoms are not present.
        </p>
        <p className="text-gray-700 leading-relaxed">
          After infection, the viruses are transported along sensory nerves to
          the nerve cell bodies, where they reside lifelong.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <h3 className="font-bold text-2xl text-amber-900 mb-4">
          Natural Organic Cure
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Herpes simplex 1 & 2 can be cured organically using the right natural
          treatment currently at Dr. Chalopa Natural HealthCare.
        </p>
        <h4 className="font-bold text-lg text-amber-900 mb-3">
          Treatment Benefits:
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Complete organic cure for HSV-1 and HSV-2
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">No side effects or recurrence</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Natural herbs and roots formula
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Permanent cure guaranteed</span>
          </li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage("order")}
          className="w-full mt-6 bg-amber-900 text-white px-8 py-4 rounded-full font-semibold"
        >
          Order Herpes Treatment
        </motion.button>
      </div>
    </div>
  </motion.section>
);

export default HerpesSection;
