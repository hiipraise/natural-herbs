// HomePage.jsx
import React, { useMemo, useEffect, useRef } from "react";
import HeroSection from "../components/home/HeroSection";
import MissionStatement from "../components/home/MissionStatement";
import FeaturesGrid from "../components/home/FeaturesGrid";
import HerpesSection from "../components/home/HerpesSection";
import PCOSSection from "../components/home/PCOSSection";
import Type2DiabetesSection from "../components/home/Type2DiabetesSection";
import ArthritisSection from "../components/home/ArthritisSection";
import PsoriasisSection from "../components/home/PsoriasisSection";
import CandidiasisSection from "../components/home/CandidiasisSection";
import TreatmentStages from "../components/home/TreatmentStages";
import ALSSection from "../components/home/ALSSection";
import HerbalistSection from "../components/home/HerbalistSection";
import TreatmentsGrid from "../components/home/TreatmentsGrid";
import SuccessStories from "../components/home/SuccessStories";
import TreatmentDeliveredSection from "../components/home/TreatmentDeliveredSection";
import MainTestimonial from "../components/home/MainTestimonial";
import ImageGallery from "../components/home/ImageGallery";
import FinalCTA from "../components/home/FinalCTA";

import {
  features,
  treatments,
  treatmentStages,
  successStories,
} from "../data/caredata";

import img1 from "../assets/natural-herbs.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/images9.jpeg";
import img4 from "../assets/images0.jpeg";
import img5 from "../assets/img3.jpeg";
import img14 from "../assets/images6.jpg";
import img16 from "../assets/before.jpeg";
import img17 from "../assets/process.jpeg";
import img18 from "../assets/after.jpeg";
import img19 from "../assets/arthritis.jpeg";
import img20 from "../assets/arthritis2.jpeg";

import thumbnail1 from "../assets/video/image3.png";
import thumbnail2 from "../assets/video/image2.png";
import thumbnail3 from "../assets/video/image1.png";
import thumbnail4 from "../assets/video/image.png";

import galimg from "../assets/imgs/galleryimg.jpeg";
import galimg2 from "../assets/imgs/galleryimg2.jpeg";
import galimg3 from "../assets/imgs/galleryimg3.jpeg";
import galimg5 from "../assets/imgs/galleryimg4.jpeg";
import galimg6 from "../assets/imgs/galleryimg5.jpeg";
import galimg12 from "../assets/imgs/galleryimg6.jpeg";
import galimg7 from "../assets/imgs/galleryimg7.jpeg";
import galimg8 from "../assets/imgs/galleryimg8.jpeg";
import galimg9 from "../assets/imgs/galleryimg9.jpeg";
import galimg10 from "../assets/imgs/galleryimg10.jpeg";
import galimg11 from "../assets/imgs/galleryimg11.jpeg";
import galimg4 from "../assets/imgs/galleryimg12.jpeg";
import galimg13 from "../assets/imgs/galleryimg13.jpeg";
import galimg14 from "../assets/imgs/galleryimg14.jpeg";
import galimg15 from "../assets/imgs/galleryimg15.jpeg";
import galimg17 from "../assets/imgs/galleryimg16.jpeg";
import galimg16 from "../assets/imgs/galleryimg17.jpeg";
import galimg18 from "../assets/imgs/galleryimg18.jpeg";
import galimg19 from "../assets/imgs/galleryimg19.jpeg";
import galimg20 from "../assets/imgs/galleryimg20.jpeg";
import galimg22 from "../assets/imgs/galleryimg21.jpeg";
import galimg21 from "../assets/imgs/galleryimg22.jpeg";
import galimg23 from "../assets/imgs/galleryimg23.jpeg";
import galimg24 from "../assets/imgs/galleryimg24.jpeg";

import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
import video4 from "../assets/video/video4.mp4";

