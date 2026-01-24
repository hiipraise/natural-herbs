import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Youtube } from "lucide-react";
const MotionDiv = motion.div

const CandidiasisSection = ({  candidiasisImages }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12"
  >
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Candidiasis (Oral Thrush)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Oral thrush, also called oral candidiasis, is a condition in
            which the fungus Candida albicans builds up in the mouth. It's
            natural for candida, a yeast, to live in the mouth. But
            sometimes it can grow too much and cause symptoms. Oral thrush
            causes creamy white patches or spots, usually on the tongue or
            inner cheeks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sometimes oral thrush may spread to the roof of the mouth, gums
            or tonsils, or the back of your throat. Although oral thrush can
            affect anyone, it's more likely to occur in babies and older
            adults because they have lower immunity.
          </p>
        </div>
        <div className="space-y-4">
          {candidiasisImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Candidiasis ${idx + 1}`}
              className="rounded-2xl shadow-xl w-full"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Symptoms</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg text-green-900 mb-3">
              Children and Adults
            </h4>
            <p className="text-gray-700 mb-3">
              Symptoms of oral thrush may include:
            </p>
            <ul className="space-y-2">
              {[
                "Redness, burning or soreness that may be serious enough to cause a hard time eating or swallowing",
                "Slight bleeding if the patches or spots are rubbed or scraped",
                "Cracking and redness at the corners of your mouth",
                "A cottony feeling in your mouth",
                "Loss of taste",
                "Redness, irritation and pain under your dentures"
              ].map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                In severe cases, usually related to cancer or a weakened
                immune system from HIV/AIDS, the patches or spots may spread
                downward into your esophagus. This is called Candida esophagitis.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-green-900 mb-3">
              Babies and Breastfeeding Mothers
            </h4>
            <p className="text-gray-700 mb-3">
              Women whose breasts are infected with candida may have these symptoms:
            </p>
            <ul className="space-y-2">
              {[
                "Unusually red, sensitive, cracked or itchy nipples",
                "Shiny or flaky skin on the darker, circular area around the nipple, called the areola",
                "Unusual pain during nursing or painful nipples between feedings",
                "Stabbing pains deep within the breast"
              ].map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl space-y-4">
        <h3 className="font-bold text-2xl text-green-900">
          Kuzzima-H Natural Treatment
        </h3>
        <p className="text-gray-700 leading-relaxed">
          I highly recommend Kuzzima-H. Kuzzima-H is a powerful natural
          medicine formulated from a combination of unique roots and herbs
          such as orange totsiyaa, yarrow, althaea officianlis, Epazote,
          Myrrhis odorata and many more. It is safe to use with no known
          side effects or reoccurrence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We have helped a number of patients suffering from oral thrush and
          so far the results have been nothing short of impressive. The
          complete course takes 7 days upon completion of which no trace of
          the symptoms are noticed.
        </p>
        <p className="text-sm text-gray-600">
          Delivery takes 3-4 working days
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCoaefUShEbs5LGRyy7pnvGg",
              "_blank"
            )
          }
          className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold"
        >
          <Youtube className="w-5 h-5" />
          Watch Treatment Video
        </motion.button>
      </div>
    </div>
  </motion.section>
);

export default CandidiasisSection;