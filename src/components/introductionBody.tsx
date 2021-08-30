import React from 'react';
import {
  Grid,
  Typography,
  // Button,
} from '@material-ui/core';
import styles from '../styles.module.scss';

const IntroductionBody = () => {
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Introduction
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid item container justify="center" xs={6} id='introductionBody'>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              Hi! Welcome to a passion project of mine. This app is coded using TypeScript, React, and Material-UI.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              This app attempts to solve the following problem:
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" style={{ fontWeight: 600 }}>
              Is there an easier way to mask the identities of real people or places in a given text without laboriously using find and replace?
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              This app provides useful features, such as:
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              - Global, one-time replacement of words in a given text.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              - Statistics on word count.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              - Word frequency visualization by showing context around other words.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              - Identification of redundant vocabulary.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              - Comparison with the Official Scrabble Players Dictionary.*
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              *The OSPD is useful because it isolates most proper nouns and spelling errors. If you choose to ignore words in the OSPD, most common words will be placed under the "Ignoring" section in Step 2, which can be minimized for your convenience. Common names, such as Alexander or James, are included in the OSPD and need to be manually moved to the "Replacing" section.
            </Typography>
          </div>
        </Grid>
        {/* <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              Try replacing names in the following samples:
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              (1) Excerpt from "We Didn't Start the Fire" by Billy Joel
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              (2) Excerpt from "We Didn't Start the Fire" by Billy Joel
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.introSpacing}>
            <Typography variant="body1" >
              (3) Excerpt from "We Didn't Start the Fire" by Billy Joel
            </Typography>
          </div>
        </Grid>
        <Grid item justify="space-between" xs={12}>
          <div className={styles.introSpacing}>
            <Grid container justify="space-between" xs={12}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => null}
              >
                Sample 1
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => null}
              >
                Sample 2
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => null}
              >
                Sample 3
              </Button>
            </Grid>
          </div>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default IntroductionBody;