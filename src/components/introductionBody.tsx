import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDownRounded';
import styles from '../styles.module.scss';

export interface introductionBodyProps {
  toggleHideSection: (id: string) => void,
}

const IntroductionBody = (props: introductionBodyProps) => {
  const { toggleHideSection } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5" onClick={() => toggleHideSection('introductionBody')}>
              Introduction
            </Typography>
            <ArrowDropDown onClick={() => toggleHideSection('introductionBody')} />
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
              This app attempts to solve the following problem: Is there an easier way to mask the identities of real people or places in a given text without laboriously using find and replace?
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
              - Word frequency visualization by showing context surrounding words.
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
      </Grid>
    </Grid>
  );
}

export default IntroductionBody;