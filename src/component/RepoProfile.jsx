import React from "react";
import { Link } from "react-router-dom";

export default function RepoProfile({ headerValue, imgUrl, repoUrl, homepage, star, fork, issue }) {
  return (
    <>
      <div className="repo-card">
        <h1>#{headerValue}</h1>
        <img src={imgUrl} alt="repo" />

        <Link to={{ pathname: repoUrl }} target="_blank">
          github page
        </Link>

        <Link to={{ pathname: homepage }} target="_blank">
          Home Page
        </Link>
        <h3>{star}</h3>
        <h3>{fork}</h3>
        <h3>{issue}</h3>
      </div>
    </>
  );
}
