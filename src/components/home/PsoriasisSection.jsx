import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div

const PsoriasisSection = ({ setCurrentPage, psoriasisImages }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
  >
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Psoriasis Treatment
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Psoriasis is an autoimmune skin condition that causes itchiness
          and discomfort. Plaque psoriasis is the most common type. It
          causes thick, scaly areas of skin.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {psoriasisImages.map((img, idx) => {
          const labels = ["Before Treatment", "Treatment Process", "After Treatment"];
          const descriptions = [
            "Initial condition with visible plaques",
            "Healing in progress",
            "Clear, healthy skin restored"
          ];
          return (
            <div key={idx} className="space-y-3">
              <img
                src={img}
                alt={`Psoriasis ${labels[idx]}`}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="text-center">
                <h3 className="font-bold text-lg text-purple-900">
                  {labels[idx]}
                </h3>
                <p className="text-gray-600 text-sm">{descriptions[idx]}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          What are the types of psoriasis?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          There are several types of psoriasis, including:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Plaque Psoriasis",
              desc: "Plaque psoriasis is the most common type of psoriasis. About 80% to 90% of people with psoriasis have plaque psoriasis."
            },
            {
              title: "Inverse Psoriasis",
              desc: "This type appears in your skin folds. It causes thin plaques without scales."
            },
            {
              title: "Guttate Psoriasis",
              desc: "Guttate psoriasis may appear after a sore throat caused by a streptococcal infection. It looks like small, red, drop-shaped scaly spots and often affects children and young adults."
            },
            {
              title: "Pustular Psoriasis",
              desc: "Pustular psoriasis has small, pus-filled bumps on top of plaques."
            },
            {
              title: "Erythrodermic Psoriasis",
              desc: "This is a severe type of psoriasis that affects a large area (more than 90%) of your skin. It causes widespread skin discoloration and skin shedding."
            },
            {
              title: "Sebopsoriasis",
              desc: "This type typically appears on your face and scalp as bumps and plaques with a greasy, yellow scale. This is a cross between psoriasis and seborrheic dermatitis."
            },
            {
              title: "Nail Psoriasis",
              desc: "Nail psoriasis causes skin discoloration, pitting and changes to your fingernails and toenails."
            }
          ].map((type, idx) => (
            <div key={idx} className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-bold text-lg text-purple-900 mb-2">
                {type.title}
              </h4>
              <p className="text-gray-700">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-900 text-white rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold">
          Natural Treatment for Psoriasis
        </h3>
        <p className="text-purple-100 leading-relaxed">
          Our natural herbal treatment addresses all types of psoriasis
          using powerful botanical formulas that target the root cause of
          the condition. With no side effects and proven results, our
          treatment helps manage symptoms and restore healthy skin.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage("order")}
          className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold"
        >
          Order Psoriasis Treatment
        </motion.button>
      </div>
    </div>
  </motion.section>
);

export default PsoriasisSection;