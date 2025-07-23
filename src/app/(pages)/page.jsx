import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import HeroSection from "@components/sections/Hero"
import AboutSection from "@components/sections/About";
import CategoriesSection from "@components/sections/Categories";
import TeamSection from "@components/sections/Team";
import CallToActionSection from "@components/sections/CallToAction";
import PopularDishesSection from "@components/sections/PopularDishes";
import MissionSection from "@components/sections/Mission";
import VisionSection from "@components/sections/Vision";
import HistorySection from "@components/sections/History";

const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );

export const metadata = {
  title: {
		default: "Home",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {
  return (
    <>
      <HeroSection type={1} />
      <AboutSection />
      <CategoriesSection />
      <PopularDishesSection />
      <MissionSection />
      <VisionSection />
      <HistorySection />
      {/* <ProductsSlider items={Products.collection['popular']} slidesPerView={4} /> */}
      {/* <TeamSection /> */}
      {/* <CallToActionSection /> */}
    </>
  );
};
export default Home1;