const HomePage = ({ setCurrentPage, searchQuery }) => {
  const sectionRefs = useRef({});

  // Static data - defined once, doesn't change
  const psoriasisImages = useMemo(() => [img16, img17, img18], []);
  const arthritisImages = useMemo(() => [img19, img20], []);
  const candidiasisImages = useMemo(() => [img4, img5], []);

  const galleryImages = useMemo(
    () => [
      galimg,
      galimg2,
      galimg3,
      galimg4,
      galimg5,
      galimg6,
      galimg7,
      galimg8,
      galimg9,
      galimg10,
      galimg11,
      galimg12,
      galimg13,
      galimg14,
      galimg15,
      galimg16,
      galimg17,
      galimg18,
      galimg19,
      galimg20,
      galimg21,
      galimg22,
      galimg23,
      galimg24,
    ],
    [],
  );

  const galleryVideos = useMemo(
    () => [{ src: video1, thumbnail: thumbnail1 }],
    [],
  );
  const deliveryVideos = useMemo(
    () => [
      { src: video2, thumbnail: thumbnail2 },
      { src: video3, thumbnail: thumbnail3 },
      { src: video4, thumbnail: thumbnail4 },
    ],
    [],
  );

  // Define all sections with their search keywords
  const sections = useMemo(
    () => [
      {
        id: "hero",
        component: (
          <HeroSection setCurrentPage={setCurrentPage} heroImage={img1} />
        ),
        keywords: [
          "natural",
          "healthcare",
          "herbal",
          "cure",
          "treatment",
          "roots",
          "herbs",
        ],
        priority: true,
      },
      {
        id: "mission",
        component: <MissionStatement />,
        keywords: ["mission", "herpes", "cure", "safe", "natural"],
        priority: true,
      },
      {
        id: "features",
        component: <FeaturesGrid features={features} />,
        keywords: ["features", "natural", "safe", "effective", "proven"],
        priority: true,
      },
      {
        id: "herpes",
        component: (
          <HerpesSection setCurrentPage={setCurrentPage} herpesImage={img2} />
        ),
        keywords: [
          "herpes",
          "hsv",
          "hsv-1",
          "hsv-2",
          "cold sores",
          "fever blisters",
          "genital",
          "oral",
          "simplex",
          "viral",
        ],
        priority: false,
      },
      {
        id: "pcos",
        component: (
          <PCOSSection setCurrentPage={setCurrentPage} pcosImage={img3} />
        ),
        keywords: [
          "pcos",
          "polycystic",
          "ovarian",
          "syndrome",
          "hormonal",
          "hormone",
          "infertility",
          "fertility",
          "periods",
          "irregular",
        ],
        priority: false,
      },
      {
        id: "diabetes",
        component: <Type2DiabetesSection setCurrentPage={setCurrentPage} />,
        keywords: [
          "diabetes",
          "type 2",
          "t2d",
          "blood sugar",
          "insulin",
          "glucose",
          "pancreas",
        ],
        priority: false,
      },
      {
        id: "arthritis",
        component: (
          <ArthritisSection
            setCurrentPage={setCurrentPage}
            arthritisImages={arthritisImages}
          />
        ),
        keywords: [
          "arthritis",
          "reactive",
          "psoriatic",
          "rheumatoid",
          "joint",
          "pain",
          "inflammation",
          "verolantis",
        ],
        priority: false,
      },
      {
        id: "psoriasis",
        component: (
          <PsoriasisSection
            setCurrentPage={setCurrentPage}
            psoriasisImages={psoriasisImages}
          />
        ),
        keywords: [
          "psoriasis",
          "plaque",
          "skin",
          "autoimmune",
          "itchy",
          "scaly",
          "rash",
        ],
        priority: false,
      },
      {
        id: "candidiasis",
        component: <CandidiasisSection candidiasisImages={candidiasisImages} />,
        keywords: [
          "candidiasis",
          "thrush",
          "oral",
          "yeast",
          "fungal",
          "candida",
          "kuzzima",
        ],
        priority: false,
      },
      {
        id: "delivery",
        component: <TreatmentDeliveredSection videos={deliveryVideos} />,
        keywords: [
          "delivery",
          "delivered",
          "shipped",
          "shipping",
          "package",
          "tracking",
          "worldwide",
        ],
        priority: false,
      },
      {
        id: "stages",
        component: <TreatmentStages treatmentStages={treatmentStages} />,
        keywords: [
          "treatment",
          "stages",
          "process",
          "journey",
          "recovery",
          "healing",
        ],
        priority: false,
      },
      {
        id: "als",
        component: <ALSSection setCurrentPage={setCurrentPage} />,
        keywords: [
          "als",
          "amyotrophic",
          "lateral",
          "sclerosis",
          "motor",
          "neurone",
          "muscle",
        ],
        priority: false,
      },
      {
        id: "herbalist",
        component: <HerbalistSection />,
        keywords: ["herbalist", "natural", "holistic", "diagnosis", "medical"],
        priority: false,
      },
      {
        id: "treatments-grid",
        component: <TreatmentsGrid treatments={treatments} />,
        keywords: ["treatments", "conditions", "diseases", "solutions"],
        priority: false,
      },
      {
        id: "gallery",
        component: (
          <ImageGallery images={galleryImages} videos={galleryVideos} />
        ),
        keywords: [
          "results",
          "gallery",
          "before",
          "after",
          "photos",
          "testimonials",
        ],
        priority: false,
      },
      {
        id: "success",
        component: <SuccessStories successStories={successStories} />,
        keywords: ["success", "stories", "testimonials", "reviews", "patients"],
        priority: false,
      },
      {
        id: "testimonial",
        component: <MainTestimonial testimonialImage={img14} />,
        keywords: ["testimonial", "review", "patient", "hormonal", "balance"],
        priority: false,
      },
      {
        id: "cta",
        component: <FinalCTA setCurrentPage={setCurrentPage} />,
        keywords: ["order", "place order", "buy", "purchase", "delivery"],
        priority: true,
      },
    ],
    [
      setCurrentPage,
      psoriasisImages,
      arthritisImages,
      candidiasisImages,
      galleryImages,
      galleryVideos,
      deliveryVideos,
    ],
  );

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === "") {
      return sections;
    }

    const query = searchQuery.toLowerCase().trim();

    const matches = sections.filter((section) => {
      return section.keywords.some(
        (keyword) =>
          keyword.toLowerCase().includes(query) ||
          query.includes(keyword.toLowerCase()),
      );
    });

    const prioritySections = sections.filter((s) => s.priority);

    const combined = [
      ...prioritySections,
      ...matches.filter((m) => !prioritySections.find((p) => p.id === m.id)),
    ];

    return combined.length > 0 ? combined : prioritySections;
  }, [searchQuery, sections]);

  // Auto-scroll to first non-priority match when search query changes
  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === "") return;

    const firstMatch = filteredSections.find((s) => !s.priority);

    if (firstMatch && sectionRefs.current[firstMatch.id]) {
      setTimeout(() => {
        const element = sectionRefs.current[firstMatch.id];
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [searchQuery, filteredSections]);

  const showSearchMessage = searchQuery && searchQuery.trim() !== "";

  return (
    <div className="space-y-16">
      {showSearchMessage && (
        <div className="bg-amber-50 border-l-4 border-amber-700 p-4 rounded-lg">
          <p className="text-gray-800">
            <span className="font-semibold">
              {filteredSections.length === sections.length
                ? `Showing all treatments`
                : `Found ${filteredSections.filter((s) => !s.priority).length} result(s) for "${searchQuery}"`}
            </span>
            {filteredSections.length < sections.length && (
              <span className="text-gray-600 ml-2">
                (plus essential sections)
              </span>
            )}
          </p>
        </div>
      )}

      {filteredSections.map((section) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[section.id] = el)}
        >
          {section.component}
        </div>
      ))}

      {filteredSections.filter((s) => !s.priority).length === 0 &&
        showSearchMessage && (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg text-center">
            <p className="text-lg text-gray-800 mb-2">
              No treatments found for "
              <span className="font-semibold">{searchQuery}</span>"
            </p>
            <p className="text-gray-600 mb-4">
              Try searching for: Herpes, PCOS, Diabetes, Arthritis, Psoriasis,
              Candidiasis, or ALS
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-amber-700 hover:text-amber-900 font-semibold"
            >
              View all treatments
            </button>
          </div>
        )}
    </div>
  );
};

export default HomePage;
