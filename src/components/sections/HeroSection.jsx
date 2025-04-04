import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate("/journey");
  };

  return (
    <section className="flex justify-center items-center bg-[#004A57] px-2 max-md:flex-col">
      <div className="flex flex-col items-center gap-10 max-w-[720px] text-center">
        <h1 className="text-[#EEE] text-7xl leading-[77.76px] tracking-[-0.72px] max-md:text-5xl max-sm:text-4xl">
          Empowering Builders Everywhere
        </h1>
        <p className="text-white text-[22px] leading-[30.8px] max-sm:text-lg">
          Join a community of skilled professionals and contractors.
        </p>
        <Button 
          variant="default" 
          size="default"
          onClick={handleStartJourney}
        >
          Start Your Journey
        </Button>
      </div>
      <div
        className="w-[1500px] h-[872px] flex items-center justify-center bg-[#EDEEF1] rounded-[200px_0_0_100px] max-md:w-full max-md:rounded-[100px_0_0_100px]"
        aria-hidden="true"
      >
        <img
          src="/heroimg1.jpeg"
          alt="Hero Section"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
