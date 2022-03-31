export default function TeamPage() {
  /*const [team, setTeam] = React.useState([]);
  useEffect(() => {
    const getStandings = () => {
      fetch(
        //`http://api.football-data.org/v2/competitions/${props.cmpId}/teams`,
        `http://api.football-data.org/v2/teams/${props.teamId}`,
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
          setTeam(responseData);
          console.log(responseData);
        })
        .catch((error) => console.log(error));
    };
    getStandings();
  }, [props.teamId]);

  /*const teamData = standings.standings?.[0].table?.map((position) => {
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
  });*/
  return <div>ola</div>;
}
