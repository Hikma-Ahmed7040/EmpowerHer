import React from "react";
import { bannerData } from "./bannerData"; // Ensure the file name matches
import classes from "./banner.module.css";
import BannerCard from "./bannerCard"; // Import with proper capitalization

function Banner() { // Rename function to start with uppercase
  return (
    <div className={classes.categoryContainer}>
      {bannerData.map((info) => (
        <BannerCard key={info.name} data={info} />
      ))}
    </div>
  );
}

export default Banner;
