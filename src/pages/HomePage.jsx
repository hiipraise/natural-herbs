// ============================================
// FILE: HomePage.jsx (COMPLETE MAIN FILE)
// ============================================
import React from "react";
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
import MainTestimonial from "../components/home/MainTestimonial";
import ImageGallery from "../components/home/ImageGallery";
import FinalCTA from "../components/home/FinalCTA";

import {
  features,
  treatments,
  treatmentStages,
  successStories,
} from "../data/caredata";

// Import all images
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

const HomePage = ({ setCurrentPage }) => {
  const psoriasisImages = [img16, img17, img18];
  const arthritisImages = [img19, img20];
  const candidiasisImages = [img4, img5];

  // Add 15 images for the gallery
  const galleryImages = [
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
  ];

  // Add videos with thumbnails
  const galleryVideos = [
    {
      src: video1, // Replace with your video path
      thumbnail: thumbnail1, // Use an image as video thumbnail
    },
    {
      src: video2,
      thumbnail: thumbnail2,
    },
    {
      src: video3,
      thumbnail: thumbnail3,
    },
    {
      src: video4,
      thumbnail: thumbnail4,
    },
  ];

  return (
    <div className="space-y-16">
      <HeroSection setCurrentPage={setCurrentPage} heroImage={img1} />

      <MissionStatement />

      <FeaturesGrid features={features} />

      <HerpesSection setCurrentPage={setCurrentPage} herpesImage={img2} />

      <PCOSSection setCurrentPage={setCurrentPage} pcosImage={img3} />

      <Type2DiabetesSection setCurrentPage={setCurrentPage} />

      <ArthritisSection
        setCurrentPage={setCurrentPage}
        arthritisImages={arthritisImages}
      />

      <PsoriasisSection
        setCurrentPage={setCurrentPage}
        psoriasisImages={psoriasisImages}
      />

      <CandidiasisSection
        setCurrentPage={setCurrentPage}
        candidiasisImages={candidiasisImages}
      />

      <TreatmentStages treatmentStages={treatmentStages} />

      <ALSSection setCurrentPage={setCurrentPage} />

      <HerbalistSection />

      <TreatmentsGrid treatments={treatments} />

      <ImageGallery images={galleryImages} videos={galleryVideos} />

      <SuccessStories successStories={successStories} />

      <MainTestimonial testimonialImage={img14} />

      <FinalCTA setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default HomePage;
