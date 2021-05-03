import React from 'react';
import { Grid, TextareaAutosize, Typography } from '@material-ui/core';
import styles from '../styles.module.scss';

export interface PasteTextBodyProps {
  toggleHideSection: (id: string) => void;
  sortWords: () => void;
}

const PasteTextBody = (props: PasteTextBodyProps) => {
  const { toggleHideSection, sortWords } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Typography variant="h5" onClick={() => toggleHideSection('pasteTextBody')}>
            Step 1: Paste Text Here
						</Typography>
        </div>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <div id='pasteTextBody'>
          <TextareaAutosize
            placeholder={
              `Paste or write a body of text here. \
								The text will be compared to the Official Scrabble Player's Dictionary (OSPD). \
								Words in the OSPD will be excluded from replacement automatically. \
								Click the "+" icon under an included word to create a replacement for it. \
								Larger bodies of text may slow down the app.`
            }
            id="userTextArea"
            cols={80}
            rowsMin={8}
            onChange={() => sortWords()}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default PasteTextBody;