import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import FixturesPage from "./components/Fixtures";
import { Route, Routes } from "react-router-dom";
import StandingsPage from "./components/Standings";
import MainNavigation from "./components/layout/MainNavigation";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function App() {
  const [competitionId, setCompetitionId] = React.useState();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getCompetition = () => {
      fetch(`http://api.football-data.org/v2/competitions/${competitionId}`, {
        method: "GET",
        headers: {
          "X-Auth-Token": "932fdd524d4a46069740c0ce44f77365",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    };
    getCompetition();
  }, [competitionId]);
  return (
    <div className="App">
      <Navbar cmpId={competitionId} />
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={competitionId > 0 && value}
          onChange={handleChange}
          centered
        >
          <Tab label="Bundesliga" onClick={() => setCompetitionId("2002")} />
          <Tab label="Eredivise" onClick={() => setCompetitionId("2003")} />
          <Tab label="La Liga" onClick={() => setCompetitionId("2014")} />
          <Tab label="Ligue 1" onClick={() => setCompetitionId("2015")} />
          <Tab label="Liga Nos" onClick={() => setCompetitionId("2017")} />
          <Tab label="Serie A" onClick={() => setCompetitionId("2019")} />
          <Tab
            label="Premier League"
            onClick={() => setCompetitionId("2021")}
          />
        </Tabs>
      </Box>
      {competitionId > 0 && <MainNavigation />}
      <Routes>
        <Route
          path="/fixtures"
          element={<FixturesPage cmpId={competitionId} />}
        />
        <Route
          path="/standings/*"
          element={<StandingsPage cmpId={competitionId} />}
        />
      </Routes>
    </div>
  );
}

export default App;
