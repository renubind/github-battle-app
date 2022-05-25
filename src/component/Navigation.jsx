import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkArr = ["/", "battle"];
  return (
    <>
      <div className="navigation-bar">
        {linkArr.map((item, index) => {
          return (
            <Link className="nav-item" key={index} to={item}>
              {item === "/" ? "popular" : item}
            </Link>
          );
        })}
      </div>
    </>
  );
}
