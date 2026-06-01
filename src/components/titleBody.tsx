import React from 'react';
import { Grid, Typography, Input } from '@material-ui/core';

const TitleBody = () => {
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <Typography variant="h3">
          <Input
            color="primary"
            autoFocus
            defaultValue="Replace"
            inputProps={{ style: { fontSize: 45, width: 160 } }}
          />
          {` Word Tool`}
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Typography>An Experimental Word Replacement Tool</Typography>
      </Grid>
    </Grid>
  );
}

export default TitleBody;