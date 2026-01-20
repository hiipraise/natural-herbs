// HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  Award,
  Users,
  ChevronRight,
  Star,
  CheckCircle,
  Youtube,
} from "lucide-react";
import img1 from "../assets/natural-herbs.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/images9.jpeg";
import img4 from "../assets/images0.jpeg";
import img5 from "../assets/img3.jpeg";
import img6 from "../assets/images3.jpg";
import img7 from "../assets/images7.jpg";
import img8 from "../assets/final.jpg";
import img9 from "../assets/images1.jpg";
import img10 from "../assets/images4.jpg";
import img11 from "../assets/images2.jpg";
import img12 from "../assets/img5.jpeg";
import img13 from "../assets/images5.jpg";
import img14 from "../assets/images6.jpg";

const HomePage = ({ setCurrentPage }) => {
  const features = [
    { icon: Leaf, title: "Natural Ingredients", text: "Pure herbs and roots" },
    { icon: Shield, title: "No Side Effects", text: "Safe and effective" },
    { icon: Award, title: "11+ Years Experience", text: "Proven results" },
    { icon: Users, title: "Global Patients", text: "Worldwide delivery" },
  ];

  const treatments = [
    {
      title: "Herpes Simplex Virus (HSV)",
      description:
        "Complete organic cure for both HSV-1 and HSV-2 using natural treatments with no side effects.",
    },
    {
      title: "PCOS Treatment",
      description:
        "Restore hormone balance and relieve symptoms like hair loss, irregular periods, and infertility naturally.",
    },
    {
      title: "Candidiasis",
      description:
        "7-day complete cure for oral and systemic candida without recurrence using powerful natural remedies.",
    },
    {
      title: "HIV/AIDS Treatment",
      description:
        "14-day herbal cure for HIV with no side effects. Permanent cure guaranteed with worldwide delivery.",
    },
    {
      title: "Cancer Treatment",
      description:
        "Natural herbal medicine for various types of cancer. Targeting tumor growth with powerful roots and herbs.",
    },
    {
      title: "Male Enhancement",
      description:
        "Natural penis enlargement up to 9 inches. Cure premature ejaculation, increase sperm count, and boost performance.",
    },
    {
      title: "Psoriasis",
      description:
        "Natural treatment for all types of psoriasis including plaque, inverse, and guttate psoriasis.",
      image: img9,
    },
    {
      title: "HPV Treatment",
      description:
        "100% natural herbal medicine for Human Papillomavirus with NAFDAC approval and no side effects.",
      image: img10,
    },
    {
      title: "ALS & Stroke",
      description:
        "Tested and approved herbal medicine for Amyotrophic Lateral Sclerosis with 14-day treatment protocol.",
      image: img11,
    },
  ];

  const treatmentStages = [
    {
      stage: "Stage 1: Initial Consultation",
      description:
        "Comprehensive health assessment and personalized treatment plan development.",
      image: img6,
      outcomes: [
        "Detailed health analysis",
        "Custom herbal formula",
        "Treatment timeline established",
      ],
    },
    {
      stage: "Stage 2: Active Treatment",
      description:
        "Daily natural remedies with continuous monitoring and support throughout your healing journey.",
      image: img7,
      outcomes: [
        "Symptom reduction begins",
        "Regular progress tracking",
        "24/7 support available",
      ],
    },
    {
      stage: "Stage 3: Full Recovery",
      description:
        "Complete healing achieved with long-term wellness maintenance and follow-up care.",
      image: img8,
      outcomes: [
        "Symptoms eliminated",
        "Full health restored",
        "No recurrence guaranteed",
      ],
    },
  ];

  const successStories = [
    {
      title: "PCOS Recovery",
      testimonial:
        "I've a patient who was deeply troubled with hormonal imbalance, after weeks of using my natural treatment she is restored; her hormones are balanced, and her symptoms are virtually gone. She is happy her whole life is back.",
    },
    {
      image: img13,
      title: "Herpes Cure",
      testimonial:
        "After years of suffering, I found Dr. Chalopa's natural treatment. Within weeks, my symptoms disappeared completely. No side effects, just pure healing.",
    },
    {
      image: img12,
      title: "Candida Recovery",
      testimonial:
        "The 7-day treatment worked wonders! My oral thrush is completely gone and hasn't returned. I'm amazed by the power of natural medicine.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white rounded-3xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Natural Healthcare Solutions
            </h1>
            <p className="text-xl text-amber-100">
              Unraveling cures for diseases through the powerful wonders of
              roots and herbs. Your health is your wealth.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("order")}
                className="bg-white text-amber-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                Place Order <ChevronRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage("contact")}
                className="border-2 border-white px-8 py-4 rounded-full font-semibold"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src={img1}
              alt="Natural Healthcare"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Over the years we struggled to completely get rid of Herpes simplex
            with much effort we are glad it was worth it. It is important to
            understand that there is nothing that can't be cured - every illness
            or disease has its solution. And we have unraveled the cure for
            Herpes and are proud to announce that it is available and has no
            side effects. Results speak for themselves. We are determined to
            unravel the cure for all diseases.
          </p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <feature.icon className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Herpes Simplex Detailed Section */}
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
                infected. Oral herpes involves the face or mouth. It may result
                in small blisters in groups often called cold sores or fever
                blisters or may just cause a sore throat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Genital herpes, often simply known as herpes, may have minimal
                symptoms or form blisters that break open and result in small
                ulcers. These typically heal over two to four weeks. Tingling or
                shooting pains may occur before the blisters appear.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Herpes cycles between periods of active disease followed by
                periods without symptoms. The first episode is often more severe
                and may be associated with fever, muscle pains, swollen lymph
                nodes and headaches. Over time, episodes of active disease
                decrease in frequency and severity.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src={img2}
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
              There are two types of herpes simplex virus, type 1 (HSV-1) and
              type 2 (HSV-2). HSV-1 more commonly causes oral infections while
              HSV-2 more commonly causes genital infections. They are
              transmitted by direct contact with body fluids or lesions of an
              infected individual. Transmission may still occur when symptoms
              are not present.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After infection, the viruses are transported along sensory nerves
              to the nerve cell bodies, where they reside lifelong.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-2xl text-amber-900 mb-4">
              Natural Organic Cure
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Herpes simplex 1 & 2 can be cured organically using the right
              natural treatment currently at Dr. Chalopa Natural HealthCare.
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
                <span className="text-gray-700">
                  No side effects or recurrence
                </span>
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

      {/* PCOS Treatment Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={img3}
              alt="PCOS Treatment"
              className="rounded-2xl shadow-xl w-full order-2 md:order-1"
            />
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Polycystic Ovarian Syndrome (PCOS)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Polycystic ovary syndrome (PCOS) is a health problem that
                affects 1 in 10 women of childbearing age. Women with PCOS have
                a hormonal imbalance and metabolism problems that may affect
                their overall health and appearance. PCOS is also a common and
                treatable cause of infertility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, there are natural treatments that can restore hormone
                balance and relieve symptoms like hair loss, unwanted hair
                growth, irregular periods, iron deficiency and more.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Does PCOS Cause Infertility?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              PCOS is one of the leading causes of ovulatory infertility—but
              that doesn't mean a PCOS diagnosis equals infertility. Many people
              with PCOS conceive naturally, especially if they have mild
              symptoms or manage the condition with lifestyle changes. In other
              cases, fertility treatment can significantly increase the chances
              of getting pregnant. The key takeaway: PCOS can make getting
              pregnant more challenging, but it doesn't make it impossible.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <p className="text-gray-700 italic leading-relaxed">
                "I've a patient who was deeply troubled with Hormonal imbalance,
                after weeks of using my natural treatment she is restored; her
                hormones are balanced, and her symptoms are virtually gone. She
                is happy her whole life is back."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              How PCOS Affects Ovulation and Fertility
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At the core of PCOS is a hormonal imbalance that disrupts normal
              ovulation. In a typical cycle, a mature egg is released from the
              ovary during ovulation, providing the opportunity for pregnancy.
              However, PCOS can interfere with this process in several ways:
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
                    menstrual cycles, which means they may ovulate less often or
                    not at all.
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
                    PCOS is associated with elevated levels of androgens
                    (sometimes called "male" hormones), which can prevent the
                    development and release of eggs.
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
                    Many patients with PCOS also have insulin resistance, which
                    can worsen hormonal imbalances and increase the risk of
                    diabetes.
                  </span>
                </div>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These disruptions make it harder to predict ovulation or time
              intercourse for conception, which is why many people with PCOS
              seek fertility support.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl">
            <h3 className="font-bold text-2xl text-amber-900 mb-4">
              Natural Remedy for PCOS
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Pure Natural root (Orange-Totsiyaa, Andrographis Paniculata,
              Ginseng root, Yarrow root), Alkaline Water and more. This exact
              treatment is uniquely made. Unlike another natural treatment it
              needs the touch of an expert.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Candidiasis Section */}
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
              <img
                src={img4}
                alt="Candidiasis Treatment"
                className="rounded-2xl shadow-xl w-full"
              />
              <img
                src={img5}
                alt="Oral Thrush"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Symptoms</h3>
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-green-900">
                Children and Adults
              </h4>
              <p className="text-gray-700">
                Symptoms of oral thrush may include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Creamy white patches or spots on your tongue, inner cheeks
                    and sometimes on the roof of your mouth, gums and tonsils
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Slightly raised patches that look like cottage cheese
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Redness, burning or soreness that may cause difficulty
                    eating or swallowing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Slight bleeding if the patches are rubbed or scraped
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cracking and redness at the corners of your mouth
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    A cottony feeling in your mouth and loss of taste
                  </span>
                </li>
              </ul>
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
                  "_blank",
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

      {/* Treatment Stages */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Treatment Journey: 3 Stages to Recovery
          </h2>
          <p className="text-xl text-gray-600">
            Our proven treatment protocol ensures complete healing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatmentStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={stage.image}
                alt={stage.stage}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-amber-900">
                  {stage.stage}
                </h3>
                <p className="text-gray-700">{stage.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Outcomes:</h4>
                  <ul className="space-y-1">
                    {stage.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ALS Treatment Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12"
      >
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Amyotrophic Lateral Sclerosis (ALS) Treatment
          </h2>

          <div className="bg-white rounded-2xl p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Amyotrophic lateral sclerosis (ALS) is a specific disorder that
              involves the death of neurons. In a number of countries, the term
              motor neurone disease (MND) is commonly used. ALS is characterized
              by stiff muscles, muscle twitching, and gradually worsening
              weakness due to muscles decreasing in size.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This results in difficulty speaking, swallowing, and eventually
              breathing. The disorder causes muscle weakness and atrophy
              throughout the body due to the degeneration of the upper and lower
              motor neurons. Individuals affected by the disorder may ultimately
              lose the ability to initiate and control all voluntary movement,
              although bladder and bowel function and the muscles responsible
              for eye movement are usually spared until the final stages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cognitive function is generally spared for most people, although
              some (about 5%) also develop frontotemporal dementia. A higher
              proportion of people (30–50%) also have more subtle cognitive
              changes which may go unnoticed. Sensory nerves and the autonomic
              nervous system are generally unaffected, meaning the majority of
              people with ALS maintain hearing, sight, touch, smell, and taste.
            </p>
          </div>

          <div className="bg-indigo-900 text-white rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold">Natural Herbal Cure for ALS</h3>
            <p className="text-indigo-100 leading-relaxed">
              My herbal medicine CURES ALS. It's Tested and Approved. After
              purchasing the medicine, it will be delivered to you on your
              doorstep. Once the herb is sent, a tracking number will be given
              to you which you will use to track the parcel, and you will
              receive the herb after 3-4 working days.
            </p>
            <p className="text-indigo-100 leading-relaxed">
              You are advised to take the Herbal Remedy for 14 days, 3 times
              daily. It has no negative influence (SIDE EFFECTS). After taking
              the Herbal remedy for 14 days you will be cured. Remember, once
              you are cured, you are cured forever—the condition will not come
              back again.
            </p>
          </div>
        </div>
      </motion.section>

      {/* What Does a Herbalist Do Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Does a Herbalist Do?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            A Medical Herbalist takes down a full case history, listening to all
            the physical, mental and emotional symptoms the patient relates in
            order to evaluate the overall picture and understand the root cause
            of the patient's disease.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            Practitioners of Herbal Medicine are not only trained in the same
            non-invasive diagnostic skills as ordinary doctors; but also use the
            benefits of a holistic viewpoint, traditional knowledge and
            additional forms of diagnosis such as Tongue, Pulse or Iris
            diagnosis to elicit the root of the health problems.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl">
            <p className="text-lg text-gray-800 font-semibold">
              Our approach is aimed at restoring true health—not at suppressing
              the symptoms.
            </p>
          </div>
        </div>
      </motion.section>

      {/* All Treatments Grid */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Our Complete Treatment Range
          </h2>
          <p className="text-xl text-gray-600">
            Natural solutions for various conditions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {treatment.image && (
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">
                  {treatment.title}
                </h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
          <p className="text-xl text-gray-600">
            Real results from real patients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {story.image && (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {story.title}
                </h3>
                <p className="text-gray-600 italic">"{story.testimonial}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Testimonial */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-16"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={img14}
            alt="Success Stories"
            className="rounded-2xl shadow-xl w-full"
          />
          <div className="space-y-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-amber-500 text-amber-500"
                />
              ))}
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              Real Results, Real People
            </h3>
            <p className="text-gray-600 text-lg italic">
              "I've a patient who was deeply troubled with Hormonal imbalance,
              after weeks of using my natural treatment she is restored; her
              hormones are balanced, and her symptoms are virtually gone. She is
              happy her whole life is back."
            </p>
            <p className="font-semibold text-amber-900">— Dr. Chalopa</p>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-amber-900 text-white rounded-3xl p-8 md:p-16 text-center space-y-6"
      >
        <h2 className="text-4xl font-bold">
          Ready to Start Your Healing Journey?
        </h2>
        <p className="text-xl text-amber-100">
          Orders processed within 24 hours with worldwide delivery in 3-4
          working days
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage("order")}
          className="bg-white text-amber-900 px-12 py-4 rounded-full font-bold text-lg"
        >
          Place Your Order Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default HomePage;
