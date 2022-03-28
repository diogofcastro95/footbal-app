import React from "react";

export default function Match(props) {
  return (
    <div className="match--container">
      <div className="match--result--and--goalscorers">
        <div className="match--result--container">
          <h1 className="match--team--name">{props.homeTeam} </h1>
          <h1 className="match--result">{props.result} </h1>
          <h1 className="match--team--name">{props.awayTeam}</h1>
        </div>
      </div>
    </div>
  );
}
