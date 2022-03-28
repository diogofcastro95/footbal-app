import React, { useEffect } from "react";
import Match from "./Match";
export default function FixturesPage(props) {
  const [matches, setMatches] = React.useState([]);
  const [matchweek, setMatchweek] = React.useState("1");
  useEffect(() => {
    const getMatches = () => {
      fetch(
        `http://api.football-data.org/v2/competitions/${props.cmpId}/matches?matchday=${matchweek}`,
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
          setMatches(responseData);
          //console.log(responseData);
        })
        .catch((error) => console.log(error));
    };
    getMatches();
  }, [props.cmpId, matchweek]);

  const matchweekArray = Array.from(
    { length: matches.matches?.length * 4 - 2 },
    (_, index) => index + 1
  );
  const matchWeekSelector = (
    <div className="matchweek">
      <label>Match Week </label>
      <select
        name="matchweek"
        id="matchweek"
        onChange={(event) => setMatchweek(event.target.value)}
      >
        {matchweekArray.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );

  const matchData = matches.matches?.map((match) => {
    return (
      <Match
        key={match.id}
        id={match.id}
        homeTeam={match.homeTeam.name}
        awayTeam={match.awayTeam.name}
        //Result:
        result={
          match.score.winner
            ? `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`
            : match.utcDate.replace("T", " ").substring(0, 16)
        }
      />
    );
  });

  return (
    <div>
      <div className="matchweek--stats">
        {matchWeekSelector}
        {matchData}
      </div>
    </div>
  );
}
