import React from "react";

const Service = () => {
  const service = [
    "Organic Farm-Fresh Meals",
    "Fireside Dining & Conversations",
    "Inspiring Walks & Hikes",
    "Natural Spring Drinking Water",
    "Modern Bath Facilities",
    "Hot Showers",
  ];
  return (
    <div className="serviceSection">
      <div className="__seviceCards ">
        {service.map((arg, index) => {
          return (
            <div className="__card ">
              <img src={`/assets/${index + 2}.jpg`} alt="" />
              <p>{arg}</p>
            </div>
          );
        })}

        <div className="__card2"></div>
        <div className="__card3"></div>
      </div>
    </div>
  );
};

export default Service;
