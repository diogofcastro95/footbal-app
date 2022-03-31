export default function Position(props) {
  return (
    <div className="match--container">
      <div className="match--result--and--goalscorers">
        <div className="match--result--container">
          <h1 className="match--team--stats">{props.position}º</h1>
          <img className="team--logo" src={props.teamLogo} alt="logo"></img>
          <h1 className="match--team--namea">{props.teamName}</h1>
          <h1 className="match--team--stats">{props.playedGames}</h1>
          <h1 className="match--team--stats">{props.wins}</h1>
          <h1 className="match--team--stats">{props.draws}</h1>
          <h1 className="match--team--stats">{props.losses}</h1>
          <h1 className="match--team--stats">{props.goalsScored}</h1>
          <h1 className="match--team--stats">{props.goalsConceded}</h1>
          <h1 className="match--team--stats">{props.goalDifference}</h1>
          <h1 className="match--team--stats">{props.points}</h1>
        </div>
      </div>
    </div>
  );
}
