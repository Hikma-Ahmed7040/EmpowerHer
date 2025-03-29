import React from "react";
import { Link } from "react-router-dom";
import classes from "./banners.module.css";

function bannerCard({ data }) {
  console.log(data);
  return (
    <div className={classes.banner}>
      <Link to={`/banner/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={data?.title || "banner"} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default bannerCard;
