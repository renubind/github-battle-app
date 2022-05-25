import React, { useEffect, useState } from "react";
import RepoProfile from "../component/RepoProfile";

export default function Popular() {
  const [repos, setRepos] = useState([]);

  const fetchRepos = () => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((jsonData) => setRepos(jsonData.items));
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const repoList = repos.map((repo, index) => {
    //   deconstruct
    const {
      svn_url: repoUrl,
      homepage,
      stargazers_count: star,
      forks_count: fork,
      open_issues: issue,
      owner: { avatar_url: imgUrl },
    } = repo;

    return (
      // passing props to components
      <RepoProfile
        headerValue={index + 1}
        imgUrl={imgUrl}
        repoUrl={repoUrl}
        homepage={homepage}
        star={star}
        fork={fork}
        issue={issue}
      />
    );
  });

  return (
    <>
      {/* <h1>Popular</h1>
       <div className="btn-style"> 
      <button>All</button>
        <button>Javascript</button>
        <button>Ruby</button>
        <button>Java</button>
        <button>Python</button>
         </div> 
      <div */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {repoList.length > 0 ? repoList : "Loading...."}

        
        
      </div>
    </>
  );
}
