import React from "react";
import ReviewSection from "./ReviewSection.jsx";
import Service from "./Service.jsx";

const Section = () => {
  return (
    <>
      <div className="__DashBoard">
        <div className="__DashBoardContent">
          <p>DuniGiri Retreat</p>
          <p>
            Dunagiri Retreat offers a "rustic-deluxe" experience—modern
            facilities within very remote and rural surroundings in the
            Himalayan wilderness. While maintaining a close relationship with
            nature, your comfort is our utmost concern. Our hospitality is
            genuine and refined—yet down to earth. Pure deshi. Right down to the
            fresh cow’s milk, naturally sweet from its diet of mountain herbs.{" "}
          </p>

          <div className="text-center">
            <button>Get Started</button>
          </div>
        </div>

        <div className="__imageContainer">
          <img src="/assets/1.jpg" alt="image.jpg" />
        </div>
      </div>
      <Service />
    </>
  );
};

export default Section;
