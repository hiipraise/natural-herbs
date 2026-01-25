// components/home/ArthritisSection.jsx
import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const ArthritisSection = ({ setCurrentPage, arthritisImages }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12"
  >
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Reactive Psoriatic Arthritis & Rheumatoid Arthritis
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Reactive arthritis is a condition that causes joint pain and swelling,
          also called inflammation, after an infection in another part of the
          body. The infection typically starts in the gut, genitals or urinary
          tract.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={arthritisImages[0]}
          alt="Arthritis Treatment Before"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
        <img
          src={arthritisImages[1]}
          alt="Arthritis Treatment After"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Understanding Reactive Arthritis
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This condition typically affects the knees, ankles and feet. It also
          can cause inflammation in the eyes, the skin and the tube that carries
          urine out of the body, called the urethra. In the past, reactive
          arthritis was sometimes called Reiter syndrome.
        </p>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-cyan-900">Causes</h4>
          <p className="text-gray-700 leading-relaxed">
            Reactive arthritis itself is not contagious, but the bacteria that
            cause it can spread through sex or food. Several types of bacteria
            can trigger reactive arthritis. Common examples include:
          </p>

          <div className="space-y-3">
            <div className="border-l-4 border-cyan-600 pl-4">
              <h5 className="font-bold text-gray-800 mb-2">
                1. Chlamydia trachomatis
              </h5>
              <p className="text-gray-700">
                It is spread through sexual contact. The infection typically
                starts in the urethra, bladder or vagina.
              </p>
            </div>

            <div className="border-l-4 border-cyan-600 pl-4">
              <h5 className="font-bold text-gray-800 mb-2">
                2. Gastrointestinal Bacteria
              </h5>
              <p className="text-gray-700">
                Clostridium difficile (C. difficile), Escherichia coli (E.
                coli), campylobacter, salmonella, shigella and yersinia. These
                bacteria typically infect the gastrointestinal tract, causing
                diarrhea or other stomach and intestinal symptoms.
              </p>
            </div>
          </div>

          <div className="bg-cyan-50 p-4 rounded-lg mt-4">
            <p className="text-gray-700 leading-relaxed">
              Only a small number of people who are exposed to these bacteria
              develop reactive arthritis.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cyan-900 text-white rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold">
          Treatment: Natural Roots Mixture Called Verolantis
        </h3>
        <p className="text-cyan-100 leading-relaxed">
          I'm so glad to announce that psoriatic arthritis can be cured
          completely. Over some time now, my team and I have been working on the
          absolute remediation of psoriatic arthritis, it is indeed mind blowing
          and outstanding how natural herbs and plants have all the answers we
          seek.
        </p>
        <p className="text-cyan-100 leading-relaxed">
          This natural roots mixture is called{" "}
          <span className="font-bold text-white">Verolantis</span> - a powerful
          combination of natural herbs specifically formulated to target and
          eliminate the root causes of reactive psoriatic arthritis and
          rheumatoid arthritis.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage("order")}
          className="bg-white text-cyan-900 px-8 py-4 rounded-full font-semibold"
        >
          Order Verolantis Arthritis Treatment
        </motion.button>
      </div>
    </div>
  </motion.section>
);

export default ArthritisSection;
