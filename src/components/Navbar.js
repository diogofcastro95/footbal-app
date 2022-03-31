import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <a href="/">
          <Typography variant="h4">Football App</Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
