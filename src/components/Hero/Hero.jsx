import React, { useEffect, useState } from "react";
import carbg from "../../assets/car-gps-tracker-hero.webp";
  import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carbg : yellowCar}
              alt=""
              className="w-34 h-30"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-5xl font-serif">
              A technology that help in your emergency
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-2xl lg:text-7xl font-semibold font-serif"
            >
       Navigation Based system
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
             We are here to save your life{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
