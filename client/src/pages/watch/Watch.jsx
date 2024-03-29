import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(location)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie?.video} />
    </div>
  );
}
