// components/home/Type2DiabetesSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const MotionDiv = motion.div;

const Type2DiabetesSection = ({ setCurrentPage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 md:p-12"
  >
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Type 2 Diabetes (T2D) Treatment
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Type 2 diabetes happens when the body cannot use insulin correctly and
          sugar builds up in the blood. It was once called adult-onset diabetes.
          Over time, high blood sugar levels can damage the eyes, kidneys,
          nerves and heart.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Understanding Type 2 Diabetes
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This can happen because the pancreas doesn't make enough of a hormone
          called insulin that helps sugar enter the cells. It happens also
          because the cells respond poorly to insulin by taking in less sugar.
        </p>
        <h4 className="text-xl font-bold text-red-900 mt-6">Causes</h4>
        <p className="text-gray-700 leading-relaxed">
          Type 2 diabetes is mainly the result of two issues:
        </p>
        <div className="space-y-3">
          <div className="border-l-4 border-red-600 pl-4">
            <p className="text-gray-700">
              <span className="font-semibold">1. Insulin Resistance:</span>{" "}
              Cells in muscle, fat and the liver don't respond to insulin as
              they should. As a result, the cells don't take in enough sugar.
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-4">
            <p className="text-gray-700">
              <span className="font-semibold">
                2. Insufficient Insulin Production:
              </span>{" "}
              The gland that makes insulin, called the pancreas, can't make
              enough to keep blood sugar levels within a healthy range.
            </p>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Being overweight and not moving enough are key factors.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">How Insulin Works</h3>
        <p className="text-gray-700 leading-relaxed">
          Insulin is a hormone that comes from a gland that sits behind and
          below the stomach. The gland is called the pancreas. Insulin manages
          how the body uses sugar in the following ways:
        </p>
        <ol className="space-y-3 list-decimal list-inside">
          <li className="text-gray-700">
            Sugar in the bloodstream causes the pancreas to release insulin
          </li>
          <li className="text-gray-700">
            Insulin in the bloodstream gets sugar into the cells
          </li>
          <li className="text-gray-700">
            The amount of sugar in the bloodstream drops
          </li>
          <li className="text-gray-700">
            Then the pancreas releases less insulin
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Complications</h3>
        <p className="text-gray-700 leading-relaxed">
          Type 2 diabetes affects many major organs. These include the heart,
          blood vessels, nerves, eyes and kidneys. Also, factors that raise the
          risk of diabetes are risk factors for other serious diseases. Managing
          diabetes and blood sugar can lower the risk for these complications
          and other medical conditions, including:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Heart and blood vessel disease:
              </span>
              <span className="text-gray-700">
                {" "}
                Diabetes is linked with a higher risk of heart disease, stroke,
                high blood pressure and narrowed blood vessels, called
                atherosclerosis.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Nerve damage in arms and legs (Neuropathy):
              </span>
              <span className="text-gray-700">
                {" "}
                High blood sugar over time can damage or destroy nerves.
                Neuropathy may cause tingling, numbness, burning, pain or loss
                of feeling. It most often begins at the tips of the toes or
                fingers and slowly spreads upward.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Other nerve damage:
              </span>
              <span className="text-gray-700">
                {" "}
                Damage to nerves of the heart can cause irregular heart rhythms.
                Nerve damage in the digestive system can cause problems with
                nausea, vomiting, diarrhea or constipation. Nerve damage also
                may cause erectile dysfunction.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Kidney disease:
              </span>
              <span className="text-gray-700">
                {" "}
                Diabetes may lead to long-term kidney disease or end-stage
                kidney disease that can't be reversed. End-stage kidney disease
                may need to be treated with mechanical filtering of the kidneys,
                called dialysis, or a kidney transplant.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">Eye damage:</span>
              <span className="text-gray-700">
                {" "}
                Diabetes increases the risk of serious eye conditions.
                Conditions include cataracts and glaucoma. Diabetes also may
                damage the blood vessels of the retina, which is the part of the
                eye that senses light. This is called diabetic retinopathy. This
                damage can lead to blindness.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Skin conditions:
              </span>
              <span className="text-gray-700">
                {" "}
                Diabetes may raise the risk of some skin problems. Skin problems
                may include bacterial and fungal infections.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">Slow healing:</span>
              <span className="text-gray-700">
                {" "}
                Cuts and blisters that aren't treated can become serious
                infections. The infections may heal poorly. Bad damage can
                result in the need to use surgery to remove a toe, foot or leg.
                This surgery is called amputation.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">
                Hearing impairment:
              </span>
              <span className="text-gray-700">
                {" "}
                Hearing problems are more common in people with diabetes.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">Sleep apnea:</span>
              <span className="text-gray-700">
                {" "}
                Obstructive sleep apnea is common in people who have type 2
                diabetes. Obesity may be the main cause of both conditions.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800">Dementia:</span>
              <span className="text-gray-700">
                {" "}
                Type 2 diabetes seems to raise the risk of Alzheimer's disease
                and other conditions that cause dementia. Poorly managed blood
                sugar is linked to a faster loss of memory and other thinking
                skills.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-red-900 text-white rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold">
          Natural Reversal of Type 2 Diabetes
        </h3>
        <p className="text-red-100 leading-relaxed">
          T2 Diabetes can be reversed completely within 16 days, without the
          need of taking continuous treatment. The remediation is purely Natural
          treatment.
        </p>
        <div className="bg-white text-gray-800 p-6 rounded-xl">
          <h4 className="font-bold text-lg text-red-900 mb-3">Success Story</h4>
          <p className="italic leading-relaxed mb-4">
            "Having been diagnosed with type2 diabetes, I find it difficult to
            keep up with the lifestyle changes, medication and blood sugar
            monitoring. However, everything changed when I learned that T2D can
            be reversed without any ill effect on the body. My name is Elizabeth
            Moore and my findings led me to Dr. chalopa a natural healthcare
            practitioner."
          </p>
          <p className="font-semibold text-red-900">— Elizabeth Moore</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage("order")}
          className="bg-white text-red-900 px-8 py-4 rounded-full font-semibold"
        >
          Order Type 2 Diabetes Treatment
        </motion.button>
      </div>
    </div>
  </motion.section>
);

export default Type2DiabetesSection;
