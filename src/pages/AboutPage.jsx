// pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Shield,
  Award,
  CheckCircle,
  Globe,
  Users2,
  TrendingUp,
  Stethoscope,
} from "lucide-react";
import author from "../assets/author.jpeg";
import img1 from "../assets/natural-herbs.jpg";
import img2 from "../assets/img2.jpg";


const AboutPage = () => {
  const expertise = [
    "Bleeding Piles",
    "Diabetes",
    "Parkinson Disease",
    "Herpes",
    "Psoriasis",
    "Candidiasis",
    "Arthritis",
    "Thyroid",
    "Hypothyroidism",
    "Hyperthyroidism",
    "HIV",
    "PCOS",
    "COPD",
    "HPV",
    "Rosacea",
    "Acne",
    "Eczema",
    "Weight Loss",
    "Hair Loss",
    "Numbness",
    "Cancer",
    "Prolapse of Rectum",
    "Anal Fissures",
    "Fistula",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to Dr. Chalopa Natural Health Care
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          src={author}
          // src="https://placehold.co/600x500/8B4513/FFF?text=Dr.+Chalopa"
          alt="Dr. Chalopa"
          className="rounded-2xl shadow-2xl w-full"
        />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-12 h-12 text-amber-700" />
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            It is a known fact that the entire world is slowly and steadily
            gaining confidence in Dr. Chalopa Natural Health Care. Patients
            suffering from different diseases have come to realize that Herbal
            Medicines are totally Safe for consumption without any Side Effects.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our pure Herbal formulation comprising of Dr. Chalopa natural
            healthcare Liquid, Capsules, Ointment and Powder (for constipation)
            have given great relief to patients suffering from all types of
            diseases.
          </p>
          <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-700">
            <p className="text-gray-700 font-semibold">
              During the last 11 years Dr. Chalopa have successfully treated lot
              of patients with these Herbal/Natural Medicines without any type
              of SURGERY or RECURRING SYMPTOMS.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-amber-900 to-amber-700 text-white rounded-3xl p-8 md:p-12"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Globe className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">Global Reach</h3>
            <p className="text-amber-100">
              Serving patients in Western, European, and Asian countries
            </p>
          </div>
          <div>
            <Users2 className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">11+ Years</h3>
            <p className="text-amber-100">
              Of professional experience and proven results
            </p>
          </div>
          <div>
            <TrendingUp className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">100% Natural</h3>
            <p className="text-amber-100">
              Safe herbal medicines with no side effects
            </p>
          </div>
        </div>
      </motion.section>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Meet Dr. Chalopa
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={img1}
            // src="https://placehold.co/500x400/A0522D/FFF?text=Natural+Herbs"
            alt="Herbal Medicine"
            className="rounded-2xl shadow-lg w-full"
          />
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-medium">
              Dr. Chalopa is a natural health care practitioner who has
              unraveled the cure for several diseases such as Herpes, with
              unique set of methods using natural roots and herbs.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  11+ years of professional experience in natural healthcare
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Known for determination and proven results
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Recognized in Western, European, and Asian countries
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Successfully treated patients without surgery or recurring
                  symptoms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Specialist in unique natural root and herb formulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Our Areas of Expertise
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          We provide natural treatments for a wide range of conditions, all
          without surgery or recurring symptoms
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {expertise.map((condition, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-md border-l-4 border-amber-700"
            >
              <p className="text-gray-700 font-medium text-sm">{condition}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center"
        >
          <Leaf className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Natural Approach
          </h3>
          <p className="text-gray-600">
            Using only pure herbs and roots to treat the root cause of diseases.
            Our formulations include Liquid, Capsules, Ointment and Powder.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center"
        >
          <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Safe & Effective
          </h3>
          <p className="text-gray-600">
            No side effects, completely safe for consumption with proven
            results. No surgery required, no recurring symptoms.
          </p>
        </motion.div>
        {/* <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-4 text-amber-600" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            NAFDAC Approved
          </h3>
          <p className="text-gray-600">
            Certified and approved treatments you can trust. 100% natural herbal
            medicine with roots and herbs.
          </p>
        </motion.div> */}
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-10 h-10 text-amber-700" />
              <h2 className="text-3xl font-bold text-gray-800">
                What Does a Herbalist Do?
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Medical Herbalist takes down a full case history, listening to
              all the physical, mental and emotional symptoms the patient
              relates in order to evaluate the overall picture and understand
              the root cause of the patient's disease.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Practitioners of Herbal Medicine are not only trained in the same
              non-invasive diagnostic skills as ordinary doctors; but also use
              the benefits of a holistic viewpoint, traditional knowledge and
              additional forms of diagnosis such as Tongue, Pulse or Iris
              diagnosis to elicit the root of health problems aimed at restoring
              true health; not at suppressing the symptoms.
            </p>
          </div>
          <img
            src={img2}
            // src="https://placehold.co/500x400/8B4513/FFF?text=Herbal+Diagnosis"
            alt="Herbalist Practice"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>

      <div className="bg-amber-900 text-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Promise to You
        </h2>
        <p className="text-amber-100 max-w-4xl mx-auto leading-relaxed text-lg mb-8 text-center">
          It is a known fact that the entire world is slowly and steadily
          gaining confidence in Dr. Chalopa Natural Health Care. We are
          committed to providing safe, effective, and natural solutions to help
          you achieve optimal health without surgery or recurring symptoms.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3">No Surgery Required</h3>
            <p className="text-amber-50">
              All our treatments are non-invasive and use only natural herbal
              formulations
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3">No Recurring Symptoms</h3>
            <p className="text-amber-50">
              Once cured with our treatments, you experience permanent relief
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3">100% Safe</h3>
            <p className="text-amber-50">
              Completely safe for consumption with no known side effects
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3">Proven Results</h3>
            <p className="text-amber-50">
              11+ years of successful treatments with satisfied patients
              worldwide
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
