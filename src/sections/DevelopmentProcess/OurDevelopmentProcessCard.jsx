import React from "react";

function OurDevelopementProcessCard({ title, description, img, isEven }) {
  return (
    <>
      <div
        className={`lg:w-180 md:w-120 sm:w-30 bg-[linear-gradient(93.98deg,_rgb(38,66,107)_3.93%,_rgba(0,23,56,0.42)_97.99%)] shadow-[0_8px_10px_rgba(0,0,0,0.25)] rounded-xl p-4 our-developement-process-card clip-path-[polygon(0px_0px,_0px_100%,_100%_100%,_100%_50%,_0%_-1%)] ${
          isEven ? "flex-row-reverse text-right -scale-x-100 self-end" : ""
        }`}
      >
        <div className="pl-8 pt-8 flex items-center">
          <div
            className={` rounded-full mx-5 bg-[#112542] flex justify-center items-center our-developement-process-card-round-img ${
              isEven ? "-scale-x-100" : ""
            }`}
          >
            <img src={img} className="md:h-25 md:w-25" />
          </div>
          <div className={`w-100 mt-10 ${isEven ? "-scale-x-100" : ""}`}>
            <h3 className="pb-4 mb-2 text-2xl">{title}</h3>
            <p className="mb-4">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurDevelopementProcessCard;
