import React from "react";
import { Link } from "react-router-dom";
import classes from "./banner.module.css"; // Ensure the correct CSS path

function BannerCard({ data }) {
  if (!data) {
    console.error("BannerCard received undefined data!");
    return null; // Prevents crashing if data is missing
  }

  return (
    <div className={classes.banner}>
      <Link to={`/banner/${data.name}`}>
        <h2>{data?.title}</h2>
        <img src={data?.imgLink} alt={data?.title || "banner"} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default BannerCard; // ✅ Ensure this line is present
