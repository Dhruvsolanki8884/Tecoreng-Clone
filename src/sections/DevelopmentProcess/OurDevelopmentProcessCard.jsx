import React from "react";

function OurDevelopementProcessCard({ title, description, img, isEven }) {
  return (
    <>
      <div
        className={`lg:w-180 md:w-120 sm:w-30  bg-linear-94 from-4% from-[#26426b] to-98% to-[#0017386b] our-developement-process-card rounded-l-3xl ${
          isEven ? "flex-row-reverse text-right -scale-x-100 self-end" : ""
        }`}
      >
        <div className="pl-8 pt-8 flex items-center">
          <div
            className={` rounded-full mx-6 bg-[#112542] flex justify-center   items-center our-developement-process-card-round-img ${
              isEven ? "-scale-x-100" : ""
            }`}
          >
            <img src={img} className="md:h-12 md:w-12" />
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
