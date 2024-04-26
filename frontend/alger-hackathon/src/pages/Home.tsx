// import React from "react";
import  HeroSection  from "../myComponents/HeroSection.tsx";
import NewHeroSection from '../myComponents/NewHeroSection.tsx'
// import { Button } from "@/components/ui/button.tsx";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewHeroSection></NewHeroSection>
    </div>
  );
}
