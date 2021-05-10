import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const TitleBody = () => {
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <Typography variant="h3">Mini Word Tool</Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Typography>An Experimental Word Replacement Tool By <a href="https://github.com/zromick">Zac Romick</a></Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Typography><a href="https://github.com/zromick/Mini-Word-Tool-2/tree/master">Source Code and Documentation</a></Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Typography>Suggestions? Please send me an email: <a href="mailto:zachary.romick@vanderbilt.edu">zachary.romick@vanderbilt.edu</a></Typography>
      </Grid>
    </Grid>
  );
}

export default TitleBody;