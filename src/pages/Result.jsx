import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Result() {
  const [p1Info, setP1Info] = useState({});
  const [p2Info, setP2Info] = useState({});
  const [result, setResult] = useState("");

  // get value form query params
  const [searchParameter, setSearchParameter] = useSearchParams();
  const palyer1 = searchParameter.get("p1");
  const palyer2 = searchParameter.get("p2");

  const fetchRepoInfo = (repoName, playerIdentifier) => {
    fetch(`https://api.github.com/users/${repoName}`)
      .then((res) => res.json())
      .then((result) => {
        if (playerIdentifier === "p1") {
          setP1Info(result);
        } else {
          setP2Info(result);
        }
      });
  };

  useEffect(() => {
    fetchRepoInfo(palyer1, "p1");
    fetchRepoInfo(palyer2, "p2");
  }, [palyer1, palyer2]);

  useEffect(() => {
    if (p1Info.id && p2Info.id) {
      const player1Total = p1Info.public_repos + p1Info.public_gists;
      const player2Total = p2Info.public_repos + p2Info.public_gists;

      if (player1Total > player2Total) {
        setResult("player 1 is winner");
      } else {
        setResult("player 2 is winner");
      }
    }
  }, [p1Info, p2Info]);

  // the perfomr result calucation
  // display result
  return (
    <>
      <div>Result</div>
      <h1>{result}</h1>
    </>
  );
}
