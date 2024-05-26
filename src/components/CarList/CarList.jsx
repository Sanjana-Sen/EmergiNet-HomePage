import React from "react";
import hospital from "../../assets/hospital.webp";
import police from "../../assets/police.jpg";
import fam from "../../assets/fam.jpg"

const carList = [
  {
    name: "Hospital",
    
    image: hospital,
    aosDelay: "0",
  },
  {
    name: "Police station",
    
    image:police,
    aosDelay: "500",
  },
  {
    name: "Family Members",
  
    image:fam,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
   <div className="pb-24">
     <div className="container">
       {/* Heading */}
       <h1
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
     >
      Our device will connect to
    </h1>
   <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
   Looking for a reliable car GPS tracker to enhance your driving experience? At LocoNav, we offer advanced GPS tracking and car navigation systems that provide complete vehicle visibility and improved security. Our state-of-the-art technology makes navigating roads effortless and offers detailed diagnostic data for optimal performance. Trust LocoNav to provide you with the best GPS tracker and car navigation system on the market.?
   </p>
     {/* Car listing */}
     <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data) => (
             <div
                 data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                 className="space-y-3 border-2 border-gray-300 hover:border-primary p-4 rounded-xl relative group"
            >
               <div className="w-full h-[120px]">
                 <img
                    src={data.image}
                    alt=""
                className="w-600 h-[140px]  sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                 />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                   {/* <p>${data.price}/Day</p> */}
                   <a href="#">Details</a>
                  </div>
                 </div>
                {/* <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
             </p> */}
          </div>
   ))}
     </div>
   </div>
       {/* End of car listing */}
      <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
           Get Started
         </button>
        </div>
      </div>
     </div>
  );
};

export default CarList;
