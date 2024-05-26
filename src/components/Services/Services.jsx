import React from "react";
import { FaLock } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { AiFillSafetyCertificate } from "react-icons/ai";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Vehicle Security Increase",
    icon: (
      <FaLock className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "By usinglocation, the user and his family members will be able to monitor vehicles as well.This will alow them to maintain the vehicles safety and also improve its comfort",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <FaUsers className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "By using this services, the medical supplies & assistance reach the needy people so rapidly whic lowers unintentional moratily ratio.",
    aosDelay: "500",
  },
  {
    name: "Customer Safety Increase",
    icon: (
      <AiFillSafetyCertificate className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "New software can boost customer safety! Imagine alarms warning of accidents or self-driving cars preventing crashes. By automating tasks and improving awareness, software safeguards consumers..",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
