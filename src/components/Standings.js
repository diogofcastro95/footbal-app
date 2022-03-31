import React, { useEffect } from "react";
import Position from "./Position";

export default function StandingsPage(props) {
  const [standings, setStandings] = React.useState([]);
  useEffect(() => {
    const getStandings = () => {
      fetch(
        `http://api.football-data.org/v2/competitions/${props.cmpId}/standings`,
        {
          method: "GET",
          headers: {
            "X-Auth-Token": "932fdd524d4a46069740c0ce44f77365",
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((responseData) => {
          setStandings(responseData);
          //console.log(responseData);
        })
        .catch((error) => console.log(error));
    };
    getStandings();
  }, [props.cmpId]);

  const standingsData = standings.standings?.[0].table?.map((position) => {
    return (
      <Position
        key={position.position}
        position={position.position}
        id={position.team.id}
        teamName={position.team.name}
        teamLogo={position.team.crestUrl}
        playedGames={position.playedGames}
        points={position.points}
        wins={position.won}
        draws={position.draw}
        losses={position.lost}
        goalsScored={position.goalsFor}
        goalsConceded={position.goalsAgainst}
        goalDifference={position.goalDifference}
      />
    );
  });

  return (
    <div>
      <div className="match--container">
        <div className="match--result--and--goalscorers">
          <div className="match--result--container">
            <h1 className="standings--header">Team</h1>
            <h1 className="match--team--stats">J</h1>
            <h1 className="match--team--stats">V</h1>
            <h1 className="match--team--stats">E</h1>
            <h1 className="match--team--stats">D</h1>
            <h1 className="match--team--stats">GM</h1>
            <h1 className="match--team--stats">GS</h1>
            <h1 className="match--team--stats">DG</h1>
            <h1 className="match--team--stats">P</h1>
          </div>
        </div>
      </div>
      <div className="matchweek--stats">{standingsData}</div>
    </div>
  );
}
